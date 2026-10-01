import { BeforeAfter } from '@/content/types';

export const beforeAfterPairs: BeforeAfter[] = [
  {
    id: 'ba-drain',
    title: 'Severe Drain & Sewer Hydro-Jetting',
    description: 'A residential drain line completely blocked by grease, scale, and organic buildup. Hydro-jetting cleared the obstruction and restored original diameter and flow.',
    beforePhoto: '/photos/before-drain.jpg',
    afterPhoto: '/photos/after-drain.jpg',
    beforeAlt: 'Camera inspection of clogged drain pipe with heavy grease buildup before cleaning',
    afterAlt: 'Camera inspection of clean restored drain pipe with clear water flow after hydro-jetting',
    service: 'drain-cleaning',
    isExample: false,
  },
  {
    id: 'ba-sink',
    title: 'Kitchen Sink Drain & P-Trap Replacement',
    description: 'Mismatched, leaking corroded kitchen sink drain pipes and P-trap replaced with modern, leak-free PVC piping and disposal assembly.',
    beforePhoto: '/photos/before-sink-drain.jpg',
    afterPhoto: '/photos/after-sink-drain.jpg',
    beforeAlt: 'Leaking corroded kitchen sink drain pipe dripping into bucket before repair',
    afterAlt: 'Brand new white PVC P-trap and copper line plumbing under sink after repair',
    service: 'faucet-repair',
    isExample: false,
  },
  {
    id: 'ba-repipe',
    title: 'Whole-House Copper Repiping & Corrosion Repair',
    description: 'Deteriorating galvanized iron pipes with severe external rust and mineral scale replaced with clean, durable copper plumbing with brass shutoff valves.',
    beforePhoto: '/photos/before-pipe-repipe.jpg',
    afterPhoto: '/photos/after-pipe-repipe.jpg',
    beforeAlt: 'Old corroded rusted galvanized water supply pipes before replacement',
    afterAlt: 'Brand new polished copper water lines and brass valves after whole-house repiping',
    service: 'repiping',
    isExample: false,
  },
];
