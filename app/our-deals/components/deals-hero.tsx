"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function DealsHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.fromTo(headingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo(lineRef.current, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.7, transformOrigin: "left center" }, "-=0.5")
        .fromTo(descRef.current, { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen pt-32 pb-20 section-dark flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-12">

        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-platinum font-playfair"
          style={{ opacity: 0 }}
        >
          Our Investment Portfolio
        </h1>

        <div
          ref={lineRef}
          className="w-96 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-pulse"
          style={{ opacity: 0 }}
        ></div>

        <p
          ref={descRef}
          className="!text-lg text-text-secondary font-inter max-w-2xl leading-loose"
          style={{ opacity: 0 }}
        >
          Zaman Capital Group portfolio is always expanding. Below are featured deals demonstrating different asset types
        </p>

      </div>
    </section>
  )
}