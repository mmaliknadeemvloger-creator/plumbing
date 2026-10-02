import { CheckIcon, AlertTriangleIcon, ArrowRightIcon, WrenchIcon, MapPinIcon, PhoneIcon, ThermometerIcon, DropletIcon, ShieldIcon, ClockIcon } from '@/components/icons';

import Link from 'next/link';
import Image from 'next/image';
import { BRAND_PROMISE, PHONE, PHONE_IS_REAL, IS_24_7, BRAND_SHORT, BRAND_FULL } from '@/content/site';
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
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';
import { requestServicePage, emergencyHub, servicePage, guidePage, locationHub, contactPage } from '@/lib/routes';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Professional Plumbing Services Across the USA | Elite Plumbing',
  description: 'Elite Plumbing delivers trusted plumbing services across the USA. Connect with licensed plumbers for 24/7 emergency repairs, drain cleaning, leak repair, water heaters, and residential & commercial plumbing nationwide.',
  path: '/',
});

export default function HomePage() {
  const topGuides = articles.slice(0, 6);
  
  const nationwideFaqs = [
    {
      question: 'What plumbing services does Elite Plumbing provide across the USA?',
      answer: 'Elite Plumbing connects homeowners and commercial facilities nationwide with licensed plumbers for 24/7 emergency plumbing, drain cleaning, sewer line repair, water heater repair and installation, leak detection, pipe repair, toilet and faucet repair, whole-house repiping, and full plumbing inspections.',
    },
    {
      question: 'How do I request plumbing service or get a quote?',
      answer: 'You can request service online in seconds using our quote request form or call our dispatch team directly. We match your request with an available, pre-screened licensed plumber in your local area who provides transparent, upfront pricing before any work begins.',
    },
    {
      question: 'Are all plumbers in your nationwide network licensed and insured?',
      answer: 'Yes. Every plumbing contractor in our network is thoroughly vetted, licensed, insured, and background-checked to meet rigorous local, state, and national trade standards.',
    },
    {
      question: 'Do you offer 24/7 emergency plumbing services?',
      answer: 'Yes, our dispatch network provides 24-hour emergency plumbing services nationwide for critical situations including burst pipes, active water leaks, severe sewer backups, and broken water heaters.',
    },
    {
      question: 'Do you handle both residential and commercial plumbing?',
      answer: 'Yes. We cater to single-family homeowners, townhome communities, rental properties, office buildings, restaurants, retail facilities, and industrial complexes across the United States.',
    },
    {
      question: 'What happens after I submit a service request?',
      answer: 'Our dispatch system immediately reviews your service details and connects you with a qualified local plumber. The technician contacts you to confirm appointment timing, inspect the issue on-site, and provide clear upfront pricing.',
    },
  ];

  return (
    <div data-home>
      <JsonLd
        data={pageGraph({
          type: 'WebPage',
          path: '/',
          name: 'Professional Plumbing Services Across the USA | Elite Plumbing',
          description: 'Trusted residential and commercial plumbing services across the USA. Connect with licensed plumbers nationwide for fast dispatch, upfront pricing, and guaranteed repairs.',
          faqs: nationwideFaqs,
        })}
      />

      {/* Hero */}
      <section className="bg-ink text-white py-14 md:py-20 relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="eyebrow text-sky mb-4 inline-flex items-center gap-2 font-semibold tracking-wider uppercase text-xs">
                <ShieldIcon className="w-4 h-4 text-sky" /> Trusted Plumbing Services Nationwide
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Professional Plumbing Services Across the USA
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Reliable plumbing solutions for homes and businesses nationwide. Connect with licensed, pre-screened plumbing contractors for fast dispatch, upfront pricing, and guaranteed workmanship.
              </p>
              
              {/* Primary Conversion CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <Link href={requestServicePage()} className="btn btn-primary text-lg justify-center px-7 py-3.5 shadow-lg">
                  Get Plumbing Service
                </Link>
                <Link href={requestServicePage()} className="btn btn-secondary text-lg justify-center px-7 py-3.5">
                  Request a Quote
                </Link>
                <Link href={contactPage()} className="btn btn-ghost text-white border-white/20 hover:bg-white/10 text-lg justify-center">
                  Contact Elite Plumbing
                </Link>
              </div>

              <div className="flex items-center gap-3 mb-8 text-white/90 text-sm">
                <span className="font-semibold text-sky-tint">Need Immediate Phone Dispatch?</span>
                <PhoneLink className="font-bold text-white hover:text-sky underline" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-sm">
                {BRAND_PROMISE.map((promise, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckIcon className="text-sky w-5 h-5 shrink-0" />
                    <span className="text-white/90 font-medium">{promise}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
                <Image
                  src="/photos/hero-plumber.jpg"
                  alt="Professional licensed plumber performing plumbing repair and installation service"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-ink/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs text-white/90 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <ShieldIcon className="w-4 h-4 text-sky" /> Licensed & Insured Pros
                  </span>
                  <span className="text-sky-tint font-medium">Serving Customers Across the USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      {IS_24_7 && (
        <div className="bg-alert text-white py-3.5">
          <div className="container-x flex flex-wrap items-center justify-center gap-3 text-center">
            <AlertTriangleIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold">Plumbing emergency? Burst pipe, sewer backup, or active leak?</span>
            <Link href={emergencyHub()} className="underline font-bold hover:text-white/90">
              24/7 Emergency Plumbing Services Available →
            </Link>
          </div>
        </div>
      )}

      {/* Value Proposition & Conversion Grid */}
      <section className="py-16 bg-white border-b border-line">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Why Choose Elite Plumbing</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
              Nationwide Plumbing Solutions Built on Quality & Trust
            </h2>
            <p className="text-ink/70 text-base md:text-lg">
              We connect property owners with verified local plumbers dedicated to fast response times, clear diagnostic explanations, and transparent upfront estimates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-paper p-8 rounded-2xl ring-1 ring-line">
              <div className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center mb-5 text-sky-deep font-bold">
                <WrenchIcon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-ink mb-3">Residential Plumbing</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                Comprehensive plumbing for single-family homes, townhomes, and apartments. From fixture repairs to full repiping and water heaters.
              </p>
              <Link href={servicePage('residential-plumbing')} className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Explore residential services &rarr;
              </Link>
            </div>

            <div className="bg-paper p-8 rounded-2xl ring-1 ring-line">
              <div className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center mb-5 text-sky-deep font-bold">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-ink mb-3">Commercial Plumbing</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                High-capacity plumbing solutions for businesses, retail centers, restaurants, and facilities. Backflow testing, hydro-jetting, and rapid repairs.
              </p>
              <Link href={servicePage('commercial-plumbing')} className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1">
                Explore commercial services &rarr;
              </Link>
            </div>

            <div className="bg-paper p-8 rounded-2xl ring-1 ring-line">
              <div className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center mb-5 text-sky-deep font-bold">
                <AlertTriangleIcon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-ink mb-3">24/7 Emergency Dispatch</h3>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">
                When water is actively leaking or sewer drains back up, our emergency network connects you with immediate local dispatch.
              </p>
              <Link href={emergencyHub()} className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1">
                View emergency response &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Services Grid */}
      <section className="py-16 bg-paper">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Complete Service Catalog</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink mb-4">
              Comprehensive Plumbing Services Nationwide
            </h2>
            <p className="text-ink/70">
              Select a service below to learn about common signs, diagnostic processes, cost factors, and online dispatch options:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Emergency Plumbing', slug: 'emergency-plumbing', icon: AlertTriangleIcon, href: emergencyHub() },
              { name: 'Residential Plumbing', slug: 'residential-plumbing', icon: ShieldIcon, href: servicePage('residential-plumbing') },
              { name: 'Commercial Plumbing', slug: 'commercial-plumbing', icon: WrenchIcon, href: servicePage('commercial-plumbing') },
              { name: 'Drain Cleaning', slug: 'drain-cleaning', icon: DropletIcon, href: servicePage('drain-cleaning') },
              { name: 'Sewer Line Repair', slug: 'sewer-line-repair', icon: WrenchIcon, href: servicePage('sewer-line-repair') },
              { name: 'Water Heater Services', slug: 'water-heater-services', icon: ThermometerIcon, href: servicePage('water-heater-services') },
              { name: 'Leak Detection & Repair', slug: 'leak-repair', icon: AlertTriangleIcon, href: servicePage('leak-repair') },
              { name: 'Pipe Repair', slug: 'pipe-repair', icon: WrenchIcon, href: servicePage('pipe-repair') },
              { name: 'Toilet & Faucet Repair', slug: 'toilet-faucet-repair', icon: DropletIcon, href: servicePage('toilet-faucet-repair') },
              { name: 'Plumbing Installation', slug: 'plumbing-installation', icon: ShieldIcon, href: servicePage('plumbing-installation') },
              { name: 'Plumbing Inspection', slug: 'plumbing-inspection', icon: WrenchIcon, href: servicePage('plumbing-inspection') },
              { name: 'Whole-House Repiping', slug: 'repiping', icon: ShieldIcon, href: servicePage('repiping') },
            ].map((item) => (
              <Link
                key={item.slug}
                href={item.href}
                className="bg-white p-5 rounded-2xl ring-1 ring-line hover:ring-sky hover:shadow-md transition-all group text-center flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-sky-deep" />
                </div>
                <div className="font-bold text-ink text-sm group-hover:text-sky-deep transition-colors mb-1">{item.name}</div>
                <span className="text-xs text-ink/50 group-hover:text-sky font-medium">Learn more &rarr;</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/plumbing-services/" className="btn btn-ghost-light inline-flex items-center gap-2">
              Browse All Plumbing Services <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Finder */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-4 text-ink">What seems to be the problem?</h2>
          <p className="text-center text-ink/70 mb-8">Select your plumbing symptom for immediate diagnostic advice or service dispatch:</p>
          <div className="grid gap-3">
            {problems.slice(0, 5).map((p, i) => (
              <div key={i} className="bg-paper p-4 rounded-2xl ring-1 ring-line flex justify-between items-center hover:border-sky transition-colors">
                <span className="font-semibold text-ink">{p.symptom}</span>
                {p.serviceSlug ? (
                  <Link href={servicePage(p.serviceSlug)} className="text-sky-deep font-semibold text-sm hover:underline flex items-center gap-1">
                    Fix Issue →
                  </Link>
                ) : p.guideSlug ? (
                  <Link href={guidePage(p.guideSlug)} className="text-sky-deep font-semibold text-sm hover:underline flex items-center gap-1">
                    Read Guide →
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
          <div className="container-x max-w-4xl">
            <div className="text-center mb-10">
              <span className="eyebrow text-copper mb-2 block font-semibold uppercase tracking-wider text-xs">Proven Plumbing Workmanship</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">See the Difference: Real Results</h2>
              <p className="text-ink/70 mt-2 max-w-2xl mx-auto">
                Explore real plumbing craftsmanship across drain hydro-jetting, under-sink drain replacements, and whole-house copper repiping.
              </p>
            </div>
            <BeforeAfterSlider pairs={beforeAfterPairs} />
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Simple & Seamless</span>
            <h2 className="text-3xl font-heading font-bold text-ink mb-3">How Our Nationwide Service Works</h2>
            <p className="text-ink/70 text-sm">Four simple steps from request to completed repair with total peace of mind:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-paper p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Call or Request Online</h3>
              <p className="text-sm text-ink/70">Submit your plumbing issue online or call dispatch for immediate assistance.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Local Plumber Matched</h3>
              <p className="text-sm text-ink/70">A pre-screened, licensed local plumbing contractor is routed to your location.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Upfront Diagnosis & Quote</h3>
              <p className="text-sm text-ink/70">The plumber inspects the problem and provides transparent pricing before starting.</p>
            </div>
            <div className="bg-paper p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Job Done Right</h3>
              <p className="text-sm text-ink/70">Guaranteed repair or installation with complete cleanup included on every job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area + ZIP Checker */}
      <section className="py-16 bg-paper">
        <div className="container-x max-w-4xl text-center">
          <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Nationwide Network</span>
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">Plumbing Coverage Across the USA</h2>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            We connect homeowners and commercial properties with verified local plumbing contractors across the United States. Enter your 5-digit US ZIP code to check immediate dispatch availability:
          </p>
          <div className="max-w-md mx-auto mb-8">
            <ZipChecker />
          </div>
          <p className="text-sm text-ink/60">
            Looking for specific regional hubs? <Link href="/locations/" className="text-sky-deep font-semibold underline">Browse our verified local service regions</Link>.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Homeowner Resources</span>
              <h2 className="text-3xl font-heading font-bold text-ink">Plumbing Advice & Guides</h2>
            </div>
            <Link href="/resources/" className="text-sky-deep font-semibold hover:underline hidden sm:block">
              View all 16 guides →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topGuides.map((guide) => (
              <Link key={guide.slug} href={guidePage(guide.slug)} className="bg-paper p-6 rounded-2xl ring-1 ring-line hover:ring-sky hover:shadow-md transition-all flex flex-col group">
                <span className="text-xs uppercase font-bold text-copper tracking-wider mb-2">{guide.category}</span>
                <h3 className="font-bold text-ink text-lg mb-3 group-hover:text-sky-deep transition-colors">{guide.title}</h3>
                <p className="text-sm text-ink/70 line-clamp-2 mb-4 flex-grow">{guide.answer}</p>
                <span className="text-xs font-semibold text-sky-deep mt-auto flex items-center gap-1">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-paper">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-10 text-ink">What Our Customers Say</h2>
          <Reviews reviews={[]} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <span className="eyebrow text-sky mb-2 block font-semibold uppercase tracking-wider text-xs">Clear Answers</span>
            <h2 className="text-3xl font-heading font-bold text-ink">Frequently Asked Questions</h2>
          </div>
          <FaqList faqs={nationwideFaqs} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}

