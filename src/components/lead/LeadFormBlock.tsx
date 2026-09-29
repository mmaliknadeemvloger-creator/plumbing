import { LeadForm } from './LeadForm';
import { CheckIcon } from '@/components/icons';
import { BRAND_PROMISE } from '@/content/site';

interface LeadFormBlockProps {
  defaultService?: string;
  defaultZip?: string;
  heading?: string;
}

export function LeadFormBlock({
  defaultService,
  defaultZip,
  heading = 'Request Service',
}: LeadFormBlockProps) {
  return (
    <div className="space-y-4">
      <LeadForm defaultService={defaultService} defaultZip={defaultZip} />
      <ul className="space-y-2">
        {BRAND_PROMISE.map(p => (
          <li key={p} className="flex items-center gap-2 text-sm text-ink/70">
            <CheckIcon className="w-4 h-4 text-sage shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}