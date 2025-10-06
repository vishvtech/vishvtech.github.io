import { Nav } from "@/components/nav"
import { Hero } from "@/components/sections/hero"
import { Solutions } from "@/components/sections/solutions"
import { Why } from "@/components/sections/why"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Page() {
  return (
    <main className="relative">
      <SmoothScroll />
      <ParticleBackground />
      <Nav />
      <Hero />
      <Solutions />
      <Why />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
