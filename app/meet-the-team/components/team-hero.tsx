"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function TeamHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(headingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.55")
        .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.45")
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">

      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/team-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="container relative z-20 flex flex-col items-center text-center gap-10">

        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-platinum"
          style={{ opacity: 0 }}
        >
          Meet the Team
        </h1>

        <p
          ref={subtitleRef}
          className="text-[#d4af37] text-xl md:text-2xl tracking-wide"
          style={{ opacity: 0 }}
        >
          Guided by integrity, driven by innovation
        </p>

        <p
          ref={descRef}
          className="text-text-secondary max-w-2xl text-lg leading-loose"
          style={{ opacity: 0 }}
        >
          Our team combines institutional-grade expertise with a strategic focus on multifamily acquisitions to help you build lasting wealth.
        </p>

      </div>
    </section>
  )
}