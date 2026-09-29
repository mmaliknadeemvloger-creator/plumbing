import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const SectionHeading = ({ eyebrow, title, lead, className = '' }: { eyebrow?: string, title: string, lead?: string, className?: string }) => (
  <div className={`max-w-3xl mb-12 ${className}`}>
    {eyebrow && <span className="eyebrow block mb-4">{eyebrow}</span>}
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-6">{title}</h2>
    {lead && <p className="text-lg text-ink/80">{lead}</p>}
  </div>
);

export const PhotoCard = ({ image, title, description, href, className = '' }: { image: string, title: string, description?: string, href: string, className?: string }) => (
  <Link href={href} className={`group block rounded-2xl bg-white ring-1 ring-line overflow-hidden hover:shadow-lg transition-all ${className}`}>
    <div className="relative aspect-video overflow-hidden bg-line">
      {image && <Image src={image} alt={title} fill className="object-cover" />}
      <div className="absolute inset-0 bg-paper transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="font-heading font-bold text-xl text-ink mb-2 group-hover:text-sky transition-colors">{title}</h3>
      {description && <p className="text-ink/70 line-clamp-2">{description}</p>}
    </div>
  </Link>
);

export const Chip = ({ children, href, className = '' }: { children: React.ReactNode, href?: string, className?: string }) => {
  const baseClasses = 'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ring-1 ring-line bg-white hover:bg-paper hover:text-sky transition-colors';
  if (href) {
    return <Link href={href} className={`${baseClasses} ${className}`}>{children}</Link>;
  }
  return <span className={`${baseClasses} ${className}`}>{children}</span>;
};
