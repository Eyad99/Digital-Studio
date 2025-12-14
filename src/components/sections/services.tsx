"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Service {
  id: number
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Branding",
    description: "Create a memorable identity that resonates with your audience.",
    icon: "✨",
  },
  {
    id: 4,
    title: "Motion Graphics",
    description: "Captivating animations and visual effects that bring stories to life.",
    icon: "🎬",
  },
  {
    id: 5,
    title: "3D & AR Experiences",
    description: "Immersive digital experiences using cutting-edge 3D and augmented reality.",
    icon: "🎯",
  },
  {
    id: 6,
    title: "Brand Strategy",
    description: "Strategic guidance to position your brand for long-term success.",
    icon: "🎪",
  },
]

export default function Services() {
  const servicesRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            markers: false,
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        })
      })
    }, servicesRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={servicesRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="p-8 rounded-2xl border border-border bg-card hover:shadow-xl hover:border-primary/30 smooth-transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
