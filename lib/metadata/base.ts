import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0369a1' },
  ],
};

export const baseMetadata: Metadata = {
  title: {
    default: 'Americas Dumpster Rentals',
    template: '%s | Americas Dumpster Rentals',
  },
  description:
    'We build high-performance web applications that drive business results through exceptional user experiences.',
  openGraph: {
    title: 'Americas Dumpster Rentals – We Build High-Performance Web Apps',
    description:
      'We build high-performance web applications that drive business results through exceptional user experiences.',
    url: 'https://americasdumpsterrentals.com',
    siteName: 'Americas Dumpster Rentals',
    images: [
      {
        url: 'https://americasdumpsterrentals.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Americas Dumpster Rentals – Web Development & UI/UX Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Americas Dumpster Rentals – We Build High-Performance Web Apps',
    description:
      'We build high-performance web applications that drive business results through exceptional user experiences.',
    images: ['https://americasdumpsterrentals.com/twitter-image.png'],
  },
  other: {
    'og:see_also': 'https://www.youtube.com/@americasdumpsterrentals',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/icons/favicon-32x32.png',
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/icons/site.webmanifest',
  alternates: {
    canonical: 'https://americasdumpsterrentals.com',
    languages: {
      'en-US': 'https://americasdumpsterrentals.com',
    },
  },
  verification: {
    google: 'real-verification-key',
  },
  category: 'Commercial & Industrial Equipment Supplier',
};
