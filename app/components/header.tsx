"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Invest with Us", href: "/invest-with-us" },
    { name: "Our Strategy", href: "/our-strategy" },
    { name: "Investor Insights", href: "/investor-insights" },
    { name: "Our Deals", href: "/our-deals" },
    { name: "Meet the Team", href: "/meet-the-team" },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 border-b border-[#d4af37]/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center h-24 px-6 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
          <Image 
            src="/deals/logo-zaman.jpg" 
            alt="Zaman Capital Group"
            width={240} 
            height={90}
            className="object-contain h-14 md:h-16 w-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white/90 hover:text-[#d4af37] transition font-medium text-sm tracking-wide uppercase">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link href="/contact" className="btn-gold hidden lg:block whitespace-nowrap text-sm tracking-widest uppercase">
          Contact Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden relative z-50 p-2 text-white hover:text-[#d4af37] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-light text-white hover:text-[#d4af37] transition-colors uppercase tracking-[0.2em] relative group"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + i * 0.05}s`
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-16 h-px bg-[#d4af37]/30 my-4" />
          
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-10 py-4 bg-[#d4af37] text-black text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-colors"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 + navLinks.length * 0.05}s`
            }}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}