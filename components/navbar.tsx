'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Clock, Facebook, Mail, Menu, Phone, X } from 'lucide-react';

import logoMain from '@/assets/logo-main.webp';
import { COMPANY, NAV_LINKS } from '@/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contactLink = NAV_LINKS[NAV_LINKS.length - 1];

  const handleNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      {/* Top bar */}
      <div className="hidden md:block bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between py-2 px-4 text-sm text-white/80">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              <span>{COMPANY.hours.weekdays} · {COMPANY.hours.saturday}</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hover:text-secondary transition-colors text-sm"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <Link href="/#home" className="flex items-center gap-3">
          <Image
            src={logoMain}
            alt={COMPANY.name}
            className="h-18 w-18 object-contain rounded-md"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.slice(0, -1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-heading text-sm tracking-wider text-primary-foreground/80 hover:text-secondary transition-colors uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={contactLink.href}
          className="hidden md:flex items-center gap-2 bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading text-lg px-5 py-2.5 rounded-md transition-colors"
        >
          <Mail className="h-5 w-5" />
          {contactLink.label}
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-primary-foreground">
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block py-3 font-heading text-sm tracking-wider text-primary-foreground/80 hover:text-secondary uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`tel:${COMPANY.phoneTel}`}
            className="flex items-center justify-center gap-2 mt-3 bg-secondary text-secondary-foreground font-heading text-lg px-5 py-3 rounded-md"
          >
            <Phone className="h-5 w-5" />
            {COMPANY.phone}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
