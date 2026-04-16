'use client';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-white/[.04] pt-20 pb-8 px-[80px] max-[1100px]:px-8 max-[1100px]:pt-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-12 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:gap-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="col-span-4 max-[1100px]:w-full">
            <Link href="/" className="inline-block mb-10 transition-opacity hover:opacity-80">
              <img 
                src="/images/white-text-logo.svg" 
                alt="Emlak Realty" 
                className="h-24 w-auto object-contain"
              />
            </Link>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[.2em] uppercase text-white/40 font-medium">Total Free Customer Care</span>
                <a href="tel:5164262910" className="text-[18px] tracking-[.05em] text-white font-serif hover:text-gold transition-colors">(516) 426-2910</a>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[.2em] uppercase text-white/40 font-medium">Need Live Support?</span>
                <a href="mailto:support@emlakrealty.com" className="text-[16px] tracking-[.05em] text-white font-medium hover:text-gold transition-colors">support@emlakrealty.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Links & Newsletter */}
          <div className="col-span-4 max-[1100px]:w-full">
            <div className="mb-12">
              <h4 className="text-[11px] tracking-[.25em] uppercase text-white font-bold mb-8">Quick Links</h4>
              <ul className="flex flex-col gap-4 list-none p-0">
                <li><Link href="/commercial-services" className="text-[10px] tracking-[.15em] uppercase text-white/60 hover:text-gold transition-colors no-underline">Our Services</Link></li>
                <li><Link href="/about" className="text-[10px] tracking-[.15em] uppercase text-white/60 hover:text-gold transition-colors no-underline">Contact Support</Link></li>
              </ul>
            </div>

            <div className="pt-4">
              <h4 className="text-[11px] tracking-[.25em] uppercase text-white font-bold mb-4">Join Our Newsletter</h4>
              <p className="text-[11px] text-white/40 tracking-[.08em] mb-8">Stay updated with the latest real estate news</p>
              <Link href="/about" className="inline-flex items-center gap-3 bg-gold text-dark py-4 px-8 text-[11px] tracking-[.2em] uppercase font-bold no-underline hover:brightness-110 transition-all group">
                Subscribe Now
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 3: Social Feed */}
          <div className="col-span-4 max-[1100px]:w-full">
            <h4 className="text-[11px] tracking-[.25em] uppercase text-white font-bold mb-10">Follow us on social media</h4>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 max-w-full">
              {/* Facebook */}
              <a href="https://www.facebook.com/theemlakrealty#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/emlakrealtyli/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Twitter Bird */}
              <a href="https://x.com/Emlakrealty" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/emlakrealty/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCzuSi_Apm29N-1tJ-hspfDg" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@emlakrealty?lang=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.573.353 3.656 1.012.336.205.642.449.919.722.016.015.031.031.047.046.335.334.618.708.847 1.114V4.74c-.58-.153-1.15-.353-1.688-.598-.444-.202-.857-.45-1.238-.74v12.235c0 4.542-3.682 8.224-8.224 8.224S2 20.179 2 15.637s3.682-8.224 8.224-8.224c.483 0 .95.042 1.402.122v4.195a4.01 4.01 0 0 0-1.402-.254c-2.222 0-4.024 1.802-4.024 4.024s1.802 4.024 4.024 4.024 4.024-1.802 4.024-4.024V0h2.277z"/></svg>
              </a>
              {/* Pinterest */}
              <a href="https://www.pinterest.com/emlakrealty/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.078 3.158 9.412 7.64 11.14-.103-.948-.19-2.408.04-3.443.207-.93 1.338-5.676 1.338-5.676s-.34-.683-.34-1.693c0-1.587.918-2.771 2.065-2.771 1.04 0 1.543.78 1.543 1.71 0 1.046-.665 2.612-.108 4.062s2.03.655 3.102-.693c1.232-1.603 1.635-4.437.03-6.505-2.18-2.612-6.526-2.073-8.196.953-.356.643-.118 2.21.365 2.846.104.13.118.243.088.365-.03.118-.096.39-.126.505-.044.17-.148.207-.34.12-.911-.424-1.481-1.754-1.481-2.82 0-3.32 2.411-6.37 6.958-6.37 3.653 0 6.49 2.599 6.49 6.078 0 3.629-2.288 6.55-5.462 6.55-1.066 0-2.07-.554-2.412-1.208 0 0-.528 2.012-.656 2.503-.236.91-.875 2.049-1.306 2.75 1.013.313 2.088.48 3.203.48 6.621 0 12.017-5.396 12.017-12.017C24.034 5.397 18.637 0 12.017 0z"/></svg>
              </a>
              {/* Snapchat */}
              <a href="https://www.snapchat.com/@emlakrealty?" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.37c-3.154 0-4.99 1.76-4.99 3.593 0 1.2.6 1.763 1.134 2.227l.147.124-.044.155c-.173.613-.243.8-.466.8-.073 0-.154-.02-.276-.07L7.26 9.1c-.24-.1-.383-.153-.483-.153-.293 0-.494.463-.494.887 0 .584.453.942.88 1.192l.065.04.156.09c.285.163.504.3.504.57 0 .285-.23.476-.563.753l-.113.095c-.3.26-.643.553-.643 1 0 .684.597 1.053 1.11 1.053.118 0 .23-.02.324-.037a3.86 3.86 0 0 1 .477-.07c.18 0 .33.098.452.288.547.887 1.758 1.34 3.064 1.34 1.306 0 2.518-.453 3.065-1.34.12-.19.273-.288.452-.288a3.86 3.86 0 0 1 .477.07c.094.02.206.037.323.037.514 0 1.11-.37 1.11-1.053 0-.447-.343-.74-.643-1l-.113-.095c-.333-.277-.563-.468-.563-.753 0-.27.219-.407.504-.57l.156-.09.065-.04c.427-.25.88-.608.88-1.192 0-.424-.202-.887-.494-.887-.1 0-.243.053-.483.153l-.244.1c-.122.05-.203.07-.276.07-.223 0-.293-.187-.466-.8l-.044-.155.147-.124c.534-.464 1.134-1.027 1.134-2.227 0-1.833-1.836-3.593-4.99-3.593z"/></svg>
              </a>
              {/* Zillow */}
              <a href="https://www.zillow.com/profile/haldunyavas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.09l-11 9.41h3v10.5h16v-10.5h3l-11-9.41zm0 3.32l6 5.13v8.55h-12v-8.55l6-5.13z"/></svg>
              </a>
              {/* Yelp */}
              <a href="https://www.yelp.com/biz/long-island-emlak-lake-ronkonkoma-3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.9 14.7l-4.1-1.2c-.3-.1-.4-.4-.3-.6l1.5-3.8c.2-.5-.1-1.1-.6-1.3l-1.6-.6c-.5-.2-1.1.1-1.3.6l-1.5 3.8s-.1.2-.3.2l-2.7-3.1c-.4-.4-1-.5-1.5-.2l-1.4 1c-.5.3-.6.9-.3 1.4l2.7 3.1s-.1.2-.2.2l-4.1.2c-.6 0-1 .5-1 1.1v1.7c0 .6.5 1 .1 1.1l4.1-.2s.2 0 .2.2l-2.2 3.6c-.3.5-.1 1.1.4 1.4l1.5.9c.5.3 1.1.1 1.4-.4l2.2-3.6s.1-.2.3-.2l2.4 3.4c.3.5.9.6 1.4.3l1.5-1c.5-.3.6-.9.3-1.4l-2.4-3.4s.1-.2.2-.2l4.1 1.2c.6.2 1.1-.1 1.3-.6l.7-1.6c.2-.4-.1-1-.6-1.2z"/></svg>
              </a>
              {/* Google */}
              <a href="https://www.google.com/maps/place/EMLAK+REALTY/@40.8193788,-73.1131414,17z/data=!3m1!4b1!4m6!3m5!1s0x89c27fd2efedf00b:0x9e00dbf7c625461f!8m2!3d40.8193788!4d-73.1131414!16s%2Fg%2F11f5r7c5xq?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-white opacity-90 hover:opacity-100 hover:text-gold transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/[.04] flex items-center justify-between max-[1100px]:flex-col max-[1100px]:gap-6 max-[1100px]:text-center">
          <p className="text-[11px] text-white/30 tracking-[.1em]">Copyright © 2026 Emlak Realty. Powered by Emlak Realty</p>
          
          <div className="flex items-center gap-12 max-[1100px]:flex-col max-[1100px]:gap-4">
            <div className="flex gap-6">
              <Link href="/about" className="text-[11px] tracking-[.15em] text-white/50 hover:text-gold transition-colors no-underline">Privacy</Link>
              <Link href="/about" className="text-[11px] tracking-[.15em] text-white/50 hover:text-gold transition-colors no-underline">Terms</Link>
              <Link href="/about" className="text-[11px] tracking-[.15em] text-white/50 hover:text-gold transition-colors no-underline">Sitemap</Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all group"
              aria-label="Scroll to top"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:-translate-y-0.5">
                <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

