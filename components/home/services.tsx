'use client';

import Link from 'next/link';

import { ArrowRight, CheckCircle } from 'lucide-react';

import { useScrollToSection } from '@/hooks/use-scroll-to-section';

import { Reveal } from '@/components/ui/reveal';

import { SERVICES as services } from '@/constants/site-data';

export const Services = () => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="py-10 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        <Reveal delay={150}>
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-tight md:leading-relaxed">
              End-to-end solutions tailored to your business requirements. From concept to launch, we deliver digital products that are built to perform, scale, and last.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(({ title, headerText, description, icon: Icon, features, textColor, gradient, circleColor }, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative bg-white rounded-xl py-8 px-4 md:px-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div
                  className={`absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${circleColor}`}
                />
                <div className="flex items-center mb-8">
                  {/* Icon Container */}
                  <div className={`w-10 md:w-12 h-10 md:h-12 rounded-md bg-linear-to-br ${gradient} shadow-lg text-white font-bold md:text-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-xl transition-all duration-300 shrink-0`}>
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-white shrink-0" />
                  </div>
                  <div className={`text-3xl md:text-4xl xl:text-5xl font-bold ${textColor} opacity-30`}>{headerText}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-4 md:h-7 overflow-y-scroll">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed lg:h-14 lg:overflow-y-scroll">
                  {description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 lg:h-42 xl:h-fit">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center md:items-start">
                      <CheckCircle
                        className={`w-5 h-5 ${textColor} mr-3 mt-0.5 shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className={`${textColor} font-semibold flex items-center group-hover:gap-2 transition-all duration-300 cursor-pointer`}
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
