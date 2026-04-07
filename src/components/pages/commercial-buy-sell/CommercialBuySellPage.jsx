'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function CommercialBuySellPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/commercial-hero.png" 
            alt="Commercial buy and sell strategy" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Commercial Buy <em className="italic text-gold">&amp; Sell</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Buy with Strategy, Scale with Discipline.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Let&apos;s Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ── EXECUTE COMMERCIAL TRANSACTIONS ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Overview" 
              title="Execute Commercial Transactions with Accuracy and Leverage" 
            />
            <div className="mt-10 space-y-6">
              <p className="text-[17px] text-mid font-light leading-[1.8]">
                <strong className="text-dark font-medium">Emlak Realty&apos;s</strong> approach to commercial buy and sell deals is undertaken analytically in a structured investor-driven manner. We evaluate the deals, structure them, and perform them to perfection.
              </p>
              <p className="text-[17px] text-mid font-light leading-[1.8]">
                From retail and office property, mixed-use and industrial property, and so on, we lead investors, owner-operators, and developers through acquisitions and dispositions aimed at enhancing financial performance.
              </p>
              <p className="font-serif text-[clamp(20px,2.4vw,30px)] font-light italic text-dark leading-[1.4] mt-4">
                Make every commercial property decision count. Our specialists combine research, pricing analysis, and strategic negotiation to help you <em className="not-italic text-gold">buy the right property</em> and <em className="not-italic text-gold">sell with a high return.</em>
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── ACQUISITION SERVICES ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Acquisitions" 
              title="Our Commercial Property Acquisition Services" 
              light={true}
              className="mb-10"
            />
            <div className="space-y-6 mb-20">
              <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                As a top-rated real estate broker, our commercial property acquisition services are built around the right property on the right terms and with quantifiable upside potential.
              </p>
              <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                From investors interested in luxury condos for sale to buyers interested in co-ops for sale, we provide professional support throughout the process. We represent investors, developers, and owner-users who need rigorous analysis, formal negotiation, and execution based on performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  step: '01',
                  title: 'Strategic Opportunity Identification',
                  desc: 'Powerful acquisitions will start way before an offer is written. We are vigilant of market trends, off-market opportunities, and emerging commercial corridors so that we can find assets with a competitive edge.'
                },
                {
                  step: '02',
                  title: 'Financial & Performance Analysis',
                  desc: 'Commercial assets must perform. Every purchase is evaluated through a financial lens to ensure alignment with your investment goals. This ensures every decision is supported by data, not assumptions.'
                },
                {
                  step: '03',
                  title: 'Negotiation & Deal Structuring',
                  desc: 'Profitability in commercial real estate is characterized by negotiation. Our offerings are designed in a strategic way to safeguard the capital, to maximize pricing, and to negotiate favorable contractual conditions. We are also very precise and leverage when negotiating, leaving your interests intact at each point.'
                },
                {
                  step: '04',
                  title: 'Off-Market & Investment Access',
                  desc: 'Our network of professionals and investor relations gives us access to some commercial opportunities at an earlier stage, before they get wider visibility. The first-mover advantage is usually converted into better positioning and less competition. This advantage allows our clients to move with confidence and ahead of the market.'
                },
                {
                  step: '05',
                  title: 'End-to-End Acquisition Management',
                  desc: 'From initial consultation to final closing, we coordinate every component of the process. Our role is to simplify complexity while ensuring no critical detail is overlooked.',
                  items: [
                    'Financial documentation support',
                    'Due diligence scheduling',
                    'Third-party inspections and reports',
                    'Legal coordination',
                    'Closing oversight'
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="group grid grid-cols-[100px_1fr] gap-12 max-[640px]:grid-cols-1 max-[640px]:gap-6 pb-12 border-b border-white/10 last:border-0 hover:border-gold/30 transition-colors">
                  <div className="font-serif text-[48px] text-gold/20 leading-none group-hover:text-gold transition-colors">{item.step}</div>
                  <div>
                    <h3 className="font-serif text-2xl font-light text-white mb-6 group-hover:text-gold-light transition-colors">{item.title}</h3>
                    <p className="text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors">{item.desc}</p>
                    {item.items && (
                      <div className="mt-6 space-y-3">
                        {item.items.map((li, j) => (
                          <div key={j} className="flex gap-4 items-center">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                            <p className="text-[15px] text-white/40 font-light">{li}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center max-w-[840px] mx-auto border-t border-white/10 pt-16">
              <p className="font-serif text-[clamp(20px,2.2vw,24px)] font-light italic text-white/80 leading-[1.6]">
                Unlock high-value commercial opportunities through expert strategies and targeted property marketing to position your assets for <em className="not-italic text-gold">maximum performance.</em>
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── COMMERCIAL PROPERTY DISPOSITION ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Dispositions" 
              title="Commercial Property Disposition" 
              className="mb-10"
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] mb-16">
              Disposing of a commercial asset requires strategy, timing, and precision. In <strong className="text-dark font-medium">Emlak Realty</strong>, we design each commercial sale in a way that conserves capital and generates maximum returns by being disciplined and focused in our valuation and execution.
            </p>

            <div className="grid grid-cols-1 gap-10">
              {[
                {
                  title: 'Strategic Exit Planning',
                  desc: 'Every disposition begins with a clear exit strategy. We assess the performance of assets, market demand, and timing factors in order to come up with the most favorable course of sale as well as to fall within your overall investment objectives.'
                },
                {
                  title: 'Data-Driven Valuation & Positioning',
                  desc: 'Accurate pricing is necessary. We compare income performance, similar sales, and market trends to develop a competitive market valuation that is appealing to qualified investors without compromising value.'
                },
                {
                  title: 'Targeted Investor Marketing',
                  desc: 'Commercial assets require focused exposure. We market your property using investor-friendly literature and direct phone calls to serious and financially qualified investors.'
                },
                {
                  title: 'Negotiation & Capital Protection',
                  desc: 'Negotiation defines the final outcome. We manage offers strategically to optimize pricing, strengthen terms, and safeguard your financial interests throughout the transaction.'
                },
                {
                  title: 'Seamless Transaction Management',
                  desc: 'We organize due diligence, documentation, and closing to make the process efficient and transparent so that you can proceed with confidence.'
                }
              ].map((item, i) => (
                <div key={i} className="group flex gap-8 pb-10 border-b border-dark/[.08] last:border-0 hover:border-gold/30 transition-colors max-[640px]:flex-col max-[640px]:gap-4">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold font-serif text-xl shrink-0 group-hover:bg-gold/10 transition-colors">{String(i+1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-[15px] text-mid font-light leading-[1.8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gold/20 pt-6">
              <p className="text-[15px] text-mid font-light leading-[1.8]">
                Leverage our expertise to identify prime opportunities, negotiate stronger deals, and unlock the full potential of your investment. Our brokerage services are structured around a fair agent commission designed to deliver strong results.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Ready to Sell or Invest for Maximum Return?"
        title="Buy Smart. Sell Strong with Emlak Realty"
        subtitle="Schedule a consultation with our experts today."
        buttonText="Schedule a Consultation"
      />
    </main>
  );
}
