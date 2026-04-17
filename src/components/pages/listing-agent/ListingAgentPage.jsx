'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function ListingAgentPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/listing-agent-hero.png" 
            alt="Real estate strategy and planning" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[840px]">
          <h1 className="font-serif text-[clamp(28px,4.5vw,60px)] font-light leading-[1.2] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2 max-w-[900px]">
            As An Expert Listing Agent, We Strategize Every Move To <em className="italic text-gold">List Smart, Sell Strong, And Win More!</em>
          </h1>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Schedule a Consultation
            </a>
            <button onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-4 bg-transparent text-white text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-white/20 hover:border-gold hover:text-gold hover:-translate-y-0.5 group">
              Our Listing Strategy
            </button>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <RevealWrapper>
        <section id="approach" className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_1.5fr] gap-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
              <div>
                <SectionHeader 
                  eyebrow="Intelligence" 
                  title={<>Our Approach is Positioning It <em className="italic text-gold">Right Before Promotion</em></>} 
                />
              </div>
              <div className="bg-white p-12 shadow-[0_32px_64px_rgba(0,0,0,.04)] border-t-2 border-gold/30">
                <div className="grid grid-cols-1 gap-y-6">
                  {[
                    'Recent comparable sales',
                    'Active competing inventory',
                    'Market absorption rates',
                    'Buyer demand trends',
                    'Seasonal timing factors',
                    'Building financial health (for condos and co-ops)',
                    'Unique property differentiators'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center pb-4 border-b border-dark/[.04] last:border-0 group">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full transition-transform group-hover:scale-125" />
                      <p className="text-[15px] text-mid font-light leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>



      {/* ── STRUCTURED SELLING PROCESS ── */}
      <RevealWrapper>
        <section className="bg-white text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_2fr] gap-24 max-[1100px]:grid-cols-1">
              <div>
                <div className="sticky top-[120px]">
                  <SectionHeader 
                    eyebrow="The Framework" 
                    title={<>Our Structured Selling Process <em className="italic text-gold">From Start to Finish</em></>} 
                  />
                </div>
              </div>
              
              <div className="space-y-16">
                {[
                  { 
                    step: '1', 
                    title: 'Strategic Consultation & Property Evaluation', 
                    content: 'We begin by understanding your goals, timeline, and financial objectives. Every property is assessed for its unique strengths, potential challenges, and market positioning opportunities to create a customized selling strategy.' 
                  },
                  { 
                    step: '2', 
                    title: 'Market Analysis & Pricing Strategy', 
                    content: 'Based on complete information and live buyer data, we set an optimal listing price to balance market competitiveness with equity protection. This ensures your property generates interest while maintaining negotiation leverage.' 
                  },
                  { 
                    step: '3', 
                    title: 'Pre-Launch Preparation', 
                    content: 'We recommend the staging, repairs, and presentation additions to accentuate the best aspects of your home. Reporting and records are handled to produce a market-ready listing that builds confidence among buyers.' 
                  },
                  { 
                    step: '4', 
                    title: 'Strategic Launch', 
                    content: 'Your property is introduced to the market with targeted exposure. Campaigns to professional photography, online tours, and outreach to brokers—we control the story to get qualified buyers fast. Through the nonprofit strategic nature of real estate, we emphasize ethical marketing and strategic planning for every property sale.' 
                  },
                  { 
                    step: '5', 
                    title: 'Offer Review & Negotiation', 
                    content: 'Every offer is evaluated outside of price, taking into account contingencies, the strength of the buyer, and time. We negotiate in a manner that will save you leverage and maximize ultimate value.' 
                  },
                  { 
                    step: '6', 
                    title: 'Contract Management & Due Diligence', 
                    content: 'We control inspections, appraisals, and compliance due dates, and every step is taken to comply with the legal and contractual requirements. Sellers are always kept updated and safe during the process.' 
                  },
                  { 
                    step: '7', 
                    title: 'Closing Coordination', 
                    content: 'From attorneys to lenders and managing agents, we handle all communication and coordination. We aim for a hassle-free, stress-free close-out, where the deal is concluded effectively and on your terms.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-12 group">
                    <div className="font-serif text-[48px] font-light text-gold/40 group-hover:text-gold transition-colors leading-none">0{item.step}</div>
                    <div className="pb-12 border-b border-dark/5 w-full">
                      <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">{item.title}</h3>
                      <p className="text-[15px] text-mid font-light leading-[1.8]">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── LISTING ADVANTAGE ── */}
      <CTASection
        eyebrow="Our Commitment"
        title={<>We do not chase transactions. <br/><em className="italic">We protect value.</em></>}
        subtitle=""
        buttonText="Schedule a private consultation"
      />
    </main>
  );
}
