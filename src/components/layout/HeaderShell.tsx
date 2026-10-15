'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { PhoneLink } from '../PhoneLink';
import { MenuIcon } from '../icons';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

export const HeaderShell = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${scrolled ? 'shadow-md py-2.5' : 'py-3.5 sm:py-4'}`}>
        <div className="container-x flex items-center justify-between gap-6 lg:gap-8">
          <Logo
            variant="light"
            imgClassName={scrolled ? 'h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-200' : 'h-14 sm:h-16 md:h-[72px] lg:h-[78px] w-auto object-contain transition-all duration-200'}
          />
          
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <MegaMenu />
            <Link href="/about-us/" className="font-medium text-ink hover:text-sky transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sky after:transition-all hover:after:w-full">About</Link>
            <Link href="/contact-us/" className="font-medium text-ink hover:text-sky transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sky after:transition-all hover:after:w-full">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <PhoneLink />
            <Link href="/request-service/" className="btn btn-primary">Request Service</Link>
          </div>

          <button 
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
