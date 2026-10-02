import Link from 'next/link';
import Image from 'next/image';
import type { Service } from '@/content/types';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { FaqList } from '@/components/FaqList';
import { CtaBand } from '@/components/CtaBand';
import { CheckIcon, AlertTriangleIcon, PhoneIcon } from '@/components/icons';
import { PHONE, PHONE_E164 } from '@/content/site';
import { servicePage } from '@/lib/routes';

interface ServiceTemplateProps {
  service: Service;
  localAngle?: string[];      // City+service extra paragraphs
  localFaqs?: { question: string; answer: string }[];
}

function getServicePhoto(categorySlug: string): string {
  if (categorySlug === 'drain-cleaning' || categorySlug === 'sewer') {
    return '/photos/drain-cleaning.jpg';
  }
  if (categorySlug === 'water-heaters') {
    return '/photos/water-heater.jpg';
  }
  if (categorySlug === 'leak-detection' || categorySlug === 'water-lines' || categorySlug === 'fixtures' || categorySlug === 'gas-lines') {
    return '/photos/pipe-repair.jpg';
  }
  return '/photos/hero-plumber.jpg';
}

export function ServiceTemplate({ service, localAngle, localFaqs }: ServiceTemplateProps) {
  const allFaqs = [...(localFaqs ?? []), ...service.faqs];
  const photoUrl = getServicePhoto(service.category);

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink text-white py-16 md:py-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-sky mb-3 uppercase tracking-wider font-semibold">{service.category.replace(/-/g, ' ')}</p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                {service.h1 || service.name}
              </h1>
              {/* Direct answer box */}
              <div className="bg-white/10 rounded-2xl p-5 mb-6 text-white/90 text-base leading-relaxed border border-white/10">
                {service.answer}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${PHONE_E164}`} className="btn btn-primary gap-2 justify-center">
                  <PhoneIcon className="w-5 h-5" /> Call {PHONE}
                </a>
                <Link href="/request-service/" className="btn btn-secondary justify-center">
                  Request Online
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
                <Image
                  src={photoUrl}
                  alt={`${service.name} professional plumbing repair and installation service`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sidebar form */}
      <section className="py-14 bg-paper">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Local angle (city+service pages) */}
              {localAngle && localAngle.length > 0 && (
                <div className="space-y-4 bg-white p-6 rounded-2xl ring-1 ring-line">
                  <h2 className="font-heading text-xl font-bold text-ink mb-2">Local Service Details</h2>
                  {localAngle.map((para, i) => (
                    <p key={i} className="text-ink/80 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}

              {/* Intro paragraphs */}
              {service.intro?.length > 0 && (
                <div className="space-y-4">
                  {service.intro.map((para, i) => (
                    <p key={i} className="text-ink/80 leading-relaxed text-base md:text-lg">{para}</p>
                  ))}
                </div>
              )}

              {/* Signs */}
              {service.signs?.length > 0 && (
                <div className="bg-white rounded-2xl ring-1 ring-line p-6 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">
                    Signs You Need {service.name}
                  </h2>
                  <ul className="space-y-3">
                    {service.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertTriangleIcon className="w-5 h-5 text-alert shrink-0 mt-0.5" />
                        <span className="text-ink/80 font-medium">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {service.process?.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-ink mb-6">Our Process</h2>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-4 bg-white rounded-xl ring-1 ring-line p-5 shadow-sm">
                        <div className="w-9 h-9 bg-sky text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-bold text-ink text-base">{step.title}</p>
                          <p className="text-sm text-ink/70 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost factors */}
              {service.costFactors?.length > 0 && (
                <div className="bg-white rounded-2xl ring-1 ring-line p-6 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">
                    What Affects the Cost
                  </h2>
                  <ul className="space-y-2.5">
                    {service.costFactors.map((factor, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span className="text-sm text-ink/80">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* DIY advice */}
              {service.diy && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.diy.safe?.length > 0 && (
                    <div className="bg-sage-tint rounded-2xl p-5 ring-1 ring-sage/20">
                      <p className="font-bold text-sage mb-3">✓ Safe to DIY</p>
                      <ul className="space-y-1.5">
                        {service.diy.safe.map((item, i) => (
                          <li key={i} className="text-sm text-ink/80">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.diy.stop?.length > 0 && (
                    <div className="bg-alert-tint rounded-2xl p-5 ring-1 ring-alert/20">
                      <p className="font-bold text-alert mb-3">✕ Stop & Call Us</p>
                      <ul className="space-y-1.5">
                        {service.diy.stop.map((item, i) => (
                          <li key={i} className="text-sm text-ink/80">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* FAQs */}
              {allFaqs.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-ink mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FaqList faqs={allFaqs} />
                </div>
              )}

              {/* Related services */}
              {service.related?.length > 0 && (
                <div className="pt-4 border-t border-line">
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">Related Services</h2>
                  <div className="flex flex-wrap gap-2.5">
                    {service.related.map(slug => (
                      <Link
                        key={slug}
                        href={servicePage(slug)}
                        className="text-sm font-semibold text-sky-deep bg-white border border-line rounded-xl px-4 py-2 hover:border-sky hover:shadow-sm transition-all"
                      >
                        {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} →
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar form */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <LeadFormBlock defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
