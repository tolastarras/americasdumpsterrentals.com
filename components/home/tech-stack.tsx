import Image from 'next/image';

import { Reveal } from '@/components/ui/reveal';

import { TECH_STACK as technologies } from '@/constants/site-data';

export const TechStack = () => {
  return (
    <div className="py-12 md:py-24 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle grid background - smaller squares, lighter */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <Reveal delay={150} className='text-center mb-8 md:mb-16'>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Built With Modern Technologies
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-tight md:leading-relaxed">
            We use cutting-edge tools to deliver robust, scalable solutions that load faster, handle more users, and adapt as your business grows.
          </p>
        </Reveal>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map(({ name, description, image, color, borderColor }, index) => (
            <Reveal key={index} delay={index * 100} className="group relative">
              {/* Background Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-linear-to-r ${color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200`}
              />

              {/* Card */}
              <div
                className={`
                relative bg-linear-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-600
                ${borderColor} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10
                flex flex-col items-center justify-center h-full
              `}
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative w-16 h-16">
                    {/* The circle (background) */}
                    <div className="absolute inset-0 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/50" />

                    {/* Image container - positioned behind the circle initially */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all scale-80 duration-300 group-hover:scale-120">
                      <Image
                        src={image}
                        alt={`${name} Logo`}
                        className="object-contain drop-shadow-lg"
                        loading='lazy'
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>
                </div>

                {/* Tech Name with Gradient Text */}
                <h3 className={`text-xl font-bold bg-linear-to-r ${color} bg-clip-text text-transparent mb-2`}>
                  {name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center leading-tight group-hover:text-white/80 transition-colors">
                  {description}
                </p>

                {/* Hover Indicator Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-transparent via-current to-transparent group-hover:w-12 transition-all duration-300" />

                {/* Experience Level Indicator */}
                <div className="mt-6 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        i < 4 ? `bg-linear-to-r ${color}` : 'bg-gray-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">Expert</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
