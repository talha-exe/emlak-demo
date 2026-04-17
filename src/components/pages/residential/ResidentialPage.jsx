import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function ResidentialPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-screen min-h-[750px] max-[640px]:min-h-[600px] relative overflow-hidden flex flex-col justify-center p-[100px_80px_100px] max-[1100px]:p-[80px_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/residential-hero.png" alt="Luxury residential home" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[840px]">
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            Luxury Homes, Primary Residences, and <em className="italic text-gold">Investment Properties</em> — All in One Place
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[640px]">
            A Value-Focused Approach To Residential Buy &amp; Sell
          </p>
          <a href="https://emlakrealty.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold animate-fadeUp-d4 hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
            Schedule a consultation
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* ── OUR CAPABILITIES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1000px] mx-auto grid grid-cols-[1fr_1.5fr] gap-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
            <SectionHeader 
              eyebrow="Expertise" 
              title={<>Our <em className="italic text-gold">Capabilities</em></>} 
            />
            <div className="space-y-6">
              <p className="text-lg text-mid font-light leading-[1.8]">
                By conducting thorough market analysis, strategic communication, and a careful evaluation of comparable properties, our team develops specific plans that will give every home the best value. We ensure that our clients will meet their long-term real estate goals.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── PROPERTY TYPES ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="text-center mb-16">

            <h2 className="font-serif text-[clamp(28px,3.8vw,52px)] font-light text-white leading-[1.1] max-w-[800px] mx-auto">Residential Property <em className="italic text-gold">Solutions</em> for Every Lifestyle</h2>
          </div>
          
          <div className="grid grid-cols-5 gap-px max-[1300px]:grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 border-t border-white/[.1]">
            {[
              { 
                title: 'Luxury Homes', 
                desc: "New construction luxury properties have modern layouts, updated systems, and warranties by the builder, and therefore, their contracts, schedules, and upgrade costs must be focused on by reviewing the developer's contracts, schedules, and cost of upgrades." 
              },
              { 
                title: 'Single-Family Homes', 
                desc: 'Perfect choice among customers who want privacy, space, and permanence. It includes the complete ownership of both structure and land, and the property is flexible in case there are renovations, expansions, and customization. We assist in assessing the trends of the value of the neighborhoods, property taxes, and resale prospects.' 
              },
              { 
                title: 'Townhouses', 
                desc: 'With a multi-level living that is more independent compared to the traditional condos or co-ops, the townhouses, in many cases, amalgamate the individual ownership with the community existence. We compare zoning, ownership patterns, and value appreciation over the long term.' 
              },
              { 
                title: 'Condominiums', 
                desc: 'Another alternative that many buyers prefer is ownership that involves less maintenance. The owners of the condos possess the title of their unit and have common facilities. We will take clients on a tour of HOA charges, bylaws, the finances of the association, and resale demand.' 
              },
              { 
                title: 'Co-ops', 
                desc: 'The co-op is a common property type, entailing the sharing of stock in a corporation that owns the building instead of the actual ownership of the real estate. Board approvals, financial requirements, and stiff guidelines to follow are meticulously prepared, and we keep buyers in full readiness to be approved.' 
              }
            ].map((type, i) => (
              <div key={i} className="bg-white/[.03] p-10 backdrop-blur-sm transition-all duration-400 hover:bg-gold/[.08] hover:-translate-y-1 group border-r border-b border-white/[.1] first:border-l">
                <div className="font-serif text-[60px] font-light text-white/[.04] leading-none mb-6">0{i+1}</div>
                <h3 className="font-serif text-xl font-normal text-white mb-5 group-hover:text-gold-light">{type.title}</h3>
                <p className="text-[14px] text-white/[.35] font-light leading-[1.8]">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* ── FOR BUYERS AND SELLERS ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <p className="font-serif text-[clamp(24px,2.5vw,36px)] font-light italic text-mid leading-[1.4] max-w-[800px] mx-auto">
                Let Our Real Estate Agents Guide You Through Every Property Detail for <em className="italic text-gold">Smarter, Confident Decisions</em>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1">
              {/* FOR BUYERS */}
              <div className="bg-white p-12 border-t-2 border-gold shadow-[0_12px_40px_rgba(0,0,0,.04)]">
                <div className="text-[11px] tracking-[.25em] uppercase text-gold font-medium mb-4">For Buyers</div>
                <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-dark mb-8 leading-[1.1]">Buy and Secure the <br/><em className="italic text-gold">Right Value</em></h2>
                <p className="text-[15px] text-mid font-light leading-[1.8] mb-10">
                  Buying a home is one of the most important financial decisions you will ever make. Emlak Realty’s dedicated residential real estate agents help you secure the right value through:
                </p>
                <ul className="space-y-4">
                  {['Market Evaluation', 'Accurate Property Valuation', 'Strategic Negotiation', 'Smooth Transaction Process'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[14px] font-medium text-dark">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FOR SELLERS */}
              <div className="bg-dark p-12 border-t-2 border-gold text-white shadow-[0_24px_64px_rgba(0,0,0,.15)]">
                <div className="text-[11px] tracking-[.25em] uppercase text-gold font-medium mb-4">For Sellers</div>
                <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-white mb-8 leading-[1.1]">Sell with Precision for <br/><em className="italic text-gold">Maximum Return</em></h2>
                <p className="text-[15px] text-white/[.45] font-light leading-[1.8] mb-10">
                  In the residential real estate market, our pricing strategy is based on real-time data, comparable sales, and neighborhood demand. We then position your residential real estate property to attract qualified buyers through targeted exposure and professional presentation.
                </p>
                <div className="border-t border-white/[.1] pt-8">
                  <p className="text-[13px] tracking-[.15em] uppercase text-gold font-medium mb-6">Our comprehensive market analysis includes:</p>
                  <ul className="space-y-4">
                    {['Recent comparable sales', 'Current active competition', 'Neighborhood demand trends', 'Seasonal timing considerations', 'Buyer behavior insights'].map((point, i) => (
                      <li key={i} className="flex items-center gap-4 text-[14px] font-light text-white/80">
                        <span className="w-4 h-px bg-gold" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── LEASING SERVICES ── */}
      <RevealWrapper>
        <section className="bg-white text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="mb-16">
              <SectionHeader 
                eyebrow="Leasing" 
                title={<>Residential Leasing Services for <em className="italic text-gold">Landlords &amp; Tenants</em></>} 
              />
              <p className="text-base text-mid font-light leading-[1.8] max-w-[800px] mt-6">
                At Emlak Realty, we position rental properties to attract qualified, financially reliable tenants through targeted exposure, data-driven pricing, and professional marketing that elevates your property above competing residential real estate listings.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                { title: 'Reduced Vacancy Risk', desc: 'Targeted exposure attracts qualified tenants faster' },
                { title: 'End-to-End Leasing Management', desc: 'Full service from listing to signed lease' },
                { title: 'Qualified Tenant Screening', desc: 'Financially reliable tenants, vetted thoroughly' },
                { title: 'Reliable Rental Performance', desc: 'Data-driven pricing for consistent income' },
              ].map((svc, i) => (
                <div key={i} className="card-accent bg-white p-8 transition-all duration-300 hover:bg-gold/5 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,.06)] group border border-dark/[.06]">
                  <h3 className="font-serif text-lg font-normal mb-3 text-dark group-hover:text-gold transition-colors">{svc.title}</h3>
                  <p className="text-[13px] text-mid font-light leading-[1.6] mb-0">{svc.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-10 border-t border-gold/[.18] text-center">
              <p className="font-serif text-xl italic text-gold">
                Partner With Emlak Realty And Gain Professional Residential Real Estate Brokerage Focused On Securing The Right Property For You
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── WHY TRUST US ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-end max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
              <div>
                <SectionHeader 
                  eyebrow="Advantage" 
                  title={<>Expertise, Positioning &amp; <em className="italic text-gold">Premium Negotiation</em></>} 
                  light={true}
                />
                <p className="text-base text-white/[.4] font-light leading-[1.8] mt-6">
                  Work with experienced residential real estate brokers who understand how to extract maximum value from the market while minimizing your exposure.
                </p>
              </div>
              <div className="space-y-0">
                {[
                  'Strategic Market Analysis',
                  'Strong Negotiation',
                  'Transparent Communication',
                  'Personalized Client Experience',
                  'Seamless Closing Process'
                ].map((item, i) => (
                  <div key={i} className="svc-line flex items-center gap-6 py-5 border-b border-white/[.08] text-[15px] text-white/[.6] font-light transition-all duration-300 hover:text-gold hover:pl-2 first:border-t first:border-white/[.08]">
                    <span className="text-gold font-medium tracking-[.2em] text-[10px]">0{i+1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 border-t border-white/[.08] pt-12">
              <p className="text-[16px] font-light text-white/[.55] leading-[1.8]">
                Our reputation is built on meticulous preparation, professional expertise, and consistently measurable results that clients can trust.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection 
        eyebrow="Let's Make Your Next Move the Right One"
        title='Ready to find your <em className="italic text-gold">dream home?</em>'
        subtitle="Partner with Emlak Realty for professional residential real estate brokerage focused on securing the right property for you."
        buttonText="Schedule a Consultation"
      />
    </main>
  );
}
