"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function InvestTypes() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const types = [
    {
      title: "Equity Partnership",
      min: "$75,000",
      returns: "8-15%+",
      features: [
        "Quarterly Distributions: Consistent cash flow derived from property operations.",
        "Upside Potential: Full participation in property appreciation.",
        "Tax Efficiency: Depreciation, deductions, and tax losses passed through directly to you (K-1).",
        "Capital Events: Share in the profits from a future refinance or property sale.",
      ],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current?.querySelectorAll(".invest-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
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
        <h2
          ref={headingRef}
          className="text-platinum text-center !mb-8"
          style={{ opacity: 0 }}
        >
          Investment Options
        </h2>

        <div ref={cardsRef} className="flex flex-wrap justify-center gap-8">
          {types.map((type, idx) => (
            <div key={idx} className="invest-card w-full flex justify-center" style={{ opacity: 0 }}>
              <div className="card w-full max-w-lg h-full flex flex-col">

                <h3 className="text-platinum mb-6 text-center">{type.title}</h3>

                <div className="text-center">
                  <p className="text-text-secondary text-sm uppercase tracking-widest mb-2">
                    Minimum Investment
                  </p>
                  <p className="text-3xl font-bold gradient-text mb-4">{type.min}</p>

                  <p className="text-text-secondary text-sm uppercase tracking-widest mb-2">
                    Expected Returns (IRR)
                  </p>
                  <p className="text-3xl font-bold gradient-text">{type.returns}</p>
                </div>

                <div className="w-full h-px bg-[#d4af37]/20 my-10"></div>

                <ul className="space-y-5">
                  {type.features.map((feature, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-4">
                      <span className="text-[#d4af37] font-bold text-lg leading-none mt-1 shrink-0">✓</span>
                      <span className="leading-relaxed text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}