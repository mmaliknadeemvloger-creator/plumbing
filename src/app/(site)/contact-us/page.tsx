import { pageMeta } from '@/lib/seo';
import { PhoneLink } from '@/components/PhoneLink';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { BRAND } from '@/content/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Contact Us | Nationwide Plumbing Dispatch | Elite Plumbing',
  description: 'Contact Elite Plumbing for prompt residential and commercial plumbing solutions across the USA. Request a free quote online or call for immediate dispatch.',
  path: '/contact-us/',
  keywords: [
    'contact plumber',
    'plumbing phone number',
    'schedule plumbing service',
    'plumbing dispatch',
    'request a plumbing quote',
    'emergency plumber contact',
    'plumbing services USA contact',
  ],
});

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Contact Us', href: '/contact-us/' }
  ];

  return (
    <div>
      <JsonLd
        data={pageGraph({
          type: 'ContactPage',
          path: '/contact-us/',
          name: 'Contact Us | Nationwide Plumbing Dispatch & Service | Elite Plumbing',
          description: 'Contact Elite Plumbing for residential and commercial plumbing services across the USA.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'Contact Us', item: '/contact-us/' },
          ],
        })}
      />
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} hideSchema={true} />
        </div>
      </div>
      <section className="bg-ink text-white py-16 text-center">
        <div className="container-x max-w-3xl">
          <span className="eyebrow text-sky mb-2 block uppercase tracking-wider font-semibold text-xs">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact {BRAND}</h1>
          <p className="text-lg opacity-90 mb-8">We are ready to connect you with trusted, licensed plumbers across the United States.</p>
          <PhoneLink className="btn btn-primary text-xl px-8 py-4" />
        </div>
      </section>


      <section className="py-16">
        <div className="container-x max-w-2xl">
          <div className="bg-white rounded-2xl ring-1 ring-line p-6 md:p-8">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Request Service Online</h2>
            <LeadFormBlock />
          </div>
        </div>
      </section>
    </div>
  );
}
