'use client';

import Image from 'next/image';

import { CodeSnippet } from '@/components/code-snippet';
import { MobileHero } from '@/components/home/mobile-hero';
import { TextOverlayCard } from '@/components/home/text-overlay-card';
import { ScrollIndicator } from '@/components/scroll-indicator';
import { Reveal } from '@/components/ui/reveal';

export const Hero = () => {
  const stats = [
    { label: 'Years of Experience', title: '15+' },
    { label: 'Technologies', title: '10+' },
    { label: 'Direct Focus', title: '1:1' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900 pt-24 overflow-hidden">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        {/* Mobile Devices */}
        <div className="lg:hidden">
          <MobileHero />
        </div>

        <div className="hidden lg:flex group relative flex-1 flex-col rounded-xl bg-gray-800 overflow-hidden shadow-2xl">
          <Image
            src="/images/office-desktop.webp"
            alt="Office background"
            fill
            className="object-cover object-center transition-transform duration-700 md:group-hover:scale-[1.8]"
            priority
            sizes="100vw"
          />

          <div className="container mt-12 md:group-hover:mt-24 z-100 transition-translate duration-700">
            <Reveal delay={100} fromRight>
              <h1 className="ml-4 xl:ml-50 xl:group-hover:ml-52 transition-translate duration-700 text-3xl md:text-8xl lg:text-7xl font-bold leading-extra-tight tracking-tight font-['Playfair_Display',serif]">
                <span className="outline-text-white md:group-hover:outline-text-primary bg-black/80 md:group-hover:bg-transparent px-3 md:group-hover:px-0 block w-fit transition-all duration-700">We Build</span>
                <div className="inline-flex">
                  <span className="bg-linear-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent lg:inline md:mr-5 lg:mr-3 pb-1">
                    Digital
                  </span>
                  <span className="text-black bg-sky-400/80 px-2 pb-2 lg:text-black/90 lg:group-hover:text-white transition-colors duration-900">Experiences</span>
                </div>
              </h1>
            </Reveal>
          </div>

          {/* Terminal – top‑right corner (static) */}
          <div className="absolute hidden md:block top-4 right-6 z-30 w-48 sm:w-60 md:w-80 lg:w-96">
            <CodeSnippet />
          </div>

          {/* Text overlay card – centered within container */}
          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
            <div className="w-full lg:max-w-xl xl:max-w-2xl px-4 transition-all duration-700 scale-[1.1] lg:scale-[1.15] xl:scale-[0.8] xl:group-hover:scale-[1] origin-center -mt-12 ml-8 lg:group-hover:mt-30 xl:group-hover:mt-18 lg:group-hover:-ml-68 xl:group-hover:-ml-42">
              <TextOverlayCard />
            </div>
          </div>

          {/* Stats – placed at bottom of container, in normal flow */}
          <div className="relative z-10 mt-auto flex justify-center gap-6 p-8">
            {stats.map(({ label, title }, index) => (
              <Reveal key={index} delay={index * 100} className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-400 to-blue-300 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-700 group-hover:duration-700 group-hover:blur-3xl" />
                <div className="relative bg-linear-to-b from-gray-900/80 to-gray-950/90 p-8 rounded-3xl border border-gray-600 hover:border-blue-600/50 transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center justify-center h-full w-56">
                  <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-3">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden xl:block w-full text-center py-6">
        <ScrollIndicator />
      </div>
    </div>
  );
};
