"use client"

import type React from "react"
import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sent")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <ScrollAnimation className="text-center mb-12">
        <h2 id="contact-title" className="heading-secondary text-accent-glow mb-4">
          Ready to Innovate Together?
        </h2>
        <p className="text-enhanced max-w-2xl mx-2 sm:mx-0">
          Share your challenge with us, and let's create the perfect technology solution for your needs.
        </p>
      </ScrollAnimation>

      <div className="grid gap-8 lg:grid-cols-3">
        <ScrollAnimation className="lg:col-span-2">
          <form
            onSubmit={submit}
            className="scan-overlay rounded-xl p-8 bg-card/40 backdrop-blur-sm border border-border/30 neon-border mx-2 sm:mx-0"
          >
            <div className="grid gap-6">
              <div className="grid gap-3">
                <label htmlFor="name" className="text-sm font-medium text-accent-glow">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="h-12 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 px-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent-glow/50 focus:ring-2 focus:ring-accent-glow/20 transition-all duration-300"
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="email" className="text-sm font-medium text-accent-glow">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="h-12 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 px-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent-glow/50 focus:ring-2 focus:ring-accent-glow/20 transition-all duration-300"
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="message" className="text-sm font-medium text-accent-glow">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your project requirements, challenges you're facing, or the kind of solution you're looking for..."
                  className="rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 p-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-accent-glow/50 focus:ring-2 focus:ring-accent-glow/20 transition-all duration-300 resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button 
                  type="submit" 
                  className="neon-button rounded-lg px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105"
                  disabled={status === "sent"}
                >
                  {status === "idle" ? "Send Message" : "Message Sent! ✓"}
                </button>
                <span className="text-sm text-muted-foreground text-center sm:text-right">
                  We'll respond within 24 hours
                </span>
              </div>
            </div>
          </form>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="space-y-6">
            <div className="scan-overlay rounded-xl p-6 bg-card/40 backdrop-blur-sm border border-border/30 neon-border mx-2 sm:mx-0">
              <h3 className="font-semibold text-lg mb-4 text-accent-glow">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                  <a 
                    href="mailto:info@vishvtech.com" 
                    className="text-foreground hover:text-accent-glow transition-colors duration-300 font-medium"
                  >
                    info@vishvtech.com
                  </a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Location</div>
                  <p className="text-foreground font-medium">
                    IIT Indore, Madhya Pradesh<br />
                    India - 453552
                  </p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Response Time</div>
                  <p className="text-foreground font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="scan-overlay rounded-xl p-6 bg-card/40 backdrop-blur-sm border border-border/30 neon-border mx-2 sm:mx-0">
              <h3 className="font-semibold text-lg mb-3 text-accent-glow">What to Include</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent-glow">•</span>
                  Brief description of your project
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-glow">•</span>
                  Technical requirements or constraints
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-glow">•</span>
                  Timeline and budget considerations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-glow">•</span>
                  Any specific technologies of interest
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
