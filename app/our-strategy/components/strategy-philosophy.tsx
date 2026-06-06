"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StrategyPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const p1Ref = useRef<HTMLParagraphElement>(null)
  const p2Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger after layout settles
      ScrollTrigger.refresh()

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 90%", once: true },
        }
      )

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
        }
      )

      gsap.fromTo(
        p1Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%", once: true },
          delay: 0.3,
        }
      )

      gsap.fromTo(
        p2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 85%", once: true },
          delay: 0.55,
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark">
      <div className="container flex flex-col items-center">
        <div className="max-w-3xl w-full flex flex-col gap-12">

          <h2
            ref={headingRef}
            className="text-4xl font-bold text-platinum text-center"
            style={{ opacity: 0 }}
          >
            Our Philosophy
          </h2>

          <div ref={cardRef} className="card text-center p-12" style={{ opacity: 0 }}>
            <div className="space-y-8">
              <p ref={p1Ref} className="text-lg text-text-secondary leading-loose" style={{ opacity: 0 }}>
                We target under-performing multifamily assets in high-growth, landlord-friendly markets. Our
                thesis is simple: identify quality properties with strong fundamentals, execute disciplined value-add
                strategies, and deliver institutional-grade returns to our investor partners.
              </p>

              <p ref={p2Ref} className="text-lg text-text-secondary leading-loose" style={{ opacity: 0 }}>
                Every investment we make must meet rigorous underwriting standards and align with our commitment to
                transparency, accountability, and investor success. We believe long-term relationships are built on
                consistent execution and honest communication.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}