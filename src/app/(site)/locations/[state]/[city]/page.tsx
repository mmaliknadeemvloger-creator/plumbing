import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { cities, states } from '@/content/locations';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { cityServices } from '@/content/cityServices';
import { cityPage, statePage, cityServicePage, servicePage } from '@/lib/routes';
import { checkCityQuality } from '@/lib/quality';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';

export const dynamicParams = false;

const allServices = [...services, ...servicesMore];

export async function generateStaticParams() {
  return cities
    .filter(c => c.status === 'PUBLISHED' && checkCityQuality(c).pass)
    .map(c => ({
      state: c.stateSlug,
      city: c.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug && c.stateSlug === stateSlug);
  
  if (!city || city.status !== 'PUBLISHED' || !checkCityQuality(city).pass) return {};

  const state = states.find(s => s.slug === stateSlug);
  const stateAbbrev = state ? state.abbreviation : '';

  return pageMeta({
    title: `Plumbing Services in ${city.name}, ${stateAbbrev} | Elite Plumbing`,
    description: city.intro.substring(0, 155) + '...',
    path: cityPage(stateSlug, citySlug),
  });
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
  const { state: stateSlug, city: citySlug } = await params;
  const city = cities.find(c => c.slug === citySlug && c.stateSlug === stateSlug);
  
  if (!city || city.status !== 'PUBLISHED' || !checkCityQuality(city).pass) {
    notFound();
  }

  const state = states.find(s => s.slug === stateSlug)!;
  const stateAbbrev = state.abbreviation;

  return (
    <>
      <section className="bg-ink pt-20 pb-24 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow text-sky mb-4 block">Local Plumbing Service</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Plumbing Services in {city.name}, {stateAbbrev}
            </h1>
            <p className="text-xl text-white/80 mb-6">
              {city.intro}
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-white/90">
                Serving {city.areas.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              
              <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm prose-sw">
                <h2 className="text-2xl font-bold text-ink mb-4">Housing & Plumbing Notes for {city.name}</h2>
                <p>{city.housingNotes}</p>
                <div className="mt-8 space-y-6">
                  {city.localIssues.map((issue, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-bold text-copper mb-2">{issue.title}</h3>
                      <p className="text-sm">{issue.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-ink mb-8">Common Calls in {city.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {city.popularServices.map(serviceSlug => {
                    const serviceObj = allServices.find(s => s.slug === serviceSlug);
                    if (!serviceObj || serviceObj.status !== 'PUBLISHED') return null;

                    // Check if a specific city-service page exists
                    const hasCityService = cityServices.find(
                      cs => cs.citySlug === city.slug && cs.serviceSlug === serviceSlug && cs.status === 'PUBLISHED'
                    );

                    const linkHref = hasCityService 
                      ? cityServicePage(state.slug, city.slug, serviceSlug)
                      : servicePage(serviceSlug);

                    return (
                      <Link 
                        key={serviceSlug}
                        href={linkHref}
                        className="bg-white p-6 rounded-2xl ring-1 ring-line hover:ring-copper transition-all shadow-sm group"
                      >
                        <h3 className="font-bold text-ink mb-2 group-hover:text-copper transition-colors">{serviceObj.name}</h3>
                        <p className="text-sm text-ink/70 line-clamp-2">{serviceObj.answer}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-ink mb-8">{city.name} Plumbing FAQs</h2>
                <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm">
                  <FaqList faqs={city.faqs} />
                </div>
              </div>

            </div>

            <div className="space-y-8">
              <LeadFormBlock defaultService={`Plumbing Service in ${city.name}`} />
              
              <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm">
                <h3 className="font-bold text-ink mb-6 border-b border-line pb-4">At a Glance</h3>
                <ul className="space-y-4 text-sm text-ink/80">
                  <li><strong className="text-ink">State:</strong> <Link href={statePage(state.slug)} className="link">{state.name}</Link></li>
                  <li><strong className="text-ink">County:</strong> {city.county}</li>
                  <li><strong className="text-ink">ZIP Codes:</strong> {city.zips.join(', ')}</li>
                </ul>
              </div>

              {city.nearby && city.nearby.length > 0 && (
                <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm">
                  <h3 className="font-bold text-ink mb-4 border-b border-line pb-4">Nearby Towns</h3>
                  <div className="flex flex-wrap gap-2">
                    {city.nearby.map(nearbySlug => {
                      const nearbyCity = cities.find(c => c.slug === nearbySlug && c.status === 'PUBLISHED');
                      if (!nearbyCity) return null;
                      return (
                        <Link 
                          key={nearbySlug}
                          href={cityPage(nearbyCity.stateSlug, nearbyCity.slug)}
                          className="bg-paper px-3 py-1.5 rounded-full text-sm font-medium hover:bg-copper hover:text-white transition-colors"
                        >
                          {nearbyCity.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <CtaBand />
    </>
  );
}
