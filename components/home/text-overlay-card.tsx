import Link from 'next/link';

import { ArrowRight, CheckCircle, User } from 'lucide-react';

import { useScrollToSection } from '@/hooks/use-scroll-to-section';

import { Reveal } from '@/components/ui/reveal';

export const TextOverlayCard = () => {
  const scrollToSection = useScrollToSection();
  const features = ['SEO-Optimized', 'Mobile-First', 'Conversion-Focused UI/UX'];

  return (
    <div className="w-full">
      <Reveal delay={150}>
        <p className="mt-36 -ml-2 md:mt-0 text-sm md:text-xl text-gray-200">
          High-performance web applications that drive business results through exceptional user
          experiences.
        </p>
      </Reveal>

      <Reveal delay={200} className="hidden md:flex flex-wrap gap-3 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-200 text-sm md:text-base">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-400 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </Reveal>

      <Reveal delay={250} className="flex flex-col sm:flex-row gap-4 mt-10 mb-6">
        <Link
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
          className="group px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 cursor-pointer"
        >
          Get started
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="hidden md:inline-flex group px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl items-center justify-center gap-3 cursor-pointer"
        >
          <User className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          About Us
        </Link>
      </Reveal>

      <Reveal delay={300} className='hidden lg:flex'>
        <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-4">
          You're not just getting a website. You're getting{' '}
          <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            over 15 years of expertise
          </span>{' '}
          applied to your unique vision—with the focused attention your project deserves.
        </p>
      </Reveal>
    </div>
  );
};
