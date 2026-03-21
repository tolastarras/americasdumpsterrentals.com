import Link from 'next/link';

import { ArrowRight, Check, Trash2, Truck } from 'lucide-react';

import { SERVICES } from '@/constants';

const icons = [Truck, Trash2];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            {SERVICES.heading}
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">{SERVICES.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.id}
                className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all border border-border overflow-hidden group"
              >
                <div className="bg-primary/5 p-8 flex items-center gap-4 border-b border-border">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors shrink-0">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary uppercase">
                    {service.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-foreground text-sm">
                        <Check className="h-4 w-4 text-secondary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.ctaHref}
                    className="flex justify-center items-center gap-2 bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading tracking-wider px-6 py-3 rounded-md transition-colors w-full md:w-fit"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
