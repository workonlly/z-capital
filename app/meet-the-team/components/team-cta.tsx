"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TeamCta() {
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
    <section ref={sectionRef} className="section section-dark section-with-border">
      <div className="container flex flex-col items-center text-center gap-8">

        <h2 ref={headingRef} className="text-platinum" style={{ opacity: 0 }}>
          Connect with Our Team
        </h2>

        <p ref={textRef} className="text-text-secondary max-w-2xl mx-auto" style={{ opacity: 0 }}>
          Have questions about our team or investment opportunities? Schedule a consultation with our experts.
        </p>

        <Link ref={btnRef} href="/contact" className="btn-gold" style={{ opacity: 0 }}>
          Schedule a Call
        </Link>

      </div>
    </section>
  )
}