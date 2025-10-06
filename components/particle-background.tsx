'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  type: 'circle' | 'triangle' | 'square'
  rotation: number
  rotationSpeed: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 2,
      opacity: Math.random() * 0.5 + 0.4,
      type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02
    })

    const initParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000))
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle())
      }
    }

    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)
      
      // Use a subtle cyan color that matches the theme
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.6)'
      ctx.fillStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 0.5

      switch (particle.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
          ctx.stroke()
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(0, -particle.size)
          ctx.lineTo(-particle.size * 0.866, particle.size * 0.5)
          ctx.lineTo(particle.size * 0.866, particle.size * 0.5)
          ctx.closePath()
          ctx.stroke()
          break
        case 'square':
          ctx.strokeRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size)
          break
      }
      
      ctx.restore()
    }

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.rotation += particle.rotationSpeed

      // Wrap around edges
      if (particle.x < -10) particle.x = canvas.width + 10
      if (particle.x > canvas.width + 10) particle.x = -10
      if (particle.y < -10) particle.y = canvas.height + 10
      if (particle.y > canvas.height + 10) particle.y = -10
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach(particle => {
        updateParticle(particle)
        drawParticle(particle)
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.globalAlpha = (150 - distance) / 150 * 0.3
            ctx.beginPath()
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }
      
      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none opacity-60"
      style={{ background: 'transparent' }}
    />
  )
}