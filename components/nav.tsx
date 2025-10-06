"use client"

import Link from "next/link"
import { useState } from "react"
import { NeonLogo } from "./neon-logo"

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b border-border/30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group" aria-label="VishvTech Home">
          <NeonLogo size={32} className="pulse-neon group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide text-accent-glow">VishvTech</span>
            {/* <span className="text-xs text-muted-foreground"></span> */}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-accent-glow transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#solutions" className="hover:text-accent-glow transition-all duration-300 relative group">
            Solutions
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#why" className="hover:text-accent-glow transition-all duration-300 relative group">
            Why Us
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="hover:text-accent-glow transition-all duration-300 relative group">
            About
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="hover:text-accent-glow transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`sm:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/30 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav aria-label="Mobile Primary" className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className="py-2 px-4 hover:text-accent-glow hover:bg-accent/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#solutions"
              className="py-2 px-4 hover:text-accent-glow hover:bg-accent/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#why"
              className="py-2 px-4 hover:text-accent-glow hover:bg-accent/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#about"
              className="py-2 px-4 hover:text-accent-glow hover:bg-accent/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="py-2 px-4 hover:text-accent-glow hover:bg-accent/5 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
