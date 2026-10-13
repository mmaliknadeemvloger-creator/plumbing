import React from 'react';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { services } from '@/content/services';
import { servicesMore } from '@/content/servicesMore';
import { emergencyHub, servicePage } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';
import { PhoneLink } from '@/components/PhoneLink';
import { FaqList } from '@/components/FaqList';
import { SectionHeading } from '@/components/ui';

export const metadata = pageMeta({
  title: '24/7 Emergency Plumbing Services Across the USA | Elite Plumbing',
  description: 'Need an emergency plumber? 24/7 emergency plumbing services across the USA for burst pipes, active water leaks, severe drain backups, and gas leaks. Fast dispatch.',
  path: emergencyHub(),
  keywords: [
    'emergency plumber',
    '24 hour emergency plumbing',
    'urgent plumbing repair',
    'burst pipe repair',
    'overflowing toilet emergency',
    'emergency drain cleaning',
    'water heater leaking',
    'sewer backup emergency',
    'after hours plumber',
    'immediate plumbing dispatch',
    'emergency plumber near me',
  ],
});

export default function EmergencyPlumbingPage() {
  const emergencyServices = [...services, ...servicesMore].filter(s => s.status === 'PUBLISHED' && s.isEmergencyCapable);

  const faqs = [
    {
      question: 'What is considered a plumbing emergency?',
      answer: 'Any plumbing issue that risks severe water damage to your property or poses a health or safety hazard is an emergency. This includes burst pipes, overflowing toilets, active supply line leaks, failed water heaters, and severe sewer backups.'
    },
    {
      question: 'How fast can an emergency plumber arrive?',
      answer: 'We prioritize emergency calls and connect you with available licensed plumbers for the fastest possible dispatch in your local area across the United States. When you call, our team immediately assesses technician availability.'
    },
    {
      question: 'What should I do while waiting for the emergency plumber?',
      answer: 'Your first priority should be to shut off the main water shutoff valve to stop the flooding. Next, if water is near electrical outlets or appliances, turn off the electricity to that area at your main breaker panel.'
    }
  ];

  return (
    <>
      <section className="bg-alert pt-20 pb-24 text-white">
        <div className="container-x text-center max-w-4xl mx-auto">
          <span className="eyebrow text-white/90 mb-4 block uppercase tracking-wider font-semibold text-xs">24/7 Nationwide Emergency Dispatch</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            24/7 Emergency Plumbing Services Across the USA
          </h1>
          <p className="text-xl text-white/90 mb-10">
            Water damage spreads fast. If you have a burst pipe, active leak, or major sewer backup, call right now for immediate emergency dispatch.
          </p>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 inline-block">
            <p className="text-sm font-bold uppercase tracking-wider text-white/80 mb-2">Call For Immediate Dispatch</p>
            <PhoneLink className="text-4xl md:text-5xl font-bold text-white hover:text-white/90 transition-colors" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="container-x max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl ring-1 ring-line mb-16">
            <SectionHeading title="What to do while you wait" />
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-paper rounded-2xl">
                <div className="w-10 h-10 bg-alert text-white flex items-center justify-center rounded-full font-bold mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Shut Off Water</h3>
                <p className="text-ink/80 text-sm">Locate your main water shutoff valve (usually in the basement, garage, or near the street) and turn it off immediately.</p>
              </div>
              <div className="p-6 bg-paper rounded-2xl">
                <div className="w-10 h-10 bg-alert text-white flex items-center justify-center rounded-full font-bold mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Cut the Power</h3>
                <p className="text-ink/80 text-sm">If water is leaking near electrical outlets, light fixtures, or appliances, turn off the electricity at the main breaker panel.</p>
              </div>
              <div className="p-6 bg-paper rounded-2xl">
                <div className="w-10 h-10 bg-alert text-white flex items-center justify-center rounded-full font-bold mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Clear the Area</h3>
                <p className="text-ink/80 text-sm">Move furniture, rugs, and valuables away from the water. Use towels to start soaking up standing water to minimize damage.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-ink mb-8 text-center">Common Emergency Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyServices.map(service => (
                <Link 
                  key={service.slug} 
                  href={servicePage(service.slug)}
                  className="bg-white p-6 rounded-2xl ring-1 ring-line hover:ring-alert transition-all shadow-sm group"
                >
                  <h3 className="font-bold text-ink mb-2 group-hover:text-alert transition-colors">{service.name}</h3>
                  <p className="text-sm text-ink/70 line-clamp-2">{service.answer}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm ring-1 ring-line">
            <h2 className="text-3xl font-heading font-bold text-ink mb-8">Emergency Plumbing FAQs</h2>
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
