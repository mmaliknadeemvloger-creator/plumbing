import { CheckIcon, AlertTriangleIcon, ArrowRightIcon, WrenchIcon, MapPinIcon, PhoneIcon, ThermometerIcon, DropletIcon, ShieldIcon } from '@/components/icons';
import Link from 'next/link';
import Image from 'next/image';
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
  description: 'Elite Plumbing & Drain connects you with top-rated Charlotte plumbers.',
  path: '/',
});

export default function HomePage() {
  const topGuides = articles.slice(0, 6);
  const topFaqs = generalFaqs.slice(0, 8);

  return (
    <div data-home>
      {/* Hero */}
      <section className="bg-ink text-white py-14 md:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="eyebrow text-sky mb-4 inline-block font-semibold tracking-wider">
                Charlotte Metro Plumbing & Drain
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                A Charlotte-area plumber who explains the problem before fixing it
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
                Licensed plumbing and drain clearing experts serving Mecklenburg and York counties. Fast dispatch, upfront pricing, and guaranteed workmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <PhoneLink variant="hero" className="justify-center" />
                <Link href={requestServicePage()} className="btn btn-secondary text-lg justify-center">
                  Request Service Online
                </Link>
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
                  alt="Professional licensed plumber performing under-sink plumbing repair in a Charlotte home"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-ink/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-white/90 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <ShieldIcon className="w-4 h-4 text-sky" /> Licensed & Insured Pros
                  </span>
                  <span className="text-sky-tint">Charlotte Metro & York County</span>
                </div>
              </div>
            </div>
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
          <h2 className="text-3xl font-heading font-bold text-center mb-10 text-ink">Our Plumbing Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Water Heaters', slug: 'water-heater-repair', icon: ThermometerIcon },
              { name: 'Drain Cleaning', slug: 'drain-cleaning', icon: DropletIcon },
              { name: 'Leak Detection', slug: 'leak-detection', icon: AlertTriangleIcon },
              { name: 'Sewer Line Repair', slug: 'sewer-line-repair', icon: WrenchIcon },
              { name: 'Pipe Repair', slug: 'pipe-repair', icon: WrenchIcon },
              { name: 'Toilet Repair', slug: 'toilet-repair', icon: WrenchIcon },
              { name: 'Faucet Repair', slug: 'faucet-repair', icon: DropletIcon },
              { name: 'Hydro Jetting', slug: 'hydro-jetting', icon: DropletIcon },
              { name: 'Whole-House Repiping', slug: 'repiping', icon: ShieldIcon },
              { name: 'Water Softeners', slug: 'water-softener', icon: DropletIcon },
            ].map((item) => (
              <Link key={item.slug} href={servicePage(item.slug)} className="bg-white p-5 rounded-2xl ring-1 ring-line hover:ring-sky hover:shadow-md transition-all group text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-sky-deep" />
                </div>
                <div className="font-bold text-ink text-sm group-hover:text-sky-deep transition-colors">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Finder */}
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-4 text-ink">What seems to be the problem?</h2>
          <p className="text-center text-ink/70 mb-8">Select your plumbing issue for immediate guidance or dispatch:</p>
          <div className="grid gap-3">
            {problems.slice(0, 5).map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl ring-1 ring-line flex justify-between items-center hover:border-sky transition-colors">
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
              <span className="eyebrow text-copper mb-2 block font-semibold">Real Results</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">See the Hydro-Jetting Difference</h2>
              <p className="text-ink/70 mt-2">Drag the slider to compare clogged pipe inspection footage before and after hydro-jetting service.</p>
            </div>
            <BeforeAfterSlider
              beforeImage="/photos/before-drain.jpg"
              afterImage="/photos/after-drain.jpg"
              beforeAlt="Clogged drain pipe with heavy grease and scale buildup before cleaning"
              afterAlt="Clean drain pipe with smooth walls and clear water flow after hydro-jetting service"
            />
          </div>
        </section>
      )}

      {/* Process Timeline */}
      <section className="py-16">
        <div className="container-x">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-ink">How Our Service Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Call or Request</h3>
              <p className="text-sm text-ink/70">Connect with our dispatch team in seconds.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-ink mb-2 text-lg">On-Site Diagnosis</h3>
              <p className="text-sm text-ink/70">A licensed plumber inspects and explains the issue.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Upfront Quote</h3>
              <p className="text-sm text-ink/70">Clear pricing presented before work starts.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl ring-1 ring-line shadow-sm">
              <div className="w-12 h-12 bg-sky-tint text-sky-deep rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-ink mb-2 text-lg">Job Done Right</h3>
              <p className="text-sm text-ink/70">Fast repair with thorough cleanup included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area + ZIP Checker */}
      <section className="py-16 bg-paper">
        <div className="container-x max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-bold text-ink mb-4">Check Local Coverage</h2>
          <p className="text-ink/70 mb-8">Enter your ZIP code to verify immediate plumbing dispatch in your area:</p>
          <div className="max-w-md mx-auto mb-8">
            <ZipChecker />
          </div>
          <p className="text-sm text-ink/60">
            Serving Charlotte, Huntersville, Cornelius, Davidson, Fort Mill, Rock Hill, Concord, Matthews, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16">
        <div className="container-x">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="eyebrow text-sky mb-2 block font-semibold">Homeowner Resources</span>
              <h2 className="text-3xl font-heading font-bold text-ink">Plumbing Advice & Guides</h2>
            </div>
            <Link href="/resources/" className="text-sky-deep font-semibold hover:underline hidden sm:block">
              View all 16 guides →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topGuides.map((guide) => (
              <Link key={guide.slug} href={guidePage(guide.slug)} className="bg-white p-6 rounded-2xl ring-1 ring-line hover:ring-sky hover:shadow-md transition-all flex flex-col group">
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
      <section className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-10 text-ink">Frequently Asked Questions</h2>
          <FaqList faqs={topFaqs} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
