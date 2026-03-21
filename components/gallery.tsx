import Image from 'next/image';

import { GALLERY_CONTENT } from '@/constants';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
            {GALLERY_CONTENT.heading}
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">{GALLERY_CONTENT.subheading}</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_CONTENT.images.map((img, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
