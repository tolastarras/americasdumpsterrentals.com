import { CalendarCheck, Package, Truck } from 'lucide-react';

import { HOW_IT_WORKS_CONTENT } from '@/constants';

const icons = [CalendarCheck, Truck, Package, Truck];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary section-diagonal">
      <div className="container mx-auto px-4 pb-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground uppercase mb-4">
            {HOW_IT_WORKS_CONTENT.heading}
          </h2>
          <p className="text-primary-foreground/60 text-lg">{HOW_IT_WORKS_CONTENT.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {HOW_IT_WORKS_CONTENT.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-2xl mb-5 group-hover:bg-secondary/20 transition-colors">
                  <Icon className="h-10 w-10 text-secondary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-secondary-foreground font-heading text-sm font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground uppercase mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
