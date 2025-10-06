'use client'

import { useEffect, useRef } from 'react'

export function SmoothScroll() {
  const smoothScrollRef = useRef<{
    current: number
    target: number
    ease: number
    speed: number
    isScrolling: boolean
    rafId: number | null
    touchStartY: number | null
  }>({
    current: 0,
    target: 0,
    ease: 0.08,
    speed: 0,
    isScrolling: false,
    rafId: null,
    touchStartY: null
  })

  useEffect(() => {
    const scroll = smoothScrollRef.current
    let isDestroyed = false
    let pendingHash: string | null = null

    const updateScroll = () => {
      if (isDestroyed) return

      const difference = scroll.target - scroll.current
      const delta = Math.abs(difference)

      if (delta < 0.1) {
        scroll.current = scroll.target
        scroll.isScrolling = false
        if (scroll.rafId) {
          cancelAnimationFrame(scroll.rafId)
          scroll.rafId = null
        }
        // If a navigation hash was requested, update the URL once settled
        if (pendingHash) {
          try {
            history.replaceState(null, '', pendingHash)
          } catch (e) {
            // ignore
          }
          pendingHash = null
        }
        return
      }

      scroll.current += difference * scroll.ease
      window.scrollTo(0, scroll.current)
      
      scroll.rafId = requestAnimationFrame(updateScroll)
    }

    // Handle in-page anchor clicks to animate instead of jump
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest && target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      const id = href.slice(1)
      const el = id ? document.getElementById(id) : document.body
      if (!el) return

      e.preventDefault()

      // Compute destination (account for fixed header)
      const rect = el.getBoundingClientRect()
      const header = document.querySelector('header') as HTMLElement | null
      const headerHeight = header ? header.getBoundingClientRect().height : 0
      const dest = window.scrollY + rect.top - Math.min(headerHeight, 80)

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scroll.target = Math.max(0, Math.min(dest, maxScroll))
      pendingHash = href

      if (!scroll.isScrolling) {
        scroll.isScrolling = true
        updateScroll()
      }
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      const scrollSpeed = Math.abs(e.deltaY) > 50 ? 1.5 : 1
      scroll.target += e.deltaY * scrollSpeed
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scroll.target = Math.max(0, Math.min(scroll.target, maxScroll))

      if (!scroll.isScrolling) {
        scroll.isScrolling = true
        updateScroll()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      scroll.touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!scroll.touchStartY) return
      
      e.preventDefault()
      const touchY = e.touches[0].clientY
      const deltaY = (scroll.touchStartY - touchY) * 2
      
      scroll.target += deltaY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scroll.target = Math.max(0, Math.min(scroll.target, maxScroll))
      
      scroll.touchStartY = touchY

      if (!scroll.isScrolling) {
        scroll.isScrolling = true
        updateScroll()
      }
    }

    const handleTouchEnd = () => {
      scroll.touchStartY = null
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const keyScrollSpeed = 100
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          scroll.target += keyScrollSpeed * (e.key === 'PageDown' ? 5 : 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          scroll.target -= keyScrollSpeed * (e.key === 'PageUp' ? 5 : 1)
          break
        case 'Home':
          e.preventDefault()
          scroll.target = 0
          break
        case 'End':
          e.preventDefault()
          scroll.target = document.documentElement.scrollHeight - window.innerHeight
          break
        default:
          return
      }
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scroll.target = Math.max(0, Math.min(scroll.target, maxScroll))

      if (!scroll.isScrolling) {
        scroll.isScrolling = true
        updateScroll()
      }
    }

    const handleResize = () => {
      scroll.current = window.scrollY
      scroll.target = window.scrollY
    }

    // Initialize
    scroll.current = window.scrollY
    scroll.target = window.scrollY

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleDocumentClick)

    return () => {
      isDestroyed = true
      if (scroll.rafId) {
        cancelAnimationFrame(scroll.rafId)
      }
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return null
}