import { ServiceFaq } from '@/content/types';

export const articleDepth: Record<string, { extraFaqs: ServiceFaq[], whenToCall: string, whatPlumberDoes: string }> = {
  'how-to-unclog-a-drain': {
    extraFaqs: [
      { question: 'Will a plunger work on a shower drain?', answer: 'Yes, but you must tape over the overflow plate first to create a vacuum seal.' }
    ],
    whenToCall: 'Call a professional if the clog doesn\'t clear after plunging or snaking, or if multiple drains in the house are backed up simultaneously, indicating a main line issue.',
    whatPlumberDoes: 'A plumber will use a professional-grade motorized auger (drain snake) to clear deep blockages, and may use a sewer camera to inspect for pipe damage.'
  },
  'when-to-replace-water-heater': {
    extraFaqs: [
      { question: 'Can I just replace the heating element?', answer: 'Yes, if the tank is sound and under 8 years old, replacing a failed element is cost-effective.' }
    ],
    whenToCall: 'Call a plumber immediately if you see water pooling around the base of the tank, as this indicates an unrepairable structural failure.',
    whatPlumberDoes: 'A plumber safely drains the old tank, disconnects gas/electric and water lines, removes the unit, and installs a new heater strictly up to local building codes.'
  },
  'signs-of-slab-leak': {
    extraFaqs: [
      { question: 'Is a slab leak always hot water?', answer: 'No, but hot water leaks are more common due to pipe expansion and contraction wearing down the copper lines.' }
    ],
    whenToCall: 'Contact a plumber at the first sign of unexplained moisture on your floors, a sudden water bill spike, or the sound of running water under the foundation.',
    whatPlumberDoes: 'A plumber uses specialized acoustic listening devices and thermal imaging to pinpoint the exact location of the leak without destroying your floor unnecessarily.'
  },
  'find-water-shutoff-valve': {
    extraFaqs: [
      { question: 'Do I need a special tool to turn off the water at the street?', answer: 'Yes, you typically need a "meter key," a long-handled tool with a slotted end, to easily turn the municipal valve.' }
    ],
    whenToCall: 'Call a plumber if your main shutoff valve is stuck, heavily corroded, or visibly leaking. Do not force it to turn.',
    whatPlumberDoes: 'A plumber will safely shut off the water at the street meter, cut out the old, corroded valve, and solder in a reliable, modern quarter-turn ball valve.'
  },
  'what-to-do-pipe-burst': {
    extraFaqs: [
      { question: 'Should I turn on the heat if a pipe bursts from freezing?', answer: 'Yes, warming up the house helps thaw other frozen lines, but only do this AFTER shutting off the main water valve.' }
    ],
    whenToCall: 'A burst pipe is always an immediate plumbing emergency. Call a 24/7 emergency plumber the moment the water is shut off.',
    whatPlumberDoes: 'The plumber will locate the damaged section, cut out the split pipe, solder in new copper or PEX tubing, and inspect the surrounding pipes for stress fractures.'
  },
  'hard-water-problems': {
    extraFaqs: [
      { question: 'Does hard water ruin clothes?', answer: 'Yes, the minerals can make fabrics feel stiff and cause colors to fade prematurely by trapping dirt in the fibers.' }
    ],
    whenToCall: 'Consult a plumber when you notice persistent white scale on fixtures or a severe drop in hot water pressure, indicating pipe narrowing.',
    whatPlumberDoes: 'A plumber can test your specific water hardness level, descale your water heater, and install a whole-house water softening system.'
  },
  'prevent-frozen-pipes': {
    extraFaqs: [
      { question: 'Can PEX pipes freeze?', answer: 'Yes, PEX pipes can freeze, though they are more flexible than copper and slightly less likely to burst upon freezing.' }
    ],
    whenToCall: 'Call a plumber if your pipes freeze and you cannot locate the frozen section, or if the pipe has already split and is leaking.',
    whatPlumberDoes: 'Plumbers use professional thawing equipment to safely melt ice blockages without damaging the pipes, and can repair any sections that have burst.'
  },
  'when-to-call-plumber': {
    extraFaqs: [
      { question: 'Can I snake my own toilet?', answer: 'You can use a closet auger specifically designed for toilets, but never use a standard sink snake as it will scratch the porcelain and can get stuck.' }
    ],
    whenToCall: 'Call a plumber for any gas line work, main sewer line backups, unexplained low water pressure, or leaks occurring inside walls.',
    whatPlumberDoes: 'Professional plumbers bring specialized diagnostic equipment, code knowledge, and fully stocked trucks to safely repair complex issues that DIYers cannot.'
  },
  'sewer-warning-signs': {
    extraFaqs: [
      { question: 'Does homeowners insurance cover sewer line replacement?', answer: 'Standard policies usually do not cover the pipe itself unless you have a specific sewer and water line endorsement.' }
    ],
    whenToCall: 'Call a plumber immediately if sewage is backing up into your bathtubs or floor drains, or if you smell persistent raw sewage.',
    whatPlumberDoes: 'A plumber will perform a video camera inspection of the main line, clear blockages with a commercial auger, and recommend trenchless or traditional repair if broken.'
  },
  'water-heater-maintenance': {
    extraFaqs: [
      { question: 'How often should I check the TPR valve?', answer: 'You should lift the lever to test the Temperature and Pressure Relief valve every 6 months to ensure it opens and closes freely.' }
    ],
    whenToCall: 'Call a plumber if the TPR valve is leaking continuously, or if the drain valve clogs completely while you are trying to flush the tank.',
    whatPlumberDoes: 'A plumber can perform comprehensive annual maintenance, replace failing anode rods, swap out faulty TPR valves, and inspect gas burners or heating elements.'
  },
  'fix-running-toilet': {
    extraFaqs: [
      { question: 'Why does my toilet randomly run for a few seconds?', answer: 'This is called "phantom flushing," caused by a very slow leak at the flapper. The fill valve briefly turns on to refill the lost water.' }
    ],
    whenToCall: 'Call a plumber if replacing the flapper and fill valve doesn\'t stop the running, or if the toilet is leaking water onto the floor around the base.',
    whatPlumberDoes: 'A plumber will rebuild the entire tank internals, replace a worn flush valve seat, or pull and reset the toilet with a new wax ring if it is leaking at the base.'
  },
  'garbage-disposal-tips': {
    extraFaqs: [
      { question: 'Can I use bleach to clean my garbage disposal?', answer: 'Avoid bleach, as it can harden grease inside the disposal and cause components to rust. Use ice and salt, or vinegar and baking soda instead.' }
    ],
    whenToCall: 'Call a plumber if the motor smells like it\'s burning, if water is leaking from the bottom of the unit, or if the manual unjamming slot won\'t turn.',
    whatPlumberDoes: 'A plumber will safely diagnose electrical or severe mechanical failures, clear deep grease clogs in the drain line, or install a replacement disposal unit.'
  },
  'home-plumbing-system': {
    extraFaqs: [
      { question: 'What is a cleanout?', answer: 'A cleanout is a capped pipe located on your main drain line that provides plumbers easy access to clear severe blockages with an auger.' }
    ],
    whenToCall: 'Call a professional if you experience widespread low water pressure across the house, or persistent slow drainage in all lower-level fixtures.',
    whatPlumberDoes: 'Plumbers can diagnose systemic issues, trace complex venting problems causing bad odors, and identify whether a problem lies in the supply or drainage system.'
  },
  'read-water-meter': {
    extraFaqs: [
      { question: 'How much water does an average home use?', answer: 'The average family of four uses approximately 10,000 to 12,000 gallons of water per month indoors.' }
    ],
    whenToCall: 'Call a leak detection specialist if your meter proves you have a leak, but you cannot find any dripping faucets or running toilets.',
    whatPlumberDoes: 'A plumber uses electronic leak detection equipment, thermal imaging, and pressure testing to locate hidden leaks inside walls or under the concrete slab.'
  },
  'chemical-drain-cleaners': {
    extraFaqs: [
      { question: 'What if I already poured chemical cleaner down the drain?', answer: 'Do not plunge the drain, as chemicals could splash back onto your skin. Wait to see if it clears, and inform your plumber that chemicals are present.' }
    ],
    whenToCall: 'Call a plumber when a drain remains severely clogged or totally blocked, especially if you have an older home with metal pipes.',
    whatPlumberDoes: 'Plumbers use mechanical cabling to physically bore through and extract clogs, or hydro-jetting to safely pressure-wash the inside of the pipes without corrosive acids.'
  },
  'sewer-smell-causes': {
    extraFaqs: [
      { question: 'Can weather affect sewer smells?', answer: 'Yes, changes in barometric pressure or heavy winds can sometimes push sewer gas down the roof vents and into the home temporarily.' }
    ],
    whenToCall: 'Call a plumber immediately if the smell is strong and persistent, if drains are gurgling, or if pouring water in unused traps doesn\'t solve the problem.',
    whatPlumberDoes: 'A plumber conducts a smoke test to visually locate hidden cracks or faulty seals emitting gas, and uses a camera to check the main line for breaks.'
  }
};
