import { CheckIcon, AlertTriangleIcon, ArrowRightIcon, WrenchIcon, MapPinIcon, PhoneIcon, ThermometerIcon, DropletIcon, ShieldIcon } from '@/components/icons';
import { pageMeta } from '@/lib/seo';
import { DISCLOSURE, BRAND_PROMISE, BRAND } from '@/content/site';
import { CtaBand } from '@/components/CtaBand';
import { ZipChecker } from '@/components/ZipChecker';

export const metadata = pageMeta({
  title: 'About SteadWell Plumbing',
  description: 'Learn about how SteadWell Plumbing connects you with top-rated Charlotte plumbers.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <div>
      <section className="bg-ink text-white py-16">
        <div className="container-x max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About {BRAND}</h1>
          <p className="text-lg opacity-90">Connecting the Charlotte metro with reliable plumbing services.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl prose-sw">
          <h2 className="text-2xl font-heading font-bold mb-4">What We Do</h2>
          <p>{DISCLOSURE}</p>

          <h2 className="text-2xl font-heading font-bold mt-12 mb-6">How It Works</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sky-tint text-sky flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg">Submit a Request</h3>
                <p>Call us or fill out our online form describing your plumbing issue.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sky-tint text-sky flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg">Get Matched</h3>
                <p>We instantly route your request to an available, qualified plumber in your specific area of Charlotte.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sky-tint text-sky flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg">Plumber Contacts You</h3>
                <p>The local professional will reach out to discuss the issue, provide pricing, and schedule your service.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-heading font-bold mt-12 mb-6">Our Promise</h2>
          <ul className="grid gap-3 mb-12">
            {BRAND_PROMISE.map((promise, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckIcon className="text-sky w-5 h-5 shrink-0" />
                <span>{promise}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-paper">
        <div className="container-x max-w-xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">CheckIcon your service area</h2>
          <ZipChecker />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
