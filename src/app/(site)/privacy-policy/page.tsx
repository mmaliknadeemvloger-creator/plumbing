import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMeta({
  title: 'Privacy Policy | Elite Plumbing',
  description: 'Privacy Policy for Elite Plumbing & Drain. Learn how we handle, protect, and respect your personal information when requesting plumbing services.',
  path: '/privacy-policy/',
  keywords: [
    'privacy policy',
    'elite plumbing privacy policy',
    'data protection',
    'user privacy',
  ],
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { label: 'Privacy Policy', href: '/privacy-policy/' }
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
          <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
          
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information We Collect</h2>
          <p>When you use Elite Plumbing & Drain to request services, we collect information you provide via our forms, such as your name, phone number, email address, property ZIP code, and the nature of your plumbing issue. We may also collect technical data such as IP address and browser information.</p>
          
          <h2>How We Use Your Information</h2>
          <p>The primary purpose of collecting your information is to connect you with qualified local licensed plumbers serving your area across the United States. We also use your data to improve our services and analyze usage.</p>
        
        <h2>Call Tracking and SMS</h2>
        <p>By providing your phone number, you consent to receive calls and text messages (SMS) related to your service request. We may use call tracking technologies to route your calls to the appropriate local plumber and monitor quality.</p>
        
        <h2>Sharing Your Information</h2>
        <p>We do not sell your personal information. We share your request details exclusively with up to three independent plumbing contractors capable of servicing your area so they can contact you to provide an estimate and schedule service.</p>
        
        <h2>Cookies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information to enhance your experience.</p>
        
        <h2>Your Rights</h2>
        <p>Depending on your location, you may have rights to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
        </div>
      </div>
    </div>
  );
}
