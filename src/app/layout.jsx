import { IBM_Plex_Serif, Outfit, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Outfit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Emlak Realty — Luxury Real Estate & Strategic Investments',
  description: 'Emlak Realty: We invest in people, relationships & value. Luxury residences, commercial assets, development opportunities & strategic investments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans bg-dark text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
