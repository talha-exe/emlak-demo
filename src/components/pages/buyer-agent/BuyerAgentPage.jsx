'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function BuyerAgentPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/buyer-agent-hero.png" 
            alt="Real estate consultation" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[840px]">
          <div className="eyebrow-line flex items-center gap-4 text-[11px] tracking-[.32em] uppercase text-gold font-medium mb-6 animate-fadeUp-d1">
            Buyer Agent
          </div>
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Expert <em className="italic text-gold">Buyer Agent</em> Services
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[640px]">
            Find Properties That Match Your Needs and Long-Term Goals
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Schedule a Consultation
            </a>
            <button onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-4 bg-transparent text-white text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-white/20 hover:border-gold hover:text-gold hover:-translate-y-0.5 group">
              Our Acquisition Strategy
            </button>
          </div>
        </div>
      </section>

      {/* ── THE BUYER'S CHALLENGE ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_1.5fr] gap-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
              <div>
                <SectionHeader 
                  eyebrow="The Buyer's Challenge" 
                  title={<>Lead the Market with <em className="italic text-gold">Right Property Value</em></>} 
                />
                <p className="text-[17px] text-mid font-light leading-[1.8] mt-8">
                  Bidding wars, complex co-op boards, fluctuating interest rates, and tight inventory require more than enthusiasm. They require a strategy.
                </p>
                <p className="text-[15px] text-mid font-light leading-[1.8] mt-4">
                  Without structured representation, buyers often:
                </p>
              </div>
              <div className="bg-white p-12 shadow-[0_32px_64px_rgba(0,0,0,.04)] border-t-2 border-gold/30">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-[640px]:grid-cols-1 mb-10">
                  {[
                    'Overpay due to emotional decision-making',
                    'Waive contingencies without understanding risk exposure',
                    'Misinterpret market pricing trends',
                    'Miss off-market or pre-market opportunities',
                    'Underestimate ownership and financing structures',
                    'Accept unfavorable contract terms'
                  ].map((pitfall, i) => (
                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-dark/[.04]">
                      <span className="text-gold font-serif text-lg leading-none mt-1">●</span>
                      <p className="text-[14px] text-mid font-light leading-snug">{pitfall}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-dark/[0.08] space-y-6">
                  <p className="font-serif text-[clamp(20px,2.2vw,28px)] italic text-dark leading-tight">
                    Buying a house without a real estate agent can be <em className="italic text-gold">costly.</em>
                  </p>
                  <p className="text-base text-mid font-light leading-relaxed">
                    Partner with our experts to make smart, confident decisions. We secure your capital, structure your offer intelligently, and make sure your purchase is in line with your long-term objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── ACQUISITION STRATEGY ── */}
      <div id="strategy">
        <RevealWrapper>
          <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7 overflow-hidden">
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-[1.2fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1">
                <div>
                  <SectionHeader 
                    eyebrow="Intelligence" 
                    title={<>Our Acquisition Strategy: <em className="italic text-gold">Data Before Emotion</em></>} 
                    light={true}
                  />
                  <p className="text-lg text-white/60 font-light leading-[1.8] mt-8 mb-12">
                    We believe in disciplined buying. Before you submit an offer, we <em className="italic text-gold">analyze:</em>
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-white/5 p-px border border-white/10">
                    {[
                      { l: 'Recent comparable sales', r: 'Pricing history' },
                      { l: 'Active market competition', r: 'Property-specific strengths and vulnerabilities' },
                      { l: 'Absorption rate', r: 'Seller motivation indicators' }
                    ].map((row, i) => (
                      <React.Fragment key={i}>
                        <div className="bg-dark p-8 text-[14px] text-white/50 font-light relative group hover:bg-white/[.02] transition-colors">
                          <span className="text-gold absolute left-4 top-8 opacity-40">●</span>
                          <span className="pl-4 block">{row.l}</span>
                        </div>
                        <div className="bg-dark p-8 text-[14px] text-white/50 font-light relative group hover:bg-white/[.02] transition-colors">
                          <span className="text-gold absolute left-4 top-8 opacity-40">●</span>
                          <span className="pl-4 block">{row.r}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-10 bg-gold/5 blur-3xl rounded-full" />
                  <div className="relative border border-white/10 p-12 bg-white/[0.02] backdrop-blur-sm">
                    <h2 className="font-serif text-[clamp(28px,3vw,42px)] text-white leading-[1.2] mb-8">Precision Negotiation That <em className="italic text-gold">Protects Your Equity</em></h2>
                    <p className="text-base text-white/40 font-light leading-[1.8] mb-10">
                      Negotiation is where real value is either gained or lost. Our real estate buyer agents <em className="italic text-gold">negotiate beyond price.</em> We strategically structure:
                    </p>
                    <ul className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12">
                      {['Inspection credits', 'Closing timelines', 'Contingencies', 'Repair negotiations', 'Furniture inclusions', 'Contract flexibility'].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-[13px] text-white/70 font-medium whitespace-nowrap">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-40" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-[15px] text-white/70 font-light italic leading-relaxed">
                        Every term in a contract affects your financial outcome. We ensure those terms <em className="italic text-gold">favor you.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>
      </div>

      {/* ── WHO WE REPRESENT ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <SectionHeader 
                eyebrow="Representation" 
                title={<>Who We <em className="italic text-gold">Represent</em></>} 
                className="flex flex-col items-center"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1 mb-20">
              {[
                { title: 'First-Time Buyers', desc: 'We give you organized guidance, financial learning, and clarity of contracts to ensure that you get into the market knowledgeable and assured.' },
                { title: 'Move-Up Buyers', desc: 'Upgrading requires coordination and timing. We strategically align your sales and purchases to reduce financial strain and risk exposure.' },
                { title: 'Relocating Buyers', desc: 'We give you local intelligence with the neighborhood analysis, commute analysis, and pricing data, enabling you to make local decisions.' },
                { title: 'Investor Buyers', desc: 'We examine high ROI rental potential, appreciation trend, cash flow analysis, and resale positioning. Residential real estate can be an extremely effective tool for wealth building.' }
              ].map((client, i) => (
                <div key={i} className="bg-white p-10 border-b-2 border-transparent hover:border-gold transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,.03)] group h-full">
                  <h3 className="font-serif text-xl font-normal text-dark mb-4 group-hover:text-gold transition-colors">{client.title}</h3>
                  <p className="text-[13px] text-mid font-light leading-[1.7]">{client.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="max-w-[900px] mx-auto text-center">
              <p className="text-lg text-mid font-light leading-relaxed mb-10">
                We align your purchase with your broader financial and lifestyle objectives.
              </p>
              <p className="font-serif text-[clamp(24px,2.8vw,36px)] font-light italic text-dark leading-tight mb-12">
                &ldquo;From pricing strategy to negotiation, we secure the best value while minimizing risk, giving you the advantage in every property opportunity. Let us turn your <em className="italic text-gold">buying journey into a strategic success.</em>&rdquo;
              </p>
              <a href="https://emlakrealty.com" className="inline-block py-[18px] px-12 border border-dark text-dark text-[11px] tracking-[.2em] uppercase font-bold hover:bg-dark hover:text-white transition-all">
                Schedule Your Private Consultation
              </a>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PROPERTY TYPES ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="text-gold text-[10px] tracking-[.35em] uppercase font-bold mb-4">Property Types</div>
              <h2 className="font-serif text-[clamp(28px,4vw,52px)] text-white leading-[1.2]">Residential Property Types <br/><em className="italic text-gold">We Assist With</em></h2>
            </div>
            
            <div className="grid grid-cols-3 gap-px bg-white/10 max-[900px]:grid-cols-1 border border-white/10">
              {[
                { title: 'Single-Family Homes', desc: 'Ownership of land, property tax, maintenance liability, and the possibility of appreciation over time are put into consideration before submission of offers.' },
                { title: 'Condominiums', desc: 'We review financial statements, reserve funds, HOA policies, and assessment risks to protect you from future liabilities.' },
                { title: 'Co-ops', desc: 'Board approval processes, debt-to-income requirements, and building financial health are critical. We guide you through package preparation and interview readiness.' },
                { title: 'Townhouses', desc: 'Zoning, property, renovation flexibility, and structural appraisals are discussed in detail.' },
                { title: 'Multi-Family Properties', desc: 'For buyers seeking income potential, we evaluate rental performance, occupancy rates, and operational considerations.' },
                { title: 'New Construction', desc: 'We negotiate developer contracts, review warranties, and monitor delivery timelines to protect your interests.' }
              ].map((type, i) => (
                <div key={i} className="bg-dark p-12 hover:bg-white/[0.03] transition-colors group">
                  <h3 className="font-serif text-xl text-white mb-5 group-hover:text-gold transition-colors">{type.title}</h3>
                  <p className="text-[14px] text-white/30 font-light leading-[1.8] group-hover:text-white/50 transition-colors">{type.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-[800px] mx-auto">
              <p className="text-base text-white/40 font-light leading-relaxed">
                Every property type requires expertise. We ensure no structural, financial, or contractual detail is overlooked. Connect with our expert <em className="italic text-gold">buyer agent today</em> and make your next home purchase simple and rewarding.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BUYING FRAMEWORK ── */}
      <RevealWrapper>
        <section className="bg-white text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_2fr] gap-24 max-[1100px]:grid-cols-1">
              <div>
                <div className="sticky top-[120px]">
                  <SectionHeader 
                    eyebrow="The Framework" 
                    title={<>A Structured Buying Process <em className="italic text-gold">From Start to Finish</em></>} 
                  />
                  <p className="text-[14px] tracking-[.1em] uppercase text-gold font-bold mt-8">Our Buying Framework</p>
                </div>
              </div>
              
              <div className="space-y-24">
                {/* STEP 1 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">1</div>
                    <div className="w-px flex-1 bg-gold/20 mt-4" />
                  </div>
                  <div className="pb-12 border-b border-dark/5 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Strategic Consultation & Goal Alignment</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-8">
                      Every purchase begins with clarity. We take the time to understand your financial profile, timeline, lifestyle needs, and long-term objectives. Whether your goal is primary residence, luxury homes, stability, resale upside, or investment performance, we align the strategy accordingly.
                    </p>
                    <div className="bg-cream/40 p-8 border-l-2 border-gold">
                      <p className="text-[13px] tracking-widest uppercase text-gold font-bold mb-6">We define:</p>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-10">
                        {['Budget parameters', 'Financing readiness', 'Neighborhood targets', 'Property preferences', 'Risk tolerance', 'Exit strategy considerations'].map((item, i) => (
                          <li key={i} className="text-[14px] text-mid font-medium flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[14px] text-mid italic mt-8 font-light tracking-wide">A clear foundation prevents costly missteps later.</p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">2</div>
                    <div className="w-px flex-1 bg-gold/20 mt-4" />
                  </div>
                  <div className="pb-12 border-b border-dark/5 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Financial Positioning & Pre-Approval</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-6">
                      Strong buyers win competitive deals. We make sure you are financially positioned prior to negotiating. This involves coordination of lenders, pre-approving verification, and assessment of purchasing power in relation to market conditions.
                    </p>
                    <p className="text-[14px] text-gold font-bold tracking-widest uppercase">In competitive markets, preparation is leverage.</p>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">3</div>
                    <div className="w-px flex-1 bg-gold/20 mt-4" />
                  </div>
                  <div className="pb-12 border-b border-dark/5 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Targeted Property Search & Market Evaluation</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-8">
                      We do not waste your time with unqualified <em className="italic text-gold font-medium">pocket listings.</em> Our search is strategic and curated.
                    </p>
                    <div className="bg-dark text-white p-8 mb-8">
                      <p className="text-[11px] tracking-[.3em] uppercase text-gold font-bold mb-6">We analyze:</p>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-10">
                        {['Market comparables', 'Pricing history', 'Time on market', 'Inventory trends', 'Building financial health (for co-ops/condos)', 'Luxury Rental or resale potential'].map((item, i) => (
                          <li key={i} className="text-[13px] text-white/60 font-light flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full opacity-40" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[14px] text-mid font-normal">Each property is evaluated as both a home and a financial asset.</p>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">4</div>
                    <div className="w-px flex-1 bg-gold/20 mt-4" />
                  </div>
                  <div className="pb-12 border-b border-dark/5 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Offer Structuring & Competitive Strategy</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-8">
                      Submitting an offer requires precision. We assess seller motivation, competing bids, and pricing benchmarks before advising on structure.
                    </p>
                    <div className="bg-cream/40 p-8 border-l-2 border-gold">
                      <p className="text-[13px] tracking-widest uppercase text-gold font-bold mb-6">We strategically determine:</p>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-10">
                        {['Offer price', 'Contingencies', 'Deposit structure', 'Inspection strategy', 'Timeline positioning'].map((item, i) => (
                          <li key={i} className="text-[14px] text-mid font-medium flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[14px] text-mid italic mt-8 font-light">The goal is simple: secure the property <em className="italic text-gold font-medium">without overexposing your capital.</em></p>
                  </div>
                </div>

                {/* STEP 5 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">5</div>
                    <div className="w-px flex-1 bg-gold/20 mt-4" />
                  </div>
                  <div className="pb-12 border-b border-dark/5 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Contract Execution & Due Diligence</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-8">
                      Once an offer is accepted, the real work begins. We coordinate closely with attorneys, inspectors, lenders, and managing agents to ensure a seamless contract process.
                    </p>
                    <div className="bg-dark text-white p-8 mb-8">
                      <p className="text-[11px] tracking-[.3em] uppercase text-gold font-bold mb-6">We monitor:</p>
                      <ul className="grid grid-cols-2 gap-y-4 gap-x-10">
                        {['Inspection results', 'Appraisal outcomes', 'Board package preparation (for co-ops)', 'Financial disclosures', 'Contingency deadlines'].map((item, i) => (
                          <li key={i} className="text-[13px] text-white/60 font-light flex items-center gap-3">
                            <span className="w-1 h-1 bg-gold rounded-full opacity-40" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-[14px] text-gold font-bold tracking-widest uppercase">Every document is reviewed. Every deadline is managed. Every detail matters.</p>
                  </div>
                </div>

                {/* STEP 6 */}
                <div className="flex gap-10 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-serif text-lg group-hover:bg-gold group-hover:text-dark transition-all duration-300">6</div>
                  </div>
                  <div className="pb-12 w-full">
                    <h3 className="font-serif text-2xl font-normal text-dark mb-5 transition-colors group-hover:text-gold">Closing Coordination & Final Execution</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8] mb-6">
                      When the closing is near at hand, we make sure that all the documentation, funding, and compliance needs are in place. We organize final inspections, ensure the performance of the contract, and ensure the presence of communication between all parties.
                    </p>
                    <p className="text-[14px] text-mid font-bold italic">Your acquisition deserves nothing less.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Start Your Journey"
        title='Approach your next purchase with <br/><em className="italic text-gold">clarity, confidence, and control.</em>'
        subtitle="Schedule your private consultation with Emlak Realty today and let us turn your buying journey into a strategic success."
        buttonText="Get Started Today"
      />
    </main>
  );
}
