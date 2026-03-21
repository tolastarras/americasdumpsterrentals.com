'use client';

import Image from 'next/image';
import Link from 'next/link';

import { CheckCircle, FilePen, Phone } from 'lucide-react';

import heroDumpster from '@/assets/hero-dumpster.png';
import { COMPANY, HERO } from '@/constants';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// const openCalendly = () => {
//   if (window.Calendly) {
//     window.Calendly.initPopupWidget({ url: COMPANY.calendlyUrl });
//   } else {
//     window.open(COMPANY.calendlyUrl, '_blank');
//   }
// };

const Hero = () => {
  return (
    <section id="home" className="relative lg:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroDumpster}
          alt={HERO.badge}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
      </div>

      <div className="relative container mx-auto px-4 flex items-center justify-start mb-8 lg:mb-0 lg:h-screen pt-24">
        <div className="max-w-2xl">
          <p className="font-heading text-secondary text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
            {HERO.badge}
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            {HERO.headingLine1}
            <br />
            <span className="text-secondary">{HERO.headingLine2}</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl font-medium">
              {HERO.headingLine3}
            </span>
          </h1>
          <p
            className="bg-black/60 lg:bg-transparent text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg font-body animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {HERO.description}{' '}
            <span className="text-secondary font-bold text-xl">{HERO.startingPrice}</span>
            {HERO.descriptionSuffix}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {/* <button
              // onClick={openCalendly}
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-md transition-colors"
            >
              {HERO.ctaPrimary}
              <ArrowRight className="h-5 w-5" />
            </button> */}
            <Link
              href='/#contact'
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-md transition-colors"
            >
              <FilePen className="h-5 w-5" />
              {HERO.ctaPrimary}
            </Link>
            <Link
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 hover:border-secondary text-primary-foreground hover:text-secondary font-heading text-lg tracking-wider px-8 py-4 rounded-md transition-colors"
            >
              <Phone className="h-5 w-5" />
              {HERO.ctaSecondary}
            </Link>
          </div>

          <div className="hidden lg:block mt-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-primary-foreground/80 max-w-2xl font-body animate-fade-in-up">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                Fast, affordable & reliable service.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                All inclusive, No hidden fees.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                Same‑day delivery & pickup available.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                100% customer satisfaction guaranteed.
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-0 bottom-16">
          <div className="bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl max-w-sm w-full flex flex-col items-center">
            <p className="text-orange-400 font-semibold text-2xl mx-0 uppercase">
              Got Questions?
            </p>

            <p className="text-4xl font-semibold mt-2 inline-flex gap-3 text-white/90">
              <Phone size={34} className='text-secondary' />
              {COMPANY.phone}
            </p>

            <Link
              href={`tel:${COMPANY.phoneTel}`}
              className="mt-6 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-16 py-3 rounded-lg font-semibold text-2xl hover:text-white/90"
            >
              {HERO.ctaTerciary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
