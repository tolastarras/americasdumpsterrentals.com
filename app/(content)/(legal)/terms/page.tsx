import Link from 'next/link';

import { Scale } from 'lucide-react';
import type { Metadata } from 'next';

import { baseMetadata } from '@/lib/metadata/base';

import { COMPANY } from '@/constants';

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Terms of Service',
  description:
    'Review the terms and conditions that govern your use of our high-performance web services and website.',
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Terms of Service | Americas Dumpster Rentals',
    description:
      'Understand the rules and guidelines for using our high-performance web applications and services.',
    url: 'https://americasdumpsterrentals.com/terms',
  },
  robots: {
    ...(typeof baseMetadata.robots === 'object' ? baseMetadata.robots : {}),
    index: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto space-y-4 bg-white">
      <h1 className='text-xl md:text-2xl font-semibold mb-6 md:mb-10'>Terms of Service</h1>

      <div className="space-y-6">
        <section>
          <h2 className="font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-sm text-muted-foreground">
            By accessing or using americasdumpsterrentals.com (the “Site”), you agree to be bound by these Terms
            of Service. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">2. Description of Services</h2>
          <p className="text-sm text-muted-foreground">
            The Site provides information about web development and design services, and offers a
            contact form for inquiries. We reserve the right to modify or discontinue any part of the
            Site without notice.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">3. User Conduct</h2>
          <p className="text-sm text-muted-foreground">You agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Use the Site for any unlawful purpose.</li>
            <li>Submit false or misleading information via forms.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>Interfere with the proper functioning of the Site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold mb-3">4. Intellectual Property</h2>
          <p className="text-sm text-muted-foreground">
            All content on this Site – including text, graphics, logos, and code – is the property of
            americasdumpsterrentals.com or its licensors and is protected by copyright and other laws. You may not
            reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">5. Third-Party Links</h2>
          <p className="text-sm text-muted-foreground">
            The Site may contain links to third‑party websites. We are not responsible for their
            content or practices, and linking does not imply endorsement.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">6. Disclaimer of Warranties</h2>
          <p className="text-sm text-muted-foreground">
            THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE”. WE MAKE NO WARRANTIES, EXPRESS OR
            IMPLIED, REGARDING ITS OPERATION OR AVAILABILITY. TO THE FULLEST EXTENT PERMITTED BY LAW,
            WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
            FOR A PARTICULAR PURPOSE.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">7. Limitation of Liability</h2>
          <p className="text-sm text-muted-foreground">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE SITE.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">8. Indemnification</h2>
          <p className="text-sm text-muted-foreground">
            You agree to indemnify and hold harmless americasdumpsterrentals.com and its affiliates from any
            claims, damages, or expenses arising from your violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">9. Termination</h2>
          <p className="text-sm text-muted-foreground">
            We may terminate or suspend your access to the Site at any time, without prior notice,
            for conduct that we believe violates these Terms or is harmful to other users.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">10. Governing Law</h2>
          <p className="text-sm text-muted-foreground">
            These Terms shall be governed by the laws of [Your Country/State], without regard to its
            conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">11. Changes to Terms</h2>
          <p className="text-sm text-muted-foreground">
            We may update these Terms from time to time. The “Last updated” date at the top will
            reflect changes. Your continued use of the Site after any changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-3">12. Contact Information</h2>
          <p className="text-sm text-muted-foreground">For questions about these Terms, contact us:</p>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 mt-2 text-sm">
            <Scale className="h-5 w-5 text-muted-foreground shrink-0" />
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
