"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"

export default function Hero() {
  const headingRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

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
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden !pt-30 ">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#0f1c3f] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-12 max-w-5xl px-4">

        {/* Header Section */}
        <div ref={headingRef} className="flex flex-col items-center gap-6" style={{ opacity: 0 }}>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-platinum leading-tight">
            Building Generational Wealth Through Multifamily Real Estate
          </h1>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[#d4af37] !text-lg md:text-2xl font-light tracking-widest"
          style={{ opacity: 0 }}
        >
          CAPITAL. GROWTH. LEGACY.
        </p>

        {/* Description Text */}
        <p
          ref={descRef}
          className="!text-lg md:text-xl text-text-secondary leading-loose max-w-3xl"
          style={{ opacity: 0 }}
        >
          Backed by deep industry expertise and an unyielding commitment to excellence, we specialize in multifamily
          acquisitions, value-add opportunities, and institutional-grade investments that deliver strong, risk-adjusted
          returns.
        </p>

        {/* Buttons Section */}
        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row gap-8 items-center"
          style={{ opacity: 0 }}
        >
          <Link href="/our-deals" className="btn-gold inline-block px-8 py-4 text-lg font-semibold">
            View Our Investments
          </Link>

          <Link href="/investor-insights" className="btn-outline px-8 py-4 text-lg font-semibold">
            Learn More
          </Link>
        </div>

      </div>
    </section>
  )
}