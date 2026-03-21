import Image from 'next/image';

import aboutOwner from '@/assets/about-owner.webp';
import dumpster from '@/assets/dumpster.webp';
import truckImg from '@/assets/truck.jpg';
import { ABOUT } from '@/constants';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            {ABOUT.heading}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={aboutOwner}
                  alt="Dalton Merritt - Owner"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-600"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-primary">
                <Image
                  src={dumpster}
                  alt="Americas Dumpster Rentals dumpster"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-600"
                />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src={truckImg}
                alt="Americas Dumpster Rentals truck"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
