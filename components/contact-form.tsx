'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

import { COMPANY, CONTACT_CONTENT } from '@/constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(CONTACT_CONTENT.successMessage);
    setFormData({ name: '', phone: '', email: '', details: '' });
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-4">
              {CONTACT_CONTENT.heading}
            </h2>
            <p className="text-steel text-lg mb-8">{CONTACT_CONTENT.subheading}</p>
            <div className="space-y-4">
              <Link
                href={`tel:${COMPANY.phoneTel}`}
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{CONTACT_CONTENT.callLabel}</p>
                  <p className="font-heading text-lg">{COMPANY.phone}</p>
                </div>
              </Link>
              <Link
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{CONTACT_CONTENT.emailLabel}</p>
                  <p className="font-heading text-lg">{COMPANY.email}</p>
                </div>
              </Link>
              <div className="flex items-center gap-3 text-primary">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-heading text-lg">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="font-heading text-sm">{COMPANY.hours.weekdays}</p>
                  <p className="font-heading text-sm">{COMPANY.hours.saturday}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            name="contact-form"
            autoComplete="on"
            onSubmit={handleSubmit}
            className="bg-card rounded-xl shadow-xl p-4 md:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                {CONTACT_CONTENT.formLabels.name}
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                {CONTACT_CONTENT.formLabels.phone}
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                {CONTACT_CONTENT.formLabels.email}
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-foreground mb-1.5">
                {CONTACT_CONTENT.formLabels.details}
              </label>
              <textarea
                id="details"
                required
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-orange-dark text-secondary-foreground font-heading text-lg tracking-wider py-3.5 rounded-md transition-colors cursor-pointer"
            >
              <Send className="h-5 w-5" />
              {CONTACT_CONTENT.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
