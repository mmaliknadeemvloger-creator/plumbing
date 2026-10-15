import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMeta({
  title: 'Terms and Conditions | Elite Plumbing',
  description: 'Terms and Conditions for using Elite Plumbing & Drain services and website across the United States. Review our service policies and agreements.',
  path: '/terms-and-conditions/',
  keywords: [
    'terms of service',
    'terms and conditions',
    'elite plumbing terms',
    'service agreement',
  ],
});

export default function TermsPage() {
  const breadcrumbs = [
    { label: 'Terms and Conditions', href: '/terms-and-conditions/' }
  ];

  return (
    <div>
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
      <div className="py-16">
        <div className="container-x max-w-3xl prose-sw">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service & Conditions</h1>
          
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using Elite Plumbing & Drain's website and services, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Description of Service</h2>
          <p>Elite Plumbing & Drain is a service that connects users with independent, licensed plumbing contractors across the United States. We do not perform plumbing services directly.</p>
        
        <h2>3. No Warranties</h2>
        <p>While we strive to connect you with reputable professionals, we make no guarantees regarding the quality, pricing, or warranties of the services provided by the independent contractors.</p>
        
        <h2>4. Limitation of Liability</h2>
        <p>Elite Plumbing & Drain shall not be liable for any damages or disputes arising from your interactions or contracts with the independent plumbers you are connected with through our service.</p>
        
        <h2>5. User Responsibilities</h2>
        <p>You agree to provide accurate information when requesting service and to use the platform solely for lawful purposes.</p>
        </div>
      </div>
    </div>
  );
}
