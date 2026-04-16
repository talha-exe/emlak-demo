'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);
  const [residentialOpen, setResidentialOpen] = useState(false);
  const [rentalOpen, setRentalOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const [mobileResidentialOpen, setMobileResidentialOpen] = useState(false);
  const [mobileRentalOpen, setMobileRentalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[400] flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] ${
      scrolled
        ? 'bg-dark/[.98] backdrop-blur-[24px] backdrop-saturate-[1.8] py-4 px-[48px] border-b border-gold/[.18] shadow-[0_4px_24px_rgba(0,0,0,.3)]'
        : 'bg-dark/[.92] backdrop-blur-[16px] py-5 px-[48px]'
    } max-[1300px]:px-8 max-[1100px]:!px-7 max-[1100px]:!py-5`}>
      <Link href="/" className={`relative z-[401] transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center group">
          <img
            src="/images/white-text-logo.svg"
            alt="Emlak Realty"
            className="h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>
      </Link>

      <ul className="flex gap-7 list-none max-[1100px]:hidden items-center">
        <li>
          <Link href="/about" className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal no-underline transition-colors duration-250 whitespace-nowrap ${
            pathname === '/about' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>About Us</Link>
        </li>
        <li 
          className="relative group flex items-center"
          onMouseEnter={() => setResidentialOpen(true)}
          onMouseLeave={() => setResidentialOpen(false)}
        >
          <div role="button" tabIndex={0} className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal transition-colors duration-250 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            pathname === '/residential' || pathname === '/buyer-agent' || pathname === '/listing-agent' ? 'text-gold' : 'text-white/[.48] group-hover:text-gold'
          }`}>
            Residential
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 ${residentialOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className={`absolute top-full -left-4 pt-6 transition-all duration-300 ${residentialOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <ul className="bg-dark/[.98] backdrop-blur-xl border border-gold/20 p-5 min-w-[220px] shadow-[0_20px_40px_rgba(0,0,0,.4)] flex flex-col gap-4">
              <li>
                <Link href="/residential" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/residential' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Residential</Link>
              </li>
              <li>
                <Link href="/buyer-agent" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/buyer-agent' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Buyer Agent</Link>
              </li>
              <li>
                <Link href="/listing-agent" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/listing-agent' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Listing Agent</Link>
              </li>
            </ul>
          </div>
        </li>
        <li 
          className="relative group flex items-center"
          onMouseEnter={() => setCommercialOpen(true)}
          onMouseLeave={() => setCommercialOpen(false)}
        >
          <div role="button" tabIndex={0} className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal transition-colors duration-250 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            pathname.includes('commercial') || pathname.includes('tenant') ? 'text-gold' : 'text-white/[.48] group-hover:text-gold'
          }`}>
            Commercial
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 ${commercialOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className={`absolute top-full -left-4 pt-6 transition-all duration-300 ${commercialOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <ul className="bg-dark/[.98] backdrop-blur-xl border border-gold/20 p-5 min-w-[220px] shadow-[0_20px_40px_rgba(0,0,0,.4)] flex flex-col gap-4">
              <li>
                <Link href="/commercial-services" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/commercial-services' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Commercial Services</Link>
              </li>
              <li>
                <Link href="/tenant-representation" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/tenant-representation' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Tenant Representation</Link>
              </li>
              <li>
                <Link href="/commercial-lease-property" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/commercial-lease-property' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Commercial Lease Property</Link>
              </li>
              <li>
                <Link href="/commercial-buy-sell" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/commercial-buy-sell' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Commercial Buy &amp; Sell</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/multi-family" className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal no-underline transition-colors duration-250 whitespace-nowrap ${
            pathname === '/multi-family' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>Multi Family</Link>
        </li>
        <li>
          <Link href="/bizbuy-sell" className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal no-underline transition-colors duration-250 whitespace-nowrap ${
            pathname === '/bizbuy-sell' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>BizBuy Sell</Link>
        </li>
        <li>
          <Link href="/land-development" className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal no-underline transition-colors duration-250 whitespace-nowrap ${
            pathname === '/land-development' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>Land Development</Link>
        </li>
        <li 
          className="relative group flex items-center"
          onMouseEnter={() => setRentalOpen(true)}
          onMouseLeave={() => setRentalOpen(false)}
        >
          <div role="button" tabIndex={0} className={`nav-link-underline relative text-[11px] tracking-[.08em] uppercase font-normal transition-colors duration-250 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
            pathname === '/rental' || pathname === '/property-management' || pathname === '/tenant-screening' ? 'text-gold' : 'text-white/[.48] group-hover:text-gold'
          }`}>
            Rental
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 ${rentalOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className={`absolute top-full -right-4 pt-6 transition-all duration-300 ${rentalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            <ul className="bg-dark/[.98] backdrop-blur-xl border border-gold/20 p-5 min-w-[220px] shadow-[0_20px_40px_rgba(0,0,0,.4)] flex flex-col gap-4">
              <li>
                <Link href="/rental" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/rental' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Rental Overview</Link>
              </li>
              <li>
                <Link href="/property-management" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/property-management' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Property Management</Link>
              </li>
              <li>
                <Link href="/tenant-screening" className={`text-[10px] tracking-[.14em] uppercase no-underline transition-colors block ${
                  pathname === '/tenant-screening' ? 'text-gold' : 'text-white/60 hover:text-gold'
                }`}>Tenant Screening & Placement</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <Link href="/about" className="nav-cta text-[11px] tracking-[.08em] uppercase font-medium py-2.5 px-6 border border-gold text-gold bg-transparent no-underline transition-all duration-300 hover:bg-gold hover:text-dark focus-visible:outline-2 focus-visible:outline-gold-light focus-visible:outline-offset-[3px] max-[1100px]:hidden whitespace-nowrap">
        Get Started
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`hidden max-[1100px]:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[401] transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5 py-1">
          <div className="w-6 h-[1.5px] bg-gold rounded-full" />
          <div className="w-4 h-[1.5px] bg-gold rounded-full ml-auto group-hover:w-6 transition-all" />
          <div className="w-6 h-[1.5px] bg-gold rounded-full" />
        </div>
      </button>

      {/* Mobile menu - Side Drawer */}
      <div 
        className={`fixed inset-0 z-[400] transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Semi-transparent Backdrop */}
        <div 
          className={`absolute inset-0 bg-dark/60 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        
        {/* The Drawer */}
        <div className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-[360px] bg-[#E8E2D9] h-full min-h-screen shadow-[20px_0_50px_rgba(0,0,0,0.3)] border-r border-gold/10 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] flex flex-col z-[402] ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-dark/[.08] bg-[#E8E2D9] shrink-0 relative z-[403]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image
                src="/images/emlak-mobile-logo.avif"
                alt="Emlak Realty"
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 bg-transparent border-none cursor-pointer flex flex-col gap-1.5"
            >
              <div className="w-5 h-[1.5px] bg-dark rotate-45 translate-y-[1.5px]" />
              <div className="w-5 h-[1.5px] bg-dark -rotate-45 -translate-y-[1.5px]" />
            </button>
          </div>

          {/* Drawer Links container with forced background */}
          <div className="flex-1 overflow-y-auto no-scrollbar pt-2 pb-20 px-8 flex flex-col items-start gap-0 bg-[#E8E2D9] relative z-[403]">
            {/* Hide scrollbar but keep functionality */}
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <Link href="/about" onClick={() => setMenuOpen(false)} className="w-full py-4 border-b border-dark/[.03] text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 no-underline hover:text-gold transition-colors">About Us</Link>
            
            <div className="w-full border-b border-dark/[.03]">
              <button 
                onClick={() => setMobileResidentialOpen(!mobileResidentialOpen)}
                className="w-full py-5 flex items-center justify-between bg-transparent border-none cursor-pointer p-0 text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 group"
              >
                <span>Residential</span>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 text-dark/20 ${mobileResidentialOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`flex flex-col items-start gap-3.5 overflow-hidden transition-all duration-400 ${mobileResidentialOpen ? 'max-h-[300px] mb-6' : 'max-h-0'}`}>
                <Link href="/residential" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Overview</Link>
                <Link href="/buyer-agent" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Buyer Agent</Link>
                <Link href="/listing-agent" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Listing Agent</Link>
              </div>
            </div>

            <div className="w-full border-b border-dark/[.03]">
              <button 
                onClick={() => setMobileCommercialOpen(!mobileCommercialOpen)}
                className="w-full py-5 flex items-center justify-between bg-transparent border-none cursor-pointer p-0 text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 group"
              >
                <span>Commercial</span>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 text-dark/20 ${mobileCommercialOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`flex flex-col items-start gap-3.5 overflow-hidden transition-all duration-400 ${mobileCommercialOpen ? 'max-h-[400px] mb-6' : 'max-h-0'}`}>
                <Link href="/commercial-services" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Services</Link>
                <Link href="/tenant-representation" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Tenant Rep</Link>
                <Link href="/commercial-lease-property" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Lease Property</Link>
                <Link href="/commercial-buy-sell" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Buy & Sell</Link>
              </div>
            </div>

            <Link href="/multi-family" onClick={() => setMenuOpen(false)} className="w-full py-5 border-b border-dark/[.03] text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 no-underline hover:text-gold transition-colors">Multi Family</Link>
            <Link href="/bizbuy-sell" onClick={() => setMenuOpen(false)} className="w-full py-5 border-b border-dark/[.03] text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 no-underline hover:text-gold transition-colors">BizBuy Sell</Link>
            <Link href="/land-development" onClick={() => setMenuOpen(false)} className="w-full py-5 border-b border-dark/[.03] text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 no-underline hover:text-gold transition-colors">Land Development</Link>
            
            <div className="w-full border-b border-dark/[.03]">
              <button 
                onClick={() => setMobileRentalOpen(!mobileRentalOpen)}
                className="w-full py-5 flex items-center justify-between bg-transparent border-none cursor-pointer p-0 text-[11px] tracking-[.15em] uppercase font-bold text-dark/90 group"
              >
                <span>Rental</span>
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" className={`transition-transform duration-300 text-dark/20 ${mobileRentalOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`flex flex-col items-start gap-3.5 overflow-hidden transition-all duration-400 ${mobileRentalOpen ? 'max-h-[300px] mb-6' : 'max-h-0'}`}>
                <Link href="/rental" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Overview</Link>
                <Link href="/property-management" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Management</Link>
                <Link href="/tenant-screening" onClick={() => setMenuOpen(false)} className="text-[10px] text-dark/50 no-underline hover:text-gold transition-colors uppercase tracking-[.12em] font-medium">Screening</Link>
              </div>
            </div>

            <div className="w-full mt-10">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-[10px] tracking-[.3em] uppercase font-bold py-4 px-10 border border-dark text-dark no-underline transition-all hover:bg-dark hover:text-white w-full text-center">Get Started</Link>
            </div>
          </div>
        </div>
      </div>


    </nav>
  );
}
