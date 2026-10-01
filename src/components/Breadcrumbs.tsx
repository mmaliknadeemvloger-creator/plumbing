import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from './icons';

export const Breadcrumbs = ({ items }: { items: { label: string; href?: string }[] }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.eliteplumbingdrain.com/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `https://www.eliteplumbingdrain.com${item.href}` : undefined,
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
