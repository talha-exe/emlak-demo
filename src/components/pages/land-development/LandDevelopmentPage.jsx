'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function LandDevelopmentPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-end p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/land-development-hero.png" 
            alt="Land development services" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Land Development <em className="italic text-gold">Services</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Transforming Land into Lucrative Property Opportunities
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Get Your Land Evaluated Today
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE SERVICES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Services" 
              title="Our Comprehensive Land Development Services" 
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] mt-10 mb-16">
              Being a top-rated real estate brokerage, we provide end-to-end services tailored to your goals, ensuring every project is executed efficiently, legally, and profitably.
            </p>

            <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                {
                  num: '01',
                  title: 'Land Acquisition & Feasibility Studies'
                },
                {
                  num: '02',
                  title: 'Site Planning & Design'
                },
                {
                  num: '03',
                  title: 'Developer Advisory'
                },
                {
                  num: '04',
                  title: 'Permitting & Regulatory Compliance'
                },
                {
                  num: '05',
                  title: 'Land Improvement & Infrastructure Development'
                },
                {
                  num: '06',
                  title: 'Marketing & Sale of Developed Land'
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white p-10 border border-dark/[.06] hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)]">
                  <div className="font-serif text-[40px] text-gold/20 leading-none mb-6 group-hover:text-gold transition-colors">{item.num}</div>
                  <h3 className="font-serif text-lg text-dark leading-[1.4] group-hover:text-gold transition-colors">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── SLOGAN + CTA ── */}
      <CTASection 
        eyebrow="Expert Advisory"
        title="Make Smart Land Decisions with Expert Advisory"
        subtitle=""
        buttonText="Get Started"
      />
    </main>
  );
}
