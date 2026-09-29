'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, WrenchIcon, MapPinIcon } from '../icons';
import { nav } from './nav';

export function MegaMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenIndex(index), 90);
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpenIndex(null), 160);
  };

  const handleClick = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Escape') setOpenIndex(null);
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    }
  };

  const menus = [
    {
      label: 'Services',
      icon: WrenchIcon,
      items: nav.services,
    },
    {
      label: 'Locations',
      icon: MapPinIcon,
      items: nav.locations.flatMap(r => r.cities),
    },
  ];

  return (
    <nav className="flex items-center gap-1 h-full" aria-label="Main navigation">
      {menus.map((menu, i) => (
        <div
          key={i}
          className="relative h-full flex items-center"
          onMouseEnter={() => handleEnter(i)}
          onMouseLeave={handleLeave}
        >
          <button
            className="flex items-center gap-1 font-semibold text-sm text-ink hover:text-sky transition-colors h-full px-3 py-4"
            onClick={() => handleClick(i)}
            onKeyDown={e => handleKeyDown(e, i)}
            aria-expanded={openIndex === i}
            aria-haspopup="true"
          >
            {menu.label}
            <ChevronDownIcon
              className={`w-4 h-4 transition-transform duration-150 ${openIndex === i ? 'rotate-180' : ''}`}
            />
          </button>

          {openIndex === i && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-xl rounded-2xl ring-1 ring-line p-5 grid grid-cols-2 gap-2 z-50"
              role="menu"
            >
              {menu.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  className="p-3 rounded-xl hover:bg-paper transition-colors group flex items-center gap-3"
                  role="menuitem"
                  onClick={() => setOpenIndex(null)}
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-tint flex items-center justify-center shrink-0">
                    <menu.icon className="w-4 h-4 text-sky-deep" />
                  </div>
                  <span className="text-sm font-medium text-ink group-hover:text-sky-deep transition-colors">
                    {item.title}
                  </span>
                </Link>
              ))}
              <Link
                href={i === 0 ? '/plumbing-services/' : '/locations/'}
                className="col-span-2 text-center text-sm font-semibold text-sky-deep hover:underline pt-2 border-t border-line mt-1"
              >
                View all {menu.label.toLowerCase()} →
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* Static links */}
      {nav.company.slice(0, 2).map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="font-semibold text-sm text-ink hover:text-sky transition-colors px-3 py-4"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
