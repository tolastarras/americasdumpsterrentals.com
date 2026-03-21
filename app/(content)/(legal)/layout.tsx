import type { Metadata } from 'next';

import { baseMetadata } from '@/lib/metadata/base';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Legal | Americas Dumpster Rentals',
  description: 'Read our legal pages to understand how we collect, use, and protect your personal information.',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Legal | Americas Dumpster Rentals',
    description: 'Learn how we handle your data with transparency and care.',
  },
  robots: {
    ...(typeof baseMetadata.robots === 'object' ? baseMetadata.robots : {}),
    index: false,
  },
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <div className="container bg-white">
      <div className="mx-auto mt-30 md:mt-36 mb-12">
        {children}
      </div>
    </div>
  );
}
