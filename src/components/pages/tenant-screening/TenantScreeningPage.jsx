'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
import ModalButton from '@/components/ui/ModalButton';

export default function TenantScreeningPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/tenant-screening-hero.jpg" 
            alt="Secure tenant screening process" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-55% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        
        <div className="relative z-[3] max-w-[940px]">
          <h2 className="font-serif text-[clamp(24px,3.2vw,48px)] font-light text-white mb-10 animate-fadeUp-d3 leading-[1.15]">
            The Right Tenant <em className="italic text-gold">Makes All the Difference</em>
          </h2>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <ModalButton className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Start Screening Tenants Today
            </ModalButton>
          </div>
        </div>
      </section>

      {/* ── FAST & ACCURATE SCREENING ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-[1.2fr_1fr] gap-24 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
            <div>
              <SectionHeader 
                title="Fast, Accurate & Legally Compliant: Thorough Screening Without Delays" 
              />
              <div className="mt-10 space-y-6">
                <p className="text-[17px] text-mid font-light leading-[1.8]">
                  Delayed approvals can lead to extended vacancies, while rushed decisions can result in unreliable tenants. At Emlak Realty, our tenant screening services are aimed at providing both speed and accuracy at the same time, as we are able to provide you with qualified tenants without sacrificing due diligence.
                </p>
              </div>
            </div>
            <div className="bg-white p-10 border border-gold/[.15] shadow-[0_24px_48px_rgba(0,0,0,.04)]">
              <div className="space-y-4">
                {[
                  'Fast approvals, no compromise on accuracy',
                  'Checks on ID, income & rental history',
                  'Clear risk insights for better decisions',
                  'Verified documents & backgrounds',
                  'Faster leasing, reduced vacancies',
                  'Legally compliant processes',
                  'Reliable tenants for long-term stability'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-gold">
                      <circle cx="9" cy="9" r="8.5" stroke="currentColor" strokeOpacity="0.2"/>
                      <path d="M5 9L8 12L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[14px] text-mid font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── 5-STEP ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-20">
              <SectionHeader 
                title="Our Proven 5-Step Tenant Verification Process" 
                subtitle="A Structured, Reliable Approach to Securing the Right Tenants"
                light={true}
                className="flex flex-col items-center"
              />
              <p className="text-[17px] text-white/40 font-light mt-8 max-w-[840px] mx-auto leading-[1.8] animate-fadeUp-d3">
                Choosing the right tenant shouldn’t rely on guesswork. Our 5-step verification procedure helps minimize risk and safeguard your investment, and only qualified and responsible applicants are approved by our proven 5-step verification procedure. Here’s how we do it:
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                { title: 'Identity & Background Verification', step: '01' },
                { title: 'Employment & Income Confirmation', step: '02' },
                { title: 'Credit & Financial Assessment', step: '03' },
                { title: 'Risk Evaluation & Approval Recommendation', step: '04' }
              ].map((item, i) => (
                <div key={i} className="relative p-12 min-h-[220px] flex flex-col justify-end bg-white/[.02] border border-white/[.05] hover:border-gold/30 transition-all group overflow-hidden">
                  <div className="font-serif text-[80px] text-white/20 absolute -top-2 -right-2 group-hover:text-gold/50 transition-colors leading-none">{item.step}</div>
                  <h3 className="font-serif text-xl font-light text-white relative z-10 group-hover:text-gold transition-colors">{item.title}</h3>
                </div>
              ))}
            </div>

            {/* ── SLOGAN BANNER ── */}
            <div className="mt-16 pt-16 border-t border-white/[.05] text-center max-w-[800px] mx-auto animate-fadeUp-d4">
              <h3 className="font-serif text-[clamp(24px,4vw,42px)] font-light italic text-gold mb-6 leading-tight lowercase first-letter:uppercase">
                Find the Right Tenant, Every Time
              </h3>
              <p className="text-[13px] tracking-[.32em] uppercase font-medium text-white/40 leading-relaxed">
                We perform thorough background checks, credit evaluations, and rental history verification so you can lease with peace of mind.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHY TRUST US ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto text-center mb-16">
            <SectionHeader 
              title="Why Landlords Trust Our Screening Services" 
              className="flex flex-col items-center"
            />
            <p className="text-[17px] text-mid font-light mt-8 max-w-[800px] mx-auto leading-[1.8]">
              Choosing the right tenant is one of the most important decisions a landlord can make. One wrong move may result in a payment of rent, destruction of property, litigation, and expensive vacancies.
            </p>
          </div>
          
          <div className="max-w-[1000px] mx-auto grid grid-cols-5 gap-px bg-dark/5 border border-dark/5 max-[1100px]:grid-cols-3 max-[640px]:grid-cols-1">
            {[
              'Thorough Verification',
              'Reduced Financial Risk',
              'Faster Leasing Decisions',
              'Legal & Regulatory Compliance',
              'Clear, Actionable Reports'
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 text-center flex flex-col items-center justify-center hover:bg-gold/5 transition-colors">
                <div className="w-1.5 h-1.5 bg-gold rounded-full mb-4" />
                <p className="text-[13px] tracking-[.1em] uppercase font-medium text-dark">{item}</p>
              </div>
            ))}
          </div>

          <div className="max-w-[900px] mx-auto text-center mt-12">
            <p className="text-[17px] text-mid font-light leading-[1.8]">
              With Emlak Realty, you’re not just filling a vacancy; you’re securing a responsible tenant backed by a trusted verification process.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        title="Don’t Risk Your Investment — Act Smarter with Emlak Realty"
        subtitle=""
        buttonText="Get Started"
      />
    </main>
  );
}
