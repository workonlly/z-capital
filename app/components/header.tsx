"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 border-b border-[#d4af37]/20" : "bg-transparent"
      }`}
    >
 
      <div className="container flex justify-between items-center h-24 px-8">
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/deals/logo-zaman.jpg" 
            alt="Zaman Capital Group"
       
            width={240} 
            height={90}
            
            className="object-contain h-16 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="/" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Home
          </Link>
          <Link href="/invest-with-us" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Invest with Us
          </Link>
          <Link href="/our-strategy" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Our Strategy
          </Link>
          <Link href="/investor-insights" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Investor Insights
          </Link>
          <Link href="/our-deals" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Our Deals
          </Link>
          <Link href="/meet-the-team" className="text-platinum hover:text-[#d4af37] transition font-medium text-sm">
            Meet the Team
          </Link>
        </nav>

        <Link href="/contact" className="btn-gold hidden md:block whitespace-nowrap">
          Contact Us
        </Link>
      </div>
    </header>
  )
}