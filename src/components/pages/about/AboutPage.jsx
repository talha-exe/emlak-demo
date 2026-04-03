import Image from 'next/image';
import Link from 'next/link';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="h-[85vh] min-h-[600px] max-[640px]:min-h-[500px] relative overflow-hidden flex flex-col justify-end p-[0_80px_100px] max-[1100px]:p-[0_28px_64px]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-hero.png" alt="Luxury real estate office" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/20 via-dark/60 via-50% to-dark" />
        <div className="hero-grid absolute inset-0 z-[2] pointer-events-none" />
        <div className="relative z-[3] max-w-[820px]">
          <div className="eyebrow-line flex items-center gap-4 text-[11px] tracking-[.32em] uppercase text-gold font-medium mb-6 animate-fadeUp-d1">About Emlak Realty</div>
          <h1 className="font-serif text-[clamp(32px,5.5vw,72px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-6 animate-fadeUp-d2">
            We Turn Real Estate Opportunities Into <em className="italic text-gold">Lasting Value</em> For Every Client
          </h1>
          <p className="font-serif text-[clamp(15px,2vw,22px)] font-light italic text-white/[.55] mb-10 animate-fadeUp-d3 max-w-[640px]">
            With market insight, strategic guidance, and a client-first approach, we make every move count.
          </p>
          <Link href="#story" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-12 no-underline transition-all duration-300 border border-gold animate-fadeUp-d4 hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.2)] group">
            Discover How We Can Help You
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
              <span className="w-[30px] h-px bg-gold" />Our Foundation<span className="w-[30px] h-px bg-gold" />
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light text-dark leading-[1.05]">Emlak Realty&apos;s <em className="italic text-gold">Core Values</em></h2>
          </div>
          <div className="grid grid-cols-2 gap-[2px] max-[640px]:grid-cols-1">
            {[
              { icon: '♦', title: 'Client-Centered', desc: 'Our clients are at the center of every strategy we create. Whether working through a full service real estate brokerage or with a dedicated real estate agent, every decision is tailored to meet their goals.' },
              { icon: '◈', title: 'Transparent', desc: 'We foster trust by being transparent and communicating openly, where each step in the real estate process or the commercial real estate brokerage service is open and clear.' },
              { icon: '⬡', title: 'Strategic', desc: 'With market intelligence and experience, we develop strategies to make best use of value and long term potential in residential and commercial real estate.' },
              { icon: '◆', title: 'Diverse', desc: 'Through our expertise in various types of property and markets, residential property, and commercial real estate investments, we will advise clients on the off-market investment opportunities that support their objectives.' },
            ].map((val, i) => (
              <div key={i} className="card-accent relative overflow-hidden bg-white p-12 transition-all duration-400 cursor-default hover:bg-dark hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.12)] group max-[640px]:p-8">
                <div className="w-12 h-12 border border-gold/[.32] flex items-center justify-center mb-6 text-gold text-lg transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">{val.icon}</div>
                <h3 className="font-serif text-[26px] font-normal text-dark mb-4 transition-colors duration-400 group-hover:text-gold-light">{val.title}</h3>
                <p className="text-[15px] text-mid font-light leading-[1.75] transition-colors duration-400 group-hover:text-white/[.45]">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      {/* ── OUR STORY ── */}
      <RevealWrapper>
        <section id="story" className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[820px] mx-auto">
            <SectionHeader 
              eyebrow="Our Journey" 
              title={<>Our <em className="italic text-gold">Story</em></>} 
              light={true} 
              className="mb-12"
            />
            <div className="space-y-8">
              <p className="font-serif text-[clamp(18px,2.2vw,24px)] font-light italic text-gold-light leading-[1.6]">
                Emlak Realty is built on a clear purpose of bringing structure, integrity, and strategy back to real estate.
              </p>
              <div className="w-[52px] h-px bg-gold/40" />
              <p className="text-base text-white/[.5] font-light leading-[1.9]">
                I started this company with a simple belief: people and principles come first. Building it wasn&apos;t easy—every step brought challenges, obstacles, and moments that tested my resolve. But I stayed committed. I faced each hurdle head-on, never compromising on service, and always putting my clients&apos; needs first.
              </p>
              <p className="text-base text-white/[.5] font-light leading-[1.9]">
                For me, success isn&apos;t just about transactions—it&apos;s about creating meaningful connections, building trust, and delivering results that truly matter. Every effort, every decision, is focused on one goal of making every client experience exceptional.
              </p>
              <p className="text-base text-white/[.5] font-light leading-[1.9]">
                Our mission is to empower clients with confidence and clarity, providing exceptional service while fostering relationships built on trust, integrity, and lasting value. We strive to turn every challenge into an opportunity and every interaction into a meaningful experience.
              </p>
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── MISSION STATEMENTS ── */}
      <RevealWrapper>
        <section className="bg-dark-2 py-[100px] px-[80px] max-[1100px]:py-16 max-[1100px]:px-[28px]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
                <span className="w-[30px] h-px bg-gold" />Mission<span className="w-[30px] h-px bg-gold" />
              </div>
              <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-light text-white leading-[1.05]">Mission <em className="italic text-gold">Statements</em></h2>
            </div>
            <div className="border-l-2 border-gold bg-white/[.03] backdrop-blur-sm p-10 max-[640px]:p-6">
                <p className="font-serif text-[clamp(16px,1.8vw,22px)] font-light italic text-white/[.7] leading-[1.7]">We strive to transform real estate experiences through trust, transparency, and strategic insight, empowering clients to make confident decisions.</p>
              </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── OUR VALUES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[900px] mx-auto">
            <SectionHeader 
              eyebrow="Principles" 
              title={<>Our <em className="italic text-gold">Values</em></>} 
              className="mb-14"
            />
            <div className="space-y-0">
              {[
                { title: 'Integrity', desc: 'Every transaction through our real estate brokerage is handled with honesty and transparency.' },
                { title: 'Insight', desc: 'Our team leverages deep market knowledge to advise on residential and commercial real estate opportunities.' },
                { title: 'Relationships', desc: 'We prioritize long-term partnerships with clients, investors, and real estate agents.' },
                { title: 'Value-Driven', desc: 'Every strategy is designed to maximize returns across residential and commercial top-rated real estate broker deals.' },
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-8 py-8 border-b border-gold/[.18] first:border-t first:border-t-gold/[.18] transition-all duration-300 hover:pl-4 group max-[640px]:flex-col max-[640px]:gap-3">
                  <h3 className="font-serif text-[24px] font-normal text-dark min-w-[200px] shrink-0 transition-colors duration-300 group-hover:text-gold max-[640px]:min-w-0">{val.title}</h3>
                  <p className="text-[15px] text-mid font-light leading-[1.75]">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealWrapper>

      {/* ── OUR APPROACH ── */}
      <RevealWrapper>
        <div className="grid grid-cols-2 min-h-[480px] max-[1100px]:grid-cols-1">
          <div className="bg-dark flex flex-col justify-center py-[88px] px-[72px] max-[1100px]:py-14 max-[1100px]:px-7">
            <div className="eyebrow-line flex items-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">How We Work</div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white leading-[1.05] mb-8">Our <em className="italic text-gold">Approach</em></h2>
            <p className="text-base text-white/[.5] font-light leading-[1.9]">
              As a trusted and leading full-service real estate brokerage, we guide clients from property identification to execution with precision, transparency, and professionalism. Our real estate agents ensure clear communication and actionable insights at every stage, making complex transactions seamless.
            </p>
          </div>
          <div className="relative overflow-hidden group max-[1100px]:h-[360px]">
            <Image src="/images/luxury-interior.png" alt="Real estate consultation" fill className="object-cover transition-transform duration-800 ease-[cubic-bezier(.4,0,.2,1)] group-hover:scale-105" />
          </div>
        </div>
      </RevealWrapper>

      {/* ── THE JOURNEY CONTINUES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
              <span className="w-[30px] h-px bg-gold" />Forward<span className="w-[30px] h-px bg-gold" />
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-dark leading-[1.05] mb-10">The Journey <em className="italic text-gold">Continues..</em></h2>
            <div className="w-[52px] h-px bg-gold mx-auto mb-10" />
            <p className="text-base text-mid font-light leading-[1.9] mb-6">
              At Emlak Realty, we continuously adapt to evolving markets and client goals. Whether working with residential clients, commercial real estate brokerages, or strategic investors, we remain committed to uncovering opportunities, building value, and providing forward-thinking solutions that drive long-term success.
            </p>
            <p className="font-serif text-[clamp(16px,1.8vw,22px)] font-light italic text-gold leading-[1.6]">
              The journey of smart, investor-focused real estate doesn&apos;t end—it evolves with every decision we make.
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── MEET THE TEAM ── */}
      <RevealWrapper>
        <section className="bg-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
              <span className="w-[30px] h-px bg-gold" />Our People<span className="w-[30px] h-px bg-gold" />
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light text-white leading-[1.05] mb-10">Meet the <em className="italic text-gold">Team</em></h2>
            <div className="w-[52px] h-px bg-gold mx-auto mb-10" />
            <p className="font-serif text-[clamp(16px,1.8vw,22px)] font-light italic text-white/[.4] leading-[1.6]">
              Short bios + photos of key team
            </p>
          </div>
        </section>
      </RevealWrapper>

      {/* ── SUCCESS STORIES ── */}
      <RevealWrapper>
        <section className="bg-cream text-dark py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-7">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
              <span className="w-[30px] h-px bg-gold" />Results<span className="w-[30px] h-px bg-gold" />
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light text-dark leading-[1.05]">Our Success <em className="italic text-gold">Stories</em></h2>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto max-[1100px]:grid-cols-1">
            {[
              { quote: 'Emlak Realty helped us sell our property 30% above asking price in just 18 days. Their market intelligence was unmatched.', name: 'Sarah M.', result: '30% above asking · 18 days', type: 'Residential Sale' },
              { quote: 'Their strategic approach to our commercial portfolio restructuring generated a 22% increase in annual returns within the first year.', name: 'David K.', result: '22% ROI increase · Year 1', type: 'Commercial Investment' },
              { quote: 'From land acquisition to project completion, Emlak Realty guided us seamlessly. Our development project was delivered on time and under budget.', name: 'Michael & Priya T.', result: 'Under budget · On time delivery', type: 'Development Project' },
              { quote: 'As first-time investors, we were overwhelmed. Emlak Realty simplified the BRRRR process and helped us build a 4-property portfolio in 14 months.', name: 'James R.', result: '4 properties · 14 months', type: 'BRRRR Strategy' },
              { quote: 'Their transparent communication made a complex multi-family acquisition feel effortless. We closed on a 12-unit building with confidence.', name: 'Amanda L.', result: '12-unit acquisition · Seamless close', type: 'Multifamily' },
            ].map((story, i) => (
              <div key={i} className={`bg-white p-10 relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.08)] group ${i >= 3 ? 'max-[1100px]:block' : ''} max-[640px]:p-7`}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-accent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                <p className="text-[10px] tracking-[.18em] uppercase text-gold font-medium mb-6">{story.type}</p>
                <p className="font-serif text-base italic text-mid leading-[1.75] mb-8">&ldquo;{story.quote}&rdquo;</p>
                <div className="border-t border-gold/[.18] pt-5">
                  <p className="text-sm font-medium text-dark mb-1">{story.name}</p>
                  <p className="text-xs text-gold font-medium tracking-[.08em]">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealWrapper>

      <CTASection 
        eyebrow="Take Action"
        title='Ready to maximize your real estate <em className="italic text-gold">potential?</em>'
        subtitle="Connect with our experts today and take the first step toward smarter, more profitable decisions."
        buttonText="Contact Our Experts"
      />
    </main>
  );
}
