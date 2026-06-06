"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function InvestHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-10">

        <h1
          ref={headingRef}
          className="text-platinum text-5xl md:text-6xl font-playfair font-bold"
          style={{ opacity: 0 }}
        >
          Invest With Us
        </h1>

        <p
          ref={subtitleRef}
          className="text-[#d4af37] text-xl md:text-2xl tracking-wide"
          style={{ opacity: 0 }}
        >
          Transparent. Data-Driven. Institutional-Grade Returns.
        </p>

        <p
          ref={descRef}
          className="text-text-secondary !text-lg max-w-2xl text-lg leading-loose"
          style={{ opacity: 0 }}
        >
          Discover how to grow your wealth with premium multifamily real estate investments backed by industry
          experts.
        </p>

      </div>
    </section>
  )
}