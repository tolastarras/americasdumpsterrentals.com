'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

import { useScrollToSection } from '@/hooks/use-scroll-to-section';

import { Reveal } from '@/components/ui/reveal';

import { FEATURES as features } from '@/constants/site-data';

export const About = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="py-12 md:py-24 bg-linear-to-b from-[#f0f4ff] to-white overflow-hidden">
      <div className="container mx-auto">
        {/* Three‑part layout: headline, image, description */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-8 lg:gap-0 items-center">
          {/* 1. Headline (appears first on mobile, top‑left on desktop) */}
          <Reveal className="order-1 lg:col-span-1 lg:row-span-1">
            <div className="group">
              <h2 className="font-bold tracking-tight">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-br from-gray-700 to-gray-900 bg-clip-text text-transparent select-none md:mb-6 xl:mb-0">
                    About
                  </span>
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-transparent [-webkit-text-stroke:3px_#3c83f6] transition-all duration-300 group-hover:scale-110 group-hover:rotate-4 cursor-default">
                    us
                  </span>
                </div>
              </h2>
            </div>
          </Reveal>

          {/* 2. Image (appears second on mobile, right column spanning both rows on desktop) */}
          <Reveal delay={200} fromRight className="order-2 lg:col-start-2 lg:row-span-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/60 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/40 rounded-full blur-3xl" />

              {/* Main image container */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl group border border-gray-400">
                <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 w-125 h-125" />
                <Image
                  src="/images/about-us.webp"
                  alt="Team working on a project"
                  width={3840}
                  height={2160}
                  sizes="(max-width: 768px) 394px, 50vw"
                  className="w-full h-auto object-cover transition-transform duration-3000 group-hover:scale-110"
                  loading="eager"
                />

                {/* Overlay text on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-lg font-semibold">
                    Senior-level expertise, every time
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. Description (appears third on mobile, bottom‑left on desktop) */}
          <Reveal className="order-3 lg:col-span-1 lg:row-span-1">
            <div className="space-y-4 text-lg text-gray-600 lg:mr-8 xl:max-w-xl">
              <p className="leading-tight md:leading-relaxed">
                We believe every business deserves a website as ambitious as their goals. That's why
                we focus our attention on helping small businesses succeed — by giving them a
                digital presence that truly represents who they are and how they want to be seen.
              </p>
              <p className="leading-tight md:leading-relaxed">
                With 15+ years of experience building and perfecting digital products, we partner
                with startups and established brands alike. Senior-level expertise only — no
                juniors, no outsourcing. Just a lean team that delivers.
              </p>
            </div>
          </Reveal>
        </div>

        {/* "How We Work" heading and feature grid remain unchanged */}
        <Reveal delay={400}>
          <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-6">How We Work & Deliver</h1>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map(({ color, gradient, icon, label, value, description }, i) => {
            const Icon = icon;

            return (
              <Reveal key={i} delay={i * 100}>
                <div className="group relative bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="flex items-center mb-4 gap-3">
                    <div
                      className={`relative w-10 h-10 rounded-md bg-linear-to-br ${gradient} p-2 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0`}
                    >
                      <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>
                    <span className={`text-xl md:text-3xl font-bold uppercase ${color} opacity-40`}>
                      {label}
                    </span>
                  </div>
                  <div className="relative">
                    <h2 className="text-xl font-semibold text-gray-600 group-hover:text-gray-900 transition-colors mb-3 leading-tight">
                      {value}
                    </h2>
                    <p className="leading-tight md:leading-relaxed">{description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="pt-12 text-center">
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              Work with us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
