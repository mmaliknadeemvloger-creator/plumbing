import React from 'react';
import Link from 'next/link';
import {
  WrenchIcon,
  DropletIcon,
  ThermometerIcon,
  AlertTriangleIcon,
  ShieldIcon,
  ArrowRightIcon,
  CheckIcon,
} from '@/components/icons';
import { PhoneLink } from '@/components/PhoneLink';
import { servicePage, emergencyHub, requestServicePage } from '@/lib/routes';

export const PlumbingSolutionsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-line" id="solutions-guide">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="eyebrow text-sky mb-3 inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-xs bg-sky-tint px-3.5 py-1.5 rounded-full">
            <ShieldIcon className="w-3.5 h-3.5" /> Elite Plumbing & Drain USA • Comprehensive Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-ink mb-6 tracking-tight">
            Professional Plumbing & Drain Services in the USA
          </h2>
          
          {/* Lead Intro Box */}
          <div className="bg-paper p-6 sm:p-8 rounded-3xl border border-line shadow-sm text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky" />
              Reliable Plumbing Solutions for Your Home and Business
            </h3>
            <p className="text-ink/80 text-base sm:text-lg leading-relaxed mb-4">
              Plumbing problems can disrupt your daily routine and cause costly damage if they are not addressed promptly. From leaking faucets and clogged drains to damaged pipes and water heater issues, reliable plumbing services help keep your property safe, comfortable, and functional.
            </p>
            <p className="text-ink/90 text-base sm:text-lg leading-relaxed font-medium">
              <strong className="text-ink font-bold">Elite Plumbing & Drain USA</strong> is dedicated to helping homeowners and businesses understand common plumbing problems and find practical solutions for their plumbing and drainage needs.
            </p>
          </div>
        </div>

        {/* Detailed Solutions Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Plumbing Repair and Maintenance */}
          <div className="bg-paper p-7 sm:p-8 rounded-3xl border border-line hover:border-sky/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-tint text-sky-deep flex items-center justify-center font-bold shrink-0">
                  <WrenchIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
                  Complete Plumbing Repair and Maintenance
                </h3>
              </div>
              <div className="space-y-4 text-ink/75 text-sm sm:text-base leading-relaxed">
                <p>
                  A properly maintained plumbing system is essential for every residential and commercial property. Small issues, such as dripping faucets, running toilets, low water pressure, and leaking connections, can lead to unnecessary water waste and more serious damage over time.
                </p>
                <p>
                  Professional plumbing repair can help identify the source of a problem and determine the appropriate solution. Routine inspections and preventive maintenance can also help detect potential leaks, worn-out fixtures, and other plumbing concerns before they become major repairs.
                </p>
                <p>
                  Whether you are dealing with a minor plumbing issue or planning an improvement to your existing system, understanding your options can help you make informed decisions.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-line">
              <Link
                href={servicePage('pipe-repair')}
                className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                Learn more about plumbing repair <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Drain Cleaning and Clogged Drain Solutions */}
          <div className="bg-paper p-7 sm:p-8 rounded-3xl border border-line hover:border-sky/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-tint text-sky-deep flex items-center justify-center font-bold shrink-0">
                  <DropletIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
                  Drain Cleaning and Clogged Drain Solutions
                </h3>
              </div>
              <div className="space-y-4 text-ink/75 text-sm sm:text-base leading-relaxed">
                <p>
                  Slow or blocked drains are among the most common plumbing problems in American homes and businesses. Kitchen sinks may become clogged by grease and food particles, while bathroom drains can collect hair, soap residue, and other debris. Outdoor drainage lines may also experience blockages caused by roots, sediment, or accumulated waste.
                </p>
                <p>
                  Drain cleaning helps restore proper water flow and reduce the risk of recurring blockages. Depending on the severity of the problem, solutions may include mechanical drain clearing, professional inspection, or specialized cleaning equipment.
                </p>
                <p>
                  Avoid ignoring repeated drain clogs, unpleasant odors, or water backing up into sinks and tubs. These warning signs may indicate a deeper drainage problem that requires further inspection.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-line">
              <Link
                href={servicePage('drain-cleaning')}
                className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                Explore drain cleaning solutions <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Water Heater Repair and Installation */}
          <div className="bg-paper p-7 sm:p-8 rounded-3xl border border-line hover:border-sky/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-tint text-sky-deep flex items-center justify-center font-bold shrink-0">
                  <ThermometerIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
                  Water Heater Repair and Installation
                </h3>
              </div>
              <div className="space-y-4 text-ink/75 text-sm sm:text-base leading-relaxed">
                <p>
                  A dependable water heater provides hot water for bathing, cooking, cleaning, and other everyday activities. Problems such as inconsistent water temperature, unusual noises, visible leaks, or insufficient hot water may indicate that a water heater needs professional attention.
                </p>
                <p>
                  Regular maintenance can help improve system performance and identify potential concerns. When repairs are no longer practical, replacing an older unit with a suitable model may be worth considering. The best option depends on your household's hot water requirements, energy preferences, budget, and local installation requirements.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-line">
              <Link
                href={servicePage('water-heater-services')}
                className="text-sky-deep font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                Explore water heater options <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Emergency Plumbing and Leak Prevention */}
          <div className="bg-paper p-7 sm:p-8 rounded-3xl border border-line hover:border-sky/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-alert/10 text-alert flex items-center justify-center font-bold shrink-0">
                  <AlertTriangleIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink">
                  Emergency Plumbing and Leak Prevention
                </h3>
              </div>
              <div className="space-y-4 text-ink/75 text-sm sm:text-base leading-relaxed">
                <p>
                  Some plumbing problems require immediate attention. Burst pipes, significant water leaks, overflowing toilets, and sewage backups can damage floors, walls, furniture, and other parts of a property.
                </p>
                <p>
                  If a serious leak occurs, shut off the main water supply when it is safe to do so and contact a qualified plumbing professional. For suspected sewage contamination or extensive flooding, avoid contact with affected water and follow appropriate safety guidance.
                </p>
                <p>
                  Preventive measures, including inspecting exposed pipes, monitoring water pressure, and addressing small leaks early, can help reduce the likelihood of unexpected plumbing emergencies.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-line">
              <Link
                href={emergencyHub()}
                className="text-alert font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
              >
                24/7 Emergency response steps <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5: Choose the Right Plumbing Solution (Full-width highlight) */}
        <div className="bg-gradient-to-br from-paper via-white to-sky-tint/30 p-8 sm:p-10 rounded-3xl border border-line mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-tint text-sky-deep flex items-center justify-center font-bold">
                  <ShieldIcon className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-ink">
                  Choose the Right Plumbing Solution
                </h3>
              </div>
              <div className="space-y-4 text-ink/80 text-base leading-relaxed">
                <p>
                  Every property has different plumbing requirements. Before arranging a repair or installation, consider the nature of the problem, the age of your plumbing system, the expected cost, and the qualifications of the service provider. Ask for a clear explanation of the proposed work, pricing, warranties, and any applicable permits.
                </p>
                <p>
                  <strong className="text-ink font-semibold">Elite Plumbing & Drain USA</strong> aims to provide useful information about plumbing repair, drain cleaning, leak detection, pipe maintenance, and other essential plumbing services. Explore our website to learn more about common plumbing issues, preventive maintenance, and practical ways to protect your property.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto bg-white p-6 rounded-2xl border border-line shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-ink/60 block">Key Considerations</span>
              <ul className="space-y-2 text-sm text-ink/80">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-sky shrink-0" />
                  <span>Licensed & verified plumbers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-sky shrink-0" />
                  <span>Transparent upfront pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-sky shrink-0" />
                  <span>Clear explanation of repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-sky shrink-0" />
                  <span>Workmanship warranty & cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion / Takeaway Callout Banner */}
        <div className="bg-ink text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white leading-snug">
              Keep your plumbing system working efficiently with informed decisions, timely maintenance, and appropriate professional assistance.
            </p>
            <p className="text-white/70 text-sm mt-2">
              Connect with vetted local plumbing contractors ready to inspect, repair, or upgrade your home or business plumbing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href={requestServicePage()}
              className="btn btn-primary text-base px-6 py-3 justify-center w-full sm:w-auto shadow-md"
            >
              Request Service Online
            </Link>
            <PhoneLink
              variant="default"
              className="text-white hover:text-sky font-semibold justify-center w-full sm:w-auto px-4 py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
