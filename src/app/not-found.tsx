import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { homePage, serviceHub, emergencyHub } from '@/lib/routes';
import { JsonLd } from '@/components/JsonLd';
import { Tracking } from '@/components/Tracking';
import { siteGraph } from '@/lib/schema';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <Tracking />
      </head>
      <body>
        <JsonLd data={siteGraph()} />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
            <h1 className="text-6xl font-heading font-bold text-sky mb-4">404</h1>
            <h2 className="text-3xl font-heading font-bold mb-6">Page Not Found</h2>
            <p className="text-lg text-gray-600 max-w-md mb-8">
              We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={homePage()} className="btn btn-primary">
                Back to Home
              </Link>
              <Link href={serviceHub()} className="btn btn-ghost-light">
                View Services
              </Link>
              <Link href={emergencyHub()} className="btn btn-alert">
                Emergency Plumbing
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
