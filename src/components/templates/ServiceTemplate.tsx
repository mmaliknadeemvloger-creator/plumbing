import Link from 'next/link';
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

export function ServiceTemplate({ service, localAngle, localFaqs }: ServiceTemplateProps) {
  const allFaqs = [...(localFaqs ?? []), ...service.faqs];

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">{service.category.replace(/-/g, ' ')}</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
              {service.h1 || service.name}
            </h1>
            {/* Direct answer box */}
            <div className="bg-white/10 rounded-xl p-4 mb-6 text-white/90 text-base leading-relaxed">
              {service.answer}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${PHONE_E164}`} className="btn btn-primary gap-2">
                <PhoneIcon className="w-5 h-5" /> Call {PHONE}
              </a>
              <Link href="/request-service/" className="btn btn-secondary">
                Request Online
              </Link>
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
                <div className="space-y-4">
                  {localAngle.map((para, i) => (
                    <p key={i} className="text-ink/80 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}

              {/* Intro paragraphs */}
              {service.intro?.length > 0 && (
                <div className="space-y-4">
                  {service.intro.map((para, i) => (
                    <p key={i} className="text-ink/80 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}

              {/* Signs */}
              {service.signs?.length > 0 && (
                <div className="bg-white rounded-2xl ring-1 ring-line p-6">
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">
                    Signs You Need {service.name}
                  </h2>
                  <ul className="space-y-3">
                    {service.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertTriangleIcon className="w-5 h-5 text-alert shrink-0 mt-0.5" />
                        <span className="text-ink/80">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {service.process?.length > 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-ink mb-6">How It Works</h2>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-4 bg-white rounded-xl ring-1 ring-line p-5">
                        <div className="w-8 h-8 bg-sky text-white rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <p className="font-semibold text-ink">{step.title}</p>
                          <p className="text-sm text-ink/70 mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cost factors */}
              {service.costFactors?.length > 0 && (
                <div className="bg-white rounded-2xl ring-1 ring-line p-6">
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">
                    What Affects the Cost
                  </h2>
                  <ul className="space-y-2">
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
                    <div className="bg-sage-tint rounded-xl p-5">
                      <p className="font-semibold text-sage mb-3">✓ Safe to DIY</p>
                      <ul className="space-y-1">
                        {service.diy.safe.map((item, i) => (
                          <li key={i} className="text-sm text-ink/70">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.diy.stop?.length > 0 && (
                    <div className="bg-alert-tint rounded-xl p-5">
                      <p className="font-semibold text-alert mb-3">✕ Stop & Call Us</p>
                      <ul className="space-y-1">
                        {service.diy.stop.map((item, i) => (
                          <li key={i} className="text-sm text-ink/70">{item}</li>
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
                <div>
                  <h2 className="font-heading text-xl font-bold text-ink mb-4">Related Services</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.related.map(slug => (
                      <Link
                        key={slug}
                        href={servicePage(slug)}
                        className="text-sm font-medium text-sky-deep border border-sky/30 rounded-lg px-3 py-1.5 hover:bg-sky-tint transition-colors"
                      >
                        {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
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
