import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  imgClassName?: string;
}

export function Logo({ variant = 'light', className = '', imgClassName }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Elite Plumbing & Drain USA Home"
    >
      <div
        className={`relative inline-flex items-center transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark ? 'bg-white rounded-xl p-2.5 sm:p-3 shadow-md' : ''
        }`}
      >
        <Image
          src="/brand/logo.png"
          alt="Elite Plumbing & Drain USA"
          width={280}
          height={117}
          priority
          className={
            imgClassName ??
            'h-14 sm:h-16 md:h-[72px] lg:h-[78px] w-auto object-contain'
          }
        />
      </div>
    </Link>
  );
}
