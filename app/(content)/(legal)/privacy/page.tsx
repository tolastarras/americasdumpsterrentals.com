import Link from 'next/link';

import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

import { baseMetadata } from '@/lib/metadata/base';

import { COMPANY } from '@/constants';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Privacy Policy',
  description:
    'Read our Privacy Policy to understand how Americas Dumpster Rentals collects, uses, and protects your personal information.',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Privacy Policy | Americas Dumpster Rentals',
    description: 'Learn how we handle your data with transparency and care.',
    url: 'https://dumpsterrentals.vercel.app/privacy',
  },
  robots: {
  ...(typeof baseMetadata.robots === 'object' ? baseMetadata.robots : {}),
    index: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto space-y-4 bg-white">
      <h1 className='text-xl md:text-2xl font-semibold mb-6 md:mb-10'>Privacy Policy</h1>

      <div className="space-y-6 mb-8">
        <section>
          <h2 className="font-semibold mb-3">1. Introduction</h2>
          <p className="text-sm text-muted-foreground">
            Welcome to {COMPANY.email}. We respect your privacy and are committed to protecting your
            personal data. This privacy policy explains how we collect, use, and safeguard your
            information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">2. Data We Collect</h2>
          <div className="space-y-2">
            <p className="font-medium">Personal Data:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Name and contact details (when you fill out our contact form).</li>
              <li>Any information you voluntarily provide in messages.</li>
            </ul>
            <p className="font-medium mt-2">Automatically Collected Data:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>IP address, browser type, and device information (via server logs).</li>
              <li>
                Usage data (pages visited, time spent) – we do not use cookies or tracking scripts.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-semibold mb-3">3. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To improve our website and user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-3">4. Legal Basis (GDPR)</h2>
          <p className="text-sm text-muted-foreground">
            If you are in the European Economic Area (EEA), our legal basis for collecting and using
            your personal data depends on the specific context. Typically, we process data:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>With your consent (e.g., when you contact us).</li>
            <li>For our legitimate interests (e.g., improving the site).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-3">5. Data Sharing</h2>
          <p className="text-sm text-muted-foreground">
            We do not sell, trade, or rent your personal data. We may share anonymized aggregate
            data with service providers (e.g., hosting) who are bound by confidentiality.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">6. Data Security</h2>
          <p className="text-sm text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your data.
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">7. Your Rights</h2>
          <p className="text-sm text-muted-foreground">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Access, correct, or delete your personal data.</li>
            <li>Object to or restrict processing.</li>
            <li>Data portability.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            To exercise these rights, please contact us using the information below.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">8. Retention</h2>
          <p className="text-sm text-muted-foreground">
            We retain personal data only as long as necessary for the purposes outlined in this
            policy, or as required by law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">9. Changes to This Policy</h2>
          <p className="text-sm text-muted-foreground">
            We may update this policy from time to time. The “Last updated” date at the top will
            reflect the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">10. Contact Us</h2>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
            <Link href={`mailto:${COMPANY.email}`} className="text-blue-600 hover:underline whitespace-nowrap">
              {COMPANY.email}
            </Link>
            <span className="whitespace-nowrap">or use our</span>
            <Link href="/#contact" className="text-blue-600 hover:underline whitespace-nowrap">
              contact form.
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
