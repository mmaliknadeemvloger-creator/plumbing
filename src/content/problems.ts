import { Problem } from '@/content/types';

export const problems: Problem[] = [
  {
    symptom: 'Water dripping from ceiling',
    cause: 'Pipe leak in ceiling or upstairs bathroom',
    serviceSlug: 'leak-detection'
  },
  {
    symptom: 'Drain is slow or clogged',
    cause: 'Buildup of hair, soap, or grease',
    serviceSlug: 'drain-cleaning',
    guideSlug: 'how-to-unclog-a-drain'
  },
  {
    symptom: 'No hot water',
    cause: 'Water heater failure or broken element',
    serviceSlug: 'water-heater-repair'
  },
  {
    symptom: 'Toilet won\'t stop running',
    cause: 'Worn flapper or faulty fill valve',
    serviceSlug: 'toilet-repair',
    guideSlug: 'fix-running-toilet'
  },
  {
    symptom: 'Sewage smell in the yard',
    cause: 'Broken main sewer line',
    serviceSlug: 'sewer-line-repair',
    guideSlug: 'sewer-warning-signs'
  },
  {
    symptom: 'Water pooling around water heater',
    cause: 'Leaking tank or faulty TPR valve',
    serviceSlug: 'water-heater-repair',
    guideSlug: 'when-to-replace-water-heater'
  },
  {
    symptom: 'Multiple drains backing up',
    cause: 'Main sewer line blockage',
    serviceSlug: 'drain-cleaning',
    guideSlug: 'sewer-warning-signs'
  },
  {
    symptom: 'Garbage disposal humming but not spinning',
    cause: 'Jammed impeller blades',
    serviceSlug: 'garbage-disposal',
    guideSlug: 'garbage-disposal-tips'
  },

  {
    symptom: 'Unexplained high water bill',
    cause: 'Hidden leak, usually slab or toilet',
    serviceSlug: 'leak-detection',
    guideSlug: 'read-water-meter'
  },
  {
    symptom: 'Low water pressure throughout house',
    cause: 'Failing PRV or corroded main lines',
    serviceSlug: 'pipe-repair'
  },
  {
    symptom: 'Gurgling sound from toilet',
    cause: 'Blocked vent pipe or main line clog',
    serviceSlug: 'drain-cleaning'
  },
  {
    symptom: 'Warm spot on the floor',
    cause: 'Hot water slab leak',
    serviceSlug: 'slab-leak-repair',
    guideSlug: 'signs-of-slab-leak'
  },
  {
    symptom: 'Foul smell from sinks',
    cause: 'Dry P-trap or blocked vent',
    serviceSlug: 'leak-detection',
    guideSlug: 'sewer-smell-causes'
  },
  {
    symptom: 'Discolored or rusty water',
    cause: 'Corroding pipes or rusting water heater',
    serviceSlug: 'water-heater-repair'
  },
  {
    symptom: 'Water spraying from pipe',
    cause: 'Burst pipe',
    serviceSlug: 'pipe-repair',
    guideSlug: 'what-to-do-pipe-burst'
  },
  {
    symptom: 'White scale on faucets',
    cause: 'Hard water minerals',
    serviceSlug: 'water-softener',
    guideSlug: 'hard-water-problems'
  }
];
