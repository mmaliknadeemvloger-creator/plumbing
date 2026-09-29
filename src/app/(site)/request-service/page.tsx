import { pageMeta } from '@/lib/seo';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';

export const metadata = pageMeta({
  title: 'Request Service',
  description: 'Request plumbing service online.',
  path: '/request-service/',
  robots: 'noindex',
});

export default function RequestServicePage() {
  return (
    <div className="min-h-screen bg-paper py-12">
      <div className="container-x max-w-xl">
        <div className="bg-white rounded-2xl ring-1 ring-line p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl font-heading font-bold mb-6 text-center">Request Service</h1>
          <LeadFormBlock />
        </div>
      </div>
    </div>
  );
}
