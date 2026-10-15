import { pageMeta } from '@/lib/seo';
import { generalFaqs } from '@/content/faqs';
import { FaqList } from '@/components/FaqList';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';
import Link from 'next/link';
import { serviceHub, locationHub } from '@/lib/routes';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMeta({
  title: 'Frequently Asked Questions | Plumbing Help | Elite Plumbing',
  description: 'Get clear answers to common plumbing questions about drain cleaning, leak detection, water heaters, pipe repairs, emergency dispatch, and repair costs.',
  path: '/faq/',
  keywords: [
    'plumbing faq',
    'common plumbing questions',
    'plumbing repair costs',
    'emergency plumbing questions',
    'how to hire a plumber',
    'plumbing help and answers',
  ],
});

export default function FaqPage() {
  const breadcrumbs = [
    { label: 'FAQ', href: '/faq/' }
  ];

  return (
    <div>
      <JsonLd
        data={pageGraph({
          type: 'FAQPage',
          path: '/faq/',
          name: 'Frequently Asked Questions | Plumbing & Drain Help | Elite Plumbing',
          description: 'Answers to common residential and commercial plumbing questions across the USA.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'FAQ', item: '/faq/' },
          ],
          faqs: generalFaqs,
        })}
      />
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} hideSchema={true} />
        </div>
      </div>
      <section className="bg-ink text-white py-16 text-center">
        <div className="container-x max-w-3xl">
          <span className="eyebrow text-sky mb-2 block uppercase tracking-wider font-semibold text-xs">Help & Advice</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg opacity-90">Expert answers to common residential and commercial plumbing questions nationwide.</p>
        </div>
      </section>


      <section className="py-16">
        <div className="container-x max-w-3xl">
          <FaqList faqs={generalFaqs} />
          
          <div className="mt-12 p-6 bg-paper rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Looking for specific services?</h3>
              <p className="text-sm text-gray-600">Browse our services or service areas for more details.</p>
            </div>
            <div className="flex gap-3">
              <Link href={serviceHub()} className="btn btn-ghost-light">Services</Link>
              <Link href={locationHub()} className="btn btn-ghost-light">Service Areas</Link>
            </div>
          </div>
        </div>
      </section>
      
      <CtaBand />
    </div>
  );
}
