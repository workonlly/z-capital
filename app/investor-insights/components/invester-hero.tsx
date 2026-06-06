"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function InsightsHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        descRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#0f1c3f] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-10">

        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-platinum"
          style={{ opacity: 0 }}
        >
          Investor Education &amp; Insights
        </h1>

        <p
          ref={descRef}
          className="!text-lg text-text-secondary max-w-2xl leading-loose"
          style={{ opacity: 0 }}
        >
          Everything you need to know about real estate syndication and multifamily investing
        </p>

      </div>
    </section>
  )
}