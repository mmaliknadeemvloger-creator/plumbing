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
  });
}

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

  return (
    <ServiceTemplate
      service={service!}
      localAngle={cs!.localAngle}
      localFaqs={cs!.localFaqs}
    />
  );
}
