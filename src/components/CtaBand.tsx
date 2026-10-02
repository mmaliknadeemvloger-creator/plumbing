import React from 'react';
import Link from 'next/link';
import { PhoneLink } from './PhoneLink';

export const CtaBand = () => {
  return (
    <section className="bg-ink text-white py-16 md:py-24">
      <div className="container-x text-center max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Need a Trusted Plumber Fast?</h2>
        <p className="text-lg md:text-xl text-white/80 mb-10">
          From 24/7 emergency repairs and drain clearing to water heater replacements and leak detection, licensed plumbers across the USA are standing by.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <PhoneLink variant="hero" className="w-full sm:w-auto justify-center" />
          <Link href="/request-service/" className="btn btn-secondary w-full sm:w-auto justify-center">
            Request a Quote Online
          </Link>
          <Link href="/contact/" className="btn btn-ghost text-white border-white/20 hover:bg-white/10 w-full sm:w-auto justify-center">
            Contact Elite Plumbing
          </Link>
        </div>
      </div>
    </section>
  );
};

