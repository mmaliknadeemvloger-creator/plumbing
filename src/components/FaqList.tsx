'use client';
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

export const FaqList = ({ faqs }: { faqs: { question: string, answer: string }[] }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <FaqItem key={idx} faq={faq} />
      ))}
    </div>
  );
};

const FaqItem = ({ faq }: { faq: { question: string, answer: string } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className="group rounded-2xl bg-white ring-1 ring-line overflow-hidden" open={isOpen} onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-bold text-lg text-ink list-none [&::-webkit-details-marker]:hidden">
        {faq.question}
        <ChevronDownIcon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky' : 'text-ink/50'}`} />
      </summary>
      <div className="px-6 pb-6 pt-0 text-ink/80 prose-sw">
        <p>{faq.answer}</p>
      </div>
    </details>
  );
};
