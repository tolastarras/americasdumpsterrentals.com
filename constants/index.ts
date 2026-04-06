import gallery1 from '@/assets/gallery/001.jpg';
import gallery2 from '@/assets/gallery/002.webp';
import gallery3 from '@/assets/gallery/003.jpg';
import gallery4 from '@/assets/gallery/004.jpg';
import gallery5 from '@/assets/gallery/005.webp';
import gallery6 from '@/assets/gallery/006.webp';
import gallery7 from '@/assets/gallery/007.webp';
import gallery8 from '@/assets/gallery/008.webp';
import flemingIslandImg from '@/assets/service-areas/fleming-island.webp';
import greenCoveSpringsImg from '@/assets/service-areas/green-cove-springs.webp';
import jacksonvilleImg from '@/assets/service-areas/jacksonville.webp';
import jacksonvilleBeachImg from '@/assets/service-areas/jacksonville-beach.webp';
import orangeParkImg from '@/assets/service-areas/orange-park.webp';
import ponteVedraImg from '@/assets/service-areas/ponte-vedra.webp';

export const COMPANY = {
  name: 'Americas Dumpster Rentals',
  tagline: 'Roll-Off Dumpsters & Junk Removal',
  phone: '(904) 648-7822',
  phoneTel: '9046487822',
  email: 'trailerrentalcompany@gmail.com',
  address: '4443 Staple Ct, Middleburg, FL 32068',
  city: 'Middleburg',
  state: 'FL',
  region: 'Northeast Florida',
  facebook: 'https://www.facebook.com/TrailerRentalCompany',
  calendlyUrl: 'https://calendly.com/dumpsterrentals',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.682646463422!2d-81.8928266848795!3d30.305307981794644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5a7e143a053a5%3A0xed5d2f25ce3ff2e0!2s4443%20Staple%20Ct%2C%20Middleburg%2C%20FL%2032068!5e0!3m2!1sen!2sus!4v1742481000000!5m2!1sen!2sus',
  hours: {
    weekdays: 'Mon – Fri: 6 AM – 5 PM',
    saturday: 'Sat: 7 AM – 2 PM',
    sunday: 'Sun: Closed',
  },
} as const;

export const ABOUT = {
  ownerName: 'Dalton Merritt',
  heading: 'About Us',
  paragraphs: [
    `Hello everyone, my name is Dalton Merritt, and I'm proud to introduce America's Dumpster Rentals — a locally owned dumpster rental and junk removal business serving the Middleburg & Jacksonville, FL community. This isn't just another company to me, it's something I've worked hard to build from the ground up with the goal of creating something dependable and honest for the people around me.`,
    `I started this business because I believe our community deserves reliable service, fair pricing, and someone who truly cares about doing the job right. Our dumpster rental service is designed to make your projects easier — whether you're remodeling your home, cleaning out a property, replacing a roof, or managing a construction site. We offer convenient drop-off and pick-up, driveway-friendly placement, and flexible rental options so you can focus on your project without the stress of debris piling up.`,
    `My wife Alexis and I are excited to be building something right here in the community we live in and care about. Our goal is simple — provide reliable, affordable dumpster rentals and junk removal while treating every customer like a neighbor, because that's exactly what you are.`,
    `My promise is simple: show up when I say I will, provide clean and well-maintained dumpsters, treat your property with respect, and always do business the right way. I'm grateful for the opportunity to serve you and look forward to building lasting relationships right here in our community. 🇺🇸`,
  ],
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'Services', href: '/#services' },
  { label: 'Rentals', href: '/#rentals' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About Us', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Areas', href: '/#areas' },
  { label: 'Contact Us', href: '/#contact' },
] as const;

export const HERO = {
  badge: 'Jacksonville, FL & Surrounding Areas',
  headingLine1: 'DUMPSTER',
  headingLine2: 'RENTALS',
  headingLine3: 'DELIVERED & HAULED AWAY',
  description: 'Affordable roll-off dumpster rentals starting at',
  startingPrice: '$350',
  descriptionSuffix: '. No hidden fees.',
  ctaPrimary: 'BOOK ONLINE NOW',
  ctaSecondary: 'REQUEST A QUOTE',
  ctaTerciary: 'CALL NOW',
} as const;

export const DUMPSTERS = [
  {
    name: '15 Yard Dumpster',
    dimensions: '14\'L × 7\'W × 4\'H',
    price3: 350,
    price7: 395,
    weight: '2 Tons (4,000 lbs)',
    popular: false,
  },
  {
    name: '20 Yard Dumpster',
    dimensions: '14\'L × 7\'W × 6\'H',
    price3: 395,
    price7: 430,
    weight: '2 Tons (4,000 lbs)',
    popular: true,
  },
] as const;

export const EXTRAS = [
  { label: 'Additional weight', value: '$75/ton' },
  { label: 'Additional days', value: '$35/day' },
  { label: 'Unable to drop/pick up', value: '$125' },
  { label: 'Dump/Swap', value: '$350' },
  { label: 'Over-filled dumpster', value: '$100' },
  { label: 'Same day cancellation', value: '$100' },
] as const;

export const SERVICES = {
  heading: 'Our Services',
  subheading: 'Two ways to get rid of the mess — we\'ve got you covered either way',
  items: [
    {
      id: 'dumpster-rental',
      title: 'Dumpster Rental',
      description:
        'Roll-off dumpsters delivered to your location. Perfect for renovations, roofing, cleanouts, and construction projects. Load at your own pace with flexible 3 or 7-day rentals.',
      features: [
        '15 & 20 yard dumpsters available',
        'Driveway & HOA friendly',
        '3-day or 7-day rental periods',
        'Same-day or next-day delivery',
      ],
      cta: 'View Dumpster Pricing',
      ctaHref: '#rentals',
    },
    {
      id: 'junk-removal',
      title: 'Junk Removal',
      description:
        'Don\'t want to do the heavy lifting? Our crew will come to your location, load everything up, and haul it away. Fast, affordable, and hassle-free.',
      features: [
        'We do all the heavy lifting',
        'Same-day service available',
        'Residential & commercial',
        'Eco-friendly disposal & recycling',
      ],
      cta: 'Get a Free Quote',
      ctaHref: '#contact',
    },
  ],
} as const;

export const PRICING = {
  heading: 'Available Dumpsters',
  subheading: 'Easy pricing — one flat rate means no hidden fees or surcharges',
  extrasHeading: 'Additional Pricing (if needed)',
  extrasNote:
    'Please call before booking if you have concrete, dirt, rock, or gravel. Contractor pricing available.',
  bookNow: 'BOOK NOW',
  days3: '3 Days',
  days7: '7 Days',
  features: ['HOA & Driveway Friendly', 'Discounts Available'],
} as const;

export const HOW_IT_WORKS_CONTENT = {
  heading: 'How It Works',
  subheading: 'Four easy steps to a cleaner property',
  steps: [
    {
      title: 'Schedule Your Dumpster',
      desc: 'Book online or call us. Pick your size, dates, and delivery location.',
    },
    {
      title: 'We Drop It Off',
      desc: 'We deliver the dumpster right to your driveway — on time, every time.',
    },
    {
      title: 'Load Up Your Debris',
      desc: 'Fill it up at your own pace. Roofing, remodels, cleanouts — we handle it all.',
    },
    {
      title: 'We Pick It Up',
      desc: 'When you\'re done, we haul it away. It\'s that simple.',
    },
  ],
} as const;

export const FEATURES_CONTENT = {
  heading: 'Reliable. Affordable. Convenient.',
  subheading:
    'America\'s Dumpster Rentals makes getting rid of your junk a breeze. Great for roofing tear-offs, remodels, estate cleanouts, and more.',
  items: [
    {
      title: 'HOA Friendly',
      desc: 'Our dumpsters are clean, well-maintained, and approved by most HOA communities.',
    },
    {
      title: 'Driveway Safe',
      desc: 'Roll-off dumpsters designed to protect your concrete and landscaping.',
    },
    {
      title: 'Quick Delivery',
      desc: 'Fast turnaround — often same-day or next-day delivery available.',
    },
    {
      title: 'Family Owned',
      desc: 'A local Jacksonville family business committed to honest service and fair pricing.',
    },
  ],
} as const;

export const REVIEWS_CONTENT = {
  heading: 'What Our Customers Say',
  ratingText: '5-Star Rated on Google',
  reviews: [
    {
      name: 'Mike R.',
      text: 'Best dumpster rental experience in Jacksonville! Fair pricing, delivered on time, and the team was super professional. Will use again for our next renovation.',
    },
    {
      name: 'Sarah T.',
      text: 'Used them for a full kitchen remodel. The 20-yard was perfect. No hidden fees, no surprises. Highly recommend to anyone on the First Coast!',
    },
    {
      name: 'Carlos M.',
      text: 'Responsive and reliable. They worked around my schedule and the price was the best I found in the area. Muy profesional. Excelente servicio.',
    },
    {
      name: 'Jennifer L.',
      text: 'Family-owned and it shows. They actually care about your property. Dumpster was clean, delivery was smooth, and pickup was right on schedule.',
    },
  ],
} as const;

export const SERVICE_AREAS_CONTENT = {
  heading: 'Serving Middleburg & Surrounding Areas',
  subheading: 'Proudly serving Northeast Florida with reliable dumpster rental services',
  specialHeading: 'Don\’t see your area? Give us a call anyway – we may have a special service just for you!',
  areas: [
    {
      city: 'Orange Park',
      image: orangeParkImg,
    },
    {
      city: 'Green Cove Springs',
      image: greenCoveSpringsImg,
    },
    {
      city: 'Fleming Island',
      image: flemingIslandImg,
    },
    {
      city: 'Jacksonville',
      image: jacksonvilleImg,
    },
    {
      city: 'Ponte Vedra',
      image: ponteVedraImg,
    },
    {
      city: 'Jacksonville Beach',
      image: jacksonvilleBeachImg,
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  heading: 'Schedule Your Dumpster',
  subheading:
    'Fill out the form or give us a call. We\'ll get back to you within the hour during business hours.',
  callLabel: 'Call Us',
  emailLabel: 'Email Us',
  submitButton: 'SUBMIT REQUEST',
  formLabels: {
    name: 'Name *',
    phone: 'Phone *',
    email: 'Email *',
    details: 'Project Details',
  },
  successMessage: 'Thank you! We\'ll be in touch shortly.',
} as const;

export const FOOTER_CONTENT = {
  quickLinksHeading: 'Quick Links',
  contactHeading: 'Contact',
  hoursHeading: 'Hours',
  copyright: `© ${new Date().getFullYear()} Americas Dumpster Rentals. All rights reserved.`,
  tagline: 'Jacksonville\'s trusted dumpster rental service. Family owned and operated.',
} as const;

export const GALLERY_CONTENT = {
  heading: 'Our Work',
  subheading:
    'See Americas Dumpster Rentals in action throughout Jacksonville and surrounding areas',
  images: [
    { src: gallery5, alt: 'Before and after cleanup' },
    { src: gallery7, alt: 'Before and after junk removal' },
    { src: gallery1, alt: '15-yard dumpster in residential driveway' },
    { src: gallery6, alt: 'Americas Dumpster Rentals branded truck' },
    { src: gallery2, alt: 'Construction debris loaded into dumpster' },
    { src: gallery8, alt: 'Loaded trailer' },
    { src: gallery3, alt: 'Dumpster delivery by hook-lift truck' },
    { src: gallery4, alt: 'Roofing tear-off debris in dumpster' },
  ],
} as const;

export const QUICK_LINKS = [
  'Home',
  'Rentals',
  'How It Works',
  'About Us',
  'Service Areas',
  'Contact',
] as const;
