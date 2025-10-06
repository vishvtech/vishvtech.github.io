import type React from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

function Card({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="scan-overlay rounded-xl p-6 border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 neon-border hover:scale-105 group mx-2 sm:mx-0">
      <div className="flex items-start gap-4">
        <div className="text-foreground/80 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-glow transition-colors">{title}</h3>
          <p className="text-enhanced text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  )
}

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--vt-primary)" }}>
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function ChipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--vt-accent)" }}>
      <rect x="5" y="7" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="10" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--vt-primary)" }}>
      <path
        d="M8.5 4.5a3 3 0 00-3 3v5a3 3 0 003 3m0-11a3 3 0 013-3h1m-4 14a3 3 0 013 3h1m6-3a3 3 0 003-3v-5a3 3 0 00-3-3m0 11a3 3 0 01-3 3h-1m4-14a3 3 0 00-3-3h-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: "var(--vt-accent)" }}>
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Solutions() {
  const items = [
    {
      title: "Smart IoT Monitoring",
      desc: "Transform your operations with intelligent IoT systems that monitor, analyze, and optimize in real-time - solving efficiency and insight challenges.",
      icon: <ChipIcon />,
    },
    {
      title: "Data Acquisition Systems",
      desc: "Capture and process data with unmatched precision, turning raw information into actionable insights for any application.",
      icon: <TargetIcon />,
    },
    {
      title: "AI Integration",
      desc: "Harness the power of AI to automate complex processes and make smarter decisions - we integrate intelligence into your systems.",
      icon: <BrainIcon />,
    },
    {
      title: "Custom Problem Solving",
      desc: "Whatever your technological challenge - from concept to deployment, we engineer solutions that work. No problem is too big, too small, or too unconventional.",
      icon: <SparkIcon />,
    },
  ]
  
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <ScrollAnimation className="text-center mb-12 mx-2 sm:mx-0">
        <h2 id="solutions-title" className="heading-secondary text-accent-glow mb-4">
          Our Technology Solutions
        </h2>
        <p className="text-enhanced max-w-2xl mx-auto">
          Delivering innovative solutions that solve real-world problems across industries - no challenge is too complex for us
        </p>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <ScrollAnimation key={item.title} delay={index * 100}>
            <Card title={item.title} desc={item.desc} icon={item.icon} />
          </ScrollAnimation>
        ))}
      </div>
      
      <ScrollAnimation className="text-center mt-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-accent-glow transition-all duration-300 underline decoration-dotted hover:no-underline"
        >
          Ready to innovate together? Let's discuss your project
          <span className="text-xl">→</span>
        </a>
      </ScrollAnimation>
    </section>
  )
}
