import { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

  if (!isProd) {
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
        '/*?*utm_*',
        '/*?*gclid=*',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
