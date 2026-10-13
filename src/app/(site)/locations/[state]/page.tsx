import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { states, regions, cities } from '@/content/locations';
import { cityPage, statePage } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';

export const dynamicParams = false;

export async function generateStaticParams() {
  return states.map(state => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) return {};

  return pageMeta({
    title: `Plumbing Services in ${state.name}`,
    description: `Expert plumbing services across ${state.name}. Find your city to see local plumbing information, service areas, and fast response times.`,
    path: statePage(state.slug),
    keywords: [
      `plumbing services in ${state.name}`,
      `plumber in ${state.name}`,
      `${state.name} emergency plumber`,
      `licensed plumbers in ${state.abbreviation}`,
      `${state.name} drain cleaning`,
      `${state.name} water heater repair`,
      `local plumbers in ${state.name}`,
    ],
  });
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = states.find(s => s.slug === stateSlug);
  
  if (!state) notFound();

  const publishedCities = cities.filter(c => c.stateSlug === state.slug && c.status === 'PUBLISHED');

  return (
    <>
      <section className="bg-ink pt-20 pb-24 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow text-sky mb-4 block">Service Area</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Plumbing Services in {state.name}
            </h1>
            <p className="text-xl text-white/80">
              Elite Plumbing & Drain provides licensed, professional plumbing services throughout our {state.name} service area.
            </p>
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

            <div>
              <div className="bg-white p-8 rounded-3xl ring-1 ring-line shadow-sm prose-sw sticky top-24">
                <h3 className="text-xl font-bold text-ink mb-4">About Plumbing in {state.name}</h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  {state.details}
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
