"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function StrategyProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: "01",
      title: "Sourcing & Diligence",
      description:
        "We leverage strong broker relationships and off-market deal flow to source premium opportunities. Our underwriting team conducts thorough financial and physical due diligence to validate investment thesis.",
      details: ["Broker relationships", "Off-market sourcing", "Conservative Underwriting", "Market analysis"],
    },
    {
      number: "02",
      title: "Acquisition & Funding",
      description:
        "We structure deals using optimal debt/equity combinations to maximize returns while maintaining conservative leverage ratios. Each deal is customized based on market conditions and investor requirements.",
      details: ["Optimal debt structures", "Equity syndication", "Bridge financing", "Negotiated Loan Terms"],
    },
    {
      number: "03",
      title: "Asset Management",
      description:
        "This is where value is created. We execute unit renovations, optimize operations, implement new management systems, and drive NOI growth through strategic rent increases and expense control.",
      details: ["Unit renovations", "Operational efficiencies", "Revenue optimization", "Cost management"],
    },
    {
      number: "04",
      title: "Reporting & Disposition",
      description:
        "Investors receive detailed quarterly reports via our secure portal. Typical hold period is 5-7 years, with clear exit strategy. We communicate transparently on all metrics and performance.",
      details: ["Quarterly reporting", "Clear exit timeline", "Performance tracking"],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      // Header block
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 90%", once: true },
        }
      )

      // Step cards stagger
      const cards = gridRef.current?.querySelectorAll(".step-card")
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, scale: 0.93 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.9, ease: "power3.out",
            stagger: 0.18,
            scrollTrigger: { trigger: gridRef.current, start: "top 90%", once: true },
          }
        )
      }

      // Detail list items slide in from left
      const allItems = gridRef.current?.querySelectorAll(".step-details li")
      if (allItems) {
        gsap.fromTo(
          allItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0,
            duration: 0.5, ease: "power2.out",
            stagger: 0.06,
            scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
            delay: 0.5,
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark">
      <div className="container flex flex-col items-center gap-16">

        <div ref={headerRef} className="text-center max-w-3xl flex flex-col gap-6" style={{ opacity: 0 }}>
          <h2 className="text-4xl font-bold text-platinum text-center">Our 4-Step Process</h2>
          <p className="text-center text-text-secondary text-lg leading-loose">
            From sourcing to disposition, we follow a disciplined process designed to maximize returns and minimize risk
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step-card card flex flex-col items-center text-center h-full p-12 gap-6 cursor-default"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { y: -12, boxShadow: "0 20px 50px rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.6)", duration: 0.35, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".step-num"), { scale: 1.25, filter: "drop-shadow(0 0 16px rgba(212,175,55,0.8))", duration: 0.3, ease: "back.out(2)" })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { y: 0, boxShadow: "none", borderColor: "rgba(212,175,55,0.15)", duration: 0.4, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".step-num"), { scale: 1, filter: "none", duration: 0.3, ease: "power2.out" })
              }}
            >
              <div className="step-num text-5xl font-bold gradient-text">{step.number}</div>
              <h3 className="text-2xl font-bold text-platinum">{step.title}</h3>
              <p className="text-text-secondary leading-loose">{step.description}</p>

              <div className="w-full">
                <ul className="step-details space-y-4 inline-block text-left mx-auto">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text-secondary leading-normal cursor-default"
                      style={{ opacity: 0 }}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, { x: 5, color: "#e5d9a0", duration: 0.25, ease: "power2.out" })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, { x: 0, color: "", duration: 0.25, ease: "power2.out" })}
                    >
                      <span className="text-[#d4af37] mt-1 shrink-0">▸</span>
                      <span>{detail}</span>
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