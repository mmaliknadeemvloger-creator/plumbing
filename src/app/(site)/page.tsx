import { CheckIcon, AlertTriangleIcon, ArrowRightIcon, WrenchIcon, MapPinIcon, PhoneIcon, ThermometerIcon, DropletIcon, ShieldIcon } from '@/components/icons';
import Link from 'next/link';
import { BRAND_PROMISE, PHONE, PHONE_IS_REAL, IS_24_7 } from '@/content/site';
import { problems } from '@/content/problems';
import { beforeAfterPairs } from '@/content/beforeAfter';
import { articles } from '@/content/articles';
import { generalFaqs } from '@/content/faqs';
import { PhoneLink } from '@/components/PhoneLink';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { ZipChecker } from '@/components/ZipChecker';
import { FaqList } from '@/components/FaqList';
import { Reviews } from '@/components/Reviews';
import { CtaBand } from '@/components/CtaBand';
import { requestServicePage, emergencyHub, servicePage, guidePage, locationHub } from '@/lib/routes';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'A Charlotte-area plumber who explains the problem before fixing it',
  description: 'SteadWell Plumbing connects you with top-rated Charlotte plumbers.',
  path: '/',
});

export default function HomePage() {
  const topGuides = articles.slice(0, 6);
  const topFaqs = generalFaqs.slice(0, 8);

  return (
    <div data-home>
      {/* Hero */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="container-x text-center max-w-4xl">
          <p className="eyebrow text-sky mb-4">Charlotte Metro Plumbing</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            A Charlotte-area plumber who explains the problem before fixing it
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <PhoneLink className="btn btn-primary text-lg" />
            <Link href={requestServicePage()} className="btn btn-secondary text-lg">
              Request Service
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
            {BRAND_PROMISE.map((promise, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <CheckIcon className="text-sky w-5 h-5" />
                <span>{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      {IS_24_7 && (
        <div className="bg-alert text-white py-3">
          <div className="container-x flex items-center justify-center gap-3">
            <AlertTriangleIcon className="w-5 h-5" />
            <span className="font-semibold">Need an emergency plumber?</span>
            <Link href={emergencyHub()} className="underline font-bold">
              We offer 24/7 emergency service →
            </Link>
          </div>
        </div>
      )}

      {/* Categories */}
      <section className="py-16 bg-paper">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Our Plumbing Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['water-heaters', 'drain-cleaning', 'leaks', 'toilets', 'faucets', 'garbage-disposals', 'sump-pumps', 'pipes', 'gas-lines', 'sewer-lines'].map((slug) => (
              <Link key={slug} href={servicePage(slug)} className="bg-white p-4 rounded-2xl ring-1 ring-line text-center hover:ring-sky transition-colors">
                <div className="font-semibold capitalize">{slug.replace(/-/g, ' ')}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Finder */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-6">What seems to be the problem?</h2>
          <div className="grid gap-4">
            {problems.slice(0, 5).map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl ring-1 ring-line flex justify-between items-center">
                <span className="font-semibold">{p.symptom}</span>
                {p.serviceSlug ? (
                  <Link href={servicePage(p.serviceSlug)} className="text-sky-deep font-semibold text-sm hover:underline">
                    View Service
                  </Link>
                ) : p.guideSlug ? (
                  <Link href={guidePage(p.guideSlug)} className="text-sky-deep font-semibold text-sm hover:underline">
                    Read Guide
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      {beforeAfterPairs.length > 0 && (
        <section className="py-16 bg-paper">
          <div className="container-x">
            <h2 className="text-3xl font-heading font-bold text-center mb-10">See the Difference</h2>
            <BeforeAfterSlider
              beforeImage="/photos/before-drain.jpg"
              afterImage="/photos/after-drain.jpg"
              beforeAlt="Clogged drain before cleaning"
              afterAlt="Clean drain after service"
            />
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-sky-tint text-sky rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold mb-2">Call or Request</h3>
              <p className="text-sm text-gray-600">Reach out online or give us a call.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sky-tint text-sky rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold mb-2">Diagnose</h3>
              <p className="text-sm text-gray-600">A pro evaluates the issue in person.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sky-tint text-sky rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold mb-2">Get Quote</h3>
              <p className="text-sm text-gray-600">You get an upfront price with no surprises.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sky-tint text-sky rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold mb-2">Get It Fixed</h3>
              <p className="text-sm text-gray-600">The problem is solved and cleaned up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-ink text-white">
        <div className="container-x max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Serving the Charlotte Metro Area</h2>
          <div className="mb-8">
            <ZipChecker />
          </div>
          <Link href={locationHub()} className="text-sky hover:text-white underline">
            View all service areas
          </Link>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-paper">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Plumbing Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topGuides.map(guide => (
              <Link key={guide.slug} href={guidePage(guide.slug)} className="bg-white p-6 rounded-2xl ring-1 ring-line hover:ring-sky block">
                <h3 className="font-bold mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{guide.answer}</p>
                <span className="text-sky-deep font-semibold text-sm flex items-center gap-1">Read more <ArrowRightIcon className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">What our customers say</h2>
          <Reviews reviews={[]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-paper">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-10">Frequently Asked Questions</h2>
          <FaqList faqs={topFaqs} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
