import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Users } from 'lucide-react';

import { useScrollToSection } from '@/hooks/use-scroll-to-section';
import { useViewportSize } from '@/hooks/use-viewport-size';

import { Reveal } from '@/components/ui/reveal';

export const MobileHero = () => {
  const scrollToSection = useScrollToSection();
  const { width, height } = useViewportSize();

  const showExtraText = height && height >= 750 && width && width <= 800;
  const showSecondExtra = height && height >= 850 && width && width <= 800;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <h1>We Build Digital Solutions</h1>
        <Image
          src="/images/office-desktop2.webp"
          alt="Office background"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 480px) 300px, 100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center text-center">
        <Reveal delay={100} className="w-full">
          <h1 className="flex flex-col items-center justify-center gap-2 sm:gap-4 font-bold tracking-tight font-['Playfair_Display',serif] mb-4 leading-extra-tight text-4xl sm:text-5xl md:text-7xl">
            <span className="outline-text-white word-nowrap">
              We Build
            </span>
            <span className="bg-linear-to-r py-2 from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="text-white">
              Solutions
            </span>
          </h1>
        </Reveal>

        <Reveal delay={150} className="max-w-2xl my-6">
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            High-performance web applications that drive business results through exceptional user
            experiences.
          </p>
        </Reveal>

        {/* Extra value proposition – shown on taller screens */}
        {showExtraText && (
          <Reveal delay={200} className="max-w-xl mb-8">
            <p className="text-sm text-gray-300">
              You're not just getting a website. You're getting over 15 years of expertise applied to your unique vision—with the focused attention your project deserves.
            </p>
          </Reveal>
        )}

        {/* Optional second extra section for very tall screens */}
        {showSecondExtra && (
          <Reveal delay={220} className="max-w-xl mb-8">
            <p className="text-sm text-gray-300">
              We partner with you every step of the way, ensuring your digital presence stands out.
            </p>
          </Reveal>
        )}

        {/* CTA Buttons – about button appears on taller screens */}
        <Reveal delay={250} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <Link
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            Get started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group px-6 py-3 border-2 border-white/80 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            About Us
            <Users className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
};
