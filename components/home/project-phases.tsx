'use client';

import Link from 'next/link';

import { ArrowRight, Check } from 'lucide-react';

import { useScrollToSection } from '@/hooks/use-scroll-to-section';

import { Reveal } from '@/components/ui/reveal';

import { PROJECT_PHASES as steps } from '@/constants/site-data';

export const ProjectPhases = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="py-12 md:py-24 bg-white">
      <div className="container mx-auto">
        <Reveal>
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Turning{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Ideas
              </span>{' '}
              Into Reality
            </h2>
            <p className="text-lg md:text-xl leading-tight md:leading-relaxed text-gray-600 max-w-4xl mx-auto mt-6">
              A proven process built around clear milestones and tangible deliverables — so you always know where we are, what's next, and when you'll see results.
            </p>
          </div>
        </Reveal>

        {/* Cards Grid - Each card reveals individually */}
        <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
          {steps.map(({ id, title, subtitle, description, textColor, gradient, items }) => (
            <Reveal key={id} delay={150}>
              <div className="group relative">
                <div className="relative bg-white rounded-xl py-8 px-4 md:px-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`text-3xl md:text-5xl xl:text-6xl font-bold ${textColor} opacity-20`}>Phase</div>
                    <div className={`w-12 h-12 rounded-md bg-linear-to-br ${gradient} shadow-lg text-white font-bold md:text-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-xl transition-all duration-300 shrink-0`}>
                      0{id}
                    </div>
                  </div>

                  <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed lg:h-24 xl:h-fit">
                    {description}
                  </p>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
                      {subtitle}
                    </h4>
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 h-8">
                          <Check className={`w-5 h-5 ${textColor} mr-2 shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Button - Reveal separately with delay */}
        <Reveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 border border-blue-500/50 text-blue-600 font-semibold rounded-full hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5  group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
