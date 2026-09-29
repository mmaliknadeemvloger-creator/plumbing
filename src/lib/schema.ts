import { BRAND, SITE_URL, PHONE, PHONE_IS_REAL } from '@/content/site';

export function siteGraph(services?: { slug: string; name: string; url: string }[], areaServedCities?: string[]) {
  const org: any = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  if (PHONE_IS_REAL) {
    org.contactPoint = {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: 'English',
    };
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const graph: any[] = [org, website];

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

export interface PageGraphProps {
  type: 'WebPage' | 'CollectionPage' | 'ItemPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
  path: string;
  name: string;
  description: string;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
}

export function pageGraph({ type, path, name, description, breadcrumbs, faqs }: PageGraphProps) {
  const url = `${SITE_URL}${path}`;
  const webpage: any = {
    '@type': type,
    '@id': `${url}#webpage`,
    url: url,
    name: name,
    description: description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  const graph: any[] = [webpage];

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbs.map((bc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: bc.name,
        item: `${SITE_URL}${bc.item}`,
      })),
    };
    graph.push(breadcrumbList);
    webpage.breadcrumb = { '@id': `${url}#breadcrumb` };
  }

  if (faqs && faqs.length > 0) {
    const faqPage = {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    graph.push(faqPage);
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
