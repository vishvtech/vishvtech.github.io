import Link from "next/link"
import { NeonLogo } from "./neon-logo"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b border-border/30">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group" aria-label="VishvTech Home">
          <NeonLogo size={32} className="pulse-neon group-hover:scale-110 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide text-accent-glow">VishvTech</span>
            {/* <span className="text-xs text-muted-foreground"></span> */}
          </div>
        </Link>
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
          <a href="#contact" className="hover:text-accent-glow transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
      </div>
    </header>
  )
}
