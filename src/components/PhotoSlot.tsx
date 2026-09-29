import React from 'react';
import Image from 'next/image';

interface PhotoSlotProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const PhotoSlot = ({ src, alt, className = '', priority = false }: PhotoSlotProps) => {
  return (
    <div className={`relative overflow-hidden bg-line ${className}`}>
      {src ? (
        <div className="absolute inset-0 bg-ink/10 flex items-center justify-center text-sm text-ink/50 font-medium p-4 text-center">
          Image: {alt}
        </div>
      ) : (
        <div className="absolute inset-0 bg-paper" />
      )}
    </div>
  );
};
