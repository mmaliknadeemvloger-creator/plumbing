'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PhoneIcon, CheckIcon, AlertTriangleIcon } from '@/components/icons';
import { PHONE, PHONE_E164, SERVICE_AREA_LABEL } from '@/content/site';

const ALL_SERVICES = [
  { value: 'residential-plumbing', label: 'Residential Plumbing' },
  { value: 'commercial-plumbing', label: 'Commercial Plumbing' },
  { value: 'emergency-plumbing', label: 'Emergency Plumbing (24/7)' },
  { value: 'drain-cleaning', label: 'Drain Cleaning & Clog Removal' },
  { value: 'hydro-jetting', label: 'Hydro Jetting' },
  { value: 'slow-drain-repair', label: 'Slow Drain Repair' },
  { value: 'sewer-line-repair', label: 'Sewer Line Repair' },
  { value: 'sewer-camera-inspection', label: 'Sewer Camera Inspection' },
  { value: 'sewer-line-replacement', label: 'Sewer Line Replacement' },
  { value: 'water-heater-services', label: 'Water Heater Services' },
  { value: 'water-heater-repair', label: 'Water Heater Repair' },
  { value: 'water-heater-installation', label: 'Water Heater Installation' },
  { value: 'tankless-water-heater', label: 'Tankless Water Heater' },
  { value: 'leak-detection', label: 'Leak Detection & Repair' },
  { value: 'slab-leak-repair', label: 'Slab Leak Repair' },
  { value: 'pipe-repair', label: 'Pipe Repair & Burst Lines' },
  { value: 'water-line-repair', label: 'Water Line Repair' },
  { value: 'repiping', label: 'Whole-House Repiping' },
  { value: 'toilet-faucet-repair', label: 'Toilet & Faucet Repair' },
  { value: 'faucet-repair', label: 'Faucet Repair & Installation' },
  { value: 'toilet-repair', label: 'Toilet Repair & Installation' },
  { value: 'shower-repair', label: 'Shower & Tub Repair' },
  { value: 'plumbing-installation', label: 'Plumbing Installation' },
  { value: 'plumbing-inspection', label: 'Plumbing Inspection' },
  { value: 'gas-line-repair', label: 'Gas Line Repair' },
  { value: 'gas-line-installation', label: 'Gas Line Installation' },
  { value: 'garbage-disposal', label: 'Garbage Disposal' },
  { value: 'water-softener', label: 'Water Softener' },
  { value: 'water-filtration', label: 'Water Filtration' },
  { value: 'outdoor-faucet', label: 'Outdoor Faucet / Hose Bib' },
  { value: 'irrigation-repair', label: 'Irrigation Line Repair' },
  { value: 'other', label: 'Other / Not Sure' },
];


interface FormData {
  service: string;
  isEmergency: boolean;
  zip: string;
  timing: string;
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  notes: string;
  consent: boolean;
}

interface FieldErrors {
  [key: string]: string;
}

export function LeadForm({
  defaultService = '',
  defaultZip = '',
}: {
  defaultService?: string;
  defaultZip?: string;
}) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [emergencyPath, setEmergencyPath] = useState(false);
  const startedAtRef = useRef(Date.now());
  const firstErrorRef = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState<FormData>({
    service: defaultService,
    isEmergency: false,
    zip: defaultZip,
    timing: '',
    name: '',
    phone: '',
    email: '',
    contactMethod: 'phone',
    notes: '',
    consent: false,
  });

  // honeypot field (hidden)
  const [honeypot, setHoneypot] = useState('');

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const val = e.target.type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value;
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  // Focus first error field
  useEffect(() => {
    if (Object.keys(errors).length > 0 && firstErrorRef.current) {
      firstErrorRef.current.focus();
    }
  }, [errors]);

  function validateStep1() {
    const e: FieldErrors = {};
    if (!form.service) e.service = 'Please select a service.';
    return e;
  }
  function validateStep2() {
    const e: FieldErrors = {};
    if (!form.zip || !/^\d{5}$/.test(form.zip)) e.zip = 'Please enter a valid 5-digit ZIP code.';
    if (!form.timing) e.timing = 'Please select a timeframe.';
    return e;
  }
  function validateStep3() {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    const phone = form.phone.replace(/\D/g, '');
    if (phone.length !== 10) e.phone = 'Please enter a valid 10-digit phone number.';
    if (!form.consent) e.consent = 'Please agree to continue.';
    return e;
  }

  function goStep(n: number) {
    const validate = n === 2 ? validateStep1 : n === 3 ? validateStep2 : () => ({});
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateStep3();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          honeypot,
          startedAt: startedAtRef.current,
        }),
      });
      if (res.ok) {
        router.push(form.isEmergency ? '/thank-you/?emergency=1' : '/thank-you/');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrors(data.errors ?? { _: 'Something went wrong. Please call us directly.' });
        setSubmitting(false);
      }
    } catch {
      setErrors({ _: 'Could not submit. Please call us directly.' });
      setSubmitting(false);
    }
  }

  const isCovered = form.zip.length === 5 ? /^\d{5}$/.test(form.zip) : null;

  // Emergency short-path
  if (emergencyPath) {
    return (
      <div className="bg-white rounded-2xl ring-1 ring-line shadow-xl overflow-hidden">
        <div className="bg-alert-tint border-b border-alert/20 p-4">
          <p className="text-sm font-semibold text-alert">Emergency — Water Actively Leaking</p>
          <p className="text-sm text-ink/70 mt-1">Call now for fastest response. Or fill this short form.</p>
        </div>
        <div className="p-6 space-y-4">
          <a href={`tel:${PHONE_E164}`} className="btn btn-alert w-full justify-center text-lg gap-2">
            <PhoneIcon className="w-5 h-5" /> Call {PHONE} Now
          </a>
          <p className="text-center text-xs text-ink/50">— or fill out the form below —</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot */}
            <input
              type="text"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute opacity-0 h-0 w-0 pointer-events-none"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              autoComplete="off"
            />
            <div>
              <label htmlFor="ef-name" className="field-label">Name</label>
              <input id="ef-name" type="text" className="field" value={form.name} onChange={set('name')} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ef-name-err' : undefined} />
              {errors.name && <p id="ef-name-err" className="text-xs text-alert mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="ef-phone" className="field-label">Phone</label>
              <input id="ef-phone" type="tel" className="field" value={form.phone} onChange={set('phone')} required aria-invalid={!!errors.phone} />
              {errors.phone && <p className="text-xs text-alert mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="ef-zip" className="field-label">ZIP Code</label>
              <input id="ef-zip" type="text" className="field" value={form.zip} onChange={set('zip')} maxLength={5} required />
            </div>
            <label className="flex items-start gap-3">
              <input type="checkbox" checked={form.consent} onChange={set('consent')} className="mt-0.5" aria-invalid={!!errors.consent} />
              <span className="text-xs text-ink/70">I agree to be contacted by a licensed plumber in my area about this request. I may be contacted by up to 3 plumbers.</span>
            </label>
            {errors.consent && <p className="text-xs text-alert">{errors.consent}</p>}
            {errors._ && <p className="text-sm text-alert">{errors._}</p>}
            <button type="submit" disabled={submitting} className="btn btn-alert w-full justify-center">
              {submitting ? 'Sending…' : 'Submit Emergency Request'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl ring-1 ring-line shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-paper p-5 border-b border-line">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-heading font-bold text-lg text-ink">Request Service</h3>
          <span className="text-xs font-medium text-ink/50">Step {step} of 3</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? 'bg-sky' : 'bg-line'}`} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-5" noValidate>
        {/* honeypot */}
        <input
          type="text"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 h-0 w-0 pointer-events-none"
          value={honeypot}
          onChange={e => setHoneypot(e.target.value)}
          autoComplete="off"
          name="website"
        />

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="lf-service" className="field-label">What do you need help with?</label>
              <select
                id="lf-service"
                className="field w-full"
                value={form.service}
                onChange={set('service')}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? 'lf-service-err' : undefined}
                ref={errors.service ? (el => { firstErrorRef.current = el; }) : undefined}
              >
                <option value="">Select a service…</option>
                {ALL_SERVICES.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {errors.service && <p id="lf-service-err" className="text-xs text-alert mt-1">{errors.service}</p>}
            </div>

            <div>
              <p className="field-label">Is water actively leaking right now?</p>
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => { setForm(f => ({ ...f, isEmergency: true })); setEmergencyPath(true); }}
                  className="btn btn-alert flex-1 justify-center text-sm"
                >
                  Yes — Emergency
                </button>
                <button
                  type="button"
                  onClick={() => goStep(2)}
                  className="btn btn-ghost-light flex-1 justify-center text-sm"
                >
                  No, not urgent
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="lf-zip" className="field-label">Your ZIP Code</label>
              <input
                id="lf-zip"
                type="text"
                inputMode="numeric"
                className="field w-full"
                value={form.zip}
                onChange={set('zip')}
                maxLength={5}
                placeholder="e.g. 90210"
                aria-invalid={!!errors.zip}
                aria-describedby={errors.zip ? 'lf-zip-err' : isCovered !== null ? 'lf-zip-status' : undefined}
              />
              {errors.zip && <p id="lf-zip-err" className="text-xs text-alert mt-1">{errors.zip}</p>}
              {!errors.zip && isCovered === true && (
                <p id="lf-zip-status" className="text-xs text-sage font-medium mt-1 flex items-center gap-1">
                  <CheckIcon className="w-3.5 h-3.5" /> Local plumbers available in this area!
                </p>
              )}
              {!errors.zip && isCovered === false && (
                <p id="lf-zip-status" className="text-xs text-ink/60 mt-1">
                  Please enter a valid 5-digit US ZIP code.
                </p>
              )}
            </div>


            <div>
              <label htmlFor="lf-timing" className="field-label">When do you need service?</label>
              <select
                id="lf-timing"
                className="field w-full"
                value={form.timing}
                onChange={set('timing')}
                aria-invalid={!!errors.timing}
              >
                <option value="">Select a timeframe…</option>
                <option value="asap">As soon as possible</option>
                <option value="today">Today</option>
                <option value="this-week">This week</option>
                <option value="flexible">I'm flexible</option>
                <option value="getting-quotes">Getting quotes / planning</option>
              </select>
              {errors.timing && <p className="text-xs text-alert mt-1">{errors.timing}</p>}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn btn-ghost-light flex-1 justify-center">Back</button>
              <button type="button" onClick={() => goStep(3)} className="btn btn-primary flex-1 justify-center">Continue</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="lf-name" className="field-label">Your Name</label>
              <input
                id="lf-name"
                type="text"
                autoComplete="name"
                className="field w-full"
                value={form.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'lf-name-err' : undefined}
                ref={errors.name ? (el => { firstErrorRef.current = el; }) : undefined}
              />
              {errors.name && <p id="lf-name-err" className="text-xs text-alert mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="lf-phone" className="field-label">Phone Number</label>
              <input
                id="lf-phone"
                type="tel"
                autoComplete="tel"
                className="field w-full"
                value={form.phone}
                onChange={set('phone')}
                placeholder="(704) 555-0100"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'lf-phone-err' : undefined}
                ref={errors.phone && !errors.name ? (el => { firstErrorRef.current = el; }) : undefined}
              />
              {errors.phone && <p id="lf-phone-err" className="text-xs text-alert mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="lf-email" className="field-label">Email <span className="font-normal text-ink/50">(optional)</span></label>
              <input
                id="lf-email"
                type="email"
                autoComplete="email"
                className="field w-full"
                value={form.email}
                onChange={set('email')}
              />
            </div>

            <div>
              <label htmlFor="lf-contact" className="field-label">Preferred contact method</label>
              <select id="lf-contact" className="field w-full" value={form.contactMethod} onChange={set('contactMethod')}>
                <option value="phone">Phone call</option>
                <option value="text">Text message</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div>
              <label htmlFor="lf-notes" className="field-label">Anything else we should know? <span className="font-normal text-ink/50">(optional)</span></label>
              <textarea
                id="lf-notes"
                className="field w-full"
                rows={3}
                value={form.notes}
                onChange={set('notes')}
                placeholder="Describe the issue…"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={set('consent')}
                className="mt-0.5 w-4 h-4 accent-sky"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? 'lf-consent-err' : undefined}
              />
              <span className="text-xs text-ink/70 leading-relaxed">
                By submitting, I agree to be contacted by up to 3 licensed plumbers in my area about this request, including by phone, text, or email. Msg & data rates may apply.{' '}
                <a href="/privacy/" className="underline">Privacy Policy</a>.
              </span>
            </label>
            {errors.consent && <p id="lf-consent-err" className="text-xs text-alert">{errors.consent}</p>}

            {errors._ && (
              <div className="flex items-start gap-2 bg-alert-tint rounded p-3 text-sm text-alert">
                <AlertTriangleIcon className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{errors._}</span>
              </div>
            )}

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="btn btn-ghost-light flex-1 justify-center">Back</button>
              <button type="submit" disabled={submitting} className="btn btn-primary flex-1 justify-center">
                {submitting ? 'Sending…' : 'Submit Request'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}