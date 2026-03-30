import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

export default function CTASection({ 
  eyebrow = "Take Action", 
  title, 
  subtitle, 
  buttonText, 
  buttonLink = "https://emlakrealty.com", 
  image = "/images/grand-entrance.png",
  id = ""
}) {
  return (
    <RevealWrapper>
      <section id={id} className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 z-[1] bg-dark/80" />
        <div className="relative z-[2] text-center py-20 px-[60px] max-w-[740px]">
          <div className="flex items-center justify-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4">
            {eyebrow}
          </div>
          <h2 className="font-serif text-[clamp(32px,4.8vw,64px)] font-light leading-[1.05] mb-[22px] text-white">
            {typeof title === 'string' ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : title}
          </h2>
          <p className="text-base text-white/[.44] font-light leading-[1.85] max-w-[520px] mx-auto mb-13">
            {subtitle}
          </p>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-gold text-dark text-xs tracking-[.16em] uppercase font-semibold py-[19px] px-14 no-underline transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] border border-gold hover:bg-transparent hover:text-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(192,154,94,.25)] group">
            {buttonText}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </RevealWrapper>
  );
}
