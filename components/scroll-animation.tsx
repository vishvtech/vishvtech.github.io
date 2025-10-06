'use client'

import { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in-up')
            }, delay)
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div 
      ref={elementRef} 
      className={`opacity-0 translate-y-8 ${className}`}
      style={{ animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}