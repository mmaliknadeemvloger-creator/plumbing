import type { City, CityService } from '@/content/types';

export function checkCityQuality(city: City): { pass: boolean; reasons: string[] } {
  const reasons: string[] = [];

  if (!city.localIssues || city.localIssues.length < 2) {
    reasons.push('Needs at least 2 local issues');
  }
  if (!city.zips || city.zips.length === 0) {
    reasons.push('Needs at least 1 ZIP code');
  }
  if (!city.nearby || city.nearby.length === 0) {
    reasons.push('Needs at least 1 nearby city link');
  }
  if (!city.popularServices || city.popularServices.length < 3) {
    reasons.push('Needs at least 3 popular services');
  }

  const copy = [city.intro, city.housingNotes]
    .filter(Boolean)
    .join(' ');
  const wordCount = copy.split(/\s+/).filter(Boolean).length;
  if (wordCount < 180) {
    reasons.push(`Needs at least 180 words of unique local copy (currently ~${wordCount})`);
  }

  return { pass: reasons.length === 0, reasons };
}

export function checkCityServiceQuality(
  cs: CityService,
  cityIsPublished: boolean,
): { pass: boolean; reasons: string[] } {
  const reasons: string[] = [];

  if (!cityIsPublished) {
    reasons.push('Parent city must be published');
  }

  const copy = (cs.localAngle ?? []).join(' ');
  const wordCount = copy.split(/\s+/).filter(Boolean).length;
  if (wordCount < 90) {
    reasons.push(`Needs at least 90 words of local angle content (currently ~${wordCount})`);
  }

  return { pass: reasons.length === 0, reasons };
}
