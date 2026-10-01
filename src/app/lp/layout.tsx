import type { Metadata } from 'next';
import { Logo } from '@/components/Logo';
import { PPC_PHONE } from '@/content/site';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper flex flex-col font-body text-ink">
      {/* Top bar */}
      <header className="bg-white border-b border-line py-4 sticky top-0 z-50 shadow-sm">
        <div className="container-x flex items-center justify-between">
          <Logo variant="light" />
          <a href={`tel:${PPC_PHONE.replace(/\D/g, '')}`} className="btn btn-primary text-lg px-6 py-2">
            Call {PPC_PHONE}
          </a>
        </div>
      </header>
      
      <main className="flex-grow pb-24 md:pb-12">
        {children}
      </main>
    </div>
  );
}
