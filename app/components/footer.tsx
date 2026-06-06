import Link from "next/link"

export default function Footer() {
  return (
   
    <footer className="bg-secondary-bg border-t border-[#d4af37]/20 pt-24 pb-20">
      
      <div className="container">
        
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
         
          <div className="text-center md:text-left">
            <h4 className="text-platinum font-bold mb-8 font-playfair">About Zaman Capital Group</h4>
            <p className="text-sm text-text-secondary font-inter leading-loose">
              Zaman Capital Group specializes in multifamily acquisitions and value-add real estate investments with
              institutional-grade returns.
            </p>
          </div>

        
          <div className="text-center md:text-left">
            <h4 className="text-platinum font-bold mb-8 font-playfair">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/invest-with-us" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  Invest with Us
                </Link>
              </li>
              <li>
                <Link href="/investor-insights" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  Investor Insights
                </Link>
              </li>
              <li>
                <Link href="/our-deals" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  Our Deals
                </Link>
              </li>
              <li>
                <Link href="/meet-the-team" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>

     
          <div className="text-center md:text-left">
  <h4 className="text-platinum font-bold mb-8 font-playfair">Contact</h4>
  <ul className="flex flex-col gap-4 text-sm">
    <li>
      <a
        href="mailto:partners@zamancapitalgroup.com"
        className="text-text-secondary hover:text-[#d4af37] font-inter transition block"
      >
        partners@zamancapitalgroup.com
      </a>
    </li>
 
    <li>
      <a
        href="tel:410-946-6028"
        className="text-text-secondary hover:text-[#d4af37] font-inter transition block"
      >
        410-946-6028
      </a>
    </li>
  </ul>
</div>


          <div className="text-center md:text-left">
            <h4 className="text-platinum font-bold mb-8 font-playfair">Follow Us</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/zamancapitalgroup/" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/p/Zaman-Capital-Group-61576242994141/" className="text-text-secondary hover:text-[#d4af37] font-inter transition block">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

 
        <div className="border-t border-[#d4af37]/20 pt-12 text-center text-sm text-text-secondary font-inter">
          <p>&copy; {new Date().getFullYear()} Zaman Capital Group. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  )
}