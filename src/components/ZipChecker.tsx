'use client';
import React, { useState } from 'react';
import { CheckIcon, AlertTriangleIcon, SearchIcon } from './icons';
import Link from 'next/link';

const COVERED_ZIPS = ['28202', '28203', '28204', '29730', '29732'];

export const ZipChecker = () => {
  const [zip, setZip] = useState('');
  const [status, setStatus] = useState<'idle' | 'covered' | 'not-covered'>('idle');

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.length === 5) {
      setStatus(COVERED_ZIPS.includes(zip) ? 'covered' : 'not-covered');
    }
  };

  return (
    <div className="rounded-2xl bg-paper p-6 md:p-8 ring-1 ring-line max-w-xl">
      <h3 className="font-heading text-xl font-bold mb-2">Check Service Area</h3>
      <p className="text-ink/70 mb-6 text-sm">Enter your ZIP code to see if we serve your neighborhood.</p>
      
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
        <button type="submit" className="btn btn-primary whitespace-nowrap">Check</button>
      </form>

      {status === 'covered' && (
        <div className="mt-4 p-4 rounded-xl bg-sage/20 text-ink flex items-start gap-3">
          <CheckIcon className="w-5 h-5 text-sage mt-0.5" />
          <div>
            <p className="font-bold">Great news! We serve your area.</p>
            <Link href="/request-service/" className="text-sky hover:underline text-sm font-medium mt-1 inline-block">Request service now &rarr;</Link>
          </div>
        </div>
      )}

      {status === 'not-covered' && (
        <div className="mt-4 p-4 rounded-xl bg-alert/10 text-ink flex items-start gap-3">
          <AlertTriangleIcon className="w-5 h-5 text-alert mt-0.5" />
          <div>
            <p className="font-bold">We don't currently serve {zip}.</p>
            <p className="text-sm mt-1">Our service area covers Charlotte and York County.</p>
          </div>
        </div>
      )}
    </div>
  );
};
