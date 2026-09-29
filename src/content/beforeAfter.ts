import { BeforeAfter } from '@/content/types';

export const beforeAfterPairs: BeforeAfter[] = [
  {
    id: 'ba-drain',
    title: 'Severe Drain Clog Clearing',
    description: 'A kitchen sink line completely blocked by years of grease and food waste buildup. After hydro-jetting, the pipe was restored to its original inner diameter.',
    beforePhoto: '/images/stock-clogged-drain-before.jpg',
    afterPhoto: '/images/stock-clogged-drain-after.jpg',
    beforeAlt: 'Stock example of a severely clogged drain pipe filled with grease',
    afterAlt: 'Stock example of a clean drain pipe after hydro-jetting',
    service: 'drain-cleaning',
    isExample: true
  },
  {
    id: 'ba-repipe',
    title: 'Corroded Pipe Replacement',
    description: 'An old galvanized steel water supply line suffering from severe internal corrosion, causing low water pressure and rust. Replaced with modern, clean copper piping.',
    beforePhoto: '/images/stock-corroded-pipe-before.jpg',
    afterPhoto: '/images/stock-new-pipe-after.jpg',
    beforeAlt: 'Stock example of old, corroded galvanized steel plumbing pipe',
    afterAlt: 'Stock example of brand new, shiny copper plumbing installation',
    service: 'pipe-repair',
    isExample: true
  },
  {
    id: 'ba-waterheater',
    title: 'Water Heater Upgrade',
    description: 'An aging, leaking 15-year-old traditional water heater that had sediment buildup. Replaced with a new, high-efficiency unit installed to modern safety codes.',
    beforePhoto: '/images/stock-old-heater-before.jpg',
    afterPhoto: '/images/stock-new-heater-after.jpg',
    beforeAlt: 'Stock example of a rusty, old leaking water heater tank',
    afterAlt: 'Stock example of a newly installed, energy-efficient water heater',
    service: 'water-heater-installation',
    isExample: true
  }
];
