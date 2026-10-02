'use client';
import React, { useState } from 'react';
import { CheckIcon, AlertTriangleIcon, SearchIcon } from './icons';
import Link from 'next/link';

export const ZipChecker = () => {
  const [zip, setZip] = useState('');
  const [status, setStatus] = useState<'idle' | 'covered' | 'not-covered'>('idle');

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length === 5 && /^\d{5}$/.test(zip)) {
      setStatus('covered');
    } else {
      setStatus('not-covered');
    }
  };

  return (
    <div className="rounded-2xl bg-paper p-6 md:p-8 ring-1 ring-line max-w-xl mx-auto text-left">
      <h3 className="font-heading text-xl font-bold mb-2 text-ink">Check Local Plumbing Coverage</h3>
      <p className="text-ink/70 mb-6 text-sm">Enter your 5-digit US ZIP code to connect with licensed local plumbers in your area.</p>
      
      <form onSubmit={checkZip} className="flex gap-2">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/40" />
          <input 
            type="text" 
            pattern="[0-9]{5}" 
            maxLength={5}
            required
            placeholder="Enter 5-digit ZIP"
            className="field pl-10 w-full"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, ''));
              setStatus('idle');
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary whitespace-nowrap">Check Coverage</button>
      </form>

      {status === 'covered' && (
        <div className="mt-4 p-4 rounded-xl bg-sage/20 text-ink flex items-start gap-3">
          <CheckIcon className="w-5 h-5 text-sage mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-ink">Great news! Plumbing dispatch is available in ZIP {zip}.</p>
            <p className="text-sm text-ink/80 mt-0.5">Licensed plumbers are available for emergency repairs and scheduled installations.</p>
            <Link href={`/request-service/`} className="text-sky-deep hover:underline text-sm font-semibold mt-2 inline-block">
              Request Service in {zip} &rarr;
            </Link>
          </div>
        </div>
      )}

      {status === 'not-covered' && (
        <div className="mt-4 p-4 rounded-xl bg-alert/10 text-ink flex items-start gap-3">
          <AlertTriangleIcon className="w-5 h-5 text-alert mt-0.5 shrink-0" />
          <div>
            <p className="font-bold text-alert">Please enter a valid 5-digit US ZIP code.</p>
            <p className="text-sm mt-1 text-ink/80">We connect customers with licensed plumbers across the United States.</p>
          </div>
        </div>
      )}
    </div>
  );
};

