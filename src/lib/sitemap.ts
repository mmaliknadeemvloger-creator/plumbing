export function indexableUrls(
  services: { url: string; isPublished: boolean }[],
  cities: { url: string; isPublished: boolean }[],
  cityServices: { url: string; isPublished: boolean }[],
  articles: { url: string; isPublished: boolean }[]
): string[] {
  const urls: string[] = [];

  // Core pages
  urls.push('/');
  urls.push('/request-service/');
  urls.push('/about-us/');
  urls.push('/contact-us/');
  urls.push('/plumbing-services/');
  urls.push('/emergency-plumber/');
  urls.push('/locations/');
  urls.push('/resources/');
  urls.push('/faq/');
  urls.push('/privacy-policy/');
  urls.push('/terms-and-conditions/');
  urls.push('/accessibility/');

  services.filter(s => s.isPublished).forEach(s => urls.push(s.url));
  cities.filter(c => c.isPublished).forEach(c => urls.push(c.url));
  cityServices.filter(cs => cs.isPublished).forEach(cs => urls.push(cs.url));
  articles.filter(a => a.isPublished).forEach(a => urls.push(a.url));

  return urls;
}
