import Link from 'next/link';

import { ArrowRight, Check } from 'lucide-react';

import { DUMPSTERS, EXTRAS, PRICING } from '@/constants';

const PricingCards = () => {
  return (
    <section id="rentals" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            {PRICING.heading}
          </h2>
          <p className="text-steel text-lg max-w-xl mx-auto">{PRICING.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {DUMPSTERS.map((d) => (
            <div
              key={d.name}
              className={`relative bg-card rounded-xl shadow-xl overflow-hidden transition-transform hover:-translate-y-1 ${
                d.popular ? 'ring-2 ring-secondary' : ''
              }`}
            >
              {d.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground font-heading text-xs tracking-wider px-4 py-1.5 rounded-bl-lg uppercase">
                  Most Popular
                </div>
              )}
              <div className="bg-primary p-6">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground uppercase">
                  {d.name}
                </h3>
                <p className="text-primary-foreground/60 font-body mt-1">{d.dimensions}</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1 text-center p-4 bg-muted rounded-lg">
                    <p className="text-muted-foreground text-sm">{PRICING.days3}</p>
                    <p className="font-heading text-3xl font-bold text-primary">${d.price3}</p>
                  </div>
                  <div className="flex-1 text-center p-4 bg-muted rounded-lg">
                    <p className="text-muted-foreground text-sm">{PRICING.days7}</p>
                    <p className="font-heading text-3xl font-bold text-primary">${d.price7}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[...PRICING.features, `Includes ${d.weight}`].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <Check className="h-5 w-5 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 w-full bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading text-lg tracking-wider py-3.5 rounded-md transition-colors"
                >
                  {PRICING.bookNow} <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md p-6 hover:-translate-y-1 transition-transform">
          <h4 className="font-heading text-lg font-bold text-primary uppercase mb-4">
            {PRICING.extrasHeading}
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {EXTRAS.map((e) => (
              <div
                key={e.label}
                className="flex justify-between items-center py-2 px-3 bg-muted rounded-md"
              >
                <span className="text-sm text-foreground">{e.label}</span>
                <span className="font-heading font-bold text-primary text-sm">{e.value}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4 text-center italic">
            {PRICING.extrasNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
