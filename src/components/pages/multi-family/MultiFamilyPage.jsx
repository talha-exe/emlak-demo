'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function MultiFamilyPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/multi-family-hero.png" 
            alt="Multi family real estate investments" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Multi Family <em className="italic text-gold">Real Estate</em>
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[740px]">
            Income-Producing Assets Backed by Strategic Execution
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="space-y-6">
              <p className="text-[17px] text-mid font-light leading-[1.8]">
                Multi family real estate remains one of the strongest and most expandable types of assets in the investment arena. It is a combination of recurring income, appreciation potential, and financing leverage in a long-term wealth-building structure.
              </p>
              <p className="text-[17px] text-mid font-light leading-[1.8]">
                <strong className="text-dark font-medium">Emlak Realty</strong> provides structured advisory, rigorous underwriting, and precision execution for your first duplex, expanding into mid-size apartment buildings, or repositioning a stabilized portfolio.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHY MULTI FAMILY ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              eyebrow="Investment Strategy" 
              title="Why Multi Family Assets Remain a Core Investment Strategy" 
              light={true}
              className="mb-10"
            />
            <p className="text-[16px] text-white/50 font-light leading-[1.8] mb-20">
              Multi family real estate continues to outperform many asset classes because of strong housing fundamentals and scalable income structure. As a top-rated real estate broker, we help investors identify profitable multi-family properties in stable and growing neighborhoods.
            </p>

            <div className="grid grid-cols-1 gap-12">
              {[
                {
                  step: '01',
                  title: 'Predictable Recurring Income',
                  desc: 'Various units generate diversified sources of income and minimize the risk of vacancies and stabilize the cash flow.'
                },
                {
                  step: '02',
                  title: 'Strong Financing Leverage',
                  desc: 'Income-producing properties with stable rent rolls are preferred by lenders and offer structured opportunities of leverage.'
                },
                {
                  step: '03',
                  title: 'Demand-Driven Fundamentals',
                  desc: 'Housing demand remains consistent across economic cycles, supporting occupancy stability.'
                },
                {
                  step: '04',
                  title: 'Appreciation Through Optimization',
                  desc: 'Value can be created through rent repositioning, operational efficiency, and strategic improvements.'
                },
                {
                  step: '05',
                  title: 'Portfolio Scalability',
                  desc: 'Multi family investments enable investors to diversify investments effectively through centralized management.'
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

            <div className="mt-12 text-center max-w-[840px] mx-auto border-t border-white/10 pt-10">
              <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                When properly underwritten and strategically executed, multi family assets become long-term wealth vehicles.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── BUILD A STRONGER PORTFOLIO ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto text-center">
            <SectionHeader 
              eyebrow="Portfolio Growth" 
              title="Build a Stronger Investment Portfolio with Multifamily Real Estate" 
              className="flex flex-col items-center mb-10"
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] max-w-[800px] mx-auto">
              Discover well-positioned apartment buildings and income-generating properties supported by market research, property analysis, and professional investment guidance.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Get Started"
        title="Ready to Strengthen Your Multi Family Portfolio?"
        subtitle=""
        buttonText="Let's Connect"
      />
    </main>
  );
}
