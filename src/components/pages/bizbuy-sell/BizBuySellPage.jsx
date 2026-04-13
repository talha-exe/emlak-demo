'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function BizBuySellPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bizbuy-sell-hero.png" 
            alt="BizBuy Sell property marketplace" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            BizBuy <em className="italic text-gold">Sell</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Your Complete Property Marketplace for Every Opportunity
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Call Us Now!
            </a>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC BUY & SELL ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.5fr_1fr] gap-24 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
            <div>
              <SectionHeader 
                eyebrow="Overview" 
                title="Strategic Buy & Sell For Business Owners, Investors & Buyers" 
              />
              <div className="mt-10 space-y-6">
                <p className="text-[17px] text-mid font-light leading-[1.8]">
                  Whether you&apos;re preparing to exit or looking to acquire, we position every opportunity with precision and purpose. As a top-rated real estate broker, we connect motivated sellers with qualified buyers through a structured, confidential process designed to maximize value on both sides.
                </p>
                <p className="text-[17px] text-mid font-light leading-[1.8]">
                  Our approach goes beyond simple matchmaking. We align opportunities with your financial goals, evaluate true business potential, and ensure every transaction is built for profitability, security, and long-term success.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 border border-gold/[.15] shadow-[0_24px_48px_rgba(0,0,0,.04)]">
              <div className="space-y-5">
                {[
                  'Strategic valuation and premium positioning to maximize business appeal',
                  'Access to serious, financially qualified buyers and motivated sellers',
                  'Confidential marketing to protect and promote high-value opportunities',
                  'Thorough screening for secure, reliable transactions',
                  'Expert negotiation to achieve optimal outcomes for both buyers and sellers',
                  'Strategic guidance for smart acquisitions & successful exits',
                  'Market insights to identify high-value opportunities',
                  'Full-service support for smooth, confident transactions'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start pb-5 border-b border-dark/5 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0" />
                    <p className="text-[14px] text-mid font-light leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── 6-STEP PROCESS ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Methodology" 
              title="Our Proven 6-Step Business Sale Process" 
              light={true}
              className="mb-20"
            />
            
            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  step: '01',
                  title: 'Confidential Consultation'
                },
                {
                  step: '02',
                  title: 'Accurate Business Evaluation'
                },
                {
                  step: '03',
                  title: 'Strategic Marketing Launch'
                },
                {
                  step: '04',
                  title: 'Buyer Screening & Engagement'
                },
                {
                  step: '05',
                  title: 'Powerful Negotiation & Agreement Structuring'
                },
                {
                  step: '06',
                  title: 'Seamless Closing & Ownership Transfer'
                }
              ].map((item, i) => (
                <div key={i} className="group grid grid-cols-[100px_1fr] gap-12 max-[640px]:grid-cols-1 max-[640px]:gap-4 pb-12 border-b border-white/10 last:border-0 hover:border-gold/30 transition-colors">
                  <div className="font-serif text-[48px] text-gold/20 leading-none group-hover:text-gold transition-colors">{item.step}</div>
                  <div className="flex items-center">
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-gold-light transition-colors">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── MAXIMIZE SLOGAN ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[100px] px-[80px] max-[1100px]:py-16 max-[1100px]:px-[28px]">
          <div className="max-w-[900px] mx-auto text-center">
            <SectionHeader 
              eyebrow="Expert Guidance" 
              title="Maximize Your Business Sale or Purchase with Expert Guidance" 
              className="flex flex-col items-center mb-10"
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] max-w-[800px] mx-auto">
              Leverage our expertise in property valuations, negotiations, and strategic marketing to achieve the best outcomes, whether you are buying or selling a business.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Take Action"
        title="Ready to Buy, Sell or Invest for Maximum Return?"
        subtitle=""
        buttonText="Let's Connect"
      />
    </main>
  );
}
