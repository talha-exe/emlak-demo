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
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            List <em className="italic text-gold">Smart.</em> Sell <em className="italic text-gold">Strong</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[640px]">
            Precision Listing Agent Strategy for Maximum Return
          </p>
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
                  title="Our Approach"
                  subtitle="Positioning Before Promotion"
                />
                <p className="text-[17px] text-mid font-light leading-[1.8] mt-8">
                  Before a property is launched, we conduct a comprehensive evaluation using data-backed market analysis and real-time buyer behavior insight.
                </p>
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

      {/* ── NEGOTIATION CONTROL ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7 overflow-hidden">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1.2fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1">
              <div>
                <SectionHeader 
                  eyebrow="Strategy" 
                  title="Negotiation Control from Offer to Closing" 
                  light={true}
                />
                <p className="text-lg text-white/50 font-light leading-[1.8] mt-8 mb-12">
                  Not all offers are created equal. While price is important, other factors can significantly affect your final net proceeds and timeline. We evaluate each offer in detail, considering:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Buyer's financial strength", val: '01' },
                    { label: "Down payment structure", val: '02' },
                    { label: "Contingencies", val: '03' },
                    { label: "Appraisal exposure", val: '04' },
                    { label: "Closing flexibility", val: '05' },
                    { label: "Risk factors", val: '06' }
                  ].map((factor, i) => (
                    <div key={i} className="bg-white/[.03] p-8 border border-white/[.08] hover:bg-white/[.06] transition-colors">
                      <span className="text-gold font-serif text-[10px] tracking-widest block mb-4">{factor.val}</span>
                      <p className="text-white/70 font-medium text-sm">{factor.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-10 bg-gold/5 blur-3xl rounded-full" />
                <div className="relative p-12 bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <p className="text-[15px] text-white/60 font-light leading-[1.8] mb-10">
                    For an expert real listing service, we collaborate with the best buyer&rsquo;s agent networks to attract qualified purchasers ready to make competitive offers.
                  </p>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-[11px] tracking-[.25em] uppercase text-gold font-bold">Maximize Net Proceeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHO WE SERVE ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <SectionHeader 
                eyebrow="Representation" 
                title="Who We Serve" 
                subtitle="Listing Services Design For Every Seller"
                className="flex flex-col items-center"
              />
            </div>
            
            <div className="grid grid-cols-5 gap-6 max-[1300px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 mb-20">
              {[
                { title: 'Primary Residence Sellers', desc: 'Homeowners seeking maximum return while transitioning to their next property.' },
                { title: 'Relocating Sellers', desc: 'Owners facing timeline pressure who require structured coordination.' },
                { title: 'Estate & Inherited Property Sellers', desc: 'Families need clarity, efficiency, and market precision.' },
                { title: 'Investment Property Owners', desc: 'Landlords liquidating assets or repositioning capital.' },
                { title: 'Multi-Family & Income Property Sellers', desc: 'Owners seeking strategic exit execution with investor-focused marketing.' }
              ].map((client, i) => (
                <div key={i} className="bg-white p-10 border-b-2 border-transparent hover:border-gold transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,.03)] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[18px] font-normal text-dark mb-4 leading-tight">{client.title}</h3>
                    <p className="text-[13px] text-mid font-light leading-[1.7]">{client.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-[900px] mx-auto text-center bg-dark p-16 shadow-[0_48px_96px_rgba(0,0,0,.12)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] group-hover:bg-gold/10 transition-colors" />
              <p className="text-white/60 text-lg font-light leading-relaxed mb-10 relative z-10">
                Position your property for success with Emlak Realty&rsquo;s high-performance listing strategy. From data-backed pricing and luxury-grade marketing to strategic buyer engagement, we orchestrate every step to create momentum, attract serious buyers, and achieve top-tier outcomes.
              </p>
              <a href="https://emlakrealty.com" className="inline-block py-[19px] px-12 bg-gold text-dark text-[11px] tracking-[.25em] uppercase font-bold relative z-10 hover:shadow-[0_8px_32px_rgba(192,154,94,.3)] transition-all">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PROPERTIES WE LIST ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="text-gold text-[10px] tracking-[.35em] uppercase font-bold mb-4">Portfolios</div>
              <h2 className="font-serif text-[clamp(28px,4vw,52px)] text-white leading-[1.2]">Properties We <em className="italic text-gold">List</em></h2>
            </div>
            
            <div className="grid grid-cols-3 gap-px bg-white/10 max-[900px]:grid-cols-1 border border-white/10 scale-[1.001]">
              {[
                { title: 'Single-Family Homes', desc: 'We highlight land value, upgrades, neighborhood positioning, and long-term appreciation potential.' },
                { title: 'Condominiums', desc: 'We analyze building reserves, HOA strength, and competitive inventory to strengthen buyer confidence for luxury condos for sale.' },
                { title: 'Co-ops', desc: 'We guide sellers through board requirements, financial disclosures, and buyer qualification screening.' },
                { title: 'Townhouses', desc: 'We emphasize zoning flexibility, renovation potential, and asset-level appreciation factors.' },
                { title: 'Multi-Family Properties', desc: 'We market income performance, rent roll stability, and long-term investment upside.' },
                { title: 'New Construction', desc: 'We coordinate developer timelines, buyer outreach, and premium positioning strategies.' }
              ].map((type, i) => (
                <div key={i} className="bg-dark p-12 hover:bg-white/[0.03] transition-colors group">
                  <h3 className="font-serif text-[20px] text-white mb-5 transition-colors group-hover:text-gold">{type.title}</h3>
                  <p className="text-[14px] text-white/30 font-light leading-[1.8] group-hover:text-white/50 transition-colors">{type.desc}</p>
                </div>
              ))}
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
                    <div className="font-serif text-[48px] font-light text-gold/10 group-hover:text-gold/40 transition-colors leading-none">0{item.step}</div>
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
      <RevealWrapper>
        <section className="bg-cream py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-24 items-center max-[900px]:grid-cols-1">
            <div className="relative h-[500px] bg-dark group overflow-hidden">
              <Image 
                src="/images/listing-agent-hero.png" 
                alt="Strategy focused" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            <div>
              <SectionHeader 
                eyebrow="Advantage" 
                title={<>The Emlak Realty&rsquo;s <em className="italic text-gold">Listing Advantage</em></>} 
                subtitle="Strategy, Expertise, Results"
              />
              <div className="mt-12 space-y-10">
                <div>
                  <h3 className="text-xs tracking-[.2em] uppercase text-gold font-bold mb-4">Our Commitment</h3>
                  <p className="font-serif text-[28px] italic text-dark leading-tight">
                    &ldquo;We do not chase transactions. <br/><em className="italic text-gold">We protect value.</em>&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Listing Services"
        title='Because Selling Should Never <em className="italic text-gold">Feel Uncertain;</em> It Should <em className="italic text-gold">Feel Strategic.</em>'
        subtitle=""
        buttonText="Schedule a private consultation"
      />
    </main>
  );
}
