import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Accessibility Statement',
  description: 'Accessibility Statement — SteadWell Plumbing, serving Charlotte, NC metro and York County, SC.',
  path: '/accessibility/',
});

export default function AccessibilityPage() {
  return (
    <div className="py-16">
      <div className="container-x max-w-3xl prose-sw">
        <h1 className="text-4xl font-heading font-bold mb-8">Accessibility Statement</h1>
        
        <p>SteadWell Plumbing is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
        
        <h2>Conformance Status</h2>
        <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. These guidelines explain how to make web content more accessible for people with disabilities and user friendly for everyone.</p>
        
        <h2>Feedback</h2>
        <p>We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, please contact us.</p>
      </div>
    </div>
  );
}
