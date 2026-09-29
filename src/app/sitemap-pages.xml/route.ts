import { SITE_URL } from '@/content/site';
import { 
  homePage, serviceHub, emergencyHub, locationHub, 
  resourceHub, aboutPage, contactPage, faqPage 
} from '@/lib/routes';
import { contentDates } from '@/content/dates';

export async function GET() {
  const pages = [
    { url: homePage(), priority: 1.0 },
    { url: serviceHub(), priority: 0.9 },
    { url: emergencyHub(), priority: 0.9 },
    { url: locationHub(), priority: 0.9 },
    { url: resourceHub(), priority: 0.8 },
    { url: aboutPage(), priority: 0.7 },
    { url: contactPage(), priority: 0.7 },
    { url: faqPage(), priority: 0.7 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${contentDates['home'] ?? '2025-01-01'}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
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
