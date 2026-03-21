import { Star } from 'lucide-react';

import { REVIEWS_CONTENT } from '@/constants';

const Reviews = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            {REVIEWS_CONTENT.heading}
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="text-steel text-lg">{REVIEWS_CONTENT.ratingText}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {REVIEWS_CONTENT.reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
              <p className="font-heading font-bold text-primary text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
