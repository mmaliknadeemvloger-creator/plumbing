'use client';
import React from 'react';
import Link from 'next/link';
import { PhoneLink } from '../PhoneLink';

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-line p-3 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex gap-3">
      <div className="flex-1">
        <PhoneLink variant="hero" className="w-full text-sm py-3 px-2 bg-ink text-white hover:bg-ink/90 border-0" />
      </div>
      <div className="flex-1">
        <Link href="/request-service/" className="btn btn-primary w-full justify-center text-sm py-3 px-2">
          Request
        </Link>
      </div>
    </div>
  );
};
