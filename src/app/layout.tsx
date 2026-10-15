import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Tracking } from '@/components/Tracking';
import { JsonLd } from '@/components/JsonLd';
import { siteGraph } from '@/lib/schema';
import { BRAND, BRAND_FULL, SITE_URL, DEFAULT_KEYWORDS } from '@/content/site';


export const viewport: Viewport = {
  themeColor: '#002855',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL || 'https://eliteplumbingdrain.com'),
  title: {
    template: '%s',
    default: BRAND_FULL,
  },
  keywords: [...DEFAULT_KEYWORDS],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Tracking />
      </head>
      <body>
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
