import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Terms of Service',
  description: 'Terms of Service — SteadWell Plumbing, serving Charlotte, NC metro and York County, SC.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container-x max-w-3xl prose-sw">
        <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using SteadWell Plumbing's website and services, you agree to be bound by these Terms of Service.</p>
        
        <h2>2. Description of Service</h2>
        <p>SteadWell Plumbing is a free service that connects users with independent, licensed plumbing contractors in the Charlotte metro area. We do not perform plumbing services directly.</p>
        
        <h2>3. No Warranties</h2>
        <p>While we strive to connect you with reputable professionals, we make no guarantees regarding the quality, pricing, or warranties of the services provided by the independent contractors.</p>
        
        <h2>4. Limitation of Liability</h2>
        <p>SteadWell Plumbing shall not be liable for any damages or disputes arising from your interactions or contracts with the independent plumbers you are connected with through our service.</p>
        
        <h2>5. User Responsibilities</h2>
        <p>You agree to provide accurate information when requesting service and to use the platform solely for lawful purposes.</p>
      </div>
    </div>
  );
}
