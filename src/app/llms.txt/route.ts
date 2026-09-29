import { SITE_URL, BRAND_FULL, DISCLOSURE } from '@/content/site';
import { homePage, serviceHub, emergencyHub, locationHub, resourceHub, aboutPage, contactPage, faqPage, servicePage, cityPage, guidePage } from '@/lib/routes';
import { services } from '@/content/services';
import { cities } from '@/content/locations';
import { articles } from '@/content/articles';
import { checkCityQuality } from '@/lib/quality';

export async function GET() {
  let text = `# ${BRAND_FULL}\n\n`;
  text += `${DISCLOSURE}\n\n`;
  text += `## Pages\n`;

  const addUrl = (path: string) => {
    text += `${SITE_URL}${path}\n`;
  };

  // Core pages
  addUrl(homePage());
  addUrl(serviceHub());
  addUrl(emergencyHub());
  addUrl(locationHub());
  addUrl(resourceHub());
  addUrl(aboutPage());
  addUrl(contactPage());
  addUrl(faqPage());

  // Services
  services.filter(s => s.status === 'PUBLISHED').forEach(s => {
    addUrl(servicePage(s.slug));
  });

  // Cities
  cities.filter(c => c.status === 'PUBLISHED' && checkCityQuality(c).pass).forEach(c => {
    addUrl(cityPage(c.stateSlug, c.slug));
  });

  // Guides
  articles.filter(a => a.status === 'PUBLISHED').forEach(a => {
    addUrl(guidePage(a.slug));
  });

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
