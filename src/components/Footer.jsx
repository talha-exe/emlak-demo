import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-2 py-14 px-[80px] flex items-center justify-between border-t border-white/[.04] max-[1100px]:px-7 max-[1100px]:py-11 max-[1100px]:flex-col max-[1100px]:gap-3 max-[1100px]:text-center">
      <Link href="/" className="font-serif text-[22px] font-normal tracking-[.2em] text-white uppercase no-underline">
        Emlak<span className="text-gold">.</span>Realty
      </Link>
      <span className="text-xs text-white/20 tracking-[.1em]">emlakrealty.com</span>
    </footer>
  );
}
