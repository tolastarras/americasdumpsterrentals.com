import Image from 'next/image';

import { MapPin } from 'lucide-react';

import jacksonvilleAerial from '@/assets/jacksonville-aerial.jpg';
import { COMPANY, SERVICE_AREAS_CONTENT } from '@/constants';

const ServiceAreas = () => {
  const areas = SERVICE_AREAS_CONTENT.areas;

  return (
    <section id="areas" className="relative py-24 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0">
        <Image
          src={jacksonvilleAerial}
          alt="Jacksonville FL aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground uppercase mb-4">
            {SERVICE_AREAS_CONTENT.heading}
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
            {SERVICE_AREAS_CONTENT.subheading}
          </p>
        </div>

        {/* City cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {areas.map((area) => (
            <div
              key={area.city}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-secondary/50"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={area.image}
                  alt={`${area}, FL service area`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-primary-foreground font-semibold text-lg">{area.city}</span>
                </div>
                {/* Optional: add a subtle call-to-action */}
                <span className="text-primary-foreground/50 text-sm group-hover:text-secondary transition-colors">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Special service CTA */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-lg text-primary-foreground uppercase mb-4">
            {SERVICE_AREAS_CONTENT.specialHeading}
          </h2>
        </div>

        {/* Google Maps Embed */}
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-primary-foreground/10">
          <iframe
            src={COMPANY.googleMapsEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Americas Dumpster Rentals Service Area"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
