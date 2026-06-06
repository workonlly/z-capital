"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DealsCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 })
        .fromTo(lineRef.current, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.6, transformOrigin: "center" }, "-=0.4")
        .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(btnsRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark section-with-border">
      <div className="container flex flex-col items-center text-center gap-8">

        <h2 ref={headingRef} className="text-4xl font-bold text-platinum font-playfair" style={{ opacity: 0 }}>
          Ready to Invest?
        </h2>

        <div
          ref={lineRef}
          className="w-32 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse"
          style={{ opacity: 0 }}
        ></div>

        <p ref={textRef} className="text-text-secondary max-w-2xl mx-auto font-inter text-lg" style={{ opacity: 0 }}>
          Join our network of sophisticated investors accessing premium multifamily opportunities with
          institutional-grade returns and transparency.
        </p>

        <div ref={btnsRef} className="flex flex-col md:flex-row gap-4 justify-center w-full" style={{ opacity: 0 }}>
          <Link href="/invest-with-us" className="btn-gold font-inter font-semibold">
            View Investment Options
          </Link>
          <Link href="/contact?source=deals" className="btn-outline font-inter font-semibold">
            Schedule Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}