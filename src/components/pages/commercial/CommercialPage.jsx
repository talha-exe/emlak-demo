'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

const propertyCategories = [
  {
    title: 'Office Buildings',
    items: [
      'Corporate Office Buildings',
      'Class A Office Towers',
      'Co-Working Office Spaces',
      'Business Park Offices',
    ],
  },
  {
    title: 'Retail Properties',
    items: [
      'Shopping Centers / Malls',
      'Strip Centers',
      'Standalone Retail Buildings',
      'Restaurant & Food Service Spaces',
    ],
  },
  {
    title: 'Industrial & Warehouse Facilities',
    items: [
      'Shopping Centers / Malls',
      'Strip Centers',
      'Standalone Retail Buildings',
      'Restaurant & Food Service Spaces',
    ],
  },
  {
    title: 'Multi-Family Investment Properties',
    items: [
      'Duplex / Triplex Properties',
      'Apartment Complexes',
      'High-Rise Residential Buildings',
      'Garden-Style Apartments',
    ],
  },
  {
    title: 'Mixed-Use Developments Properties',
    items: [
      'Residential & Retail Mixed-Use',
      'Office & Retail Mixed-Use',
      'Live-Work Developments',
      'Urban Mixed-Use Complexes',
    ],
  },
  {
    title: 'Land Development',
    items: [
      'Residential Development Land',
      'Commercial Development Land',
      'Industrial Development Land',
      'Mixed-Use Development Land',
    ],
  },
];

const acquisitionItems = [
  'In-depth market and location analysis',
  'Income and cash-flow projections',
  'Cap rate and ROI evaluation',
  'Property performance assessment',
  'Risk exposure',
  'Negotiation strategy and deal structuring',
];

const salesItems = [
  'Comprehensive asset valuation',
  'Comparable commercial market analysis',
  'Investor-focused marketing campaigns',
  'Targeted buyer outreach',
  'Confidential negotiations',
  'Structured transaction management',
];

export default function CommercialPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commercial-hero.png"
            alt="High-value commercial real estate"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Commercial <em className="italic text-gold">Services</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Expert Representation For High-Value Commercial Property Opportunities
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto text-center">
            <SectionHeader
              eyebrow="Intelligence"
              title="Our Capabilities That Deliver Real Value"
              className="flex flex-col items-center"
            />
            <p className="text-[20px] text-mid font-light leading-[1.8] mt-10 max-w-[900px] mx-auto">
              Partner with experts who combine market intelligence, strategic negotiation, and targeted property marketing to help you acquire, lease, or invest in high-value commercial properties with confidence.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PROPERTIES WE REPRESENT ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader
              eyebrow="Portfolio"
              title="High-Value Commercial Properties We Represent"
              light={true}
              className="mb-16"
            />
            <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
              {propertyCategories.map((cat, i) => (
                <div key={i} className="bg-dark p-10 hover:bg-white/[0.03] transition-colors flex flex-col gap-6 group">
                  <h3 className="font-serif text-[18px] text-gold leading-tight">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-[7px] w-1 h-1 bg-gold/50 rounded-full shrink-0" />
                        <span className="text-[13px] text-white/50 font-light leading-[1.6] group-hover:text-white/70 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BUY / ACQUISITION ADVISORY ── */}
      <RevealWrapper>
        <section className="bg-cream py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1">
            <div>
              <SectionHeader
                eyebrow="Asset Management"
                title="Buy Commercial Assets with Strategy and Confidence"
              />
              <p className="text-[17px] text-mid font-light leading-[1.8] mt-8 mb-4">
                Successful commercial acquisitions are built on data, not speculation.
              </p>
              <p className="text-[13px] text-mid/70 tracking-[.12em] uppercase font-medium mb-8">Our acquisition advisory includes:</p>
              <div className="grid grid-cols-1 gap-6">
                {acquisitionItems.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center pb-4 border-b border-dark/5 group">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <p className="text-[15px] text-mid font-light">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-[15px] text-dark font-medium italic mt-12 pt-8 border-t border-dark/5">
                We ensure you move forward with clarity, confidence, and a disciplined investment framework.
              </p>
            </div>
            <div className="relative h-[600px] bg-dark overflow-hidden group max-[1100px]:h-[400px]">
              <Image src="/images/commercial-hero.png" alt="Strategic investment" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── SALES STRATEGY ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto text-center mb-16">
            <SectionHeader
              eyebrow="Optimization"
              title="Position Commercial Assets for Maximum Value"
              light={true}
              className="flex flex-col items-center"
            />
            <p className="text-[18px] text-white/50 font-light leading-[1.8] mt-8 max-w-[840px] mx-auto">
              Selling commercial property requires more than listing exposure. It requires strategic placement, targeted investor outreach, and accurate valuation.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto mb-16">
            <p className="text-[11px] text-gold tracking-[.3em] uppercase font-bold mb-8 text-center">Our commercial sales strategy includes:</p>
            <div className="grid grid-cols-1 gap-4">
              {salesItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/[.06]">
                  <span className="font-serif text-gold/40 text-[13px]">0{i + 1}</span>
                  <p className="text-[15px] text-white/70 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection
        eyebrow="Commercial Services"
        title="From retail storefronts to industrial facilities and modern office spaces, we help businesses find properties that support growth, visibility, and long-term operational success."
        subtitle=""
        buttonText="Schedule Your Consultation"
      />
    </main>
  );
}
