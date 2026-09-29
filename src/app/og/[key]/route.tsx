import { ImageResponse } from 'next/og';
import { OG_IMAGES } from '@/lib/og';
import { BRAND, SERVICE_AREA_LABEL, PHONE } from '@/content/site';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(OG_IMAGES).map((key) => ({ key }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key } = await params;
  const config = OG_IMAGES[key] || OG_IMAGES['home'];

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          backgroundColor: '#002855',
          flexDirection: 'row',
          position: 'relative',
        }}
      >
        {/* Left panel */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '65%',
            height: '100%',
            padding: '60px 80px',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#38BDF8',
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 20,
            }}
          >
            {BRAND}
          </div>
          <div
            style={{
              display: 'flex',
              color: '#F97316',
              fontSize: 22,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            {config.eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              color: 'white',
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 30,
              maxHeight: '220px',
              overflow: 'hidden',
            }}
          >
            {config.title}
          </div>
          <div
            style={{
              display: 'flex',
              color: '#9CA3AF',
              fontSize: 24,
            }}
          >
            {SERVICE_AREA_LABEL}
          </div>
        </div>

        {/* Right panel */}
        <div
          style={{
            display: 'flex',
            width: '35%',
            height: '100%',
            backgroundColor: '#0f3661',
            borderLeft: '4px solid #F97316',
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            backgroundColor: '#F97316',
            display: 'flex',
          }}
        />

        {/* Phone badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '60px',
            backgroundColor: '#F97316',
            color: 'white',
            padding: '12px 28px',
            fontSize: 24,
            fontWeight: 700,
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'flex',
          }}
        >
          Call {PHONE}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
