'use client';
import { useState } from 'react';
import RevealWrapper from '@/components/ui/RevealWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

const faqs = [
  {
    q: 'What types of residential properties do you help clients buy or sell?',
    a: 'We work with single-family houses, condos, townhouses, and luxurious houses. Our team assists in pairing each of our clients with a property that meets their lifestyle and budget.',
  },
  {
    q: 'How do you determine the right asking price for a home?',
    a: 'We review local market trends and similar sales made in the recent past. This aids us in making your home competitive to have the highest number of buyers interested.',
  },
  {
    q: 'Can first-time buyers benefit from your services?',
    a: 'Yes, we take first-time buyers through the entire process. We simplify the buying of a house by clarifying financing, inspections, and negotiations.',
  },
  {
    q: 'How long does it usually take to sell a residential property?',
    a: 'The timeline depends on market conditions and pricing strategy. Well-prepared homes often attract stronger offers more quickly.',
  },
  {
    q: 'Do you help with property negotiations?',
    a: 'Yes, we negotiate in order to safeguard your best interest. We aim to obtain good prices and conditions for your transaction.',
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
