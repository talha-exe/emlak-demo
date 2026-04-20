'use client';
import { useState } from 'react';

const stories = [
  {
    quote: 'Emlak Realty helped us sell our property 30% above asking price in just 18 days. Their market intelligence was unmatched.',
    name: 'Sarah M.',
    initials: 'SM',
    result: '30% above asking · 18 days',
    type: 'Residential Sale',
  },
  {
    quote: 'Their strategic approach to our commercial portfolio restructuring generated a 22% increase in annual returns within the first year.',
    name: 'David K.',
    initials: 'DK',
    result: '22% ROI increase · Year 1',
    type: 'Commercial Investment',
  },
  {
    quote: 'From land acquisition to project completion, Emlak Realty guided us seamlessly. Our development project was delivered on time and under budget.',
    name: 'Michael & Priya T.',
    initials: 'MP',
    result: 'Under budget · On time delivery',
    type: 'Development Project',
  },
  {
    quote: 'As first-time investors, we were overwhelmed. Emlak Realty simplified the BRRRR process and helped us build a 4-property portfolio in 14 months.',
    name: 'James R.',
    initials: 'JR',
    result: '4 properties · 14 months',
    type: 'BRRRR Strategy',
  },
  {
    quote: 'Their transparent communication made a complex multi-family acquisition feel effortless. We closed on a 12-unit building with confidence.',
    name: 'Amanda L.',
    initials: 'AL',
    result: '12-unit acquisition · Seamless close',
    type: 'Multifamily',
  },
];

function GoogleG() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google Review">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-[2px] mt-[3px]">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C09A5E">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function StoryCard({ story }) {
  return (
    <div className="bg-white relative overflow-hidden flex flex-col h-full transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.08)] group border border-dark/[.06] hover:border-gold/20 p-8 max-[640px]:p-6">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-accent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

      {/* Header: avatar + name + stars | Google logo */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0">
            <span className="text-[11px] font-bold text-dark tracking-[.06em]">{story.initials}</span>
          </div>
          <div>
            <p className="text-[14px] font-semibold text-dark leading-tight">{story.name}</p>
            <StarRating />
          </div>
        </div>
        <div className="shrink-0 ml-2 mt-0.5">
          <GoogleG />
        </div>
      </div>

      {/* Type */}
      <p className="text-[10px] tracking-[.18em] uppercase text-gold font-medium mb-4">{story.type}</p>

      {/* Quote */}
      <p className="font-serif text-base italic text-mid leading-[1.75] mb-6 flex-1">&ldquo;{story.quote}&rdquo;</p>

      {/* Result */}
      <div className="border-t border-gold/[.18] pt-4">
        <p className="text-xs text-gold font-medium tracking-[.08em]">{story.result}</p>
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const total = stories.length;

  const navigate = (idx) => {
    const next = ((idx % total) + total) % total;
    setFading(true);
    setTimeout(() => {
      setCurrent(next);
      setFading(false);
    }, 180);
  };

  const fadeClass = `transition-opacity duration-200 ${fading ? 'opacity-0' : 'opacity-100'}`;

  const get = (offsets) => offsets.map(o => (current + o) % total);

  return (
    <div>
      {/* ≥ 640px: 3 columns */}
      <div className={`hidden sm:grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 ${fadeClass}`}>
        {get([0, 1, 2]).map((idx, pos) => (
          <div key={idx} className={pos === 2 ? 'max-[900px]:hidden' : ''}>
            <StoryCard story={stories[idx]} />
          </div>
        ))}
      </div>

      {/* < 640px: 1 column */}
      <div className={`sm:hidden ${fadeClass}`}>
        <StoryCard story={stories[current]} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={() => navigate(current - 1)}
          aria-label="Previous testimonial"
          className="w-10 h-10 border border-dark/20 flex items-center justify-center text-dark/50 hover:border-gold hover:text-gold transition-all duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-dark/20 hover:bg-gold/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => navigate(current + 1)}
          aria-label="Next testimonial"
          className="w-10 h-10 border border-dark/20 flex items-center justify-center text-dark/50 hover:border-gold hover:text-gold transition-all duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
