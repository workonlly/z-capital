"use client"

import { useEffect, useRef } from "react"
import ContactForm from "./components/contactform"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      // Hero header — plays on mount
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(headingRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 0.9 })
        .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")

      // Form slides up on scroll
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: formRef.current, start: "top 90%", once: true },
        }
      )

      // Info panel slides in from right
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 90%", once: true },
          delay: 0.2,
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-screen bg-black" style={{ paddingTop: "180px" }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-left max-w-4xl" style={{ marginBottom: "100px" }}>
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold text-platinum font-playfair"
            style={{ marginBottom: "20px", opacity: 0 }}
          >
            Start the Conversation
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl text-text-secondary font-inter leading-relaxed max-w-2xl"
            style={{ opacity: 0 }}
          >
            Whether you are an accredited investor looking for your next opportunity or a property owner
            considering a sale, we are ready to listen.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">

          {/* Left: Form */}
          <div ref={formRef} className="lg:col-span-8  w-full" style={{ opacity: 0  }}>
            <ContactForm />
          </div>

          {/* Right: Info */}
          <div ref={infoRef} className="lg:col-span-4 space-y-16 lg:sticky lg:top-32" style={{ opacity: 0 }}>
            <div className="border-l-2 border-white/20 !pl-4">
              <h3 className="text-3xl font-playfair text-white mb-8">Connect</h3>
              <div className="space-y-10">
                <div>
                  <span className="text-[#d4af37] font-bold uppercase text-xs tracking-[0.2em] block mb-3">
                    General Inquiries
                  </span>
                  <a
                    href="mailto:partners@zamancapitalgroup.com"
                    className="text-lg text-platinum hover:text-[#d4af37] transition-colors break-all"
                  >
                    partners@zamancapitalgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-[250px]"></div>
      </div>
    </main>
  )
}