import { SITE_URL } from '@/content/site';

export async function GET() {
  const sitemaps = [
    '/sitemap-pages.xml',
    '/sitemap-services.xml',
    '/sitemap-locations.xml',
    '/sitemap-guides.xml',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
    .map(
      (path) => `
  <sitemap>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`
    )
    .join('')}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
