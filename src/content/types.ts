/* ─── Content types ──────────────────────────────────────────
 * Mirrors prisma/schema.prisma for a future DB move.
 * All content is typed data — no CMS required at launch.
 * ──────────────────────────────────────────────────────────── */

// ── Statuses ──────────────────────────────────────────────
export type ContentStatus = 'DRAFT' | 'REVIEW' | 'PUBLISHED' | 'NOINDEX' | 'ARCHIVED';

// ── Services ──────────────────────────────────────────────
export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  photo?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface DiyAdvice {
  safe: string[];
  stop: string[];
}

export interface Service {
  slug: string;
  category: string;
  name: string;
  status: ContentStatus;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  intro: string[];
  signs: string[];
  process: ServiceProcess[];
  costFactors: string[];
  diy?: DiyAdvice;
  faqs: ServiceFaq[];
  related: string[];
  isEmergencyCapable: boolean;
  photo?: string;
  updated?: string;
}

// ── Locations ─────────────────────────────────────────────
export interface State {
  slug: string;
  name: string;
  abbreviation: string;
  details?: string;
}

export interface CityFaq {
  question: string;
  answer: string;
}

export interface LocalIssue {
  title: string;
  description: string;
}

export interface City {
  slug: string;
  stateSlug: string;
  name: string;
  county: string;
  status: ContentStatus;
  officeAddress: string | null;
  zips: string[];
  areas: string[];
  intro: string;
  housingNotes: string;
  localIssues: LocalIssue[];
  popularServices: string[];
  nearby: string[];
  faqs: CityFaq[];
  updated?: string;
}

export interface CityServiceLocalFaq {
  question: string;
  answer: string;
}

export interface CityService {
  citySlug: string;
  stateSlug: string;
  serviceSlug: string;
  status: ContentStatus;
  localAngle: string[];
  localFaqs: CityServiceLocalFaq[];
}

export interface Region {
  name: string;
  slug: string;
  cities: string[];
}

// ── Articles / Guides ─────────────────────────────────────
export interface ArticleSection {
  heading: string;
  content: string;
  list?: string[];
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  status: ContentStatus;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  sections: ArticleSection[];
  faqs: ServiceFaq[];
  services: string[];
  relatedArticles: string[];
  photo?: string;
  published: string;
  updated?: string;
  reviewedBy?: string | null;
}

// ── Reviews ───────────────────────────────────────────────
export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  city?: string;
  service?: string;
  verified: boolean;
}

// ── Before/After ──────────────────────────────────────────
export interface BeforeAfter {
  id: string;
  title: string;
  description: string;
  beforePhoto: string;
  afterPhoto: string;
  beforeAlt: string;
  afterAlt: string;
  service: string;
  isExample: boolean;
}

// ── Landing Pages ─────────────────────────────────────────
export interface LandingPageKeyword {
  kw: string;
  headline: string;
}

export interface LandingPage {
  slug: string;
  canonicalService: string;
  h1: string;
  bullets: string[];
  signs: string[];
  faqs: ServiceFaq[];
  keywords: LandingPageKeyword[];
}

// ── Redirects ─────────────────────────────────────────────
export interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

// ── Problems (symptom finder) ─────────────────────────────
export interface Problem {
  symptom: string;
  cause: string;
  serviceSlug?: string;
  guideSlug?: string;
}
