import { pageMeta } from '@/lib/seo';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { ShieldIcon, PhoneIcon } from '@/components/icons';
import { PHONE, PHONE_E164 } from '@/content/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Request Plumbing Service Online | Free Quote | Elite Plumbing',
  description: 'Request professional plumbing services online across the USA. Fast dispatch, upfront pricing, and licensed plumbing contractors for residential and commercial repairs.',
  path: '/request-service/',
  robots: 'index, follow',
  keywords: [
    'request plumbing service',
    'plumbing quote online',
    'hire licensed plumber',
    'book plumbing repair',
    'plumber estimate',
    'schedule local plumber',
  ],
});

export default function RequestServicePage() {
  const breadcrumbs = [
    { label: 'Request Service', href: '/request-service/' }
  ];

  return (
    <div>
      <JsonLd
        data={pageGraph({
          type: 'WebPage',
          path: '/request-service/',
          name: 'Request Plumbing Service Online | Free Quote | Elite Plumbing',
          description: 'Request professional plumbing services online across the USA.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'Request Service', item: '/request-service/' },
          ],
        })}
      />
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} hideSchema={true} />
        </div>
      </div>
      <div className="min-h-screen bg-paper py-12 md:py-16">
      <div className="container-x max-w-xl">
        <div className="text-center mb-8">
          <span className="eyebrow text-sky mb-2 inline-flex items-center gap-1.5 uppercase tracking-wider font-semibold text-xs">
            <ShieldIcon className="w-4 h-4 text-sky" /> Fast Dispatch Nationwide
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-3">
            Request Plumbing Service Online
          </h1>
          <p className="text-ink/70 text-sm">
            Fill out the form below to connect with a licensed local plumber. Need immediate phone help? Call{' '}
            <a href={`tel:${PHONE_E164}`} className="text-sky-deep font-bold underline">
              {PHONE}
            </a>
          </p>
        </div>

        <div className="bg-white rounded-2xl ring-1 ring-line p-6 md:p-8 shadow-sm">
          <LeadFormBlock />
        </div>
      </div>
      </div>
    </div>
  );
}

