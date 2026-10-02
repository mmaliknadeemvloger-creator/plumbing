import type { Metadata } from 'next';
import { BRAND, BRAND_SHORT, SITE_URL } from '@/content/site';

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
  // If title already has brand or separator, use as is; otherwise add brand if within SEO limits
  const hasBrand = title.includes(BRAND_SHORT) || title.includes(BRAND);
  const finalTitle = hasBrand
    ? title
    : `${title} | ${BRAND_SHORT}`.length <= 65
      ? `${title} | ${BRAND_SHORT}`
      : title;
  
  // Truncate description to 160 chars max if necessary
  const finalDesc = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${cleanPath}`;
  const ogImageUrl = `${SITE_URL}/og/${ogKey}.png`;

  const isNoIndex = robots.includes('noindex');
  const isNoFollow = robots.includes('nofollow');

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !isNoIndex,
      follow: !isNoFollow,
      nocache: false,
      googleBot: {
        index: !isNoIndex,
        follow: !isNoFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: url,
      siteName: BRAND_SHORT,
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

