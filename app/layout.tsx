import type React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';

import { baseMetadata, viewport } from '@/lib/metadata/base';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { CustomToaster } from '@/components/ui/custom/custom-toaster';

import './globals.css';

const _geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const _geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = baseMetadata;
export { viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_geist.variable} ${_geistMono.variable}`}>
      <body>
        <Navbar />
        <main className="flex flex-col min-h-screen">
          {children}
          <CustomToaster />
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};
