"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const timer = requestAnimationFrame((time) => {
      startTime = time
      const tick = () => {
        const elapsed = performance.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(target * progress))
        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }
      tick()
    })

    return () => cancelAnimationFrame(timer)
  }, [target, duration])

  return <span>{count}</span>
}

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const expertise = [
    { title: "Portfolio Value", stat: 2, suffix: "M+" },
    { title: "Units", stat: 33, suffix: "+" },
    { title: "Occupancy Rate", stat: 90, suffix: "%+" },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemsRef.current?.querySelectorAll(".stat-item")
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 80%",
              onEnter: () => setIsVisible(true),
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div ref={itemsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="stat-item text-center cursor-default"
              style={{ opacity: 0 }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.08, duration: 0.35, ease: "back.out(2)" })
                gsap.to(e.currentTarget.querySelector(".gradient-text"), { filter: "drop-shadow(0 0 18px rgba(212,175,55,0.7))", duration: 0.3 })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.35, ease: "power2.out" })
                gsap.to(e.currentTarget.querySelector(".gradient-text"), { filter: "drop-shadow(0 0 0px rgba(0,0,0,0))", duration: 0.3 })
              }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">
                  {isVisible ? <CountUp target={item.stat} /> : item.stat}
                  {item.suffix}
                </span>
              </div>
              <p className="text-text-secondary text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}