import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { pageMeta } from '@/lib/seo';
import { servicePage } from '@/lib/routes';
import { ServiceTemplate } from '@/components/templates/ServiceTemplate';
import { JsonLd } from '@/components/JsonLd';
import { serviceGraph } from '@/lib/schema';

export const dynamicParams = false;

const allServices = [...services, ...servicesMore];

export async function generateStaticParams() {
  return allServices
    .filter(s => s.status === 'PUBLISHED')
    .map(s => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = allServices.find(x => x.slug === service);
  if (!s || s.status !== 'PUBLISHED') return {};
  return pageMeta({
    title: s.seoTitle,
    description: s.metaDescription,
    path: servicePage(s.slug),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const s = allServices.find(x => x.slug === service);
  if (!s || s.status !== 'PUBLISHED') notFound();

  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Plumbing Services', item: '/plumbing-services/' },
    { name: s.name, item: servicePage(s.slug) },
  ];

  return (
    <>
      <JsonLd
        data={serviceGraph({
          name: s.name,
          description: s.metaDescription,
          path: servicePage(s.slug),
          category: s.category,
          faqs: s.faqs,
          breadcrumbs: breadcrumbs,
        })}
      />
      <ServiceTemplate service={s!} />
    </>
  );
}

