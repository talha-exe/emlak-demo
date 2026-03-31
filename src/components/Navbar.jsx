'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[400] flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] ${
      scrolled
        ? 'bg-dark/[.96] backdrop-blur-[24px] backdrop-saturate-[1.8] py-4 px-[80px] border-b border-gold/[.18]'
        : 'py-6 px-[80px]'
    } max-[1100px]:!px-7 max-[1100px]:!py-[18px]`}>
      <Link href="/" className="font-serif text-2xl font-medium tracking-[.2em] uppercase text-white no-underline">
        Emlak<span className="text-gold">.</span>Realty
      </Link>

      <ul className="flex gap-11 list-none max-[1100px]:hidden">
        <li>
          <Link href="/about" className={`nav-link-underline relative text-xs tracking-[.1em] uppercase font-normal no-underline transition-colors duration-250 ${
            pathname === '/about' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>About Us</Link>
        </li>
        <li>
          <Link href="/buyer-agent" className={`nav-link-underline relative text-xs tracking-[.1em] uppercase font-normal no-underline transition-colors duration-250 ${
            pathname === '/buyer-agent' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>Buyer Agent</Link>
        </li>
        <li>
          <Link href="/listing-agent" className={`nav-link-underline relative text-xs tracking-[.1em] uppercase font-normal no-underline transition-colors duration-250 ${
            pathname === '/listing-agent' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>Listing Agent</Link>
        </li>
        <li>
          <Link href="/residential" className={`nav-link-underline relative text-xs tracking-[.1em] uppercase font-normal no-underline transition-colors duration-250 ${
            pathname === '/residential' ? 'text-gold' : 'text-white/[.48] hover:text-gold'
          }`}>Residential</Link>
        </li>
      </ul>

      <Link href="/about" className="nav-cta text-[11px] tracking-[.14em] uppercase font-medium py-3 px-8 border border-gold text-gold bg-transparent no-underline transition-all duration-300 hover:bg-gold hover:text-dark focus-visible:outline-2 focus-visible:outline-gold-light focus-visible:outline-offset-[3px] max-[1100px]:hidden">
        Get Started
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hidden max-[1100px]:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="hidden max-[1100px]:flex fixed inset-0 top-[60px] bg-dark/[.98] backdrop-blur-xl flex-col items-center justify-center gap-8 z-[399]">
          <Link href="/about" onClick={() => setMenuOpen(false)} className="font-serif text-2xl text-white no-underline hover:text-gold transition-colors">About Us</Link>
          <Link href="/buyer-agent" onClick={() => setMenuOpen(false)} className="font-serif text-2xl text-white no-underline hover:text-gold transition-colors">Buyer Agent</Link>
          <Link href="/listing-agent" onClick={() => setMenuOpen(false)} className="font-serif text-2xl text-white no-underline hover:text-gold transition-colors">Listing Agent</Link>
          <Link href="/residential" onClick={() => setMenuOpen(false)} className="font-serif text-2xl text-white no-underline hover:text-gold transition-colors">Residential</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[.14em] uppercase font-medium py-3 px-8 border border-gold text-gold no-underline hover:bg-gold hover:text-dark transition-all">Get Started</Link>
        </div>
      )}
    </nav>
  );
}
