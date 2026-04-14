'use client';
import React from 'react';
import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function RentalPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-end p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/rental-hero.jpg" 
            alt="Luxury rental apartments" 
            fill 
            priority 
            className="object-cover" 
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[940px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Hassle-Free <em className="italic text-gold">Rental Solutions</em>
          </h1>
          <p className="font-serif text-[clamp(18px,2.2vw,28px)] font-light italic text-white/[.7] mb-4 animate-fadeUp-d3 max-w-[740px]">
            Maximum Returns. Zero Stress
          </p>
          <p className="text-[16px] text-white/[.55] font-light leading-[1.8] mb-10 animate-fadeUp-d3 max-w-[680px]">
            Renting a property shouldn&apos;t be stressful. Whether you&apos;re a landlord seeking reliable tenants or a renter searching for the perfect space, Emlak Realty delivers seamless, secure, and profitable rental solutions.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeUp-d4">
            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Find a Rental
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── RENT SMARTER SECTION ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              title="Rent Smarter. Earn Stronger." 
            />
            <p className="font-serif text-[clamp(16px,1.6vw,20px)] italic text-gold/80 mt-4 mb-4">
              For Landlords Who Want Maximum Returns &amp; Minimum Stress
            </p>
            <p className="text-[17px] text-mid font-light leading-[1.8] mb-14">
              Your property is a valuable asset. Our job is to turn it into a consistent, reliable income stream.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                'Strategic Rental Pricing for Maximum Income',
                'Professional Marketing That Attracts Serious Tenants',
                'Thorough Tenant Screening for Peace of Mind',
                'Secure Lease Agreements & Legal Protection',
                'Ongoing Rental Management'
              ].map((item, i) => (
                <div key={i} className="group bg-white p-8 border border-dark/[.06] hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <p className="text-[15px] text-dark font-medium leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[17px] text-mid font-light leading-[1.8] italic mb-10">
              Discover the finest luxury rentals in the city and experience sophisticated urban living
            </p>

            <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
              Get Your Rental Evaluation Today
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FIND YOUR IDEAL RENTAL ── */}
      <RevealWrapper>
        <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              title="Find Your Ideal Rental with Confidence" 
              light={true}
            />
            <p className="font-serif text-[clamp(16px,1.6vw,20px)] italic text-gold/80 mt-4 mb-14">
              Discover Spaces That Reflect Your Lifestyle
            </p>
            <p className="text-[17px] text-white/60 font-light leading-[1.8] mb-16">
              Finding the right rental agency should feel exciting, not overwhelming. We help tenants secure comfortable, well-matched spaces with transparency and efficiency.
            </p>

            <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
              {[
                {
                  num: '01',
                  title: 'Verified & Quality Rental Listings',
                  desc: 'From apartments and houses to offices and commercial units, every property we present is verified and professionally managed.'
                },
                {
                  num: '02',
                  title: 'Transparent Pricing & Clear Terms',
                  desc: 'No hidden fees. No confusing clauses. We ensure you understand rental terms clearly before signing.'
                },
                {
                  num: '03',
                  title: 'Smooth Viewing & Application Process',
                  desc: 'We coordinate property viewings quickly and guide you through a streamlined application and verification process for faster approvals.'
                },
                {
                  num: '04',
                  title: 'Secure Lease & Move-In Support',
                  desc: 'Once approved, we ensure the lease signing is smooth and organized so you can move in confidently and comfortably.'
                }
              ].map((item, i) => (
                <div key={i} className="group border border-white/[.08] p-10 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(192,154,94,.06)]">
                  <div className="font-serif text-[48px] text-gold/20 leading-none mb-6 group-hover:text-gold/50 transition-colors">{item.num}</div>
                  <h3 className="font-serif text-xl text-white leading-[1.3] mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-[15px] text-white/50 font-light leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHO WE WORK WITH ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionHeader 
              title="Who We Work With" 
            />
            <p className="font-serif text-[clamp(16px,1.6vw,20px)] italic text-gold/80 mt-4 mb-4">
              Connecting Properties with the Right People
            </p>
            <p className="text-[17px] text-mid font-light leading-[1.8] mb-16">
              Our services are tailored to pair trustworthy landlords with quality tenants and produce long-term and hassle-free rental services. Whatever you require, we offer customized solutions that get results.
            </p>

            <div className="grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
              {/* For Property Owners & Landlords */}
              <div className="group bg-white border border-dark/[.06] p-10 hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)]">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 21V9l9-7 9 7v12a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1z" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">For Property Owners &amp; Landlords</h3>
                <p className="text-[15px] text-mid font-light leading-[1.8] mb-6">
                  We partner with landlords who embrace professionalism, efficiency, and optimal returns. We assist you regardless of whether you have one apartment, a commercial property, or a large portfolio.
                </p>
                <ul className="space-y-3">
                  {[
                    'Attract reliable, verified tenants quickly',
                    'Maximize rental income through strategic pricing',
                    'Protect your property with legal and contractual safeguards',
                    'Reduce stress with optional full-service management'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-mid font-light leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1"><path d="M2 7l3.5 3.5L12 4" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Tenants & Renters */}
              <div className="group bg-white border border-dark/[.06] p-10 hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)]">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">For Tenants &amp; Renters</h3>
                <p className="text-[15px] text-mid font-light leading-[1.8] mb-6">
                  We deal with tenants who want to rent safe and good-quality houses with clear conditions and professional assistance. Whether it is a first-time renter or an experienced tenant, we assist you:
                </p>
                <ul className="space-y-3">
                  {[
                    'Find properties that fit your lifestyle and budget',
                    'Access verified listings with accurate pricing and clear details',
                    'Navigate the rental process smoothly, from viewing to lease signing',
                    'Move in with confidence, knowing your rights and obligations are fully protected'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-mid font-light leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1"><path d="M2 7l3.5 3.5L12 4" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Investors & Corporate Clients */}
              <div className="group bg-white border border-dark/[.06] p-10 hover:border-gold/30 transition-all hover:shadow-[0_16px_40px_rgba(0,0,0,.06)]">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">For Investors &amp; Corporate Clients</h3>
                <p className="text-[15px] text-mid font-light leading-[1.8] mb-6">
                  We also serve investors and corporate clients who need expert rental management solutions. By partnering with Emlak Realty, you gain:
                </p>
                <ul className="space-y-3">
                  {[
                    'Streamlined property leasing and management for multiple units',
                    'Access to a curated network of qualified tenants',
                    'Professional reporting, rent collection, and maintenance coordination',
                    'Guidance on maximizing ROI while reducing operational hassle'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-mid font-light leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-1"><path d="M2 7l3.5 3.5L12 4" stroke="#C09A5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-[17px] text-mid font-light leading-[1.8] mt-16 italic text-center">
              Don&apos;t let your property sit vacant. With the right strategy and support, we create balanced outcomes where both landlords and tenants win.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── CTA ── */}
      <CTASection 
        eyebrow="Get Started"
        title="Ready to Rent Smarter?"
        subtitle="Connect with our team today to start your hassle-free rental journey."
        buttonText="Contact Us"
      />
    </main>
  );
}
