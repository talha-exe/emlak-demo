'use client';
import Image from 'next/image';
import Link from 'next/link';
import StatCounter from '@/components/ui/StatCounter';

export default function HeroSection() {
  return (
    <section id="hero" className="h-screen min-h-[760px] max-[640px]:min-h-[640px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_80px]">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-skyline.png" alt="Luxury city skyline at twilight" fill priority className="object-cover" />
      </div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/[.15] via-dark/60 via-55% to-dark" />
      <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />

      {/* Stats sidebar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-[3] animate-[fadeIn_1.2s_cubic-bezier(.4,0,.2,1)_both_1s] max-[1100px]:hidden">
        {[
          { target: 10, suffix: '+', label: 'Years of Excellence' },
          { target: 500, suffix: '+', label: 'Properties Closed' },
          { target: 6, suffix: '', label: 'Investment Categories' },
        ].map((stat, i) => (
          <div key={i} className={`py-6 px-8 text-right bg-dark/[.65] backdrop-blur-[16px] border-l border-gold/[.22] ${i > 0 ? 'border-t border-t-white/[.04]' : ''}`}>
            <StatCounter target={stat.target} suffix={stat.suffix} className="font-serif text-[42px] font-light text-white leading-none" />
            <div className="text-[10px] tracking-[.2em] uppercase text-white/30 mt-[5px]">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="relative z-[3] max-w-[960px]">

        <h1 className="font-serif text-[clamp(44px,9vw,140px)] font-light leading-[.9] tracking-[-0.015em] text-white mb-6 animate-fadeUp-d2">
          EMLAK <em className="italic text-gold">REALTY</em>
        </h1>
        <p className="font-serif text-[clamp(16px,2.2vw,26px)] font-light italic text-white/[.55] mb-11 animate-fadeUp-d3">
          We invest in people, relationships &amp; value
        </p>
        <div className="flex flex-wrap gap-2.5 mb-14 animate-fadeUp-d4 max-[640px]:mb-10">
          {['Residential realestate', 'Commercial Assets', 'Development Opportunities', 'Strategic Investments'].map((pill) => (
            <span key={pill} className="inline-flex items-center gap-2.5 text-[9px] tracking-[.15em] uppercase text-white/60 font-light py-[10px] px-[20px] border border-gold/[.32] bg-gold/[.06] backdrop-blur-[12px] transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:border-gold hover:text-gold-light hover:bg-gold/[.14] hover:-translate-y-0.5 max-[400px]:text-[8px] max-[400px]:px-4">
              <span className="w-[4px] h-[4px] rounded-full bg-gold shrink-0" />
              {pill}
            </span>
          ))}
        </div>
        <Link href="#opps" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-[52px] no-underline transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] border border-gold animate-fadeUp-d5 hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group max-[640px]:w-full max-[640px]:justify-center">
          Explore Opportunities
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-[80px] bottom-[100px] z-[3] flex flex-col items-center gap-3.5 animate-fadeIn max-[1100px]:hidden">
        <span className="text-[9px] tracking-[.28em] uppercase text-white/[.28] [writing-mode:vertical-rl]">Scroll</span>
        <div className="scroll-line-anim" />
      </div>
    </section>
  );
}
