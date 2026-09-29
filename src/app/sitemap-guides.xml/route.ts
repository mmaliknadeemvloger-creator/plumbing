import { SITE_URL } from '@/content/site';
import { articles } from '@/content/articles';
import { guidePage } from '@/lib/routes';

export async function GET() {
  const publishedArticles = articles.filter(a => a.status === 'PUBLISHED');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${publishedArticles
    .map(
      (a) => `
  <url>
    <loc>${SITE_URL}${guidePage(a.slug)}</loc>
    <lastmod>${a.updated || a.published}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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
