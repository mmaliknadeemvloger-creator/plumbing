'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import type { BeforeAfter } from '@/content/types';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  pairs?: BeforeAfter[];
}

export function BeforeAfterSlider({
  beforeImage = '/photos/before-drain.jpg',
  afterImage = '/photos/after-drain.jpg',
  beforeAlt = 'Before repair',
  afterAlt = 'After repair',
  pairs,
}: BeforeAfterSliderProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = pairs && pairs.length > 0 ? pairs[activeTab] : null;
  const currentBefore = current?.beforePhoto ?? beforeImage;
  const currentAfter = current?.afterPhoto ?? afterImage;
  const currentBeforeAlt = current?.beforeAlt ?? beforeAlt;
  const currentAfterAlt = current?.afterAlt ?? afterAlt;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setPosition((x / width) * 100);
  }, []);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Tabs (if multiple pairs provided) */}
      {pairs && pairs.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2">
          {pairs.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setActiveTab(idx);
                setPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-ink text-white shadow-md'
                  : 'bg-white text-ink/70 hover:bg-paper-deep hover:text-ink ring-1 ring-line'
              }`}
            >
              {pair.title}
            </button>
          ))}
        </div>
      )}

      {/* Description */}
      {current?.description && (
        <p className="text-center text-sm md:text-base text-ink/75 max-w-2xl mx-auto">
          {current.description}
        </p>
      )}

      {/* Interactive Slider Box */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden select-none touch-none cursor-ew-resize ring-4 ring-white shadow-2xl"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        {/* AFTER / NOW Image (Full Background) */}
        <div className="absolute inset-0">
          <Image
            src={currentAfter}
            alt={currentAfterAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
            NOW / RESTORED
          </div>
        </div>

        {/* BEFORE Image (Clipped Left Layer) */}
        <div
          className="absolute inset-0 overflow-hidden border-r-4 border-white shadow-[4px_0_20px_rgba(0,0,0,0.5)]"
          style={{ width: `${position}%` }}
        >
          <div className="absolute inset-0 w-full h-full min-w-[300px]" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
            <Image
              src={currentBefore}
              alt={currentBeforeAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute top-4 left-4 bg-alert/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/20 shadow-md">
            BEFORE REPAIR
          </div>
        </div>

        {/* Handle Button */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl pointer-events-none border-2 border-sky"
          style={{ left: `${position}%` }}
        >
          <div className="flex items-center gap-1">
            <span className="text-ink text-xs font-bold">◀</span>
            <span className="text-ink text-xs font-bold">▶</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-ink/50 font-medium">
        ↔ Drag or swipe the center divider left and right to inspect the plumbing transformation
      </div>
    </div>
  );
}
