"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_URL || ""

interface ContactFormProps {
    initialSubject?: string
    initialMessage?: string
}

export default function ContactForm({ initialSubject = "", initialMessage = "" }: ContactFormProps) {
    const formRef = useRef<HTMLFormElement>(null)
    const section1Ref = useRef<HTMLDivElement>(null)
    const section2Ref = useRef<HTMLDivElement>(null)
    const section3Ref = useRef<HTMLDivElement>(null)
    const btnRef = useRef<HTMLDivElement>(null)

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        investmentAmount: "",
        accreditation: "",
        timeline: "",
        sourceOfFunds: "",
        experience: "",
        message: initialMessage,
    })

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.refresh()

            const sections = [section1Ref, section2Ref, section3Ref]
            sections.forEach((ref, i) => {
                gsap.fromTo(
                    ref.current,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
                        delay: i * 0.1,
                    }
                )

                const fields = ref.current?.querySelectorAll(".field-group")
                if (fields) {
                    gsap.fromTo(
                        fields,
                        { opacity: 0, y: 30 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: "power3.out",
                            stagger: 0.1,
                            scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
                            delay: i * 0.1 + 0.2,
                        }
                    )
                }
            })

            gsap.fromTo(
                btnRef.current,
                { opacity: 0, y: 30, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: btnRef.current, start: "top 95%", once: true },
                }
            )
        }, formRef)

        return () => ctx.revert()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const params = new URLSearchParams()
            Object.entries(formData).forEach(([key, value]) => params.append(key, value))
            params.append("date", new Date().toISOString().split("T")[0])

            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            })

            alert("Success! Your inquiry has been sent to our team.")
            setFormData({
                firstName: "", lastName: "", email: "", phone: "", location: "",
                investmentAmount: "", accreditation: "", timeline: "", sourceOfFunds: "",
                experience: "", message: "",
            })
        } catch (error) {
            console.error("Error submitting form", error)
            alert("There was an error sending your message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputStyles =
        "w-full bg-[#111111] border border-white/10 rounded-sm !px-6 !py-5 !mt-4 text-white placeholder:text-gray-500 focus:border-[#d4af37]/70 focus:bg-[#1a1a1a] focus:ring-1 focus:ring-[#d4af37]/50 outline-none transition-all duration-300 text-base !min-h-[64px]"
    const labelStyles =
        "block text-[13px] font-bold text-[#d4af37]/90 !mb-4 uppercase tracking-widest !pl-2"
    const sectionHeaderStyles =
        "text-3xl sm:text-4xl font-medium text-white !mb-16 flex items-center !gap-8 !mt-8"

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full bg-[#0a0a0a]/80 !py-5 !px-2 sm:!py--5 sm:!px-4 md:!py--5 md:!px-6 lg:!py--5 lg:!px-8 rounded-sm border border-white/10 shadow-2xl relative backdrop-blur-2xl overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

            {isSubmitting && (
                <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center rounded-sm backdrop-blur-md">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-12 h-12 border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin" />
                        <div className="text-[#d4af37] text-xl font-medium tracking-widest animate-pulse">
                            PROCESSING...
                        </div>
                    </div>
                </div>
            )}

            {/* Section 1 */}
            <div ref={section1Ref} style={{ opacity: 0 }}>
                <h3 className={sectionHeaderStyles}>
                    <span className="text-[#d4af37]">01.</span> Personal Information
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d4af37]/30 to-transparent ml-2" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 !gap-x-16 !gap-y-14">
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>First Name *</label>
                        <input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputStyles} placeholder="Enter your first name" />
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Last Name *</label>
                        <input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputStyles} placeholder="Enter your last name" />
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputStyles} placeholder="name@company.com" />
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Phone Number *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="field-group md:col-span-2" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className={inputStyles} placeholder="City, State, Country" />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div ref={section2Ref} style={{ opacity: 0 }}>
                <h3 className={sectionHeaderStyles}>
                    <span className="text-[#d4af37] ">02.</span> Investment Criteria
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d4af37]/30 to-transparent ml-2" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 !gap-x-16 !gap-y-14">
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Target Investment Amount</label>
                        <select name="investmentAmount" value={formData.investmentAmount} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`}>
                            <option value="" disabled className="bg-[#111111] text-gray-500">Select Range</option>
                            <option value="25k-50k" className="bg-[#111111] text-white">$25,000 – $50,000</option>
                            <option value="50k-100k" className="bg-[#111111] text-white">$50,000 – $100,000</option>
                            <option value="100k-500k" className="bg-[#111111] text-white">$100,000 – $500,000</option>
                            <option value="500k+" className="bg-[#111111] text-white">$500,000+</option>
                        </select>
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Accreditation Status</label>
                        <select name="accreditation" value={formData.accreditation} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`}>
                            <option value="" disabled className="bg-[#111111] text-gray-500">Select Status</option>
                            <option value="yes" className="bg-[#111111] text-white">Accredited Investor</option>
                            <option value="no" className="bg-[#111111] text-white">Non-Accredited Investor</option>
                            <option value="unsure" className="bg-[#111111] text-white">Unsure / Need Info</option>
                        </select>
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Timeline</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`}>
                            <option value="" disabled className="bg-[#111111] text-gray-500">Select Timeline</option>
                            <option value="now" className="bg-[#111111] text-white">Immediate</option>
                            <option value="1-3months" className="bg-[#111111] text-white">1 – 3 Months</option>
                            <option value="3-6months" className="bg-[#111111] text-white">3 – 6 Months</option>
                            <option value="learning" className="bg-[#111111] text-white">Just Researching</option>
                        </select>
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Source of Capital</label>
                        <select name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleChange} className={`${inputStyles} appearance-none cursor-pointer`}>
                            <option value="" disabled className="bg-[#111111] text-gray-500">Select Source</option>
                            <option value="cash" className="bg-[#111111] text-white">Cash / Liquid Savings</option>
                            <option value="ira" className="bg-[#111111] text-white">Self-Directed IRA / 401k</option>
                            <option value="1031" className="bg-[#111111] text-white">1031 Exchange</option>
                            <option value="heloc" className="bg-[#111111] text-white">Line of Credit / HELOC</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div ref={section3Ref} style={{ opacity: 0 }}>
                <h3 className={sectionHeaderStyles}>
                    <span className="text-[#d4af37]">03.</span> Experience & Message
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#d4af37]/30 to-transparent ml-2" />
                </h3>
                <div className="!space-y-14">
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Investor Experience Level</label>
                        <textarea
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className={`${inputStyles} h-40 resize-none leading-relaxed`}
                            placeholder="Briefly describe your real estate investing experience..."
                        />
                    </div>
                    <div className="field-group" style={{ opacity: 0 }}>
                        <label className={labelStyles}>Additional Questions or Notes</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputStyles} h-48 resize-none leading-relaxed`}
                            placeholder="How can we help you achieve your goals?"
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="!mt-16" ref={btnRef} style={{ opacity: 0 }}>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full relative flex items-center justify-center !gap-4 bg-[#d4af37] text-black !py-6 !px-10 rounded-sm !text-base font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 ${isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-white hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
                        }`}
                >
                    <div className="absolute inset-0 -translate-x-full bg-white/40 skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
                    <span className="relative z-10">{isSubmitting ? "Processing Inquiry..." : "Submit Investor Inquiry"}</span>
                    {!isSubmitting && (
                        <svg className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    )}
                </button>
            </div>
        </form>
    )
}