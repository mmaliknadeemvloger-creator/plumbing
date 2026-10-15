import React from 'react';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { states, regions, cities } from '@/content/locations';
import { locationHub, statePage, cityPage } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';
import { ZipChecker } from '@/components/ZipChecker';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Plumbing Service Areas & Local Regions | Elite Plumbing',
  description: 'Explore Elite Plumbing active local service areas and regional hubs across the United States. Connect with licensed local plumbing contractors for fast, code-compliant service.',
  path: locationHub(),
  keywords: [
    'plumbing service areas',
    'local plumbers',
    'find a plumber near me',
    'licensed plumbers USA',
    'emergency plumber locations',
    'residential plumbing areas',
    'local plumbing company',
  ],
});

export default function LocationsHubPage() {
  const publishedCities = cities.filter(c => c.status === 'PUBLISHED');

  const breadcrumbs = [
    { label: 'Service Areas', href: locationHub() }
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          type: 'CollectionPage',
          path: locationHub(),
          name: 'Plumbing Service Areas & Local Regions | Elite Plumbing',
          description: 'Explore active local service areas and regional hubs across North and South Carolina.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'Service Areas', item: locationHub() },
          ],
        })}
      />
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} hideSchema={true} />
        </div>
      </div>
      <section className="bg-ink pt-16 pb-20 text-white">
        <div className="container-x">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-sky mb-4 block uppercase tracking-wider font-semibold text-xs">Regional Service Hubs</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Plumbing Service Areas & Locations
            </h1>
            <p className="text-xl text-white/80">
              We connect homeowners and commercial properties across the USA with verified local plumbing contractors. Browse our active regional hubs below or enter your ZIP code for immediate dispatch.
            </p>
          </div>
          
          <div className="max-w-lg">
            <ZipChecker />
          </div>
        </div>
      </section>


      <section className="py-20 bg-paper">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {regions.map(region => {
                const regionCities = publishedCities.filter(c => region.cities.includes(c.slug));
                if (regionCities.length === 0) return null;

                return (
                  <div key={region.slug}>
                    <h2 className="text-3xl font-heading font-bold text-ink mb-6 border-b border-line pb-4">
                      {region.name}
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {regionCities.map(city => (
                        <Link 
                          key={city.slug}
                          href={cityPage(city.stateSlug, city.slug)}
                          className="bg-white p-4 rounded-xl ring-1 ring-line hover:ring-copper transition-all text-ink font-medium hover:text-copper shadow-sm text-center"
                        >
                          {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm">
                <h3 className="text-xl font-bold text-ink mb-4">Browse by State</h3>
                <div className="flex flex-col gap-3">
                  {states.map(state => (
                    <Link 
                      key={state.slug}
                      href={statePage(state.slug)}
                      className="flex items-center justify-between p-4 rounded-xl bg-paper hover:bg-ink hover:text-white transition-colors font-medium"
                    >
                      <span>{state.name}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm prose-sw">
                <h3 className="text-xl font-bold text-ink mb-4">How Our Service Areas Work</h3>
                <p className="text-sm text-ink/80">
                  Because we cross state lines and numerous municipalities, plumbing codes and water quality can vary significantly from town to town. 
                </p>
                <p className="text-sm text-ink/80">
                  Whether it's dealing with hard well water in Weddington, historic repiping in Davidson, or standard permits in Charlotte, our licensed plumbers are intimately familiar with local requirements to ensure every job is done to code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
