import { SITE_URL } from '@/content/site';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { servicePage } from '@/lib/routes';
import { contentDates } from '@/content/dates';

export async function GET() {
  const allServices = [...services, ...servicesMore];
  const publishedServices = allServices.filter(s => s.status === 'PUBLISHED');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publishedServices
    .map(
      (s) => `
  <url>
    <loc>${SITE_URL}${servicePage(s.slug)}</loc>
    <lastmod>${s.updated || contentDates[s.slug] || '2025-01-01'}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
