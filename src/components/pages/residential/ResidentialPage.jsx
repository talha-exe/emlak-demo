import Image from 'next/image';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
import ModalButton from '@/components/ui/ModalButton';

const propertyTypes = [
  {
    title: 'Luxury Homes',
    desc: 'Modern, high-end residences with premium features, requiring strategic evaluation of contracts, timelines, and upgrade costs.',
  },
  {
    title: 'Single-Family Homes',
    desc: 'Ideal for buyers seeking privacy, space, and long-term stability, providing full ownership of the land and structure with flexibility for customization.',
  },
  {
    title: 'Townhouses',
    desc: 'Multi-level homes combining independent ownership with community living and long-term appreciation potential.',
  },
  {
    title: 'Condominiums',
    desc: 'Low-maintenance ownership with shared amenities, requiring careful review of HOA fees, rules, and financial health.',
  },
  {
    title: 'Co-ops',
    desc: 'Ownership through shares in a corporation, with structured approvals, financial requirements, and strict board guidelines.',
  },
];

const expertiseItems = [
  'Strategic Market Analysis',
  'Strong Negotiation',
  'Transparent Communication',
  'Property Search & Presentation',
  'Personalized Client Experience',
  'Seamless Closing Process',
];

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
          <h1 className="font-serif text-[clamp(32px,5.5vw,76px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-4 animate-fadeUp-d2">
            Residential <em className="italic text-gold">Services</em>
          </h1>
          <p className="font-serif text-[clamp(18px,2.6vw,30px)] font-normal text-white mb-4 animate-fadeUp-d3 max-w-[740px] leading-[1.3]">
            Primary Residences, Investment Properties, and More — <em className="italic text-gold">All in One Place</em>
          </p>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[640px]">
            A Value-Focused Approach To Residential Buy &amp; Sell
          </p>
          <ModalButton className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 transition-all duration-300 border border-gold animate-fadeUp-d4 hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
            Schedule a consultation
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </ModalButton>
        </div>
      </section>

      {/* ── OUR EXPERTISE ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1000px] mx-auto grid grid-cols-[1fr_1.5fr] gap-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
            <SectionHeader
              title="Our Expertise"
            />
            <div>
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
            {propertyTypes.map((type, i) => (
              <div key={i} className="bg-white/[.03] p-10 backdrop-blur-sm transition-all duration-400 hover:bg-gold/[.08] hover:-translate-y-1 group border-r border-b border-white/[.1] first:border-l">
                <div className="font-serif text-[60px] font-light text-white/20 leading-none mb-6">0{i + 1}</div>
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
                Let Our Real Estate Agents Guide You Through Every Property Detail for <em className="italic text-gold">Smarter &amp; Confident Decisions</em>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 max-[900px]:grid-cols-1">
              {/* FOR BUYERS */}
              <div className="bg-white p-12 border-t-2 border-gold shadow-[0_12px_40px_rgba(0,0,0,.04)]">
                <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-dark mb-8 leading-[1.1]">Buy and Secure the <br /><em className="italic text-gold">Right Value</em></h2>
                <p className="text-[15px] text-mid font-light leading-[1.8] mb-10">
                  Buying a home is one of the most important financial decisions you will ever make. Emlak Realty&apos;s dedicated residential real estate agents help you secure the right value through:
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
                <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-light text-white mb-8 leading-[1.1]">Sell with Precision for <br /><em className="italic text-gold">Maximum Return</em></h2>
                <p className="text-[15px] text-white/[.45] font-light leading-[1.8] mb-10">
                  In the residential real estate market, we position your residential real estate property to attract qualified buyers through targeted exposure and professional presentation.
                </p>
                <ul className="space-y-4">
                  {[
                    'Recent comparable sales and timing',
                    'Current active competition',
                    'Neighborhood demand trends',
                    'Buyer behavior insights',
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-4 text-[14px] font-light text-white/80">
                      <span className="w-4 h-px bg-gold" /> {point}
                    </li>
                  ))}
                </ul>
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
                title={<>Residential Leasing Services for <em className="italic text-gold">Landlords &amp; Tenants</em></>}
              />
              <p className="text-base text-mid font-light leading-[1.8] max-w-[800px] mt-6">
                At Emlak Realty, we help landlords find the right tenants and maximize rental value, while guiding tenants to suitable homes with fair terms. From listing to lease agreements, we make the entire process easy and efficient for everyone.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
              {[
                'Reduced Vacancy Risk',
                'End-to-End Leasing Management',
                'Qualified Tenant Screening',
                'Reliable Rental Performance',
              ].map((title, i) => (
                <div key={i} className="card-accent bg-white p-8 transition-all duration-300 hover:bg-gold/5 hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,.06)] group border border-dark/[.06]">
                  <h3 className="font-serif text-lg font-normal text-dark group-hover:text-gold transition-colors">{title}</h3>
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

      {/* ── EXPERTISE SECTION ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-end max-[1100px]:grid-cols-1 max-[1100px]:gap-10">
              <div>
                <SectionHeader
                  title={<>Expertise, Positioning &amp; <em className="italic text-gold">Negotiation</em></>}
                  light={true}
                />
                <p className="text-base text-white/[.4] font-light leading-[1.8] mt-6">
                  Work with an experienced brokerage that understands how to extract maximum value from the market while minimizing your exposure. Our reputation is built on meticulous preparation, professional expertise, and consistently measurable results that clients can trust.
                </p>
              </div>
              <div className="space-y-0">
                {expertiseItems.map((item, i) => (
                  <div key={i} className="svc-line flex items-center gap-6 py-5 border-b border-white/[.08] text-[15px] text-white/[.6] font-light transition-all duration-300 hover:text-gold hover:pl-2 first:border-t first:border-white/[.08]">
                    <span className="text-gold font-medium tracking-[.2em] text-[10px]">0{i + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── FINAL CTA ── */}
      <CTASection
        title="Ready to Find Your Dream Home."
        subtitle=""
        buttonText="Schedule a Consultation"
      />
    </main>
  );
}
