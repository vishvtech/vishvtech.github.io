import { ScrollAnimation } from "@/components/scroll-animation"

export function Why() {
  const bullets = [
    {
      title: "Technical Excellence",
      desc: "We combine deep technical expertise with practical problem-solving experience to deliver solutions that actually work."
    },
    {
      title: "Rigorous Approach",
      desc: "Every solution undergoes thorough testing and validation to ensure reliability and performance in real-world conditions."
    },
    {
      title: "Innovation First",
      desc: "We don't just solve problems—we redefine what's possible, creating breakthrough solutions for unprecedented challenges."
    },
    {
      title: "Collaborative Partnership",
      desc: "We work closely with you throughout the entire process, ensuring solutions that truly meet your needs and exceed expectations."
    }
  ]
  
  return (
    <section id="why" aria-labelledby="why-title" className="mx-auto max-w-6xl px-4 py-20 md:py-24">
      <ScrollAnimation className="text-center mb-12">
        <h2 id="why-title" className="heading-secondary text-accent-glow mb-4">
          Why Partner with VishvTech
        </h2>
        <p className="text-enhanced max-w-2xl mx-auto">
          The perfect blend of technical expertise and creative problem-solving
        </p>
      </ScrollAnimation>
      
      <div className="grid gap-6 md:grid-cols-2">
        {bullets.map((item, index) => (
          <ScrollAnimation key={item.title} delay={index * 150}>
            <div className="scan-overlay rounded-xl p-6 bg-card/40 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-300 group hover:scale-105">
              <div className="flex items-start gap-4">
                <div 
                  className="mt-1 h-3 w-3 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" 
                  style={{ background: "var(--vt-accent)" }} 
                  aria-hidden="true" 
                />
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-glow transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-enhanced text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}
