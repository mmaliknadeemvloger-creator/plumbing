'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt, afterAlt }: { beforeImage: string; afterImage: string; beforeAlt?: string; afterAlt?: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setPosition((x / width) * 100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full rounded-2xl overflow-hidden select-none touch-none cursor-ew-resize ring-1 ring-line"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <div className="absolute inset-0 bg-paper">
        <div className="absolute inset-0 flex items-center justify-center font-bold text-ink/30 text-2xl">AFTER</div>
      </div>
      
      <div 
        className="absolute inset-0 bg-line border-r-4 border-white overflow-hidden shadow-[2px_0_10px_rgba(0,0,0,0.3)]"
        style={{ width: `${position}%` }}
      >
        <div className="absolute inset-0 flex items-center justify-center font-bold text-ink/30 text-2xl min-w-[800px]">BEFORE</div>
      </div>
      
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none"
        style={{ left: `calc(${position}% - 16px)` }}
      >
        <div className="flex gap-1">
          <div className="w-0.5 h-3 bg-ink/30 rounded-full" />
          <div className="w-0.5 h-3 bg-ink/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};
