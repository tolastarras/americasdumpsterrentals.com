import Image from 'next/image';
import Link from 'next/link';

import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react';

import logoMain from '@/assets/logo-main.webp';
import { COMPANY, FOOTER_CONTENT, QUICK_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logoMain}
                alt={COMPANY.name}
                className="h-12 w-12 object-contain rounded-md"
              />
              <div className="font-heading text-primary-foreground">
                <span className="text-lg font-bold block leading-tight">AMERICAS</span>
                <span className="text-xs tracking-widest text-secondary block leading-tight">
                  DUMPSTER RENTALS
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm mb-4">{FOOTER_CONTENT.tagline}</p>
            <Link
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-secondary transition-colors text-sm"
            >
              <Facebook className="h-5 w-5" /> Follow us on Facebook
            </Link>
          </div>
          <div>
            <h4 className="font-heading text-primary-foreground font-bold uppercase mb-4">
              {FOOTER_CONTENT.quickLinksHeading}
            </h4>
            <div className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className="block text-primary-foreground/50 hover:text-secondary text-sm transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-primary-foreground font-bold uppercase mb-4">
              {FOOTER_CONTENT.contactHeading}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <Phone className="h-4 w-4 text-secondary" /> {COMPANY.phone}
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <Mail className="h-4 w-4 text-secondary" /> {COMPANY.email}
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <MapPin className="h-4 w-4 text-secondary" /> {COMPANY.address}
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-primary-foreground font-bold uppercase mb-4">
              {FOOTER_CONTENT.hoursHeading}
            </h4>
            <div className="space-y-2 text-primary-foreground/50 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>{COMPANY.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>{COMPANY.hours.saturday}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>{COMPANY.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/30 text-sm">{FOOTER_CONTENT.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
