import React from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { PhoneLink } from '../PhoneLink';
import { nav } from './nav';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white/80 pt-16 pb-24 md:pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          
          <div>
            <Logo variant="dark" className="mb-6" />
            <p className="mb-6 text-sm">Professional residential and commercial plumbing and drain clearing services across the USA. Fast, reliable, and upfront pricing.</p>
            <PhoneLink variant="hero" />
          </div>


          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {nav.services.map((s, i) => (
                <li key={i}><Link href={s.href} className="hover:text-white transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Service Areas</h4>
            <ul className="space-y-3">
              {nav.locations.flatMap(r => r.cities).slice(0,6).map((c, i) => (
                <li key={i}><Link href={c.href || '#'} className="hover:text-white transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              {nav.company.map((c, i) => (
                <li key={i}><Link href={c.href} className="hover:text-white transition-colors">{c.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Elite Plumbing & Drain. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
