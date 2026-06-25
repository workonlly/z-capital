"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TeamMember {
  name: string
  role: string
  image: string
  longBio: string[]
  expertise: string[]
  linkedin: string
  email:string
}

const team: TeamMember[] = [
  {
    name: "Joseph Fiocco, Esq.",
    role: "Legal & Financial Due Diligence",
    image: "/deals/team1.avif",
    longBio: [
      "Joe ensures that every acquisition at Zaman Capital Group is legally sound, financially optimized, and risk-mitigated. His sharp legal expertise and strategic deal structuring provide Zaman Capital Group’s deals a sound legal foundation for its investments.",
      "With a background in high-stakes corporate law, Joe specializes in contracts, due diligence, and financial structuring, ensuring that every deal is built for long-term success. Selected as a 2025 and 2026 Rising Star by Maryland Super Lawyers Magazine, Joe's meticulous attention to legal and financial details allows Zaman Capital Group to navigate complex transactions with confidence.",
      "Joe thrives at the intersection of legal risk management and wealth-building strategy, protecting investor interests while positioning deals for maximum profitability.",
    ],
    expertise: ["Legal", "Due Diligence", "Financials", "Risk Mitigation", "Investor Protections"],
    linkedin: "https://www.linkedin.com/in/joefiocco/",
    email:"joseph@zamancapital.com"
  },
  {
    name: "Nashra Zaman",
    role: "Acquisitions, Growth and Strategy",
    image: "/deals/team2.jpg",
    longBio: [
      "Nashra is a visionary real estate investor who has successfully scaled a diversified portfolio across multifamily, single-family, and short-term rentals since 2020. She leads deal sourcing, acquisitions, and strategic growth for Zaman Capital Group, prioritizing strong returns and long-term value creation for investors.",
      "With a background in project management at industry giants, Nashra brings a data-driven, analytical approach to real estate investing. Her ability to identify undervalued assets, optimize operations, and execute high-yield strategies makes her a trusted partner for investors seeking sustainable growth.",
      "Nashra thrives in high-stakes dealmaking. She transforms properties into high-performing assets while maintaining a proactive investor-first approach.",
    ],
    expertise: ["Acquisitions", "Deal Sourcing", "Investor Strategy", "Portfolio Growth"],
    linkedin: "https://www.linkedin.com/in/nashrazaman/",
    email:"nashra@zamancapital.com"
  },
  {
    name: "Areeb Uzzaman",
    role: "Operations, Logistics & Project Management",
    image: "/deals/main.png",
    longBio: [
      "Areeb serves as the technical project manager, driving Zaman Capital Group’s scalable backend systems, seamless technology integrations, and efficient workflows. His meticulous technical planning and systems oversight streamline internal operations and enable tracking of asset performance.",
      "With expertise in workflow architecture, project leadership, and process design, he holds an MPA from Brown University and PMP®, LSSBB, and PSM I credentials. This rigorous background provides a highly structured, data-driven framework for managing the logistics of the firm’s expanding portfolio.",
      "Bridging operational management and technical scalability, he oversees the development of custom asset management systems. His strategic guidance ensures the firm’s backend infrastructure is as robust and dependable as its real estate assets.",
    ],
    expertise: ["Logistics & Planning","Operations Management","Product Management","Process Optimization","Technology Integration"],
    linkedin: "https://www.linkedin.com/in/areebuzzaman/?skipRedirect=true",
    email:"areeb@zamancapital.com"
  },
]

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      // Card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 70 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
          delay: index * 0.15,
        }
      )

      // Image subtle slide
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
          delay: index * 0.15 + 0.2,
        }
      )

      // Bio text
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%", once: true },
          delay: index * 0.15 + 0.25,
        }
      )

      // Expertise tags stagger
      const tags = tagsRef.current?.querySelectorAll(".tag")
      if (tags) {
        gsap.fromTo(
          tags,
          { opacity: 0, scale: 0.8, y: 10 },
          {
            opacity: 1, scale: 1, y: 0,
            duration: 0.4, ease: "back.out(1.5)", stagger: 0.08,
            scrollTrigger: { trigger: tagsRef.current, start: "top 92%", once: true },
            delay: index * 0.15 + 0.4,
          }
        )
      }
    })

    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="card p-8 !m-2 bg-black/40 border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/50 transition-colors duration-300"
      style={{ opacity: 0 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        {/* Left: Image & Role */}
        <div ref={imageRef} className="md:col-span-4 flex flex-col items-center text-center" style={{ opacity: 0 }}>
          <div className="relative w-64 h-80 mb-6 overflow-hidden rounded-lg border-2 border-[#d4af37]/30 shadow-2xl">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h3 className="text-2xl font-bold text-platinum font-playfair mb-2">{member.name}</h3>
          <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-6">{member.role}</p>

          <div className="flex flex-row items-center justify-center gap-4 w-full">
            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-[#0077b5] hover:bg-[#d4af37] text-white rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            )}
            <Link
              href={member.email ? `mailto:${member.email}` : "#"}
              className="inline-flex items-center justify-center w-8 h-8 bg-[#333333] hover:bg-[#d4af37] text-white rounded-md transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right: Bio & Expertise */}
        <div ref={contentRef} className="md:col-span-8" style={{ opacity: 0 }}>
          <div className="space-y-4 mb-8">
            {member.longBio.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed !mb-3 text-lg">{para}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#d4af37]/20">
            <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
              Areas of Expertise
            </p>
            <div ref={tagsRef} className="flex flex-wrap gap-3">
              {member.expertise.map((exp, i) => (
                <span
                  key={i}
                  className="tag !px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded text-sm text-platinum font-medium cursor-default"
                  style={{ opacity: 0 }}
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, backgroundColor: "rgba(212,175,55,0.22)", borderColor: "rgba(212,175,55,0.7)", color: "#f5e6a3", duration: 0.25, ease: "back.out(2)" })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, backgroundColor: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.3)", color: "", duration: 0.25, ease: "power2.out" })}
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function TeamMembers() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 90%", once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark">
      <div className="container">

        <div ref={headerRef} className="text-center !mb-8" style={{ opacity: 0 }}>
          <h2 className="text-4xl font-bold text-platinum mb-4 font-playfair">Meet Our Expert Team</h2>
          <p className="text-text-secondary text-lg">The experts behind your investments</p>
        </div>

        <div className="space-y-12">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} index={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}