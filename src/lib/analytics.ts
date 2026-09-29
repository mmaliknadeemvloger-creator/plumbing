export function trackEvent(eventName: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...data
    });
  }
}

export function trackCallClick(source: string) {
  trackEvent('call_click', { source });
}

export function trackEmergencyCall(source: string) {
  trackEvent('emergency_call_click', { source });
}

export function trackFormStart(formId: string) {
  trackEvent('form_start', { form_id: formId });
}

export function trackFormStep(formId: string, stepName: string) {
  trackEvent('form_step', { form_id: formId, step_name: stepName });
}

export function trackFormSubmit(formId: string) {
  trackEvent('form_submit', { form_id: formId });
}

export function trackCtaClick(ctaName: string, destination: string) {
  trackEvent('cta_click', { cta_name: ctaName, destination });
}
