'use client';
import { useState } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    q: 'What services does Emlak Realty provide?',
    a: 'Emlak Realty provides residential and commercial real estate services, property management, selling of business and land development support. We assist clients to make sure decisions during the entire real estate process are made confidently.',
  },
  {
    q: 'Do you work with both buyers and sellers?',
    a: 'Yes, we work with buyers and sellers of various types of property. Each client can obtain individual advice on how to obtain the best possible result, which is our work.',
  },
  {
    q: 'How can Emlak Realty help first-time clients?',
    a: 'We make it easier by describing each of the steps. This helps first-time customers feel knowledgeable and at ease during the transaction.',
  },
  {
    q: 'What makes Emlak Realty different from other agencies?',
    a: 'Our emphasis lies in customized service, market awareness and long-term customer relationships. We aim at providing solutions that suit individual needs of our clients.',
  },
  {
    q: 'How does Emlak Realty help homebuyers find the right property?',
    a: 'Emlak Realty works closely with buyers to understand their budget, lifestyle, and long-term goals before recommending properties that align with their needs. Detailed market insight and personalized support help simplify the search while ensuring buyers make confident decisions in competitive markets.',
  },
  {
    q: 'Do you provide investment property guidance?',
    a: 'Yes, we assist our clients to discover investment opportunities that suit their financial objectives. We also assess market potential so as to aid more intelligent decisions.',
  },
  {
    q: 'Is multi-family real estate a good investment option?',
    a: 'Multi-family properties can offer reliable rental income and stronger scalability compared to single-unit investments. When selected carefully, they may provide stable returns and long-term value in growing markets.',
  },
  {
    q: 'Can Emlak Realty help buy or sell businesses?',
    a: 'Yes, Emlak Realty helps clients buy and sell businesses by managing valuations, confidential marketing, buyer screening, and negotiations. The process is structured to protect the business while maximizing transaction value.',
  },
  {
    q: 'Can Emlak Realty help identify profitable commercial opportunities?',
    a: 'Yes, Emlak Realty analyzes location trends, tenant demand, and market performance to identify properties with strong income and appreciation potential. This helps investors make informed purchasing decisions with greater confidence.',
  },
  {
    q: 'How do I get started with Emlak Realty?',
    a: 'You can begin by contacting our team for a consultation. We talk about your objectives and can advise you on the optimal way to move in regards to your property requirements.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <RevealWrapper>
      <section className="bg-dark text-white py-[120px] px-[80px] max-[1100px]:py-20 max-[1100px]:px-[28px]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-[1fr_1.8fr] gap-24 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-12">

            {/* Left label */}
            <div>
              <SectionHeader
                title={<>Frequently Asked <em className="italic text-gold">Questions</em></>}
                light={true}
              />
            </div>

            {/* Right accordion */}
            <div className="divide-y divide-white/[.07]">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setOpen(i)}
                    onMouseLeave={() => setOpen(null)}
                    className="group cursor-default"
                  >
                    <div className="w-full flex items-center justify-between gap-6 py-7 text-left">
                      <span className={`font-serif text-[17px] leading-[1.4] transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-white'}`}>
                        {item.q}
                      </span>
                      <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-gold bg-gold/10 rotate-45' : 'border-white/20'}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1v10M1 6h10" stroke={isOpen ? '#C09A5E' : 'currentColor'} strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </div>

                    <div
                      className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)]"
                      style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="text-[15px] text-white/50 font-light leading-[1.8] pb-7 pr-14">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
