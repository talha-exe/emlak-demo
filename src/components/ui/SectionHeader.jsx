export default function SectionHeader({ eyebrow, title, light = false, className = "" }) {
  return (
    <div className={className}>
      <div className={`eyebrow-line flex items-center gap-3.5 text-[11px] tracking-[.26em] uppercase text-gold font-medium mb-4`}>
        {eyebrow}
      </div>
      <h2 className={`font-serif text-[clamp(38px,4.8vw,64px)] font-light leading-[1.05] mb-[18px] ${light ? 'text-white' : 'text-dark'}`}>
        {title}
      </h2>
    </div>
  );
}
