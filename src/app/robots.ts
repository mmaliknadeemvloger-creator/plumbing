import { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  const isBlocked = process.env.DISALLOW_ROBOTS === 'true' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview';

  if (isBlocked) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/thank-you/',
        '/lp/',
        '/*?*utm_*',
        '/*?*gclid=*',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

