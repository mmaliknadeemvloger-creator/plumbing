import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { cities, states } from '@/content/locations';
import { citiesMore } from '@/content/locationsMore';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { cityServices } from '@/content/cityServices';
import { cityServicePage } from '@/lib/routes';
import { checkCityQuality } from '@/lib/quality';
import { ServiceTemplate } from '@/components/templates/ServiceTemplate';

export const dynamicParams = false;

const allServices = [...services, ...servicesMore];
const allCities = [...cities, ...citiesMore];

export async function generateStaticParams() {
  const params = [];
  for (const cs of cityServices) {
    if (cs.status !== 'PUBLISHED') continue;
    const city = allCities.find(c => c.slug === cs.citySlug && c.stateSlug === cs.stateSlug);
    if (!city || city.status !== 'PUBLISHED' || !checkCityQuality(city).pass) continue;
    params.push({ state: cs.stateSlug, city: cs.citySlug, service: cs.serviceSlug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string; service: string }>;
}) {
  const { state: stateSlug, city: citySlug, service: serviceSlug } = await params;
  const cs = cityServices.find(
    c => c.citySlug === citySlug && c.stateSlug === stateSlug && c.serviceSlug === serviceSlug
  );
  const city = allCities.find(c => c.slug === citySlug && c.stateSlug === stateSlug);
  const state = states.find(s => s.slug === stateSlug);
  const service = allServices.find(s => s.slug === serviceSlug);
  if (!cs || !city || !state || !service) return {};

  return pageMeta({
    title: `${service.name} in ${city.name}, ${state.abbreviation}`,
    description: `${service.name} in ${city.name}. ${service.metaDescription}`,
    path: cityServicePage(stateSlug, citySlug, serviceSlug),
    keywords: [
      `${service.name.toLowerCase()} in ${city.name} ${state.abbreviation}`,
      `${city.name} ${service.name.toLowerCase()}`,
      `emergency ${service.name.toLowerCase()} ${city.name}`,
      `${service.name.toLowerCase()} company ${city.name}`,
      `licensed plumber ${city.name}`,
      `best ${service.name.toLowerCase()} ${city.name} ${state.abbreviation}`,
    ],
  });
}

import { JsonLd } from '@/components/JsonLd';
import { serviceGraph } from '@/lib/schema';
import { locationHub, statePage, cityPage } from '@/lib/routes';

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ state: string; city: string; service: string }>;
}) {
  const { state: stateSlug, city: citySlug, service: serviceSlug } = await params;

  const cs = cityServices.find(
    c => c.citySlug === citySlug && c.stateSlug === stateSlug && c.serviceSlug === serviceSlug
  );
  const city = allCities.find(c => c.slug === citySlug && c.stateSlug === stateSlug);
  const state = states.find(s => s.slug === stateSlug);
  const service = allServices.find(s => s.slug === serviceSlug);

  if (!cs || !city || !state || !service || cs.status !== 'PUBLISHED' || city.status !== 'PUBLISHED') {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Service Areas', item: locationHub() },
    { name: state!.name, item: statePage(stateSlug) },
    { name: city!.name, item: cityPage(stateSlug, citySlug) },
    { name: service!.name, item: cityServicePage(stateSlug, citySlug, serviceSlug) },
  ];

  return (
    <>
      <JsonLd
        data={serviceGraph({
          name: `${service!.name} in ${city!.name}, ${state!.abbreviation}`,
          description: `${service!.name} in ${city!.name}, ${state!.abbreviation}. Professional local plumbing services.`,
          path: cityServicePage(stateSlug, citySlug, serviceSlug),
          category: service!.category,
          faqs: cs!.localFaqs ?? service!.faqs,
          breadcrumbs: breadcrumbs,
          keywords: [
            `${service!.name.toLowerCase()} in ${city!.name}`,
            `plumber ${city!.name}`,
          ],
        })}
      />
      <ServiceTemplate
        service={service!}
        localAngle={cs!.localAngle}
        localFaqs={cs!.localFaqs}
      />
    </>
  );
}
