'use client';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { XIcon } from '../icons';
import { nav } from './nav';

export const MobileNav = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen && typeof document !== 'undefined') return null;

  const content = (
    <div className={`fixed inset-0 z-[100] flex transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-line">
          <span className="font-heading font-bold text-xl text-ink">Menu</span>
          <button onClick={onClose} className="p-2 text-ink/70 hover:text-ink bg-paper rounded-full">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="bg-alert/10 rounded-xl p-4 ring-1 ring-alert/20">
            <div className="font-bold text-alert mb-2">Emergency Service</div>
            <Link href="/request-service/" onClick={onClose} className="btn btn-primary w-full justify-center">Request Now</Link>
          </div>

          <div>
            <div className="eyebrow mb-3">Services</div>
            <div className="space-y-2">
              {nav.services.map((s, i) => (
                <Link key={i} href={s.href} onClick={onClose} className="block py-2 font-medium text-ink hover:text-sky">{s.title}</Link>
              ))}
            </div>
          </div>
          
          <div>
            <div className="eyebrow mb-3">Company</div>
            <div className="space-y-2">
              {nav.company.map((c, i) => (
                <Link key={i} href={c.href} onClick={onClose} className="block py-2 font-medium text-ink hover:text-sky">{c.title}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(content, document.body);
};
