import React from 'react';
import { HeaderShell } from './HeaderShell';
import { ShieldIcon } from '../icons';

export const Header = () => {
  return (
    <header className="relative z-50">
      <div className="bg-ink text-white py-2 px-4 text-xs font-medium text-center flex justify-center items-center gap-2">
        <ShieldIcon className="w-4 h-4 text-sky" />
        <span>Serving Charlotte Metro & York County • Fast, Reliable Service</span>
      </div>
      <HeaderShell />
    </header>
  );
};
