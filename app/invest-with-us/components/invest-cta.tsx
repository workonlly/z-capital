"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function InvestCta() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" },
      })

      tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .fromTo(btnRef.current, { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, "-=0.3")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark section-with-border">
      <div className="container flex flex-col items-center text-center gap-8">

        <h2 ref={headingRef} className="text-platinum" style={{ opacity: 0 }}>
          Ready to Start Investing?
        </h2>

        <p
          ref={textRef}
          className="text-text-secondary max-w-2xl mx-auto"
          style={{ opacity: 0 }}
        >
          Take the first step towards building institutional-grade wealth with ZAMAN Capital Group.
        </p>

        <Link
          ref={btnRef}
          href="/contact"
          className="btn-gold"
          style={{ opacity: 0 }}
        >
          Schedule Consultation
        </Link>

      </div>
    </section>
  )
}