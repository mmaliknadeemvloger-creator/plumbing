import { NextRequest, NextResponse } from 'next/server';
import { cities } from '@/content/locations';
import { checkCityQuality } from '@/lib/quality';

export async function GET(req: NextRequest) {
  // Return 404 in production
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return new NextResponse('Not Found', { status: 404 });
  }

  const report = cities.map(city => {
    const { pass, reasons } = checkCityQuality(city);
    return {
      slug: city.slug,
      name: city.name,
      status: city.status,
      pass,
      reasons,
    };
  });

  return NextResponse.json(report);
}
