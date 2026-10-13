import { pageMeta } from '@/lib/seo';
import { generalFaqs } from '@/content/faqs';
import { FaqList } from '@/components/FaqList';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';
import Link from 'next/link';
import { serviceHub, locationHub } from '@/lib/routes';

export const metadata = pageMeta({
  title: 'Frequently Asked Plumbing Questions | Elite Plumbing',
  description: 'Find answers to common plumbing questions about emergency repairs, drain cleaning, water heaters, leak detection, and pricing across the USA.',
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
  return (
    <div>
      <JsonLd
        data={pageGraph({
          type: 'FAQPage',
          path: '/faq/',
          name: 'Frequently Asked Plumbing Questions | Elite Plumbing',
          description: 'Answers to common residential and commercial plumbing questions across the USA.',
          faqs: generalFaqs,
        })}
      />
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
