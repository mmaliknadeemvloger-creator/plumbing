import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from './icons';
import { SITE_URL } from '@/content/site';

export const Breadcrumbs = ({ 
  items, 
  hideSchema = false 
}: { 
  items: { label: string; href?: string }[]; 
  hideSchema?: boolean;
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `${SITE_URL}${item.href}` : undefined,
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      {!hideSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <ol className="flex items-center gap-2 text-sm text-ink/70">
        <li>
          <Link href="/" className="hover:text-sky transition-colors flex items-center">
            <HomeIcon className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRightIcon className="w-4 h-4 opacity-50" />
            {item.href ? (
              <Link href={item.href} className="hover:text-sky transition-colors whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] sm:max-w-none" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
