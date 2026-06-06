"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      title: "Strategic Acquisitions",
      description:
        "We identify and acquire premium multifamily properties with significant value-add potential in high-growth markets. Our disciplined sourcing process ensures we secure only the best opportunities.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Expert Management",
      description:
        "Our experienced team implements proven operational strategies to maximize returns and enhance property performance. We focus on sustainable value creation and operational excellence.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
      title: "Transparent Reporting",
      description:
        "Detailed quarterly reports and direct communication keep you informed every step of your investment journey. Access real-time performance data via our secure investor portal.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      )

      // Cards stagger on scroll
      const cards = cardsRef.current?.querySelectorAll(".feature-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark">
      <div className="container">
        <div ref={headingRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-platinum mb-4">Why Choose Zaman Capital Group?</h2>
          <p className="text-[#d4af37]">Industry-Leading Expertise &amp; Transparent Approach</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 !mt-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card card h-full text-center p-8 flex flex-col items-center cursor-default"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -14, boxShadow: "0 24px 48px rgba(212,175,55,0.18)", borderColor: "rgba(212,175,55,0.7)", duration: 0.35, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".icon-wrap"), { scale: 1.2, rotate: 8, backgroundColor: "rgba(212,175,55,0.2)", duration: 0.35, ease: "back.out(2)" })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", borderColor: "rgba(212,175,55,0.15)", duration: 0.4, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".icon-wrap"), { scale: 1, rotate: 0, backgroundColor: "rgba(212,175,55,0.1)", duration: 0.4, ease: "power2.out" })
              }}
            >
              <div className="icon-wrap mb-6 p-4 bg-[#d4af37]/10 rounded-full inline-block transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-platinum mb-3 text-center text-xl font-bold">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}