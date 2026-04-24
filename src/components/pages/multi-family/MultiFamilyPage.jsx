'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
import ModalButton from '@/components/ui/ModalButton';

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
          <h2 className="font-serif text-[clamp(22px,2.8vw,42px)] font-light text-white mb-10 animate-fadeUp-d3 leading-[1.15]">
            Income-Producing Assets <em className="italic text-gold">Backed by Strategic Execution</em>
          </h2>
          <div className="animate-fadeUp-d4">
            <ModalButton className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)]">
              Schedule a Consultation
            </ModalButton>
          </div>
        </div>
      </section>

      {/* ── WHY MULTI FAMILY ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
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
                  <div className="font-serif text-[48px] text-gold/50 leading-none group-hover:text-gold transition-colors">
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

      {/* ── FINAL CTA ── */}
      <CTASection
        title="Build a Stronger Investment Portfolio with Multifamily Real Estate"
        subtitle=""
        buttonText="Let's Connect"
      />
    </main>
  );
}
