"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function InsightsCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 })
        .fromTo(textRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(btnRef.current, { opacity: 0, y: 20, scale: 0.93 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, "-=0.4")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container flex flex-col items-center text-center gap-8">

        <h2 ref={headingRef} className="text-4xl font-bold text-platinum" style={{ opacity: 0 }}>
          Ready to Start Investing?
        </h2>

        <p ref={textRef} className="text-text-secondary text-lg max-w-2xl mx-auto" style={{ opacity: 0 }}>
          Contact our team to discuss your investment goals and explore available opportunities
        </p>

        <Link ref={btnRef} href="/contact" className="btn-gold inline-block" style={{ opacity: 0 }}>
          Get in Touch
        </Link>

      </div>
    </section>
  )
}