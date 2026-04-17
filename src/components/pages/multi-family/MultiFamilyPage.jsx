'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

const investmentStrategies = [
  'Predictable Recurring Income',
  'Strong Financing Leverage',
  'Demand-Driven Fundamentals',
  'Appreciation Through Optimization',
  'Portfolio Scalability',
];

export default function MultiFamilyPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/multi-family-hero.png"
            alt="Multi family real estate investments"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Multi Family <em className="italic text-gold">Real Estate</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Income-Producing Assets Backed by Strategic Execution
          </p>
        </div>
      </section>

      {/* ── WHY MULTI FAMILY ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Investment Strategy"
              title="Why Multi Family Assets Remain a Core Investment Strategy"
              light={true}
              className="mb-10"
            />
            <p className="text-[16px] text-white/50 font-light leading-[1.8] mb-20">
              Multi family real estate continues to outperform many asset classes because of strong housing fundamentals and scalable income structure. As a top-rated real estate broker, we help investors identify profitable multi-family properties in stable and growing neighborhoods.
            </p>
            <div className="grid grid-cols-1 gap-0">
              {investmentStrategies.map((title, i) => (
                <div key={i} className="group grid grid-cols-[100px_1fr] gap-12 max-[640px]:grid-cols-1 max-[640px]:gap-4 py-10 border-b border-white/10 last:border-0 hover:border-gold/30 transition-colors">
                  <div className="font-serif text-[48px] text-gold/20 leading-none group-hover:text-gold transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-center">
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-gold transition-colors">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BUILD A STRONGER PORTFOLIO ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto text-center">
            <SectionHeader
              eyebrow="Portfolio Growth"
              title="Build a Stronger Investment Portfolio with Multifamily Real Estate"
              className="flex flex-col items-center"
            />
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection
        eyebrow="Get Started"
        title="Ready to Strengthen Your Multi Family Portfolio with Emlak Realty?"
        subtitle=""
        buttonText="Let's Connect"
      />
    </main>
  );
}
