'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

const frameworkSteps = [
  'Asset Evaluation & Market Positioning',
  'Competitive Market Intelligence',
  'Targeted Tenant Acquisition Strategy',
  'Tenant Qualification & Risk Mitigation',
  'Negotiation & Lease Structuring',
  'Lease Execution & Occupancy Coordination',
];

const solutions = [
  'Data-Driven Pricing Strategy',
  'Firm Negotiation Leverage',
  'Investor-Level Financial Analysis',
  'Tenant Risk Mitigation',
  'Structured Lease Oversight',
  'Strategic Asset Positioning',
];

export default function CommercialLeasePropertyPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial-hero.png"
            alt="Commercial leasing and property management"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Commercial Lease <em className="italic text-gold">Property</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Commercial Strategy Lease That Stabilizes Your Income and Protects Your Asset Value
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Request a Property Evaluation
            </a>
          </div>
        </div>
      </section>

      {/* ── LEASING IS AN ASSET STRATEGY ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Strategy"
              title="Leasing Is an Asset Strategy—Not Just Occupancy"
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] mt-10 max-w-[820px]">
              At Emlak Realty, we consider leasing an asset choice and not an administrative activity.
            </p>
            <p className="text-[17px] text-mid font-light leading-[1.8] mt-6 max-w-[820px]">
              We examine the financial makeup of your property, its positioning in the market, mix of tenants, and long-term aspirations and advise on the leasing strategy. We help evaluate every commercial property for lease based on accessibility, market demand, and operational needs.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── STRATEGIC LEASING FRAMEWORK ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Methodology"
              title="Our Strategic Leasing Framework"
              light={true}
              className="mb-20"
            />
            <div className="grid grid-cols-1 gap-0">
              {frameworkSteps.map((title, i) => (
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
            <p className="font-serif text-[clamp(20px,2.2vw,24px)] font-light italic text-white/70 leading-[1.6] mt-20 max-w-[840px]">
              Our goal is to ensure your leasing decision strengthens your business for years to come. We help clients evaluate properties, compare market opportunities, and negotiate lease agreements that deliver both <em className="not-italic text-gold">immediate value</em> and <em className="not-italic text-gold">long-term flexibility.</em>
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PERFORMANCE-DRIVEN SOLUTIONS ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Solutions"
              title="Performance-Driven Commercial Leasing Solutions"
              className="mb-16"
            />
            <div className="grid grid-cols-3 gap-px bg-dark/5 border border-dark/5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {solutions.map((item, i) => (
                <div key={i} className="bg-white p-10 hover:bg-gold/5 transition-colors flex items-center gap-6 group">
                  <div className="font-serif text-[32px] text-gold/50 leading-none group-hover:text-gold transition-colors shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="font-serif text-[17px] text-dark group-hover:text-gold transition-colors leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection
        eyebrow="Consultation"
        title="Ready to Strengthen Your Commercial Asset?"
        subtitle=""
        buttonText="Schedule your consultation now"
      />
    </main>
  );
}
