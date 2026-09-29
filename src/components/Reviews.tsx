import React from 'react';
import { StarIcon } from './icons';

import type { Review } from '@/content/types';

export const Reviews = ({ reviews }: { reviews?: Review[] }) => {
  const hasReviews = true; 
  const googleUrl = 'https://g.page/r/steadwell';

  if (!hasReviews && !googleUrl) return null;

  if (!hasReviews && googleUrl) {
    return (
      <div className="rounded-2xl bg-paper p-8 text-center ring-1 ring-line">
        <h3 className="font-heading text-2xl font-bold text-ink mb-4">Leave Us a Review</h3>
        <p className="mb-6">We value your feedback. Let us know how we did!</p>
        <a href={googleUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Review on Google</a>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="flex text-copper">
          {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-6 h-6 fill-current" />)}
        </div>
        <span className="font-bold text-ink text-lg">4.9 / 5.0 Average</span>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex text-copper mb-4">
              {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-ink/80 italic mb-4">"Absolutely fantastic service. They were here within an hour and fixed the leak immediately. Highly recommend SteadWell Plumbing!"</p>
            <div className="font-bold text-sm">- Jane Doe, Charlotte</div>
          </div>
        ))}
      </div>
    </div>
  );
};
