import React from 'react';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { services, categories } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { servicePage, emergencyHub } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';

export const metadata = pageMeta({
  title: 'Plumbing Services in Charlotte, NC',
  description: 'Explore our complete list of residential plumbing services in the Charlotte Metro area. From drain cleaning to full repiping, SteadWell has you covered.',
  path: '/plumbing-services/',
});

export default function ServicesHubPage() {
  const allServices = [...services, ...servicesMore].filter(s => s.status === 'PUBLISHED');

  return (
    <>
      <section className="bg-ink pt-20 pb-24 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow text-sky mb-4 block">Our Services</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Charlotte Metro Plumbing Services
            </h1>
            <p className="text-xl text-white/80">
              From minor leaks to major underground repairs, our licensed professionals handle every aspect of your home's plumbing with precision and care.
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
                    {categoryServices.map(service => (
                      <Link 
                        key={service.slug} 
                        href={servicePage(service.slug)}
                        className="group bg-white rounded-2xl ring-1 ring-line overflow-hidden hover:ring-copper transition-all shadow-sm hover:shadow-md flex flex-col"
                      >
                        <div className="aspect-[4/3] bg-paper overflow-hidden relative">
                           <div className="w-full h-full bg-sky-tint" />
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
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
