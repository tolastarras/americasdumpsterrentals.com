'use client';

import Link from 'next/link';

import { Clock, Mail, MessageSquare } from 'lucide-react';

import { ContactForm } from '@/components/contact/contact-form';
import { Reveal } from '@/components/ui/reveal';

import { COMPANY } from '@/constants';

export const Contact = () => {
  return (
    <div className="py-12 md:py-24 relative overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0d5cb6] via-[#1976d2] to-[#09757a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,164,166,0.3)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(25,118,210,0.2)_0%,transparent_50%)]" />

      {/* Animated Blobs - Enhanced with more circles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Original blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full mix-blend-overlay animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay animate-blob animation-delay-4000" />

        {/* Additional circles for more animation */}
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-blue-400/10 rounded-full mix-blend-overlay animate-blob animation-delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-cyan-400/10 rounded-full mix-blend-overlay animate-blob animation-delay-3000" />
        <div className="absolute bottom-1/2 left-1/5 w-40 h-40 bg-purple-400/10 rounded-full mix-blend-overlay animate-blob animation-delay-1500" />
        <div className="absolute top-1/5 right-1/3 w-32 h-32 bg-blue-300/10 rounded-full mix-blend-overlay animate-blob animation-delay-2500" />
        <div className="absolute bottom-1/3 right-1/5 w-36 h-36 bg-cyan-300/10 rounded-full mix-blend-overlay animate-blob animation-delay-3500" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full animate-blob"
          style={{
            background:
              'radial-gradient(circle, rgba(25,118,210,0.4) 0%, rgba(25,118,210,0.1) 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-blob"
          style={{
            animationDelay: '2000ms',
            background:
              'radial-gradient(circle, rgba(0,164,166,0.3) 0%, rgba(0,164,166,0.05) 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Additional animated elements */}
        <div
          className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full animate-blob"
          style={{
            animationDelay: '1500ms',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.05) 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <Reveal delay={150} className='hidden md:block'>
          <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Something{' '}
              <span className="bg-linear-to-r from-white via-blue-300 to-sky-500 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-tight md:leading-relaxed">
              We are currently accepting new projects and would like to discuss how we can bring your vision to life. Tell us about your project, and we'll get back to you within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 space-y-8 lg:gap-12 items-start">
          {/* Left Column - Contact Info */}
          <Reveal delay={100} className='lg:col-span-2'>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-10 border border-white/20">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight md:leading-relaxed">Let's Start a Conversation</h3>
              <p className="md:text-lg text-white/80 mb-10 leading-tight md:leading-relaxed">
                No agencies, no sales team. Just experienced developers who care about your project.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                    <Mail className="w-6 h-6 text-white shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Us</h4>
                    <Link href={`mailto:${COMPANY.email}`} className="text-white/80 text-sm whitespace-nowrap">
                      { COMPANY.email }
                    </Link>
                  </div>
                </div>

                <div className="flex items-start group gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-white/80 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start group gap-5">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Response Time</h4>
                    <p className="text-white/80 text-sm">Within 24 hours</p>
                  </div>
                </div>

                {/* Personal touch */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm italic">
                    "We treat every project like it's our own. You're not just another client."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Contact Form */}
          <Reveal delay={200} className='lg:col-span-3'>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
