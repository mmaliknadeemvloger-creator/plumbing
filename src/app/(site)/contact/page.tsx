import { pageMeta } from '@/lib/seo';
import { PhoneLink } from '@/components/PhoneLink';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { BRAND } from '@/content/site';

export const metadata = pageMeta({
  title: 'Contact Elite Plumbing & Drain',
  description: 'Get in touch with Elite Plumbing & Drain for service in the Charlotte area.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <div>
      <section className="bg-ink text-white py-16 text-center">
        <div className="container-x max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact {BRAND}</h1>
          <p className="text-lg opacity-90 mb-8">We are ready to help with your plumbing needs.</p>
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
