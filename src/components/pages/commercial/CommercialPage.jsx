'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function CommercialPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
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
          <div className="eyebrow-line flex items-center gap-4 text-[10px] tracking-[.32em] uppercase text-gold font-medium mb-6 animate-fadeUp-d1">
            Commercial Services
          </div>
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
            
            <div className="grid grid-cols-5 gap-px bg-white/10 border border-white/10 max-[1300px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                { title: 'Office Buildings', desc: 'We consider occupancy, lease arrangements, and long-term appreciation values, whether it is a boutique office or a large corporate office.' },
                { title: 'Retail Properties', desc: 'We assess the foot traffic, tenant mix, and market demand to position retail investments to sustainable performance.' },
                { title: 'Industrial & Warehouse Facilities', desc: 'The success of industrial property mainly revolves around logistics efficiency, zoning compliance, and scalability of the operations. We evaluate both factors individually.' },
                { title: 'Multi-Family Investment Properties', desc: 'Income-producing residential portfolios require careful evaluation of rental yield, expenses, and long-term portfolio growth.' },
                { title: 'Mixed-Use Developments', desc: 'We offer strategic consulting on mixed-use buildings on sale and properties that have residential, commercial, and retail components with a focus on synergy and profitability.' }
              ].map((item, i) => (
                <div key={i} className="bg-dark p-10 hover:bg-white/[0.03] transition-colors h-full flex flex-col justify-between group">
                  <div>
                    <h3 className="font-serif text-[18px] text-gold mb-5 leading-tight">{item.title}</h3>
                    <p className="text-[13px] text-white/40 font-light leading-[1.7] group-hover:text-white/60 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── ACQUISITION ADVISORY ── */}
      <RevealWrapper>
        <section className="bg-cream py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1">
            <div>
              <SectionHeader 
                eyebrow="Asset Management" 
                title="Acquire Commercial Assets with Strategy and Confidence" 
              />
              <p className="text-[17px] text-mid font-light leading-[1.8] mt-8 mb-12">
                Successful commercial acquisitions are built on data, not speculation. Every opportunity is evaluated based on financial performance, risk exposure, and long-term growth potential.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  'In-depth market and location analysis',
                  'Income and cash-flow projections',
                  'Cap rate and ROI evaluation',
                  'Property performance assessment',
                  'Risk and opportunity modeling',
                  'Negotiation strategy and deal structuring'
                ].map((item, i) => (
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
          
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-12 max-[768px]:grid-cols-1 mb-20">
            <div className="bg-white/[.03] p-12 border border-white/[.08]">
               <h3 className="text-gold text-[10px] tracking-[.3em] uppercase font-bold mb-8">Our strategy includes:</h3>
               <div className="space-y-4">
                 {[
                   'Comprehensive asset valuation',
                   'Comparable commercial market analysis',
                   'Investor-focused marketing campaigns',
                   'Targeted buyer outreach',
                   'Confidential negotiations',
                   'Structured transaction management'
                 ].map((item, i) => (
                   <p key={i} className="text-[15px] text-white/70 font-light flex gap-4">
                     <span className="text-gold font-serif">0{i+1}</span> {item}
                   </p>
                 ))}
               </div>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <p className="text-[15px] text-white/60 font-light leading-[1.8]">
                We maximize your asset value while protecting your financial interests throughout the transaction. Our licensed real estate broker helps you navigate complex commercial transactions with precision and confidence.
              </p>
              <p className="font-serif text-[clamp(20px,2.4vw,28px)] italic text-white leading-tight mb-8">
                &ldquo;From retail storefronts to industrial facilities and modern office spaces, we help businesses find <em className="italic text-gold text-[inherit]">properties that support growth, visibility, and long-term operational success.</em>&rdquo;
              </p>
              <div className="pt-4">
                <a href="https://emlakrealty.com" className="inline-block py-[19px] px-12 bg-gold text-dark text-[11px] tracking-[.25em] uppercase font-bold hover:shadow-[0_8px_32px_rgba(192,154,94,.3)] transition-all">
                  Schedule Your Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHY CHOOSE US ── */}
      <RevealWrapper>
        <section className="bg-white text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Differentiators" 
              title="Why Businesses & Investors Choose Emlak Realty" 
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 gap-px bg-dark/5 border border-dark/5">
              {[
                { title: 'Strategic Market Intelligence', desc: 'We leverage real-time data and advanced analytics to guide acquisition and disposition decisions.' },
                { title: 'Performance-Driven Negotiation', desc: 'We negotiate aggressively to secure favorable financial and contractual outcomes.' },
                { title: 'Investor-Focused Advisory', desc: 'Every recommendation is aligned with high ROI, portfolio growth, and long-term strategy.' },
                { title: 'Transparent Communication', desc: 'Clients receive clear, consistent updates throughout every phase of the transaction.' },
                { title: 'Seamless Transaction Execution', desc: 'We coordinate due diligence, documentation, and closing to minimize friction and delays.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 hover:bg-cream transition-colors flex gap-12 max-[768px]:flex-col max-[768px]:gap-6 group">
                  <div className="font-serif text-[42px] leading-none text-gold/10 group-hover:text-gold transition-colors">0{i+1}</div>
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-dark mb-4">{item.title}</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="READY TO MOVE FORWARD?"
        title="Let&rsquo;s Position Your Next Commercial Move for Success"
        subtitle="If you&rsquo;re ready to move forward with clarity, confidence, and a defined strategy, now is the time to act. <br/><br/><strong class='text-white font-medium'>Schedule your private commercial consultation today and position your next move for measurable success.</strong>"
        buttonText="Schedule Your Consultation"
      />
    </main>
  );
}
