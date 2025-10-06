import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NeonLogo } from "@/components/neon-logo"

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Refined ambient lighting */}
        <div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl opacity-20 animate-float"
          style={{ background: "var(--vt-primary)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full blur-3xl opacity-15 animate-float"
          style={{ 
            background: "var(--vt-accent)",
            animationDelay: "3s"
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-3xl opacity-10"
          style={{ background: "var(--vt-secondary)" }}
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up">
          <NeonLogo size={48} className="pulse-neon" />
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-accent-glow">VishvTech</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Solving Tomorrow's Challenges Today</p>
          </div>
        </div>

        <h1 id="home-title" className="text-balance heading-primary animate-fade-in-up animate-delay-200">
          <strong>Innovating Technology</strong><br /><span className="text-accent-glow">for a Smarter Tomorrow</span>
        </h1>
        
        <p className="max-w-3xl text-enhanced animate-fade-in-up animate-delay-400">
          At VishvTech, we turn impossible challenges into elegant solutions. 
          Our expertise spans <span className="text-accent-glow">Smart IoT Monitoring</span>, 
          <span className="text-accent-glow"> Data Acquisition Systems</span>, 
          <span className="text-accent-glow"> AI Integration</span>, and whatever technological problem you're facing - 
          we solve it all with cutting-edge innovation and relentless determination.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animate-delay-600">
          <Button asChild className="neon-button px-8 py-4 text-lg rounded-xl">
            <Link href="#contact" aria-label="Get in touch with VishvTech">
              Let's Collaborate
            </Link>
          </Button>
          <a 
            href="#solutions" 
            className="text-base text-muted-foreground hover:text-accent-glow transition-all duration-300 underline decoration-dotted hover:no-underline"
          >
            Discover Our Solutions →
          </a>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-600">
          <p>
            <span className="text-accent-glow font-semibold">Innovation-Driven Solutions</span> • 
            <span className="text-accent-glow font-semibold"> Problem-Solving Excellence</span> • 
            <span className="text-accent-glow font-semibold"> Real-World Impact</span>
          </p>
        </div>
      </div>
    </section>
  )
}
