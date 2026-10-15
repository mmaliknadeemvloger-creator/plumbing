import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { pageMeta } from '@/lib/seo';
import { services, categories } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { servicePage, emergencyHub } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';
import { PlumbingSolutionsSection } from '@/components/PlumbingSolutionsSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Plumbing and Drain Services | Full Service Catalog | Elite Plumbing',
  description: 'Browse our full catalog of residential and commercial plumbing and drain services across the USA. Fast drain cleaning, leak detection, water heaters, and repiping.',
  path: '/plumbing-services/',
  keywords: [
    'plumbing and drain services',
    'plumbing services USA',
    'professional plumber',
    'emergency plumber',
    'plumbing repair services',
    'drain cleaning services',
    'sewer line repair',
    'water heater repair',
    'leak detection services',
    'residential plumbing services',
    'commercial plumbing services',
    'hydro jetting services',
  ],
});

function getServicePhoto(categorySlug: string): string {
  if (categorySlug === 'drain-cleaning' || categorySlug === 'sewer') {
    return '/photos/drain-cleaning.jpg';
  }
  if (categorySlug === 'water-heaters') {
    return '/photos/water-heater.jpg';
  }
  if (categorySlug === 'leak-detection' || categorySlug === 'water-lines' || categorySlug === 'gas-lines') {
    return '/photos/pipe-repair.jpg';
  }
  return '/photos/hero-plumber.jpg';
}

export default function ServicesHubPage() {
  const allServices = [...services, ...servicesMore].filter(s => s.status === 'PUBLISHED');

  const breadcrumbs = [
    { label: 'Plumbing Services', href: '/plumbing-services/' }
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          type: 'CollectionPage',
          path: '/plumbing-services/',
          name: 'Plumbing and Drain Services | Full Service Catalog | Elite Plumbing',
          description: 'Browse our full catalog of residential and commercial plumbing and drain services across the USA.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'Plumbing Services', item: '/plumbing-services/' },
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
          <div className="max-w-3xl">
            <span className="eyebrow text-sky mb-4 block uppercase tracking-wider font-semibold text-xs">Full-Service Catalog</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Professional Plumbing and Drain Services Across the USA
            </h1>
            <p className="text-xl text-white/80">
              From emergency clog removal and water heater replacements to complex commercial build-outs, our licensed plumbers deliver dependable, code-compliant workmanship nationwide.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 bg-paper">
        <div className="container-x">
          <div className="mb-16 bg-alert/10 border border-alert rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-ink mb-2">Have a Plumbing Emergency?</h2>
              <p className="text-ink/80">We offer fast, reliable emergency response for burst pipes, severe backups, and gas leaks.</p>
            </div>
            <Link href={emergencyHub()} className="btn btn-alert whitespace-nowrap">
              View Emergency Services
            </Link>
          </div>

          <div className="space-y-20">
            {categories.map((category) => {
              const categoryServices = allServices.filter(s => s.category === category.slug);
              if (categoryServices.length === 0) return null;

              return (
                <div key={category.slug}>
                  <div className="mb-8 border-b border-line pb-4">
                    <h2 className="text-3xl font-heading font-bold text-ink mb-2">{category.name}</h2>
                    <p className="text-ink/70">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryServices.map(service => {
                      const photoUrl = getServicePhoto(service.category);
                      return (
                        <Link 
                          key={service.slug} 
                          href={servicePage(service.slug)}
                          className="group bg-white rounded-2xl ring-1 ring-line overflow-hidden hover:ring-copper transition-all shadow-sm hover:shadow-md flex flex-col"
                        >
                          <div className="aspect-[4/3] bg-paper overflow-hidden relative">
                            <Image
                              src={photoUrl}
                              alt={`${service.name} service photo`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-bold text-xl text-ink mb-3 group-hover:text-copper transition-colors">{service.name}</h3>
                            <p className="text-ink/70 line-clamp-3 mb-4 flex-grow text-sm">
                              {service.answer}
                            </p>
                            <div className="text-copper font-medium text-sm flex items-center gap-1 mt-auto">
                              Learn more
                              <span aria-hidden="true">&rarr;</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PlumbingSolutionsSection />

      <CtaBand />
    </>
  );
}
