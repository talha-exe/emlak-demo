'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function TenantRepresentationPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
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
          <div className="eyebrow-line flex items-center gap-4 text-[10px] tracking-[.32em] uppercase text-gold font-medium mb-6 animate-fadeUp-d1">
            Commercial Expertise
          </div>
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
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr] gap-24 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
            <div>
              <SectionHeader 
                eyebrow="Advocacy" 
                title="Expert Tenant Representation with Strategy and Leverage" 
              />
              <p className="text-[20px] text-mid font-light leading-[1.8] mt-10">
                At a <strong className="text-dark font-medium">full-service real estate brokerage</strong>, we represent tenants exclusively with strategy. We align our loyalty, strategy, and negotiation power entirely with your business objectives, not the landlord&apos;s.
              </p>
              <div className="mt-12 space-y-6">
                <p className="text-[17px] text-dark font-medium mb-8">We don&apos;t simply show available spaces. We:</p>
                {[
                  'Conduct market availability analysis',
                  'Benchmark lease rates against comparable properties',
                  'Model long-term occupancy costs',
                  'Identify hidden risks in lease language',
                  'Structure negotiations to secure measurable value'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center pb-4 border-b border-dark/5 group">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <p className="text-[15px] text-mid font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 border border-gold/[.15] shadow-[0_24px_48px_rgba(0,0,0,.04)]">
              <p className="text-[18px] text-dark font-light leading-[1.8] italic mb-8">
                &ldquo;Work with Emlak Realty and gain a strategic advisor who understands both the real estate market and the financial impact of lease decisions.&rdquo;
              </p>
              <div className="w-12 h-px bg-gold/40 mb-8" />
              <p className="font-serif text-2xl text-dark mb-10 leading-tight">Tenant Representation That Positions You for Stronger Lease Terms and Smarter Space Decisions</p>
              <Link href="https://emlakrealty.com" className="inline-flex items-center gap-3 text-gold text-[11px] tracking-[.15em] uppercase font-bold group">
                Contact Our Expert
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
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
            
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  step: '01',
                  title: 'Business & Space Needs Assessment',
                  desc: 'We begin by understanding your operational model, growth forecasts, employee headcount, budget parameters, and space requirements. This makes sure that your real estate is not a mismatch to business strategy but rather on its temporary availability.'
                },
                {
                  step: '02',
                  title: 'Market Intelligence & Property Identification',
                  desc: 'A thorough market scan find properties that perfectly fit your requirements. This involves competitive benchmarking, location analysis, and performance evaluation in the submarket. We evaluate the trend in rental rates, the vacancy rate, the intensity of demand, the Incentive programs and the strength of the submarket as a whole ensure that each alternative is strategically viable.'
                },
                {
                  step: '03',
                  title: 'Financial Modeling & Lease Comparison',
                  desc: 'We broke every property into a true cost-of-occupancy analysis so you understand the full financial commitment. We evaluate base rent, escalation structures, CAM charges, operating expenses, build-out costs, free rent periods, concessions, and long-term projections. Our approach ensures you see the complete financial picture, not just the advertised rate.'
                },
                {
                  step: '04',
                  title: 'Negotiation & Lease Structuring',
                  desc: 'This is the place of quantifiable value generation. Our negotiation skills are aggressive to ensure lower rental rates, tenant improvement allowances, free rent, renewal flexibility, expansion rights, and exit protective clauses. The development of a strategic retail space for lease structure can create significant savings and operational flexibility throughout the duration of the agreement.'
                },
                {
                  step: '05',
                  title: 'Lease Execution & Transition Support',
                  desc: 'Once terms are finalized, we coordinate with legal counsel, manage timelines, and oversee documentation to ensure seamless execution. We facilitate a managed and uninterrupted occupancy process without any undue interference between lease signing and transition planning.'
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

      {/* ── SPACES WE SECURE ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Asset Types" 
              title="Commercial Spaces We Secure for Tenants" 
              className="text-center flex flex-col items-center mb-16"
            />
            
            <div className="grid grid-cols-5 gap-px bg-dark/5 border border-dark/5 max-[1300px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                { title: 'Office Space', desc: 'Examine location dynamics, class A office spaces, accessibility of employees, amenities in a building, ability to lease, and occupancy costs in the long term.' },
                { title: 'Retail Locations', desc: 'Strategically acquiring retail space to generate revenue and maintain financial viability.' },
                { title: 'Medical & Healthcare Suites', desc: 'Assist medical workers in finding the best strategic location of property that facilitates patient travel, parking, and long-term practice development.' },
                { title: 'Industrial & Warehouse Facilities', desc: 'Assess loading dock configurations, ceiling heights, column spacing, truck access, yard space, zoning compliance, and proximity to major transportation corridors.' },
                { title: 'Mixed-Use Commercial Space', desc: 'Evaluate shared-use considerations, access rights, parking allocations, and operational restrictions to ensure your business functions without limitations.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 hover:bg-gold/5 transition-colors h-full group">
                  <h3 className="font-serif text-[18px] text-dark mb-5 leading-tight group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-[13px] text-mid font-light leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center max-w-[840px] mx-auto border-t border-gold/20 pt-16">
              <p className="font-serif text-[clamp(20px,2.2vw,24px)] font-light italic text-dark leading-[1.6]">
                &ldquo;We help businesses secure the space they need to succeed. With a focus on strategy and client advocacy, we ensure each leasing decision contributes to a stronger future for your business.&rdquo;
              </p>
              <div className="mt-10">
                <a href="https://emlakrealty.com" className="inline-block py-[19px] px-12 bg-dark text-white text-[11px] tracking-[.25em] uppercase font-bold hover:bg-gold transition-colors">
                  Let&apos;s Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINANCIAL ADVANTAGE ── */}
      <RevealWrapper>
        <section className="bg-dark-2 text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto text-center mb-20">
            <SectionHeader 
              eyebrow="ROI" 
              title="How We Create Financial Advantage for Tenants" 
              light={true}
              className="flex flex-col items-center"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1">
            {[
              {
                title: 'Market-Based Rent Benchmarking',
                desc: 'We review live market information, similar properties, and occupancy rates to make sure that you do not overpay and negotiate from a position of strength.'
              },
              {
                title: 'Strategic Lease Structuring',
                desc: 'Beyond base rent, we consider escalations, CAM charges, tax allocations, and operating costs so that we can bring out hidden costs and maximize total occupancy expenses.'
              },
              {
                title: 'Negotiating Value-Driven Concessions',
                desc: 'We obtain relevant incentives like tenant improvement allowances, rent abatements, expansion rights, and reasonable renewal terms.'
              },
              {
                title: 'Risk Reduction',
                desc: 'To reduce the costs of financial exposure, we negotiate with great care such key provisions as guarantees, assignment rights, and default provisions.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 p-10 bg-white/[.02] border border-white/[.08] hover:border-gold/30 transition-all group">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold font-serif text-xl shrink-0 group-hover:bg-gold/10 transition-colors">{i+1}</div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-4">{item.title}</h3>
                  <p className="text-[15px] text-white/40 font-light leading-[1.8] group-hover:text-white/60 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-[800px] mx-auto">
            <p className="text-[15px] text-white/40 font-light leading-[1.8]">
              Recognized among the <strong className="text-gold font-medium">best buyer&apos;s agents</strong>, our team provides comprehensive tenant advisory services tailored to modern business needs.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHY Businesses CHOOSE US ── */}
      <RevealWrapper>
        <section className="bg-white text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1fr_400px] gap-24 max-[1100px]:grid-cols-1 mb-20">
            <div>
              <SectionHeader 
                eyebrow="Advantage" 
                title="Why Businesses Choose Emlak Realty" 
                className="mb-10"
              />
              <p className="text-[18px] text-mid font-light leading-[1.9] mb-12">
                Commercial tenants require more than transactional brokerage services. Businesses choose <strong className="text-dark font-medium">Emlak Realty</strong> because we combine market intelligence with disciplined execution to protect capital and strengthen long-term positioning.
              </p>
              <div className="space-y-6">
                <p className="text-[15px] text-dark font-medium uppercase tracking-wider mb-6">We provide:</p>
                {[
                  { label: 'Market Intelligence', text: 'Real-time data and analytical insight guide every recommendation.' },
                  { label: 'Negotiation Expertise', text: 'We advocate aggressively while maintaining professional leverage.' },
                  { label: 'Business-First Advisory', text: 'Every lease strategy is aligned with your operational goals.' },
                  { label: 'Transparent Communication', text: 'Clear updates, structured reporting, and full visibility throughout the process.' },
                  { label: 'Full-Cycle Execution', text: 'From site search to lease signing, we manage the process with discipline.' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-[15px] text-dark font-medium mb-1">{item.label}</p>
                    <p className="text-[15px] text-mid font-light leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[500px] overflow-hidden group">
              <Image src="/images/about-hero.png" alt="Strategic business decisions" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-dark/20" />
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="STRATEGY CONSULTATION"
        title="Let&rsquo;s Secure the Right Space for your <em className='italic text-gold'>Business</em>"
        subtitle="If you are planning a relocation, expansion, renewal, or new office lease, now is the time to position your business for long-term success."
        buttonText="Start Your Tenant Strategy Consultation Today"
      />
    </main>
  );
}
