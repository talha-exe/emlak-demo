import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
import HeroSection from './HeroSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* ── INVESTOR MINDSET ── */}
      <RevealWrapper>
        <section id="about" className="bg-cream text-dark py-[120px] px-[80px] grid grid-cols-2 gap-0 max-[1100px]:grid-cols-1 max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="pr-[88px] border-r border-gold/[.18] max-[1100px]:border-r-0 max-[1100px]:border-b max-[1100px]:border-gold/[.18] max-[1100px]:pr-0 max-[1100px]:pb-14">
            <p className="eyebrow-line flex items-center gap-3.5 text-[11px] tracking-[.28em] uppercase text-gold font-medium mb-8">Real Estate With An Investor Mindset</p>
            <h2 className="font-serif text-[clamp(38px,4.2vw,60px)] font-light text-dark leading-[1.05] mb-11">At Emlak Realty,<br />We Build <em className="italic text-gold">Lasting Value</em></h2>
            <div className="w-full h-[300px] relative overflow-hidden rounded-sm group">
              <Image src="/images/luxury-villa.png" alt="Modern luxury villa" fill className="object-cover transition-transform duration-600 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-[1.04]" />
              <div className="absolute bottom-4 left-[18px] z-2 text-[9px] tracking-[.22em] uppercase text-gold/[.85] font-medium border-l-2 border-gold pl-2.5 bg-dark/50 py-2 px-3 backdrop-blur-lg">Strategic Real Estate</div>
            </div>
          </div>
          <div className="pl-[88px] max-[1100px]:pl-0 max-[1100px]:pt-14">
            <h3 className="font-serif text-[clamp(20px,2vw,28px)] font-normal italic text-mid mb-10 leading-[1.45]">&quot;Building lasting value through strategic, investor-focused real estate.&quot;</h3>
            <ul className="list-none">
              {['Top-rated brokerage delivering strategic real estate solutions',
                'Specializing in luxury homes, commercial assets, and development opportunities',
                'Investor-first approach focused on long-term wealth',
                'Local expertise with global market reach',
                'Simplifying complex real estate transactions'
              ].map((item, i) => (
                <li key={i} className="bullet-line flex items-start gap-[18px] py-5 border-b border-gold/[.18] text-[15px] text-mid font-light leading-[1.65] transition-colors duration-300 hover:text-dark first:border-t first:border-gold/[.18]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </RevealWrapper>

      {/* ── OPPORTUNITIES ── */}
      <RevealWrapper>
        <section id="opps" className="bg-dark-2 py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="flex justify-between items-end mb-14 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-5">
            <SectionHeader 
              eyebrow="Investment Portfolio" 
              title={<>Current Investment <em className="italic text-gold">Opportunities</em></>} 
              light={true} 
            />
          </div>
          <p className="text-[10px] tracking-[.22em] uppercase text-white/20 mb-[22px]">Categories</p>
          <div className="grid grid-cols-3 gap-[2px] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {[
              { num: '01', name: 'Fix & Flip', desc: 'Undervalued properties and maximize profit' },
              { num: '02', name: 'Rental / BRRR', desc: 'Buy, rehab, rent, refinance, repeat strategy.' },
              { num: '03', name: 'Development Site', desc: 'Prime land opportunities for residential or commercial development.' },
              { num: '04', name: 'Commercial', desc: 'Income-generating properties designed for long-term business growth.' },
              { num: '05', name: 'Multifamily', desc: 'Acquire multi-unit properties that generate consistent rental income streams.' },
              { num: '06', name: 'Business Buy & Sell', desc: 'Buy or sell established businesses with strategic valuation and guidance.' },
            ].map((card) => (
              <div key={card.num} className="card-accent relative overflow-hidden bg-white/[.03] p-[52px_44px] border-t border-white/[.04] transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] cursor-default hover:bg-gold/[.08] group">
                <div className="font-serif text-[72px] font-light text-white/[.04] leading-none mb-[18px] transition-colors duration-400 group-hover:text-gold/[.14]">{card.num}</div>
                <div className="font-serif text-[26px] font-normal text-white mb-3.5 transition-colors duration-400 group-hover:text-gold-light">{card.name}</div>
                <p className="text-sm text-white/[.36] font-light leading-[1.72]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* ── PARTNER STRIP ── */}
      <RevealWrapper>
        <div className="bg-gradient-to-br from-gold via-[#B8904F] to-gold-light py-14 px-[80px] flex items-center justify-between gap-[60px] relative overflow-hidden max-[1100px]:px-7 max-[1100px]:py-12 max-[1100px]:flex-col max-[1100px]:items-start">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,.12),transparent_60%)] pointer-events-none" />
          <p className="text-base text-dark/[.72] font-light leading-[1.85] max-w-[740px] relative z-[1]">Partner with us to access exclusive listings, expert guidance, and results-driven strategies. Leverage the <strong className="text-dark font-semibold italic">non-profit strategic nature of real estate</strong> to guide your decisions with integrity, insight, and strategic planning. Get started with our team today!</p>
          <Link href="/about" className="relative z-[1] inline-flex items-center gap-3 bg-dark text-white text-[11px] tracking-[.14em] uppercase font-medium py-4 px-9 no-underline transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] whitespace-nowrap border border-dark shrink-0 hover:bg-transparent hover:text-dark hover:-translate-y-0.5">
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7.5 3.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </RevealWrapper>

      {/* ── SERVICES ── */}
      <RevealWrapper>
        <section id="services" className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="grid grid-cols-[300px_1fr] gap-[72px] items-start max-[1100px]:grid-cols-1">
            <div>
              <div className="eyebrow-line flex items-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">Expertise</div>
              <h2 className="font-serif text-[clamp(38px,4.8vw,64px)] font-light leading-[1.05] mb-[18px] text-dark">Advisory &amp;<br /><em className="italic text-gold">Brokerage</em><br />Services</h2>
            </div>
            <div className="grid grid-cols-2 gap-[2px] max-[640px]:grid-cols-1">
              {[
                { num: '01', name: 'Residential', items: ['Luxury homes', 'Primary residences', 'Investment properties'] },
                { num: '02', name: 'Development', items: ['Land acquisition', 'Site analysis', 'Developer advisory'] },
                { num: '03', name: 'Commercial', items: ['Retail', 'Industrial', 'Mixed-use', 'Office'] },
                { num: '04', name: 'Investment', items: ['Flip opportunities', 'BRRRR opportunities', 'Portfolio acquisitions'] },
              ].map((svc) => (
                <div key={svc.num} className="card-accent relative overflow-hidden bg-white p-[42px_36px] transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] cursor-default hover:bg-dark hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.15)] group">
                  <div className="font-serif text-[56px] font-light text-black/[.05] leading-none mb-3 transition-colors duration-400 group-hover:text-white/[.04]">{svc.num}</div>
                  <div className="font-serif text-2xl font-normal text-dark mb-5 transition-colors duration-400 leading-[1.1] group-hover:text-white">{svc.name}</div>
                  <ul className="list-none flex flex-col gap-2.5">
                    {svc.items.map((item, i) => (
                      <li key={i} className="svc-line flex items-center gap-3 text-[13px] text-mid font-light leading-[1.5] capitalize transition-colors duration-400 group-hover:text-white/[.45]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── SLOGAN BAND ── */}
      <RevealWrapper>
        <div className="grid grid-cols-2 min-h-[520px] max-[1100px]:grid-cols-1">
          <div className="relative overflow-hidden group max-[1100px]:h-[320px]">
            <Image src="/images/luxury-interior.png" alt="Luxury living room interior" fill className="object-cover transition-transform duration-800 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-105" />
          </div>
          <div className="bg-dark-3 flex flex-col justify-center py-[88px] px-[72px] border-l border-gold/[.18] max-[1100px]:py-14 max-[1100px]:px-7">
            <p className="font-serif text-[clamp(20px,2.8vw,40px)] font-light italic text-white leading-[1.48] mb-6">Real estate done right. We bring insider knowledge, smart strategies, and results that speak for themselves.</p>
            <div className="w-[52px] h-px bg-gold mb-6" />
            <p className="font-serif text-[clamp(16px,2vw,30px)] font-light italic text-white/[.48] leading-[1.48]">Smart moves, better investments: <strong className="text-gold-light font-medium">Emlak Realty</strong> makes real estate simple.</p>
          </div>
        </div>
      </RevealWrapper>

      {/* ── CONTACT BAND ── */}
      <RevealWrapper>
        <div id="contact" className="bg-cream text-dark py-[88px] px-[80px] flex items-center justify-between gap-[60px] border-t border-gold/[.18] border-b border-b-gold/[.18] max-[1100px]:py-[72px] max-[1100px]:px-7 max-[1100px]:flex-col max-[1100px]:items-start">
          <div>
            <h3 className="font-serif text-[clamp(32px,3.6vw,52px)] font-light text-dark mb-3 leading-[1.05]">Contact Our <em className="italic text-gold">Expert</em></h3>
            <p className="text-[15px] text-mid font-light">emlakrealty.com — We&apos;re ready when you are.</p>
          </div>
          <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3.5 border border-dark text-dark text-xs tracking-[.14em] uppercase font-medium py-[18px] px-12 no-underline transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] whitespace-nowrap shrink-0 hover:bg-dark hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,.12)] group">
            Contact Our Expert
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-[5px]"><path d="M2.5 8h11M8.5 3.5l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </RevealWrapper>

      {/* ── WHY CHOOSE US ── */}
      <RevealWrapper>
        <section id="why" className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="grid grid-cols-2 gap-[88px] mb-20 items-end max-[1100px]:grid-cols-1 max-[1100px]:gap-7">
            <SectionHeader 
              eyebrow="Advantage" 
              title={<>Why Choose <em className="italic text-gold">Us</em></>} 
              light={true} 
            />
            <p className="text-base text-white/[.38] font-light leading-[1.9]"><strong className="text-white/[.72] font-medium">Luxury real estate</strong> decisions are complex, but with the right <strong className="text-white/[.72] font-medium">brokerage</strong>, they don&apos;t have to be. We provide market intelligence, negotiation expertise, and client-focused strategies that give you an edge.</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-[250px_250px] gap-[2px] mb-20 max-[1100px]:grid-rows-[180px_180px] max-[640px]:grid-cols-1 max-[640px]:grid-rows-[auto]">
            <div className="relative overflow-hidden row-span-2 group max-[640px]:row-span-1 max-[640px]:h-[200px]">
              <Image src="/images/commercial-building.png" alt="Urban portfolio" fill className="object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
              <span className="absolute bottom-[18px] left-5 z-2 text-[9px] tracking-[.22em] uppercase text-white/50 font-normal border-l-2 border-gold bg-dark/50 py-2 px-3 pl-2.5 backdrop-blur-lg">Urban Portfolio</span>
            </div>
            <div className="relative overflow-hidden group max-[640px]:h-[170px]">
              <Image src="/images/aerial-residential.png" alt="Luxury residences" fill className="object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
              <span className="absolute bottom-[18px] left-5 z-2 text-[9px] tracking-[.22em] uppercase text-white/50 font-normal border-l-2 border-gold bg-dark/50 py-2 px-3 pl-2.5 backdrop-blur-lg">Luxury Residences</span>
            </div>
            <div className="relative overflow-hidden group max-[640px]:h-[170px]">
              <Image src="/images/luxury-villa.png" alt="Commercial assets" fill className="object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
              <span className="absolute bottom-[18px] left-5 z-2 text-[9px] tracking-[.22em] uppercase text-white/50 font-normal border-l-2 border-gold bg-dark/50 py-2 px-3 pl-2.5 backdrop-blur-lg">Commercial Assets</span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-px max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
            {[
              { icon: <path d="M9 1.5L1 5.5v8c0 3.5 3 6.5 8 7.5 5-1 8-4 8-7.5v-8L9 1.5z" stroke="#C09A5E" strokeWidth="1.3"/>, title: 'Local Market Expertise', desc: 'Deep knowledge of neighborhoods, pricing trends, and demand cycles.' },
              { icon: <><circle cx="9" cy="9" r="7.5" stroke="#C09A5E" strokeWidth="1.3"/><path d="M6 9l2 2 4-4" stroke="#C09A5E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></>, title: 'Strategic Negotiation', desc: 'We advocate aggressively and intelligently to protect your interests.' },
              { icon: <path d="M3 5h12M3 9h12M3 13h8" stroke="#C09A5E" strokeWidth="1.3" strokeLinecap="round"/>, title: 'Transparent Communication', desc: 'Clear guidance at every stage of the transaction.' },
              { icon: <><circle cx="9" cy="6" r="3" stroke="#C09A5E" strokeWidth="1.3"/><path d="M2 17c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#C09A5E" strokeWidth="1.3" strokeLinecap="round"/></>, title: 'Personalized Service', desc: 'No cookie-cutter approach. Every strategy is goal-oriented.' },
              { icon: <path d="M2 14l3-4 3 3 4-6 4 3" stroke="#C09A5E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>, title: 'Seamless Process', desc: 'From consultation to closing, we handle the details so you can focus on your future.' },
            ].map((card, i) => (
              <div key={i} className="bg-white/[.028] p-[42px_28px] border-t border-white/[.05] transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] hover:bg-gold/[.08] hover:-translate-y-1 group">
                <div className="w-10 h-10 border border-gold/[.32] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">{card.icon}</svg>
                </div>
                <h4 className="font-serif text-xl font-normal text-white mb-3.5 leading-[1.2]">{card.title}</h4>
                <p className="text-[13px] text-white/[.36] font-light leading-[1.72]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* ── DISCOVER BAND ── */}
      <RevealWrapper>
        <div className="bg-dark py-16 px-[80px] flex justify-center border-t border-white/[.04] max-[1100px]:py-13 max-[1100px]:px-7">
          <Link href="#opps" className="inline-flex items-center gap-4 border border-gold text-gold text-xs tracking-[.15em] uppercase font-medium py-[19px] px-[60px] no-underline transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:bg-gold hover:text-dark hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.25)] group">
            Discover Exclusive Investment Opportunities
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </RevealWrapper>

      <CTASection 
        id="success"
        eyebrow="Begin Here"
        title='Start Your Success Story<br />with <em className="italic text-gold">Emlak Realty</em>'
        subtitle="Join a brokerage that prioritizes growth, rewards performance, and opens doors to high-value opportunities."
        buttonText="Join Emlak Realty"
      />
    </main>
  );
}
