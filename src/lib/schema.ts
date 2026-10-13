import { BRAND, BRAND_SHORT, SITE_URL, PHONE, PHONE_IS_REAL } from '@/content/site';

export function siteGraph(services?: { slug: string; name: string; url: string }[], areaServedCities?: string[]) {
  const org: any = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND,
    alternateName: BRAND_SHORT,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Professional residential and commercial plumbing services across the United States.',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Plumbing Repair',
      'Emergency Plumbing',
      'Drain Cleaning',
      'Water Heater Repair',
      'Water Heater Installation',
      'Leak Detection',
      'Pipe Repair',
      'Sewer Line Repair',
      'Slab Leak Repair',
      'Commercial Plumbing',
      'Residential Plumbing',
    ],
  };

  if (PHONE_IS_REAL) {
    org.contactPoint = {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'US',
    };
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_SHORT,
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
  keywords?: string[] | string;
}

export function pageGraph({ type, path, name, description, breadcrumbs, faqs, keywords }: PageGraphProps) {
  const url = `${SITE_URL}${path}`;
  const webpage: any = {
    '@type': type,
    '@id': `${url}#webpage`,
    url: url,
    name: name,
    description: description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };

  if (keywords) {
    webpage.keywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  }

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

export interface ServiceGraphProps {
  name: string;
  description: string;
  path: string;
  category?: string;
  breadcrumbs?: { name: string; item: string }[];
  faqs?: { question: string; answer: string }[];
  keywords?: string[] | string;
}

export function serviceGraph({ name, description, path, category, breadcrumbs, faqs, keywords }: ServiceGraphProps) {
  const url = `${SITE_URL}${path}`;
  const serviceSchema: any = {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: name,
    description: description,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: url,
  };

  if (category) {
    serviceSchema.category = category;
  }

  if (keywords) {
    serviceSchema.keywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  }

  const webpage: any = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url: url,
    name: name,
    description: description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${url}#service` },
  };

  if (keywords) {
    webpage.keywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  }

  const graph: any[] = [webpage, serviceSchema];

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

