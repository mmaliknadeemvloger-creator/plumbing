import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'light', className = '' }: LogoProps) {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-ink';
  const subTextColor = isDark ? 'text-sky' : 'text-copper';
  const shieldColor = isDark ? '#38BDF8' : '#002855';

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group ${className}`} aria-label="Elite Plumbing & Drain Home">
      {/* Precision Vector Emblem (Shield + Water Drop + Wrench) */}
      <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-300">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dropGrad" x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="wrenchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#C2410C" />
            </linearGradient>
            <linearGradient id="shieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isDark ? '#003366' : '#F0F9FF'} />
              <stop offset="100%" stopColor={isDark ? '#001A33' : '#E0F2FE'} />
            </linearGradient>
          </defs>

          {/* Shield Outer Outline */}
          <path
            d="M50 8 C68 18, 86 18, 86 38 C86 64, 68 84, 50 92 C32 84, 14 64, 14 38 C14 18, 32 18, 50 8 Z"
            fill="url(#shieldFill)"
            stroke={shieldColor}
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Water Droplet Core */}
          <path
            d="M50 20 C50 20, 32 42, 32 54 C32 64, 40 72, 50 72 C60 72, 68 64, 68 54 C68 42, 50 20, 50 20 Z"
            fill="url(#dropGrad)"
          />

          {/* Stylized Pipe Wrench Crossing Diagonally */}
          <path
            d="M34 68 L60 38"
            stroke="url(#wrenchGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Wrench Jaw Head */}
          <path
            d="M56 34 L66 24 C68 22, 74 24, 76 28 C78 32, 74 36, 70 38 L62 44"
            fill="url(#wrenchGrad)"
            stroke={isDark ? '#FFFFFF' : '#002855'}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Wrench Hook Jaw Notch */}
          <path
            d="M68 28 L73 33"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Water Splash / Ripple Accent */}
          <circle cx="50" cy="54" r="3.5" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-extrabold text-2xl tracking-tight leading-none ${textColor} group-hover:text-sky transition-colors`}>
            ELITE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-copper self-center mb-0.5" />
        </div>
        <span className={`font-body text-[10px] tracking-[0.2em] uppercase font-bold mt-1 ${subTextColor}`}>
          Plumbing & Drain
        </span>
      </div>
    </Link>
  );
}
