import { Heart, Home, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'HOA Friendly',
    desc: 'Our dumpsters are clean, well-maintained, and approved by most HOA communities.',
  },
  {
    icon: Shield,
    title: 'Driveway Safe',
    desc: 'Roll-off dumpsters designed to protect your concrete and landscaping.',
  },
  {
    icon: Truck,
    title: 'Quick Delivery',
    desc: 'Fast turnaround — often same-day or next-day delivery available.',
  },
  {
    icon: Heart,
    title: 'Family Owned',
    desc: 'A local Jacksonville family business committed to honest service and fair pricing.',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background section-diagonal-reverse">
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            Reliable. Affordable. Convenient.
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            America's Dumpster Rentals makes getting rid of your junk a breeze. Great for roofing
            tear-offs, remodels, estate cleanouts, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-secondary/30 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-xl mb-4 group-hover:bg-secondary/20 transition-colors">
                <f.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary uppercase mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
