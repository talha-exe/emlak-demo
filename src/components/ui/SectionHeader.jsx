export default function SectionHeader({ eyebrow, title, subtitle, light = false, className = "" }) {
  return (
    <div className={className}>
      <div className={`eyebrow-line flex items-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4`}>
        {eyebrow}
      </div>
      <h2 className={`font-serif text-[clamp(32px,4.5vw,56px)] font-light leading-[1.05] mb-[18px] ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-serif text-[clamp(16px,2vw,22px)] font-light italic mb-8 max-w-[640px] ${light ? 'text-white/50' : 'text-mid/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
