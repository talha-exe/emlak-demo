'use client';
import React from 'react';
import Image from 'next/image';

export default function InvestmentPortalPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-skyline.png"
            alt="Investment Portal hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[840px]">
          <h2 className="font-serif text-[clamp(18px,2.4vw,36px)] font-light text-white mb-10 animate-fadeUp-d3 leading-[1.15]">
            Join Our Investor Network for <em className="italic text-gold">Exclusive Investment Opportunities</em>
          </h2>
          <a
            href="https://investment.emlakrealty.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group animate-fadeUp-d4"
          >
            Join Investment Portal
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
