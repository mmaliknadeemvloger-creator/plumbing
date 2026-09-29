import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { pageMeta } from '@/lib/seo';
import { servicePage } from '@/lib/routes';
import { ServiceTemplate } from '@/components/templates/ServiceTemplate';

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
  return <ServiceTemplate service={s!} />;
}
