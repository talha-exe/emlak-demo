'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function PropertyManagementPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/property-management-hero.jpg" 
            alt="Professional property management" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Property <em className="italic text-gold">Management</em>
          </h1>
          <p className="font-serif text-[clamp(18px,2.2vw,28px)] font-light italic text-white/[.7] mb-10 animate-fadeUp-d3 max-w-[740px]">
            From Tenant Placement to Maintenance. We Handle It All.
          </p>
          <div className="animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Schedule Your Private Consultation
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPREHENSIVE SERVICES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              title="Our Comprehensive Property Management Services" 
            />
            <p className="text-[17px] text-mid font-light leading-[1.8] mb-14 max-w-[900px]">
              From residential tenants to commercial entities, we provide due diligence to all potential tenants to get them to be honest, financially capable, and dedicated to taking good care of your assets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Maximize Income with Market-Driven Pricing', desc: 'Ensuring your assets generate competitive returns through strategic valuation.' },
                { title: 'Rent Collection & Financial Reporting', desc: 'Streamlined collection processes with transparent, point-by-point financial tracking.' },
                { title: 'Maintenance and Operational Oversight', desc: 'Proactive property care to preserve value and ensure smooth day-to-day operations.' },
                { title: 'Lease and Legal Compliance', desc: 'Expert oversight to ensure all agreements meet current legal and regulatory standards.' },
                { title: 'Transparent Financial Reporting', desc: 'Access detailed insights into your property\'s performance at any time.' }
              ].map((item, i) => (
                <div key={i} className="group bg-white p-10 border border-dark/[.06] hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)]">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="font-serif text-xl text-dark leading-[1.4] mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-[15px] text-mid font-light leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── TENANT & OCCUPANCY MANAGEMENT ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              title="Tenant & Occupancy Management" 
              light={true}
            />
            
            <div className="grid grid-cols-2 gap-10 mt-16 max-[900px]:grid-cols-1">
              {/* Marketing */}
              <div className="group border-l border-white/10 pl-10 hover:border-gold transition-colors">
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-gold transition-colors">Targeted Marketing & Property Exposure</h3>
                <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                  We promote your property in various outlets such as online listings, social media, and our database of qualified tenants. This makes it as visible as possible and draws serious inquiries in haste.
                </p>
              </div>

              {/* Screening */}
              <div className="group border-l border-white/10 pl-10 hover:border-gold transition-colors">
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-gold transition-colors">Thorough Tenant Screening & Verification</h3>
                <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                  Our personnel perform background investigations, income checks, and reference checks to be able to confirm that the tenants are responsible, reliable, and financially sound. This mitigates risks and provides long-term occupancy.
                </p>
              </div>

              {/* Coordination */}
              <div className="group border-l border-white/10 pl-10 hover:border-gold transition-colors">
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-gold transition-colors">Move-In Coordination</h3>
                <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                  We make the move-in process hassle-free. Tenants have a trouble-free experience, and landlords have trouble-free occupancy management.
                </p>
              </div>

              {/* Vacancy Reduction */}
              <div className="group border-l border-white/10 pl-10 hover:border-gold transition-colors">
                <h3 className="font-serif text-2xl text-white mb-6 group-hover:text-gold transition-colors">Vacancy Reduction & Retention Strategies</h3>
                <p className="text-[16px] text-white/50 font-light leading-[1.8]">
                  Through proactive communication, timely maintenance, and market-aligned rental pricing, we minimize vacancy periods and encourage tenant retention, ensuring your property consistently generates income.
                </p>
              </div>
            </div>

            <div className="mt-20 p-12 border border-gold/20 bg-gold/5 text-center">
              <p className="font-serif text-2xl text-white/80 italic">
                "We manage your investment efficiently, keeping occupancy high, rents on track, and your property well-maintained."
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── CTA ── */}
      <CTASection 
        eyebrow="Asset Protection"
        title="Protect Your Investment Today"
        subtitle="Connect with our property management experts to secure your asset's future."
        buttonText="Contact Us"
      />
    </main>
  );
}
