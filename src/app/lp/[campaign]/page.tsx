import { notFound } from 'next/navigation';
import { landingPages } from '@/content/landingPages';
import { pageMeta } from '@/lib/seo';
import { servicePage } from '@/lib/routes';
import { SERVICE_AREA_LABEL, SITE_URL } from '@/content/site';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { FaqList } from '@/components/FaqList';

export const dynamicParams = false;

export async function generateStaticParams() {
  return landingPages.map((lp) => ({ campaign: lp.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ campaign: string }> }) {
  const { campaign } = await params;
  const lp = landingPages.find((p) => p.slug === campaign);
  
  if (!lp) return {};

  const meta = pageMeta({
    title: lp.h1,
    description: lp.bullets.join('. '),
    path: `/lp/${campaign}/`,
    robots: 'noindex, nofollow',
    keywords: lp.keywords.map(k => k.kw),
  });
  
  meta.alternates = {
    canonical: `${SITE_URL}${servicePage(lp.canonicalService)}`,
  };
  
  return meta;
}

export default async function LandingPage({
  params,
  searchParams,
}: {
  params: Promise<{ campaign: string }>;
  searchParams: Promise<{ kw?: string }>;
}) {
  const { campaign } = await params;
  const { kw } = await searchParams;
  
  const lp = landingPages.find((p) => p.slug === campaign);
  if (!lp) {
    notFound();
  }

  // Find valid headline from keyword whitelist
  const matchedKw = lp.keywords.find((k) => k.kw === kw);
  const headline = matchedKw ? matchedKw.headline : lp.h1;

  return (
    <div className="container-x mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Content */}
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink">
            {headline}
          </h1>
          
          <div className="mb-6 font-semibold text-lg text-sage">
            {SERVICE_AREA_LABEL}
          </div>

          <ul className="mb-10 space-y-4">
            {lp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-6 h-6 text-copper mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mb-10 bg-white p-6 rounded-2xl ring-1 ring-line">
            <h2 className="font-heading text-2xl font-bold mb-4">Signs You Need Us</h2>
            <ul className="space-y-3">
              {lp.signs.map((sign, i) => (
                <li key={i} className="flex items-center text-ink/80">
                  <span className="w-2 h-2 bg-sky rounded-full mr-3 flex-shrink-0"></span>
                  {sign}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="font-heading text-2xl font-bold mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '1. Request', desc: 'Call or submit the form' },
                { title: '2. Schedule', desc: 'We book a convenient time' },
                { title: '3. Diagnose', desc: 'Expert on-site evaluation' },
                { title: '4. Resolve', desc: 'Fast, professional repair' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-4 rounded-xl ring-1 ring-line">
                  <div className="font-bold text-lg mb-1 text-sky">{step.title}</div>
                  <div className="text-ink/80">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          {lp.faqs && lp.faqs.length > 0 && (
            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <FaqList faqs={lp.faqs} />
            </div>
          )}
        </div>

        {/* Right Column - Form */}
        <div>
          <div className="sticky top-24">
            <LeadFormBlock defaultService={lp.canonicalService} />
          </div>
        </div>
      </div>
    </div>
  );
}
