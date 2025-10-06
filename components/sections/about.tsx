import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Anshu Sahu",
    role: "Researcher | Laser Specialist",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Arpit Singh",
    role: "PhD at IIT Indore",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Rajat Vishwakarma",
    role: "BTech at IIT Indore",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Krishnan Singh Tomar",
    role: "Finance | Operations",
    image: "/placeholder-user.jpg"
  },
  {
    name: "Nandini Patra",
    role: "Outreach | Communications",
    image: "/placeholder-user.jpg"
  },
  // {

  //   name: "Anita Verma",
  //   role: "Problem Solver | Systems Integration",
  //   image: "/placeholder-user.jpg"
  // }
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-20 md:py-24">
      {/* Who We Are Section */}
      <ScrollAnimation className="text-center mb-16">
        <h2 id="about-title" className="heading-secondary text-accent-glow mb-6">
          Who We Are
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-enhanced leading-relaxed">
            VishvTech is founded by a passionate team of students and researchers from the Mechatronics Lab at IIT Indore. 
            With a shared vision of bridging technology and innovation, we strive to deliver impactful solutions for industries 
            and individuals alike.
          </p>
        </div>
      </ScrollAnimation>

      {/* Team Section */}
      {/* <ScrollAnimation delay={300}>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-accent-glow mb-4">Our Team</h3>
          <p className="text-enhanced max-w-2xl mx-auto">
            Meet the brilliant minds behind VishvTech's innovative solutions
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <ScrollAnimation key={member.name} delay={index * 100}>
            <div className="scan-overlay rounded-xl p-6 bg-card/40 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-300 group hover:scale-105 text-center">
              <div className="relative mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-vt-primary/30 group-hover:border-vt-primary/60 transition-all duration-300">
                <Image 
                  src={member.image}
                  alt={`${member.name} profile picture`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-vt-primary/10 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              
              <h4 className="font-semibold text-lg mb-2 group-hover:text-accent-glow transition-colors">
                {member.name}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4">
                {member.role}
              </p>
              
              <button className="text-xs text-vt-primary hover:text-vt-accent transition-colors underline decoration-dotted">
                Read More
              </button>
            </div>
          </ScrollAnimation>
        ))}
      </div> */}

      {/* Call to Action */}
      <ScrollAnimation className="text-center mt-16" delay={600}>
        <div className="scan-overlay rounded-xl p-8 bg-card/30 backdrop-blur-sm border border-border/30 neon-border">
          <h3 className="text-xl font-bold text-accent-glow mb-4">
            Ready to Work with Us?
          </h3>
          <p className="text-enhanced mb-6 max-w-2xl mx-auto">
            Let's collaborate on your next innovative project. Our team is ready to turn your ideas into reality.
          </p>
          <a 
            href="#contact" 
            className="inline-block neon-button px-8 py-3 rounded-lg transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </ScrollAnimation>
    </section>
  )
}