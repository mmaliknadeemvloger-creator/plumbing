import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/, 'Must be a valid 10-digit US phone number'),
  zip: z.string().regex(/^\d{5}$/, 'Must be a valid 5-digit ZIP code'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  service: z.string().min(1, 'Service is required'),
  isEmergency: z.boolean(),
  contactMethod: z.enum(['phone', 'text', 'email']),
  notes: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to be contacted' })
  }),
  honeypot: z.string().max(0, 'Spam detected').optional(),
  startedAt: z.number()
});

export type LeadData = z.infer<typeof leadSchema>;
