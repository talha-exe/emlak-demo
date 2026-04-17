'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

const advisorySteps = [
  'Assessment of Business & Space',
  'Market Intelligence & Property Identification',
  'Financial Modeling & Lease Comparison',
  'Tenant Oversight and Balance Framework',
  'Negotiation & Lease Structuring',
  'Lease Execution & Transition Support',
];

const spaceCategories = [
  {
    title: 'Office Space',
    items: [
      'Corporate Headquarters Offices',
      'Class A Office Buildings',
      'Co-Working Office Spaces',
      'Satellite Branch Offices',
    ],
  },
  {
    title: 'Retail Locations',
    items: [
      'Shopping Mall Units',
      'High-Street Retail Stores',
      'Boutique Retail Shops',
      'Pop-Up Retail Spaces',
    ],
  },
  {
    title: 'Medical & Healthcare Suites',
    items: [
      'Private Medical Clinics',
      'Multi-Specialty Medical Centers',
      'Diagnostic Laboratory Suites',
      'Urgent Care Clinics',
    ],
  },
  {
    title: 'Industrial & Warehouse Facilities',
    items: [
      'Distribution Warehouses',
      'Manufacturing Units',
      'Logistics & Fulfillment Centers',
      'Cold Storage Facilities',
    ],
  },
  {
    title: 'Mixed-Use Commercial Space',
    items: [
      'Retail + Residential Developments',
      'Office + Retail Complexes',
      'Lifestyle & Entertainment Hubs',
      'Urban Redevelopment Properties',
    ],
  },
];

export default function TenantRepresentationPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial-hero.png"
            alt="Tenant representation and strategy"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Tenant <em className="italic text-gold">Representation</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Secure the Right Space on the Right Terms
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── EXPERT REPRESENTATION ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Advocacy"
              title="Expert Tenant Representation with Strategy and Leverage"
            />
            <p className="text-[20px] text-mid font-light leading-[1.8] mt-10 max-w-[820px]">
              At Emlak Realty, a full-service real estate brokerage and a strategic advisor who understands both the real estate market and the financial impact of lease decisions.
            </p>
            <div className="mt-12 space-y-6 max-w-[820px]">
              <p className="text-[17px] text-dark font-medium mb-8">We don&apos;t simply show available spaces. We:</p>
              {[
                'Conduct market availability analysis',
                'Benchmark lease rates against comparable properties',
                'Model long-term occupancy costs',
                'Identify hidden risks in lease language',
                'Structure negotiations to secure measurable value',
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center pb-4 border-b border-dark/5 group">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <p className="text-[15px] text-mid font-light">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-transparent text-gold text-[11px] tracking-[.16em] uppercase font-semibold py-[16px] px-10 no-underline transition-all duration-300 border border-gold hover:bg-gold hover:text-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
                Contact Our Expert
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── ADVISORY FRAMEWORK ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Methodology"
              title="Our Strategic Tenant Advisory Framework"
              light={true}
              className="mb-20"
            />
            <div className="grid grid-cols-1 gap-0">
              {advisorySteps.map((title, i) => (
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

      {/* ── SPACES WE SECURE ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Asset Types"
              title="Commercial Spaces We Secure for Tenants"
              className="text-center flex flex-col items-center mb-16"
            />
            <div className="grid grid-cols-3 gap-px bg-dark/5 border border-dark/5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
              {spaceCategories.map((cat, i) => (
                <div key={i} className="bg-white p-10 hover:bg-gold/5 transition-colors flex flex-col gap-6 group">
                  <h3 className="font-serif text-[18px] text-dark leading-tight group-hover:text-gold transition-colors">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-[7px] w-1 h-1 bg-gold/50 rounded-full shrink-0" />
                        <span className="text-[13px] text-mid font-light leading-[1.6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center max-w-[840px] mx-auto border-t border-gold/20 pt-16">
              <p className="font-serif text-[clamp(20px,2.2vw,24px)] font-light italic text-dark leading-[1.6]">
                We help businesses secure the space they need to succeed. With a focus on strategy and client advocacy, we ensure each leasing decision contributes to a stronger future for your business.
              </p>
              <div className="mt-10">
                <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-block py-[19px] px-12 bg-dark text-white text-[11px] tracking-[.25em] uppercase font-bold hover:bg-gold transition-colors">
                  Let&apos;s Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection
        eyebrow="Strategy Consultation"
        title="Are you planning a relocation, expansion, renewal, or new office lease? Now is the time to position your business for long-term success."
        subtitle=""
        buttonText="Start Your Tenant Strategy Consultation Today"
      />
    </main>
  );
}
