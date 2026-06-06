"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StrategyCriteria() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const criteria = [
    { label: "Markets", value: "High-growth MSAs with strong economic fundamentals" },
    { label: "Asset Class", value: "Class B/C multifamily properties" },
    { label: "Size", value: "40-200+ units" },
    { label: "Strategy", value: "Light to moderate value-add with forced appreciation" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 90%", once: true },
        }
      )

      const cards = gridRef.current?.querySelectorAll(".criteria-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 70, scale: 0.92 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8, ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container flex flex-col items-center gap-16">

        <h2
          ref={headingRef}
          className="text-4xl font-bold text-platinum text-center"
          style={{ opacity: 0 }}
        >
          Acquisition Criteria
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="criteria-card card flex flex-col items-center text-center h-full justify-center p-10 gap-4 cursor-default"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -10, boxShadow: "0 20px 40px rgba(212,175,55,0.14)", borderColor: "rgba(212,175,55,0.65)", duration: 0.35, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".criteria-label"), { scale: 1.1, letterSpacing: "0.25em", duration: 0.3, ease: "back.out(2)" })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, boxShadow: "none", borderColor: "rgba(212,175,55,0.15)", duration: 0.35, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".criteria-label"), { scale: 1, letterSpacing: "0.1em", duration: 0.3, ease: "power2.out" })
              }}
            >
              <p className="criteria-label text-[#d4af37] font-bold text-sm uppercase tracking-widest">
                {item.label}
              </p>
              <p className="text-platinum text-lg font-semibold leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}