import { pageMeta } from '@/lib/seo';
import { PhoneLink } from '@/components/PhoneLink';
import Link from 'next/link';
import { homePage } from '@/lib/routes';

export const metadata = pageMeta({
  title: 'Thank You',
  description: 'Your request has been received.',
  path: '/thank-you/',
  robots: 'noindex',
});

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const isEmergency = params.emergency === '1';

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 text-center">
      <div className="container-x max-w-2xl">
        <div className="w-16 h-16 bg-sky-tint text-sky rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-heading font-bold mb-4">Request Received!</h1>
        
        {isEmergency ? (
          <div className="bg-alert-tint p-6 rounded-2xl mb-8 border border-alert/20">
            <h2 className="text-alert font-bold text-xl mb-2">Emergency Request Priority</h2>
            <p className="mb-4 text-gray-800">We are processing your emergency request immediately. A plumber will contact you shortly. If this is life-threatening, please call 911.</p>
            <p className="font-semibold text-gray-800 mb-2">For immediate assistance, call now:</p>
            <PhoneLink className="btn btn-alert" />
          </div>
        ) : (
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Thank you for choosing SteadWell Plumbing. We have received your request and a local plumber will contact you shortly to discuss your issue and schedule a visit.
            </p>
          </div>
        )}

        <Link href={homePage()} className="btn btn-ghost-light">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
