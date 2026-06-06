"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Deal {
  id: number
  title: string
  location: string
  image: string
  description: string
  story: string
  plan: string
  results: string
  details: {
    value: string
    units: string
    year: string
    type: string
    irr?: string
    hold?: string
  }
  highlights: string[]
}

const deals: Deal[] = [
  {
    id: 1,
    title: "Clarion, PA",
    location: "North-east Value-Add",
    image: "/deals/clarion image.avif",
    description:
      "This asset acts as a real-life example of our main strategy: purchasing underperforming properties and executing a targeted plan to boost cash flow and create substantial equity.",
    story: "Acquired: Q2 2025 | 8-Unit Building",
    plan: "We identified a clear opportunity to capitalize on operational inefficiencies through a hands-on management approach, upgrading units, and professionalizing management.",
    results: "Projected 35% Return on Cost with double-digit annual cash-on-cash returns upon stabilization.",
    details: { value: "Undisclosed", units: "8", year: "2025", type: "Apartment Building", irr: "20% (Proj.)", hold: "5 Years" },
    highlights: ["Projected Gross Revenue Growth: +20%", "Occupancy Growth: From 85% to 95%+", "Strategy: Operational Turnaround"],
  },
  {
    id: 2,
    title: "Catonsville, MD",
    location: "Suburban Repositioning",
    image: "/deals/catonsville image.avif",
    description:
      "Repositioning prime-location asset to a lucrative premium 2-unit duplex delivering strong appreciations and returns.",
    story: "Acquired: 2021 | Converted from 8 rooms",
    plan: "Maximize revenue potential by optimizing features of a high demand stabilized duplex, through targeted improvement plan, advanced management and tenant screening.",
    results: "35%+ in Equity since purchase",
    details: { value: "High Growth", units: "2", year: "2021", type: "Duplex Conversion", irr: "High Dbl-Digit", hold: "Hold" },
    highlights: ["Asset Type: Premium Duplex", "Increase in Asset Value: +34%", "Return on Cost: +25%", "Strategy: Heavy Value-Add"],
  },
  {
    id: 3,
    title: "Ocean City, MD",
    location: "Resort Market",
    image: "/deals/ocean city image.avif",
    description:
      "An opportunistic investment in a unique, high-demand market, capitalizing on both substantial market growth and robust rental income.",
    story: "Acquired: 2021 | Resort Condominium",
    plan: "Capture overall market value in consistent income with mixed use at STR and LTR rental agreements while actively managing the unit to maximize the rental income annually.",
    results: "35% cash on cash return.",
    details: { value: "High Demand", units: "1", year: "2021", type: "Resort Condo", irr: "N/A", hold: "Hold" },
    highlights: ["Increase in Asset Value: +40%", "Market Focus: Supply-Constrained Area", "Income: Consistent Demand", "Outcome: Outperformed Forecasts"],
  },
  {
    id: 4,
    title: "New Iberia, LA",
    location: "Southern Value-Add",
    image: "/deals/New lberia.png",
    description:
      "A significant value-add acquisition targeting a 22-unit complex. The focus is on immediate cash flow enhancement through professional management implementation and strategic property improvements.",
    story: "Acquired: 2026 | 22-Unit Complex",
    plan: "Implement professional third-party management to streamline operations, address deferred maintenance, and execute cosmetic upgrades to increase market rents.",
    results: "Targeting 40% Cash-on-Cash return.",
    details: { value: "Value-Add", units: "22", year: "2026", type: "Multi-Family", irr: "20%+ (Proj.)", hold: "5-7 Years" },
    highlights: ["Cash on Cash: 40% Projected", "Strategy: Management Turnaround", "Upside: Rent Optimization", "Scale: 22 Units"],
  },
]

export default function DealsList() {
  const [selectedDeal, setSelectedDeal] = useState<Deal>(deals[0])
  const sectionRef = useRef<HTMLElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: tabsRef.current, start: "top 90%", once: true },
        }
      )

      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: detailRef.current, start: "top 90%", once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate detail panel on deal change
  const handleDealSelect = (deal: Deal) => {
    if (!detailRef.current) return
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    )
    setSelectedDeal(deal)
  }

  return (
    <section ref={sectionRef} className="section section-dark">
      <div className="container">

        {/* Deal Selection Tabs */}
        <div ref={tabsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !gap-6 !mb-16 max-w-7xl mx-auto" style={{ opacity: 0 }}>
          {deals.map((deal) => (
            <button
              key={deal.id}
              onClick={() => handleDealSelect(deal)}
              className={`!p-8 rounded-lg border-2 transition-colors duration-300 text-center h-full flex flex-col justify-center items-center ${
                selectedDeal.id === deal.id
                  ? "border-[#d4af37] bg-[#d4af37]/10"
                  : "border-[#d4af37]/30 hover:border-[#d4af37]/60 bg-black/40"
              }`}
              onMouseEnter={(e) => {
                if (selectedDeal.id !== deal.id) {
                  gsap.to(e.currentTarget, { scale: 1.04, boxShadow: "0 8px 30px rgba(212,175,55,0.12)", duration: 0.25, ease: "power2.out" })
                }
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, boxShadow: "none", duration: 0.25, ease: "power2.out" })
              }}
            >
              <div className="font-playfair text-xl font-bold text-platinum mb-2">{deal.title}</div>
              <div className="text-sm text-[#d4af37] font-inter">{deal.location}</div>
            </button>
          ))}
        </div>

        {/* Deal Detail Panel */}
        <div ref={detailRef} className="grid grid-cols-1 lg:grid-cols-2 !gap-16 items-stretch" style={{ opacity: 0 }}>

          {/* Left Column */}
          <div className="flex flex-col h-full">
            <div className="!space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-platinum font-playfair !mb-4">{selectedDeal.title}</h2>
                <p className="text-[#d4af37] font-inter text-lg !mb-8 uppercase tracking-wide">{selectedDeal.location}</p>
                <p className="text-text-secondary font-inter leading-relaxed text-lg border-l-2 border-[#d4af37]/50 !pl-6">
                  {selectedDeal.description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 !gap-8 !pt-10 border-t border-[#d4af37]/20">
                <div>
                  <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Asset Type</p>
                  <p className="text-lg font-bold text-platinum font-playfair">{selectedDeal.details.type}</p>
                </div>
                <div>
                  <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Units</p>
                  <p className="text-2xl font-bold text-platinum font-playfair">{selectedDeal.details.units}</p>
                </div>
                <div>
                  <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Year Acquired</p>
                  <p className="text-xl font-bold text-platinum font-playfair">{selectedDeal.details.year}</p>
                </div>
                <div>
                  <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Performance</p>
                  <p className="text-xl font-bold text-platinum font-playfair">
                    {selectedDeal.details.irr || selectedDeal.details.value}
                  </p>
                </div>
              </div>

              {/* Plan & Results */}
              <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl !p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
                <div className="!mb-8">
                  <h4 className="font-playfair font-bold text-platinum text-lg !mb-4 flex items-center !gap-3">
                    <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Plan
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{selectedDeal.plan}</p>
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-[#d4af37] text-lg !mb-4 flex items-center !gap-3">
                    <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Results
                  </h4>
                  <p className="text-platinum text-sm leading-relaxed font-medium">{selectedDeal.results}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="!space-y-2">
                <p className="text-platinum font-playfair font-bold text-lg">Snapshot</p>
                <ul className="grid grid-cols-1 !gap-1">
                  {selectedDeal.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start !gap-4 bg-black/30 !p-5 rounded border border-white/5">
                      <span className="text-[#d4af37] font-bold mt-0.5">✓</span>
                      <span className="text-text-secondary font-inter text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto !pt-12 border-t border-[#d4af37]/20 !mt-20">
              <Link
                href={`/contact?source=deals&deal=${selectedDeal.title}`}
                className="btn-gold w-full md:w-auto font-inter font-semibold inline-block text-center shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow"
              >
                Request Full Case Study
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative min-h-[600px] h-full w-full rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
            <Image
              src={selectedDeal.image || "/placeholder.svg"}
              alt={selectedDeal.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-2">{selectedDeal.story}</p>
              <h3 className="text-3xl font-bold text-white font-playfair">{selectedDeal.title}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}