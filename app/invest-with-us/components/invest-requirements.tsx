"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function InvestRequirements() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const listItemsRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slides up
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

      // Card box fades in
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 80%",
          },
        }
      )

      // List items stagger in
      const items = listItemsRef.current?.querySelectorAll("li")
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: listItemsRef.current,
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
      <div className="container flex flex-col items-center gap-8">

        <h2
          ref={headingRef}
          className="text-4xl font-bold text-platinum text-center font-playfair"
          style={{ opacity: 0 }}
        >
          Investor Requirements
        </h2>

        <div ref={boxRef} className="max-w-3xl w-full" style={{ opacity: 0 }}>
          <div className="card p-12 bg-[#0f0f0f] border border-[#d4af37]/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">

            <ul ref={listItemsRef} className="space-y-12">

              <li
                className="flex gap-6 items-start rounded-lg p-4 transition-none cursor-default"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { x: 8, backgroundColor: "rgba(212,175,55,0.04)", borderLeft: "2px solid rgba(212,175,55,0.5)", paddingLeft: "20px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1.4, duration: 0.25, ease: "back.out(2)" })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { x: 0, backgroundColor: "transparent", borderLeft: "none", paddingLeft: "16px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1, duration: 0.25, ease: "power2.out" })
                }}
              >
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Net Worth Requirement</h4>
                  <p className="text-text-secondary leading-loose">
                    Minimum $500K liquid net worth for equity investments to ensure financial suitability.
                  </p>
                </div>
              </li>

              <li
                className="flex gap-6 items-start rounded-lg p-4 transition-none cursor-default"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { x: 8, backgroundColor: "rgba(212,175,55,0.04)", borderLeft: "2px solid rgba(212,175,55,0.5)", paddingLeft: "20px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1.4, duration: 0.25, ease: "back.out(2)" })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { x: 0, backgroundColor: "transparent", borderLeft: "none", paddingLeft: "16px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1, duration: 0.25, ease: "power2.out" })
                }}
              >
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Accredited Status</h4>
                  <p className="text-text-secondary leading-loose">
                    Must be an accredited investor as defined by the SEC (Regulation D, Rule 506(c)).
                  </p>
                </div>
              </li>

              <li
                className="flex gap-6 items-start rounded-lg p-4 transition-none cursor-default"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { x: 8, backgroundColor: "rgba(212,175,55,0.04)", borderLeft: "2px solid rgba(212,175,55,0.5)", paddingLeft: "20px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1.4, duration: 0.25, ease: "back.out(2)" })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { x: 0, backgroundColor: "transparent", borderLeft: "none", paddingLeft: "16px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1, duration: 0.25, ease: "power2.out" })
                }}
              >
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Long-Term Commitment</h4>
                  <p className="text-text-secondary leading-loose">
                    Typically a 5-7 year investment horizon to allow for value-add execution and appreciation.
                  </p>
                </div>
              </li>

              <li
                className="flex gap-6 items-start rounded-lg p-4 transition-none cursor-default"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, { x: 8, backgroundColor: "rgba(212,175,55,0.04)", borderLeft: "2px solid rgba(212,175,55,0.5)", paddingLeft: "20px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1.4, duration: 0.25, ease: "back.out(2)" })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, { x: 0, backgroundColor: "transparent", borderLeft: "none", paddingLeft: "16px", duration: 0.3, ease: "power2.out" })
                  gsap.to(e.currentTarget.querySelector("span"), { scale: 1, duration: 0.25, ease: "power2.out" })
                }}
              >
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Due Diligence</h4>
                  <p className="text-text-secondary leading-loose">
                    Agreement to complete standard KYC/AML verification and review offering memorandums.
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}