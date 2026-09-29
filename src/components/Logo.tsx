import React from 'react';
import Link from 'next/link';

export const Logo = ({ variant = 'light', className = '' }: { variant?: 'light' | 'dark', className?: string }) => {
  const textColor = variant === 'light' ? 'text-ink' : 'text-white';
  return (
    <Link href="/" className={`flex flex-col ${textColor} ${className}`}>
      <span className="font-heading font-bold text-2xl leading-none">SteadWell</span>
      <span className="font-body text-xs tracking-wider uppercase opacity-80 mt-1">Plumbing & Drain</span>
    </Link>
  );
};
