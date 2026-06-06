"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is multifamily syndication, and how does it work?",
        answer:
          "Multifamily syndication is a group investment strategy where multiple investors pool capital to acquire large apartment buildings or multifamily properties. We manage the entire process—from acquisition and management to eventual sale—while investors receive passive income and profits.",
      },
      {
        question: "How do I invest in a syndication with you?",
        answer:
          "Depending on the deal structure, we offer investment opportunities to accredited and non-accredited investors. To get started, you can join our investor network, review current opportunities, and participate in deals that align with your financial goals.",
      },
      {
        question: "What are the benefits of investing in multifamily real estate?",
        answer:
          "Passive income through rental cash flow\nAppreciation as property values increase\nTax advantages through depreciation and write-offs\nDiversification with a stable asset class\nScalability compared to single-family rentals",
      },
      {
        question: "How does investing in multifamily compare to single-family rentals?",
        answer:
          "Multifamily properties offer more stability and higher scalability than single-family rentals. With multiple tenants, income is diversified, reducing the risk of vacancies affecting cash flow. Additionally, economies of scale make maintenance and management more cost-effective.",
      },
    ],
  },
  {
    category: "Financials and Returns",
    items: [
      {
        question: "What kind of returns can I expect on my investment?",
        answer:
          "Returns vary based on the property, market conditions, and strategy, but typical projections include:\n8-9% annual cash-on-cash returns\n10-20% internal rate of return (IRR) over 5-7 years\n2x+ equity multiple (doubling investor capital over the hold period)",
      },
      {
        question: "How are investor returns calculated?",
        answer:
          "We use multiple performance metrics, including:\nCash-on-Cash Return (CoC): Annual cash flow divided by the investor's initial investment\nInternal Rate of Return (IRR): A time-weighted return that factors in future cash flow and sales profits\nEquity Multiple: Total return on investment (e.g., 2x equity multiple means an investor doubles their money)",
      },
      {
        question: "How and when will I receive distributions?",
        answer:
          "Distributions are typically made quarterly or monthly, depending on the investment. Payouts come from rental income after expenses like mortgage, taxes, and management fees.",
      },
      {
        question: "What happens if the property doesn't perform as expected?",
        answer:
          "We take a conservative underwriting approach to minimize risk. If a property underperforms, investor distributions may be temporarily reduced while we adjust our strategy. However, we structure deals with ample reserves to weather market fluctuations.",
      },
      {
        question: "What is the typical hold period for a syndication deal?",
        answer:
          "Most deals have a 5-7-year hold period, which varies depending on market conditions. However, some deals may allow for an earlier refinance, returning some capital while maintaining ownership.",
      },
      {
        question: "What happens at the end of the investment term?",
        answer:
          "At the end of the hold period, we either:\nSell the property and distribute profits\nRefinance the property to return investor capital while keeping the asset\nReposition the asset for continued cash flow with investor approval",
      },
    ],
  },
  {
    category: "Risk & Protection",
    items: [
      {
        question: "What are the most significant risks in multifamily syndications?",
        answer:
          "Like any investment, multifamily real estate carries risks, including:\nMarket downturns affecting property values\nTenant vacancies reducing cash flow\nInterest rate fluctuations impacting financing\nOperational challenges if management is ineffective",
      },
      {
        question: "How do you mitigate risk for investors?",
        answer:
          "Conservative underwriting with realistic projections\nThorough due diligence on property financials, market trends, and operations\nExperienced property management to maintain tenant satisfaction and minimize vacancies\nReserves set aside for unexpected expenses",
      },
      {
        question: "What happens if the market declines during our investment period?",
        answer:
          "We acquire properties with strong fundamentals, which means they generate positive cash flow regardless of short-term market conditions. If a downturn occurs, we hold assets until market conditions improve.",
      },
      {
        question: "Do investors get their initial capital back?",
        answer:
          "Yes, investors typically receive their original capital upon selling or refinancing the property. If the property appreciates, investors also receive a share of the profits.",
      },
      {
        question: "Is my investment liquid, or will it be tied up for a set period?",
        answer:
          "Syndication investments are not liquid like stocks. Investors commit their capital for the hold period (typically 5-7 years) but receive cash flow distributions throughout.",
      },
    ],
  },
  {
    category: "Deal Structure and Operations",
    items: [
      {
        question: "What's the process for securing a deal?",
        answer:
          "1. We identify & underwrite a substantial property\n2. We negotiate & structure the deal\n3. We secure investor commitments & close\n4. We manage the asset & distribute returns\n5. We execute an exit strategy for profit",
      },
      {
        question: "Who manages the properties?",
        answer:
          "We partner with experienced property management firms who handle day-to-day operations, maintenance, and leasing.",
      },
      {
        question: "Do investors have any ownership of the property?",
        answer:
          "Yes, investors hold equity ownership in the property, entitling them to their share of cash flow, tax benefits, and appreciation profits.",
      },
      {
        question: "What is the difference between preferred returns and profit splits?",
        answer:
          "Preferred Return: Investors get paid a set return (e.g., 8%) before sponsors receive profits.\nProfit Split: After preferred returns, profits are split based on the syndication structure (e.g., 70/30).",
      },
      {
        question: "How do taxes work on my investment?",
        answer:
          "Multifamily investors benefit from depreciation, cost segregation, and passive income taxation, often reducing their taxable income. However, they should always consult a CPA for specific tax implications.",
      },
    ],
  },
  {
    category: "Our Track Record and Strategy",
    items: [
      {
        question: "What types of properties do you invest in?",
        answer:
          "We focus on high-cash-flow multifamily properties with value-add potential in emerging and stable markets.",
      },
      {
        question: "How do you find and select investment properties?",
        answer:
          "Off-market deals through broker relationships\nDirect outreach to sellers\nCRE platforms like Crexi & LoopNet\nPartnering with local market experts",
      },
      {
        question: "What markets do you focus on?",
        answer:
          "We invest in cash-flowing, landlord-friendly markets where we can create long-term equity growth. Current holdings include:\nClarion, PA (High Cap-Rate Market)\nCatonsville, MD (Value-Add & Stability)\nOcean City, MD (Seasonal & Luxury Rental Strategy)",
      },
      {
        question: "What is your value-add strategy?",
        answer:
          "Renovating units to increase rental value\nImproving tenant quality & reducing turnover\nOptimizing operations to reduce expenses & increase NOI\nRepositioning properties for a higher price on exit",
      },
      {
        question: "Can you share examples of past deals and their performance?",
        answer:
          "Yes! Visit our Portfolio Page for case studies on how we've repositioned and optimized our properties for high investor returns.",
      },
    ],
  },
]

// Individual FAQ accordion item with GSAP open/close
function FaqItem({
  question,
  answer,
  flatIdx,
  expandedIndex,
  setExpandedIndex,
}: {
  question: string
  answer: string
  flatIdx: number
  expandedIndex: number | null
  setExpandedIndex: (i: number | null) => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const isExpanded = expandedIndex === flatIdx

  const toggle = useCallback(() => {
    if (!bodyRef.current) return

    if (isExpanded) {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut" })
      setExpandedIndex(null)
    } else {
      gsap.set(bodyRef.current, { height: "auto", opacity: 1 })
      const height = bodyRef.current.scrollHeight
      gsap.fromTo(
        bodyRef.current,
        { height: 0, opacity: 0 },
        { height, opacity: 1, duration: 0.4, ease: "power2.out" }
      )
      setExpandedIndex(flatIdx)
    }
  }, [isExpanded, flatIdx, setExpandedIndex])

  // Close instantly when another item opens
  useEffect(() => {
    if (!bodyRef.current) return
    if (!isExpanded) {
      gsap.set(bodyRef.current, { height: 0, opacity: 0 })
    }
  }, [isExpanded])

  return (
    <div
      className={`group rounded-2xl overflow-hidden transition-all !p-2 duration-500 backdrop-blur-md ${
        isExpanded
          ? "border border-[#d4af37]/50 bg-gradient-to-br from-white/[0.05] to-[#d4af37]/[0.05] shadow-[0_8px_32px_-12px_rgba(212,175,55,0.2)]"
          : "border border-white/10 bg-white/[0.02] hover:border-[#d4af37]/30 hover:bg-white/[0.04]"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full p-6 sm:px-8 sm:py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span
          className={`text-base sm:text-lg font-medium pr-8 transition-colors duration-300 ${
            isExpanded ? "text-[#d4af37]" : "text-white group-hover:text-[#d4af37]/80"
          }`}
        >
          {question}
        </span>
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full border flex-shrink-0 transition-all duration-500 ${
            isExpanded
              ? "border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] rotate-180"
              : "border-white/20 text-white/50 group-hover:border-[#d4af37]/50 group-hover:text-[#d4af37]"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <div className="px-6 sm:px-8 pb-8 pt-0">
          <div className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base border-l-2 !px-2 border-[#d4af37]/30 pl-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function InvestorFaq() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Build flat index map
  const flatFaqs = faqs.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh()

      // Section heading + subtitle
      gsap.fromTo(
        [headingRef.current, subtitleRef.current],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: { trigger: headingRef.current, start: "top 90%", once: true },
        }
      )

      // Category groups stagger
      const categoryGroups = sectionRef.current?.querySelectorAll(".faq-category")
      if (categoryGroups) {
        categoryGroups.forEach((group) => {
          gsap.fromTo(
            group,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 85%", once: true },
            }
          )

          // FAQ rows within each category stagger
          const rows = group.querySelectorAll(".faq-row")
          if (rows.length) {
            gsap.fromTo(
              rows,
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: { trigger: group, start: "top 80%", once: true },
                delay: 0.2,
              }
            )
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section section-dark py-24 sm:py-32 relative overflow-hidden">
      {/* Background Subtle Gradient/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4  sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="max-w-3xl w-full text-center !mb-6">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ opacity: 0 }}
          >
            Frequently Asked <span className="text-[#d4af37]">Questions</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-400 text-lg sm:text-xl"
            style={{ opacity: 0 }}
          >
            Everything you need to know about multifamily syndication, our investment process, returns, and how we protect your capital.
          </p>
        </div>

        {/* FAQs Layout */}
        <div className="max-w-6xl  w-full flex flex-col !gap-8 sm:gap-32">
          {faqs.map((categoryGroup, categoryIdx) => {
            const startFlatIdx = flatFaqs.findIndex(
              (f) => f.question === categoryGroup.items[0].question
            )

            return (
              <div
                key={categoryIdx}
                className="faq-category grid grid-cols-1 lg:grid-cols-12   items-start"
                style={{ opacity: 0 }}
              >
                {/* Left Column: Sticky Category Title */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 pt-2">
                  <div className="flex flex-col items-start">
                    <span className="text-[#d4af37]/60 text-sm font-bold tracking-widest uppercase mb-2">
                      0{categoryIdx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                      {categoryGroup.category}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full" />
                  </div>
                </div>

                {/* Right Column: FAQ Accordion Items */}
                <div className="lg:col-span-8 flex flex-col gap-4 w-full">
                  {categoryGroup.items.map((faq, idx) => {
                    const flatIdx = startFlatIdx + idx
                    return (
                      <div key={idx} className="faq-row !p-1" style={{ opacity: 0 }}>
                        <FaqItem
                          question={faq.question}
                          answer={faq.answer}
                          flatIdx={flatIdx}
                          expandedIndex={expandedIndex}
                          setExpandedIndex={setExpandedIndex}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}