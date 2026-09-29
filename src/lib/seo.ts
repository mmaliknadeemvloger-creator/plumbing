import type { Metadata } from 'next';
import { BRAND, SITE_URL } from '@/content/site';

export interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  robots?: string;
  ogKey?: string;
}

export function pageMeta({
  title,
  description,
  path,
  robots = 'index, follow',
  ogKey = 'home',
}: PageMetaProps): Metadata {
  const fullTitle = `${title} | ${BRAND}`;
  // Drop brand if total length > 62 chars
  const finalTitle = fullTitle.length > 62 ? title : fullTitle;
  
  // Truncate description to 160 chars max if necessary
  const finalDesc = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  const url = `${SITE_URL}${path}`;
  const ogImageUrl = `/og/${ogKey}.png`;

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: {
      canonical: url,
    },
    robots: robots,
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: url,
      siteName: BRAND,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDesc,
      images: [ogImageUrl],
    },
  };
}
