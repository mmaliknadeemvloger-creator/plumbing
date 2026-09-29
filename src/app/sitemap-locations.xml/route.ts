import { SITE_URL } from '@/content/site';
import { cities, states } from '@/content/locations';
import { cityServices } from '@/content/cityServices';
import { checkCityQuality } from '@/lib/quality';
import { statePage, cityPage, cityServicePage } from '@/lib/routes';
import { contentDates } from '@/content/dates';

export async function GET() {
  const pages: { url: string; lastmod: string; priority: string }[] = [];

  // States
  states.forEach(state => {
    pages.push({
      url: statePage(state.slug),
      lastmod: contentDates['home'] ?? '2025-01-01',
      priority: '0.8',
    });
  });

  // Cities
  cities.filter(c => c.status === 'PUBLISHED' && checkCityQuality(c).pass).forEach(c => {
    pages.push({
      url: cityPage(c.stateSlug, c.slug),
      lastmod: c.updated || contentDates['home'] || '2025-01-01',
      priority: '0.8',
    });
  });

  // City-Services
  cityServices.filter(cs => cs.status === 'PUBLISHED').forEach(cs => {
    pages.push({
      url: cityServicePage(cs.stateSlug, cs.citySlug, cs.serviceSlug),
      lastmod: contentDates['home'] ?? '2025-01-01',
      priority: '0.7',
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (p) => `
  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
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
