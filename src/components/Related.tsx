import React from 'react';
import { PhotoCard } from './ui';

export const Related = ({ items, title = 'Related' }: { items: any[], title?: string }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <div className="mt-16">
      <h2 className="font-heading text-2xl font-bold mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <PhotoCard 
            key={idx}
            href={item.href || `/${item.slug}/`}
            title={item.title}
            image={item.photo || ''}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
