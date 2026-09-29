'use client';

import React from 'react';
import { PHONE, PHONE_E164 } from '@/content/site';
import { PhoneIcon } from './icons';

export const PhoneLink = ({ variant = 'default', className = '' }: { variant?: 'default' | 'hero', className?: string }) => {
  const baseClasses = 'inline-flex items-center gap-2 font-bold transition-colors';
  const variants = {
    default: 'text-ink hover:text-sky',
    hero: 'btn btn-primary text-lg px-6 py-3',
  };
  
  return (
    <a href={`tel:${PHONE_E164}`} className={`${baseClasses} ${variants[variant]} ${className}`} onClick={() => {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'phone_click' });
      }
    }}>
      <PhoneIcon className={variant === 'hero' ? 'w-6 h-6' : 'w-5 h-5'} />
      {PHONE}
    </a>
  );
};
