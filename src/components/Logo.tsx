import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <Link
      href="/"
      className={`inline-flex items-center group ${className}`}
      aria-label="Elite Plumbing & Drain Home"
    >
      <div
        className={`relative inline-flex items-center transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark ? 'bg-white rounded-xl p-2 px-3 shadow-sm' : ''
        }`}
      >
        <Image
          src="/brand/logo.png"
          alt="Elite Plumbing & Drain"
          width={220}
          height={141}
          priority
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
        />
      </div>
    </Link>
  );
}
