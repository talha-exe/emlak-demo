'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function CommercialLeasePropertyPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/commercial-hero.png" 
            alt="Commercial lease property strategy" 
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
            Strategic Leasing. Stabilized Income. Protected Asset Value.
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
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
            <div>
              <SectionHeader 
                eyebrow="Strategy" 
                title="Leasing Is an Asset Strategy—Not Just Occupancy" 
              />
              <p className="text-[17px] text-mid font-light leading-[1.8] mt-10">
                A good lease enhances valuation multiples and facilitates refinancing and cash flow stabilization. An ill-constructed lease restricts flexibility and asset appeal.
              </p>
              <p className="text-[17px] text-mid font-light leading-[1.8] mt-6">
                At <strong className="text-dark font-medium">Emlak Realty</strong>, we consider leasing an asset choice and not an administrative activity. We examine the financial makeup of your property, its positioning in the market, mix of tenants, and long-term aspirations and advise on the leasing strategy. We help evaluate every commercial property for lease based on accessibility, market demand, and operational needs.
              </p>
            </div>
            <div className="bg-white p-12 border border-gold/[.15] shadow-[0_24px_48px_rgba(0,0,0,.04)]">
              <p className="font-serif text-[clamp(20px,2.4vw,30px)] font-light italic text-dark leading-[1.4]">
                Position Your Business in the <em className="not-italic text-gold">Right Space</em> — Work With Emlak Realty to Secure Your Ideal <em className="not-italic text-gold">Commercial Lease Property.</em>
              </p>
            </div>
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
            
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  step: '01',
                  title: 'Asset Evaluation & Market Positioning',
                  desc: 'Every engagement begins with a comprehensive asset review. This analysis allows us to determine how your property should be positioned within the competitive landscape. Pricing strategy, tenant targeting, and incentive structuring are all developed with market intelligence at the forefront.'
                },
                {
                  step: '02',
                  title: 'Competitive Market Intelligence',
                  desc: 'Markets evolve, and rental rates fluctuate. The incentive structures vary according to the pressure on vacancies and the demand for tenants. This intelligence enables us to suggest competitive but asset value-preserving pricing. We do not do unjustified discounting, but rather we are realistically aligned with the market.'
                },
                {
                  step: '03',
                  title: 'Targeted Tenant Acquisition Strategy',
                  desc: 'Exposure is not sufficient to attract high-quality tenants. Strategic outreach does. We find tenants that fit the business model of your property. The tenants of offices need accessibility and efficiency. Logistical feasibility is needed by industrial users.'
                },
                {
                  step: '04',
                  title: 'Tenant Qualification & Risk Mitigation',
                  desc: 'A lease is only as strong as the tenant behind it. The quality of tenants has a direct influence on income reliability and property value. Our rigorous screening minimizes exposure to default and risk in the long term.'
                },
                {
                  step: '05',
                  title: 'Negotiation & Lease Structuring',
                  desc: 'This is where true value is created. Commercial leases are complicated financial instruments. Every provision has an impact on the stability of income, the distribution of expenses, and flexibility. The structuring of the strategic lease may lead to the growth of the NOI, enhancement of the property value, and investor attraction. Our negotiation strategy is decisive, strict, and outcome-focused.'
                },
                {
                  step: '06',
                  title: 'Lease Execution & Occupancy Coordination',
                  desc: 'When agreement has been made on terms, execution is paramount. We handle records, follow schedules, and make sure that compliance requirements are not violated. The seamless execution of the lease preserves the reputation and hastens the stabilization of earnings.'
                }
              ].map((item, i) => (
                <div key={i} className="group grid grid-cols-[100px_1fr] gap-12 max-[640px]:grid-cols-1 max-[640px]:gap-6 pb-12 border-b border-white/10 last:border-0 hover:border-gold/30 transition-colors">
                  <div className="font-serif text-[48px] text-gold/20 leading-none group-hover:text-gold transition-colors">{item.step}</div>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white mb-6 group-hover:text-gold-light transition-colors">{item.title}</h3>
                    <p className="text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── TYPES OF COMMERCIAL LEASE PROPERTIES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Asset Types" 
              title="Types of Commercial Lease Properties We Represent" 
              className="text-center flex flex-col items-center mb-16"
            />
            
            <div className="grid grid-cols-3 gap-px bg-dark/5 border border-dark/5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                { title: 'Retail Spaces', desc: 'The visibility, foot traffic, co-tenancy synergy, and demographic alignment are the factors that fuel retail leasing. We locate the retail assets in such a way that they enable us to lure stable operators whose business models complement the neighboring tenants and increase their occupancy power in the long-run.' },
                { title: 'Office Buildings', desc: 'Office leasing requires strategic positioning in terms of access, infrastructure, flexibility of layout, and matching the tenant profile. We examine the market demand, new trends in work, and inventory competition to calculate prices in accordance with the current situation in the market.' },
                { title: 'Medical & Professional Offices', desc: 'Medical and professional office tenants are usually long-term and stable. Our target customers are qualified healthcare providers and specialists, as well as professional service firms whose operations will need a specialized build-out and extended lease terms.' },
                { title: 'Mixed-Use Properties', desc: 'Mixed-use properties require a moderated approach for leasing the property that takes into account the commercial and residential synergy. We selectively screen commercial tenants who will add value to the property as well as the residential atmosphere in the area.' },
                { title: 'Industrial & Flex Spaces', desc: 'The industrial and flex properties need a practical assessment of logistics, loading capacities, accessibility, ceiling height, and working circulation. We place these assets in order to appeal to distribution, light manufacturing, and operational tenants that have scalable business models.' },
                { title: 'Multi-Tenant Commercial Buildings', desc: 'For multi-tenant commercial assets, it is essential to have a tenant mix strategy. We compare diversification, exposure to industries, lease expiry dates, and revenue concentration risk to ensure that occupancy remains steady in the property.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 hover:bg-gold/5 transition-colors h-full group">
                  <h3 className="font-serif text-[18px] text-dark mb-5 leading-tight group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-[13px] text-mid font-light leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center max-w-[840px] mx-auto border-t border-gold/20 pt-16">
              <p className="font-serif text-[clamp(20px,2.2vw,24px)] font-light italic text-dark leading-[1.6]">
                Our goal is to ensure your leasing decision strengthens your business for years to come. We help clients evaluate properties, compare market opportunities, and negotiate lease agreements that deliver both <em className="not-italic text-gold">immediate value</em> and <em className="not-italic text-gold">long-term flexibility.</em>
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PERFORMANCE-DRIVEN SOLUTIONS ── */}
      <RevealWrapper>
        <section className="bg-dark-2 text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto text-center mb-20">
            <SectionHeader 
              eyebrow="Solutions" 
              title="Performance-Driven Commercial Leasing Solutions" 
              light={true}
              className="flex flex-col items-center"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {[
              'Data-Driven Pricing Strategy',
              'Firm Negotiation Leverage',
              'Investor-Level Financial Analysis',
              'Tenant Risk Mitigation',
              'Structured Lease Oversight',
              'Strategic Asset Positioning'
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white/[.02] border border-white/[.08] hover:border-gold/30 transition-all group">
                <div className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold font-serif text-lg shrink-0 group-hover:bg-gold/10 transition-colors">{String(i+1).padStart(2, '0')}</div>
                <p className="font-serif text-lg text-white group-hover:text-gold-light transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Consultation"
        title="Ready to Strengthen Your Commercial Asset?"
        subtitle="Schedule a confidential commercial leasing consultation with Emlak Realty today."
        buttonText="Connect Now"
      />
    </main>
  );
}
