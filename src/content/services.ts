import { ServiceCategory, Service } from '@/content/types';

export const categories: ServiceCategory[] = [
  { slug: 'drain-cleaning', name: 'Drain Cleaning', description: 'Clear stubborn clogs and restore flow to your drains.' },
  { slug: 'sewer', name: 'Sewer Services', description: 'Complete sewer line inspection, repair, and replacement.' },
  { slug: 'water-heaters', name: 'Water Heaters', description: 'Installation, repair, and maintenance for tank and tankless heaters.' },
  { slug: 'leak-detection', name: 'Leak Detection & Repair', description: 'Pinpoint and fix hidden leaks before they cause major damage.' },
  { slug: 'water-lines', name: 'Water Lines', description: 'Main water line repairs and full-house repiping solutions.' },
  { slug: 'fixtures', name: 'Fixtures', description: 'Repair and installation for faucets, toilets, sinks, and showers.' },
  { slug: 'gas-lines', name: 'Gas Lines', description: 'Safe gas line repair, leak detection, and new installations.' },
  { slug: 'garbage-disposals', name: 'Garbage Disposals', description: 'Fix jams, leaks, or install a powerful new disposal unit.' },
  { slug: 'water-treatment', name: 'Water Treatment', description: 'Softeners and filtration systems for clean, healthy water.' },
  { slug: 'outdoor', name: 'Outdoor Plumbing', description: 'Hose bibs, outdoor faucets, and irrigation line repairs.' }
];

export const services: Service[] = [
  {
    slug: 'drain-cleaning',
    category: 'drain-cleaning',
    name: 'Drain Cleaning',
    status: 'PUBLISHED',
    seoTitle: 'Professional Drain Cleaning Services | Elite Plumbing & Drain',
    metaDescription: 'Expert drain cleaning to clear stubborn clogs safely and restore flow. Stop dealing with backed up sinks and tubs. Available for fast, reliable service.',
    h1: 'Professional Drain Cleaning Services',
    answer: 'Drain cleaning involves using specialized tools like motorized augers and hydro jetters to break down blockages in your plumbing system. Unlike liquid chemical cleaners that can damage pipes, professional methods physically remove the obstruction to restore full flow.',
    intro: [
      'A clogged drain is more than just a nuisance; it can cause wastewater to back up into your home, leading to unsanitary conditions and potential water damage. The plumbing network in your home relies on gravity and clear pathways. Over time, hair, grease, soap scum, and mineral deposits cling to pipe walls, narrowing the diameter until a complete blockage forms. When this happens, typical plunging or over-the-counter chemicals rarely solve the root cause, often just melting a small hole through the sludge that quickly closes back up.',
      'Professional drain cleaning addresses the actual buildup. Using high-grade steel cables (plumber\'s snakes) equipped with various cutting heads, technicians can scrape the walls of your pipes clean. For heavy grease or severe scaling, hydro jetting uses highly pressurized water to scrub the line back to its original capacity. This approach ensures your drains stay clear longer and protects the structural integrity of your plumbing system.'
    ],
    signs: [
      'Water pooling around shower drains or sinking slowly in basins.',
      'Gurgling sounds coming from fixtures when water is running elsewhere.',
      'Foul, sewage-like odors emanating from kitchen or bathroom drains.',
      'Multiple fixtures backing up simultaneously, indicating a mainline issue.',
      'Frequent need to plunge toilets or sinks to maintain normal flow.'
    ],
    process: [
      { step: 1, title: 'Video Inspection', description: 'A waterproof camera is often run down the line to identify the exact location and composition of the clog.' },
      { step: 2, title: 'Mechanical Snaking', description: 'A motorized auger with an appropriately sized blade cuts through standard blockages like hair and paper.' },
      { step: 3, title: 'Hydro Jetting (If Needed)', description: 'For stubborn grease or heavy buildup, high-pressure water streams scour the pipe walls completely clean.' },
      { step: 4, title: 'Flow Testing', description: 'Water is run continuously to ensure the line handles maximum capacity without backing up.' }
    ],
    costFactors: [
      'Location of the clog (branch line vs. main sewer line).',
      'The severity and material of the blockage (hair vs. tree roots).',
      'Accessibility to the necessary cleanout points.',
      'Whether specialized equipment like a hydro jetter or camera is required.',
      'Time required to fully clear and test the line.'
    ],
    diy: {
      safe: [
        'Using a standard cup plunger on sinks and tubs.',
        'Using a flange plunger on toilets.',
        'Pouring boiling water down kitchen sinks (unless you have PVC pipes).',
        'Cleaning out the p-trap under the sink by hand.'
      ],
      stop: [
        'Pouring acidic chemical drain cleaners, which corrode pipes and are dangerous to handle.',
        'Jamming sharp objects like coat hangers deep into drains, risking pipe puncture.',
        'Dismantling pipes inside walls or under slabs without proper tools.'
      ]
    },
    faqs: [
      { question: 'Why do my drains keep clogging?', answer: 'Recurring clogs usually mean the pipe walls are coated in sticky buildup like grease or soap scum, or there is an object lodged in the line. A professional cleaning removes the entire blockage rather than just poking a hole through it.' },
      { question: 'Are chemical drain cleaners safe to use?', answer: 'No, chemical drain cleaners rely on caustic reactions that generate intense heat, which can warp PVC pipes and corrode older metal lines. They also make the repair much more dangerous for the plumber who eventually has to open the trap.' },
      { question: 'How often should I have my drains cleaned?', answer: 'For most households, professional cleaning is only needed when issues arise, but preventative hydro jetting every 2-3 years is recommended for older homes with cast iron pipes or recurring root intrusions.' }
    ],
    related: ['hydro-jetting', 'slow-drain-repair', 'sewer-camera-inspection'],
    isEmergencyCapable: true
  },
  {
    slug: 'hydro-jetting',
    category: 'drain-cleaning',
    name: 'Hydro Jetting',
    status: 'PUBLISHED',
    seoTitle: 'Hydro Jetting Services | High Pressure Pipe Cleaning | Elite Plumbing & Drain',
    metaDescription: 'Hydro jetting clears severe blockages and heavy buildup using high-pressure water. Get your pipes flowing like new. Schedule expert service today.',
    h1: 'High-Pressure Hydro Jetting Services',
    answer: 'Hydro jetting is an advanced pipe-cleaning method that uses highly pressurized water (up to 4,000 PSI) to scour the interior walls of your plumbing. It effectively removes heavy grease, mineral scaling, and tree roots that standard snaking cannot handle.',
    intro: [
      'While a traditional plumber\'s snake is excellent for punching through solid clogs, it often leaves behind sticky residues on the pipe walls. In high-use lines, especially kitchen sinks dealing with grease or main sewer lines plagued by mineral buildup and sludge, this residue quickly catches new debris, leading to another clog. Hydro jetting solves this by acting like a pressure washer for the inside of your pipes.',
      'The hydro jetting process involves inserting a specialized nozzle into the cleanout. This nozzle sprays jets of water forward to break up the blockage and backward to propel the hose and wash the debris down the line. The result is a pipe that is restored to its original interior diameter, providing a long-term solution for homes experiencing chronic drainage issues.'
    ],
    signs: [
      'Grease or sludge backing up into kitchen sinks or floor drains.',
      'Recurring clogs in the same line despite recent snaking.',
      'Older cast iron pipes that suffer from heavy mineral scaling and reduced flow.',
      'Foul odors indicating rotting organic matter stuck to pipe walls.',
      'Slow draining across multiple fixtures indicating a mainline restriction.'
    ],
    process: [
      { step: 1, title: 'Camera Inspection', description: 'The line must first be inspected with a camera to ensure the pipe structure is sound enough to withstand high pressure.' },
      { step: 2, title: 'Jetting Setup', description: 'The technician selects the proper nozzle head (e.g., cutting nozzle for roots, flushing nozzle for grease) and calibrates the pressure.' },
      { step: 3, title: 'High-Pressure Scouring', description: 'The hose is fed through the line, blasting away all buildup and flushing the debris into the municipal sewer.' },
      { step: 4, title: 'Final Inspection', description: 'A second camera run verifies that the pipe walls are completely clean and free of obstructions.' }
    ],
    costFactors: [
      'The length of the pipe that needs to be jetted.',
      'The severity of the buildup (grease vs. thick tree roots).',
      'The accessibility of the main cleanout.',
      'Whether a camera inspection reveals underlying structural damage requiring repair.',
      'The specific equipment needed for residential vs. commercial lines.'
    ],
    diy: {
      safe: [
        'Flushing drains with hot water periodically to reduce minor grease buildup.',
        'Using mesh strainers to catch food and debris before it enters the line.'
      ],
      stop: [
        'Attempting to use consumer pressure washers in plumbing lines, which can cause severe water damage and pipe bursting.',
        'Jetting lines without a camera inspection first, as pressurized water will destroy already compromised or cracked pipes.'
      ]
    },
    faqs: [
      { question: 'Is hydro jetting safe for all pipes?', answer: 'Hydro jetting is safe for most pipes in good condition, including PVC and copper. However, it is not recommended for severely degraded clay or cast iron pipes, which is why a camera inspection is always performed first.' },
      { question: 'How is hydro jetting different from snaking?', answer: 'Snaking simply bores a hole through the immediate clog to restore flow, while hydro jetting cleans the entire interior circumference of the pipe, removing the sticky buildup that causes recurring issues.' },
      { question: 'Will hydro jetting remove tree roots?', answer: 'Yes, hydro jetting equipped with specialized cutting nozzles can easily slice through and flush away tree roots that have infiltrated the sewer line.' }
    ],
    related: ['drain-cleaning', 'sewer-camera-inspection', 'sewer-line-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'slow-drain-repair',
    category: 'drain-cleaning',
    name: 'Slow Drain Repair',
    status: 'PUBLISHED',
    seoTitle: 'Slow Drain Repair Services | Stop Sluggish Sinks | Elite Plumbing & Drain',
    metaDescription: 'Fix slow-draining sinks, tubs, and showers before they become complete blockages. Expert diagnosis and fast, reliable drain clearing.',
    h1: 'Slow Drain Repair & Clearing',
    answer: 'Slow drain repair involves diagnosing and clearing partial blockages that restrict water flow without stopping it entirely. Addressing a slow drain early prevents the buildup from hardening into a complete, messy clog that causes backups.',
    intro: [
      'A sink or tub that takes minutes to drain instead of seconds is the first warning sign of an impending plumbing failure. Slow drains occur when debris like hair, soap scum, toothpaste, and grease begin coating the inside of the pipe. This restricts the diameter of the line, slowing down water flow. Because the pipe isn\'t completely blocked yet, many homeowners ignore the issue, but this sticky residue acts as a magnet for more debris.',
      'Repairing a slow drain requires more than just plunging. Plunging only shifts the partial blockage. A professional will dismantle the p-trap to clear localized clogs or use a mechanical auger to reach deeper into the branch lines. By thoroughly clearing the restriction now, you avoid the much higher cost and inconvenience of a sudden emergency backup.'
    ],
    signs: [
      'Water pooling around your feet during a short shower.',
      'Bathroom sinks taking several minutes to empty after brushing teeth.',
      'Bubbling or gurgling sounds as the last bit of water finally goes down.',
      'A foul smell coming from the drain due to trapped, decaying organic matter.',
      'Drainage speed steadily decreasing over weeks or months.'
    ],
    process: [
      { step: 1, title: 'Fixture Assessment', description: 'Testing the drain speed and checking related fixtures to determine if the issue is localized or part of a larger line restriction.' },
      { step: 2, title: 'Trap Cleaning', description: 'Removing and manually cleaning the p-trap beneath the sink or tub to remove immediate hair and soap clogs.' },
      { step: 3, title: 'Line Cabling', description: 'Running a small motorized cable through the branch line to catch and pull out debris further down the pipe.' },
      { step: 4, title: 'System Flush', description: 'Running high-volume hot water through the cleared pipe to wash away any remaining loosened debris.' }
    ],
    costFactors: [
      'Whether the restriction is in the easily accessible p-trap or deeper in the wall.',
      'The number of slow drains that need attention.',
      'The type of fixture (tubs can be harder to access than sinks).',
      'The condition of old pipes, which might require delicate handling or replacement parts.'
    ],
    diy: {
      safe: [
        'Using a zip-it tool (plastic barbed strip) to pull hair out of shower drains.',
        'Removing the sink pop-up stopper to clean out accumulated gunk.',
        'Placing a bucket under the p-trap and unscrewing it to clear it manually.'
      ],
      stop: [
        'Pouring heavy chemical cleaners down slow drains; they will sit in the restricted pipe and corrode the metal.',
        'Forcing large objects down the drain in an attempt to push the clog through.'
      ]
    },
    faqs: [
      { question: 'Why is my bathroom sink draining so slowly?', answer: 'Bathroom sinks are notorious for slow drains due to the combination of hair, sticky toothpaste, and soap scum that catches on the pop-up stopper mechanism and builds up in the trap.' },
      { question: 'Can I just use boiling water to fix a slow drain?', answer: 'Boiling water can help melt very minor soap or grease buildup, but it will not dissolve hair or solid objects. Never use boiling water if you have PVC pipes, as the extreme heat can warp or crack them.' },
      { question: 'Does a slow drain always mean a clog?', answer: 'Usually yes, but a slow drain can also be caused by a blocked plumbing vent on your roof. If air cannot enter the vent to equalize pressure, the water will drain very sluggishly and gurgle.' }
    ],
    related: ['drain-cleaning', 'hydro-jetting', 'pipe-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'sewer-line-repair',
    category: 'sewer',
    name: 'Sewer Line Repair',
    status: 'PUBLISHED',
    seoTitle: 'Expert Sewer Line Repair | Fix Broken Mains | Elite Plumbing & Drain',
    metaDescription: 'Reliable sewer line repair to fix cracks, root intrusions, and collapses. Fast diagnosis and effective solutions to restore your main sewer system.',
    h1: 'Expert Sewer Line Repair',
    answer: 'Sewer line repair fixes damaged, cracked, or blocked main sewer pipes that carry wastewater from your home to the municipal system. Using advanced diagnostics and trenchless or traditional excavation, plumbers can seal leaks, remove roots, and restore the pipe\'s structural integrity.',
    intro: [
      'The main sewer line is the critical exit route for all wastewater in your home. When it becomes compromised by tree root intrusion, shifting soil, age-related deterioration, or severe blockages, the result is often a messy and hazardous backup. Because these lines run underground, issues can develop unnoticed for years until a major failure occurs, making prompt and accurate repair essential.',
      'Modern sewer line repair doesn\'t always mean tearing up your entire yard. Depending on the extent of the damage, options range from targeted point repairs and pipe lining (cured-in-place pipe) to traditional open-trench repairs for collapsed sections. A proper fix addresses the root cause—such as sealing joints against future root growth—ensuring long-lasting reliable drainage.'
    ],
    signs: [
      'Sewage backups occurring in multiple low-lying drains, like floor drains or tubs.',
      'Unusually lush, green patches of grass in your yard where a leak is fertilizing the soil.',
      'Persistent foul odors of sewage in your basement or yard.',
      'Slow draining across the entire house that does not improve after standard snaking.',
      'Sinkholes or indentations developing in the lawn above the sewer line path.'
    ],
    process: [
      { step: 1, title: 'Camera Inspection', description: 'A fiber-optic camera is fed into the line to pinpoint the exact location and nature of the damage.' },
      { step: 2, title: 'Line Locating', description: 'Using specialized equipment, the plumber marks the exact path and depth of the damaged pipe above ground.' },
      { step: 3, title: 'Excavation or Trenchless Prep', description: 'The affected area is exposed via targeted digging, or access pits are created for trenchless lining.' },
      { step: 4, title: 'Repair and Testing', description: 'The damaged section is replaced or lined with epoxy. The system is then flow-tested to ensure perfect operation before backfilling.' }
    ],
    costFactors: [
      'The depth of the sewer line (deeper lines require more excavation and shoring).',
      'The length of the pipe that needs to be repaired.',
      'The repair method used (trenchless lining vs. open excavation).',
      'Obstacles above the pipe, such as driveways, large trees, or patios.',
      'Permit fees and municipal requirements for right-of-way repairs.'
    ],
    diy: {
      safe: [
        'Knowing the location of your main sewer cleanout for quick access in an emergency.',
        'Stopping all water usage immediately if a mainline backup is suspected.'
      ],
      stop: [
        'Attempting to dig up and repair the sewer line yourself; this requires heavy machinery, proper slope grading, and permits.',
        'Pouring extreme amounts of root-killing chemicals, which can destroy the remaining pipe structure and harm the environment.'
      ]
    },
    faqs: [
      { question: 'What causes a sewer line to break?', answer: 'The most common causes are tree root intrusion breaking through joints, the natural settling and shifting of the ground causing the pipe to belly or crack, and the deterioration of older materials like clay or cast iron.' },
      { question: 'How do you fix a sewer line without digging up the whole yard?', answer: 'Trenchless repair methods, such as pipe lining or pipe bursting, require only small access holes. A flexible, epoxy-saturated liner is pulled through the old pipe and cured in place, creating a new, seamless pipe inside the old one.' },
      { question: 'Is a sewer backup dangerous?', answer: 'Yes, raw sewage contains harmful bacteria, viruses, and gases. If your sewer backs up into your home, it poses a significant health hazard and requires professional remediation along with the plumbing repair.' }
    ],
    related: ['sewer-line-replacement', 'sewer-camera-inspection', 'hydro-jetting'],
    isEmergencyCapable: true
  },
  {
    slug: 'sewer-camera-inspection',
    category: 'sewer',
    name: 'Sewer Camera Inspection',
    status: 'PUBLISHED',
    seoTitle: 'Sewer Camera Inspection Services | Video Pipe Locating | Elite Plumbing & Drain',
    metaDescription: 'Take the guesswork out of plumbing problems with our high-res sewer camera inspections. We locate roots, cracks, and clogs deep underground accurately.',
    h1: 'Professional Sewer Camera Inspection',
    answer: 'A sewer camera inspection uses a flexible fiber-optic cable with a high-resolution camera to visually examine the interior of your underground sewer lines in real-time. This eliminates guesswork, allowing plumbers to pinpoint the exact location and cause of blockages or pipe damage.',
    intro: [
      'When your main sewer line experiences problems, the source is buried beneath dirt, concrete, or your home\'s foundation. In the past, diagnosing these issues often required exploratory digging, which was destructive and expensive. Today, a sewer camera inspection is the gold standard for plumbing diagnostics, providing crystal-clear video evidence of the pipe\'s condition.',
      'During the inspection, the technician pushes the camera through the cleanout and down the line. The camera is equipped with bright LED lights and a radio transmitter. If a cracked pipe, severe root intrusion, or collapsed section is found, the technician can use a locating wand above ground to find the exact depth and spot of the problem. This ensures that any subsequent repairs are highly targeted, saving you time, money, and unnecessary yard damage.'
    ],
    signs: [
      'You are buying a new home and want to ensure you aren\'t inheriting a failing sewer system.',
      'You have experienced repeated backups despite having the line snaked recently.',
      'You suspect tree roots have infiltrated the line due to large trees near the pipe path.',
      'There is unexplained foul sewage odor in the yard or basement.',
      'You need to locate the exact path of your sewer line before beginning major landscaping or construction.'
    ],
    process: [
      { step: 1, title: 'Accessing the Line', description: 'The technician locates and opens the main sewer cleanout, usually found in the yard or basement.' },
      { step: 2, title: 'Camera Insertion', description: 'The rugged camera is fed into the pipe, transmitting real-time video to a monitor.' },
      { step: 3, title: 'Issue Identification', description: 'The plumber carefully watches the feed, noting any cracks, bellies (sags), root intrusions, or heavy scale buildup.' },
      { step: 4, title: 'Locating and Marking', description: 'When a defect is found, a surface locator is used to mark the exact spot and depth on your lawn or driveway.' }
    ],
    costFactors: [
      'The length of the line that needs to be inspected.',
      'The accessibility of the cleanout (if a toilet must be pulled to gain access, costs increase).',
      'Whether the line needs to be hydro-jetted first because it is too full of sludge to see clearly.',
      'Whether a recording of the inspection is requested for insurance or real estate purposes.'
    ],
    diy: {
      safe: [
        'Ensuring the cleanout cap in your yard is visible and not buried under mulch or landscaping.'
      ],
      stop: [
        'Renting low-quality consumer inspection cameras; they often lack the lighting, distance, and locating capabilities needed for a proper diagnosis.'
      ]
    },
    faqs: [
      { question: 'Can a camera inspection see leaks?', answer: 'A camera inspection can easily spot cracks, broken joints, and collapsed sections where water is escaping. However, it cannot physically "see" water leaking out into the soil, only the structural defects causing it.' },
      { question: 'Should I get a camera inspection before buying a house?', answer: 'Absolutely. A standard home inspection rarely covers the interior of underground sewer lines. A sewer camera inspection can save you from a massive, unexpected repair bill right after moving in.' },
      { question: 'How long does a sewer inspection take?', answer: 'A typical residential camera inspection takes between 30 to 60 minutes, depending on the accessibility of the cleanout and the length of the line.' }
    ],
    related: ['sewer-line-repair', 'sewer-line-replacement', 'hydro-jetting'],
    isEmergencyCapable: false
  },
  {
    slug: 'sewer-line-replacement',
    category: 'sewer',
    name: 'Sewer Line Replacement',
    status: 'PUBLISHED',
    seoTitle: 'Full Sewer Line Replacement | Trench & Trenchless | Elite Plumbing & Drain',
    metaDescription: 'Complete sewer line replacement for severely damaged or collapsed pipes. We offer durable, long-lasting solutions using modern trenchless or excavation methods.',
    h1: 'Complete Sewer Line Replacement',
    answer: 'Sewer line replacement is the process of completely removing or bypassing an old, failed sewer pipe and installing a new one. This is necessary when a pipe is fully collapsed, severely deteriorated, or made of obsolete materials that can no longer be repaired.',
    intro: [
      'No homeowner wants to hear that their main sewer line needs to be completely replaced. However, when pipes made of older materials like clay, cast iron, or Orangeburg reach the end of their lifespan, patching them is no longer viable. Severe ground shifting, total structural collapse, or massive root webs that have crushed the line require a full system replacement to restore safety and sanitation to your home.',
      'The replacement process has evolved significantly. While traditional open-trench excavation is still used (and sometimes required for severely sloped or collapsed lines), trenchless technologies like pipe bursting can often replace the entire line with minimal digging. By pulling a seamless, high-density polyethylene (HDPE) pipe through the old line, we can provide a durable, root-resistant sewer system designed to last for decades.'
    ],
    signs: [
      'The pipe has completely collapsed and a camera cannot pass through.',
      'Your home has Orangeburg or deeply corroded cast iron pipes that are actively failing.',
      'Repairs have become a frequent, recurring expense that outweighs the cost of replacement.',
      'Massive tree root intrusion has shattered the existing pipe beyond repair.',
      'The pipe has a severe "belly" or sag that causes constant standing water and blockages.'
    ],
    process: [
      { step: 1, title: 'Comprehensive Inspection', description: 'A final camera inspection and precise locating are performed to map the exact path and depth of the existing line.' },
      { step: 2, title: 'Method Selection', description: 'Based on the pipe\'s condition and surrounding landscape, the best method (trenchless vs. excavation) is determined.' },
      { step: 3, title: 'Excavation or Bursting', description: 'Trenches are dug, or access pits are created to pull the new bursting head and HDPE pipe through the old line.' },
      { step: 4, title: 'Connection and Backfilling', description: 'The new line is connected to the city main and the house, inspected by the city, and the ground is restored.' }
    ],
    costFactors: [
      'The replacement method chosen (trenchless pipe bursting often saves landscaping costs but requires specific equipment).',
      'The total linear footage of the new pipe required.',
      'Depth of the line, as deeper pipes require significant trench shoring and safety equipment.',
      'Obstacles like driveways, retaining walls, or large trees in the path of the replacement.',
      'City permits and the cost of tapping into the municipal main.'
    ],
    diy: {
      safe: [
        'Reviewing multiple replacement options (trenchless vs. traditional) with your plumber.',
        'Preparing the yard by moving movable landscaping elements before the crew arrives.'
      ],
      stop: [
        'Attempting any part of a main sewer replacement yourself. This requires heavy machinery, specialized training, and strict adherence to municipal codes.'
      ]
    },
    faqs: [
      { question: 'How long does a sewer line replacement take?', answer: 'Most residential sewer line replacements can be completed in 1 to 3 days, depending on the length of the line, the method used, and whether extensive excavation is required.' },
      { question: 'What is pipe bursting?', answer: 'Pipe bursting is a trenchless method where a cone-shaped tool is pulled through the old pipe, shattering it outward, while simultaneously dragging a brand-new, seamless pipe into place behind it.' },
      { question: 'Will replacing my sewer line destroy my yard?', answer: 'If traditional excavation is required, there will be a trench dug. However, if your line is a candidate for trenchless replacement, we only need to dig two small access holes, leaving the rest of your lawn and driveway intact.' }
    ],
    related: ['sewer-line-repair', 'sewer-camera-inspection', 'hydro-jetting'],
    isEmergencyCapable: true
  },
  {
    slug: 'water-heater-repair',
    category: 'water-heaters',
    name: 'Water Heater Repair',
    status: 'PUBLISHED',
    seoTitle: 'Fast Water Heater Repair | Gas & Electric | Elite Plumbing & Drain',
    metaDescription: 'No hot water? We repair all makes and models of gas, electric, and tankless water heaters. Fast response to restore your comfort.',
    h1: 'Reliable Water Heater Repair Services',
    answer: 'Water heater repair involves diagnosing and fixing components like heating elements, thermostats, gas valves, or thermocouples to restore your home\'s hot water supply safely and efficiently.',
    intro: [
      'Waking up to an icy shower is a harsh reminder of how much we rely on our water heaters. These hardworking appliances operate quietly in the background, but over time, components wear out, sediment builds up, and efficiency drops. Whether you have a standard electric tank, a gas-fired model, or a modern tankless unit, prompt repair is crucial to prevent further damage or potential leaks.',
      'Many common water heater issues can be fixed without needing a full replacement. A failing heating element, a burnt-out thermostat, or a dirty flame sensor are all straightforward repairs for an experienced professional. By addressing odd noises, fluctuating temperatures, or minor leaks early, you can significantly extend the lifespan of your unit and improve your energy efficiency.'
    ],
    signs: [
      'Completely running out of hot water or water taking much longer to heat up.',
      'Popping, rumbling, or banging noises coming from inside the tank.',
      'Water that looks rusty, muddy, or smells like sulfur (rotten eggs).',
      'Small puddles of water pooling around the base of the heater.',
      'The pilot light on a gas water heater repeatedly goes out.'
    ],
    process: [
      { step: 1, title: 'Diagnostic Testing', description: 'Testing electrical continuity, gas pressure, and thermostat function to isolate the faulty component.' },
      { step: 2, title: 'System Drain (If Necessary)', description: 'If the repair involves replacing an element or flushing sediment, the tank is safely drained.' },
      { step: 3, title: 'Component Replacement', description: 'The broken part—such as a thermocouple, element, or relief valve—is swapped for a high-quality replacement.' },
      { step: 4, title: 'Reheating and Calibration', description: 'The unit is turned back on, checked for leaks, and the thermostat is set to a safe, efficient temperature (usually 120°F).' }
    ],
    costFactors: [
      'The type of water heater (gas, electric, or tankless).',
      'The specific part that has failed (a thermocouple is inexpensive; a gas control valve costs more).',
      'The age of the unit, which can make sourcing specific parts more difficult.',
      'Whether heavy sediment buildup requires extensive flushing and cleaning.'
    ],
    diy: {
      safe: [
        'Checking the circuit breaker to ensure an electric heater hasn\'t simply tripped.',
        'Adjusting the temperature dial slightly to see if the thermostat responds.',
        'Relighting the pilot light on a gas heater following the manufacturer\'s instructions.'
      ],
      stop: [
        'Opening electrical panels on the water heater while the power is live (240V is extremely dangerous).',
        'Tampering with gas lines or the gas control valve, which risks a dangerous gas leak.',
        'Plugging a leaking Temperature and Pressure (T&P) relief valve, which can cause the tank to explode.'
      ]
    },
    faqs: [
      { question: 'Why is my water heater making a popping sound?', answer: 'The popping or rumbling sound is caused by water trapped under a layer of mineral sediment at the bottom of the tank. As the water heats and turns to steam, it bursts through the sediment layer. The tank needs to be flushed.' },
      { question: 'Is it worth repairing an older water heater?', answer: 'If your tank water heater is over 10-12 years old and begins requiring major repairs or is leaking from the tank itself, it is usually more cost-effective to replace it. Minor part failures on newer units are absolutely worth repairing.' },
      { question: 'Why does my hot water run out so quickly?', answer: 'In an electric heater, this often means the lower heating element has failed. In a gas heater, it could be a broken dip tube that is allowing cold incoming water to mix directly with the hot water at the top of the tank.' }
    ],
    related: ['water-heater-installation', 'tankless-water-heater', 'leak-detection'],
    isEmergencyCapable: true
  },
  {
    slug: 'water-heater-installation',
    category: 'water-heaters',
    name: 'Water Heater Installation',
    status: 'PUBLISHED',
    seoTitle: 'Professional Water Heater Installation & Replacement | Elite Plumbing & Drain',
    metaDescription: 'Upgrade to a high-efficiency water heater. We offer expert installation of gas, electric, and hybrid water heaters. Get a unit sized perfectly for your home.',
    h1: 'Expert Water Heater Installation & Replacement',
    answer: 'Water heater installation involves safely removing your old unit and properly connecting a new, energy-efficient model to your home\'s plumbing, gas or electrical, and venting systems, ensuring compliance with all local building codes.',
    intro: [
      'When a water heater begins leaking from the tank itself, or becomes too old and inefficient to warrant repair, it\'s time for a replacement. A new water heater is a major investment in your home\'s comfort. Choosing the right unit—whether it\'s a standard electric tank, a high-recovery gas model, or a heat pump hybrid—requires matching the unit\'s capacity to your family\'s daily hot water demands.',
      'Proper installation is just as important as the quality of the heater itself. A poor installation can lead to severe water damage, carbon monoxide leaks, or premature appliance failure. Professional installation guarantees that the unit is perfectly leveled, the gas lines are pressure-tested, the venting drafts correctly, and safety features like expansion tanks and drain pans are properly integrated to protect your home.'
    ],
    signs: [
      'The existing water heater is over 10-15 years old and struggling to maintain temperature.',
      'Water is actively leaking from the structural seams of the metal tank.',
      'You are remodeling your home or adding a bathroom, requiring higher hot water capacity.',
      'Your energy bills have spiked, and you want to upgrade to a high-efficiency model.',
      'The tank is heavily corroded or shows deep external rust spots.'
    ],
    process: [
      { step: 1, title: 'Sizing and Selection', description: 'We evaluate your household\'s peak hot water usage to recommend the perfect tank size and recovery rate.' },
      { step: 2, title: 'Safe Removal', description: 'The old unit is drained, disconnected from power/gas, and hauled away for proper recycling.' },
      { step: 3, title: 'Installation and Upgrades', description: 'The new unit is set in place. Code-required upgrades like expansion tanks, new shutoff valves, or proper venting are installed.' },
      { step: 4, title: 'Testing and Tuning', description: 'The system is filled, fired up, and tested for leaks, proper draft, and safe temperature output.' }
    ],
    costFactors: [
      'The size (gallon capacity) and fuel type (gas vs. electric) of the new unit.',
      'The energy efficiency rating (hybrid heat pump heaters cost more upfront but save money long-term).',
      'Necessary code upgrades required by the city, such as installing a thermal expansion tank or modifying exhaust vents.',
      'Accessibility of the installation location (attics or tight crawlspaces require more labor).'
    ],
    diy: {
      safe: [
        'Clearing a wide, unobstructed path for the installers to remove the old tank and bring in the new one.',
        'Researching the energy ratings of different models before making a decision.'
      ],
      stop: [
        'Attempting to install a gas water heater yourself; improper venting can lead to fatal carbon monoxide poisoning.',
        'Wiring a 240V electric water heater without extensive electrical experience.'
      ]
    },
    faqs: [
      { question: 'How long does a water heater last?', answer: 'A standard tank water heater typically lasts between 8 to 12 years, depending on the water quality in your area and whether the unit received regular maintenance like flushing.' },
      { question: 'What is a thermal expansion tank and do I need one?', answer: 'An expansion tank absorbs the excess pressure created when water is heated and expands. Most modern municipal building codes now require them to prevent excess stress on your plumbing system.' },
      { question: 'Should I switch from electric to gas?', answer: 'Gas water heaters generally have a faster recovery rate and cost less to operate. However, switching requires installing a new gas line and proper roof venting, which adds to the initial installation cost.' }
    ],
    related: ['water-heater-repair', 'tankless-water-heater', 'gas-line-installation'],
    isEmergencyCapable: true
  },
  {
    slug: 'tankless-water-heater',
    category: 'water-heaters',
    name: 'Tankless Water Heater',
    status: 'PUBLISHED',
    seoTitle: 'Tankless Water Heater Installation & Repair | Elite Plumbing & Drain',
    metaDescription: 'Enjoy endless hot water with a tankless water heater. We install, repair, and maintain high-efficiency on-demand water heating systems.',
    h1: 'Tankless Water Heater Services',
    answer: 'Tankless water heaters, also known as on-demand heaters, flash-heat water only when you turn on the tap, providing a continuous supply of hot water without the energy waste of keeping a large holding tank continuously heated.',
    intro: [
      'The days of rushing through a shower before the hot water runs out are over. Tankless water heaters have revolutionized home comfort by providing an endless supply of hot water. Instead of storing 50 gallons of water and keeping it hot 24/7, a tankless unit uses powerful gas burners or electric elements to instantly heat water as it flows through the heat exchanger. This on-demand approach dramatically reduces standby energy loss, lowering your monthly utility bills.',
      'Beyond efficiency and endless capacity, tankless units offer a significant space-saving advantage. These compact units mount neatly on a wall, freeing up valuable floor space in your garage, basement, or utility closet. With a lifespan of 15 to 20 years—nearly double that of traditional tanks—upgrading to a tankless system is a smart, long-term investment in your home. We provide comprehensive installation, descaling, and repair services for all major tankless brands.'
    ],
    signs: [
      'Your large family frequently runs out of hot water during back-to-back showers.',
      'You are looking to reduce your home\'s energy consumption and lower gas bills.',
      'You want to reclaim floor space currently taken up by a bulky tank heater.',
      'Your current tankless unit is flashing an error code or failing to ignite.',
      'The hot water temperature from your tankless unit is fluctuating (cold water sandwiches).'
    ],
    process: [
      { step: 1, title: 'Flow Rate Assessment', description: 'We calculate your home\'s peak GPM (gallons per minute) demand to size the tankless unit correctly.' },
      { step: 2, title: 'Gas and Venting Upgrades', description: 'If retrofitting from a tank, the gas line is usually upsized and special PVC or stainless steel venting is installed.' },
      { step: 3, title: 'Mounting and Connection', description: 'The unit is mounted securely to the wall, and water, gas, and electrical connections are finalized.' },
      { step: 4, title: 'Programming', description: 'The internal computer is programmed for your specific altitude, vent length, and desired output temperature.' }
    ],
    costFactors: [
      'The flow rate (GPM) capacity required for your home.',
      'The complexity of the retrofit (upgrading the gas line from 1/2" to 3/4" is often required for gas units).',
      'The routing of new intake and exhaust venting to the exterior of the house.',
      'Whether a recirculation pump is added for instant hot water at distant fixtures.'
    ],
    diy: {
      safe: [
        'Checking the digital display for error codes and looking them up in the manual before calling for service.',
        'Cleaning the small, easily accessible inlet water filter screen.'
      ],
      stop: [
        'Attempting to descale the unit using unauthorized chemicals, which can destroy the copper heat exchanger.',
        'Modifying the concentric venting system; improper venting can melt the pipes or cause carbon monoxide buildup.'
      ]
    },
    faqs: [
      { question: 'Will a tankless water heater provide instant hot water?', answer: 'Tankless means "endless" hot water, not "instant." The water still takes time to travel from the unit to your faucet. However, adding a recirculation pump can provide instant hot water at the tap.' },
      { question: 'Do tankless water heaters require maintenance?', answer: 'Yes, they require annual descaling to flush mineral buildup out of the tight heat exchanger pathways. Without this, the unit will lose efficiency and eventually fail prematurely.' },
      { question: 'Can an electric tankless unit heat a whole house?', answer: 'While electric tankless units exist, they require a massive amount of electrical power (often needing 3 or 4 dedicated high-amp breakers). For whole-house applications, gas-powered tankless units are heavily preferred.' }
    ],
    related: ['water-heater-installation', 'gas-line-installation', 'water-treatment'],
    isEmergencyCapable: false
  },
  {
    slug: 'leak-detection',
    category: 'leak-detection',
    name: 'Leak Detection',
    status: 'PUBLISHED',
    seoTitle: 'Professional Water Leak Detection Services | Elite Plumbing & Drain',
    metaDescription: 'Unexplained high water bill? Our expert plumbers use advanced acoustic and thermal imaging equipment to pinpoint hidden water leaks accurately without destroying your home.',
    h1: 'Advanced Water Leak Detection',
    answer: 'Leak detection involves using specialized non-invasive technology, such as acoustic listening devices and thermal imaging, to locate hidden water leaks behind walls, under floors, or underground before excavation begins.',
    intro: [
      'A hidden water leak is a homeowner\'s worst nightmare. When water escapes behind walls or beneath the foundation, it silently causes structural rot, encourages toxic mold growth, and causes utility bills to skyrocket. Because water travels along the path of least resistance, a damp spot on your ceiling or floor is rarely located directly where the pipe is actually leaking. Simply tearing open walls to find the source is messy, expensive, and outdated.',
      'Modern leak detection relies on precision technology rather than destructive guesswork. Our technicians use highly sensitive acoustic equipment to listen for the specific high-frequency hiss of water escaping a pressurized pipe underground. Combined with thermal imaging cameras that detect temperature anomalies caused by moisture, we can pinpoint the exact location of the leak down to the inch. This allows for targeted, minimal-impact repairs.'
    ],
    signs: [
      'A sudden, unexplained spike in your monthly water bill.',
      'The water meter dial continues to spin even when all fixtures in the house are turned off.',
      'The sound of running or hissing water when no appliances are running.',
      'Warm spots on concrete floors (often indicating a hot water slab leak).',
      'Musty odors, peeling wallpaper, or dark water stains appearing on walls or ceilings.'
    ],
    process: [
      { step: 1, title: 'Meter and Pressure Testing', description: 'The water main is shut off to perform a pressure test, confirming that a leak exists on the property.' },
      { step: 2, title: 'Thermal Imaging', description: 'Infrared cameras sweep the area to detect temperature differences indicating hidden moisture.' },
      { step: 3, title: 'Acoustic Sonar', description: 'Ultra-sensitive microphones are used to listen through concrete or soil to find the exact origin point of the leak.' },
      { step: 4, title: 'Targeted Access', description: 'Once pinpointed, the technician marks the spot and discusses the least invasive repair options.' }
    ],
    costFactors: [
      'The location of the leak (under a concrete slab vs. in a drywall ceiling).',
      'The size of the property and the complexity of the plumbing network.',
      'Whether the leak is on the main water service line running through the yard or inside the home.',
      'The type of material surrounding the pipe that needs to be penetrated for repair.'
    ],
    diy: {
      safe: [
        'Checking your water meter before going to bed, not using water all night, and checking it again in the morning to confirm a leak.',
        'Putting food coloring in the toilet tank to see if it silently leaks into the bowl.'
      ],
      stop: [
        'Smashing open drywall or jackhammering the floor based on a guess of where the leak is.',
        'Ignoring a small leak; pressurized leaks never fix themselves and will aggressively worsen over time.'
      ]
    },
    faqs: [
      { question: 'How do you find a leak under concrete?', answer: 'We use acoustic listening devices that amplify the sound of water escaping the pipe. Because water under pressure makes a distinct sound, we can trace the pipe\'s path and find the exact spot where the noise is loudest.' },
      { question: 'Does homeowner\'s insurance cover leak detection?', answer: 'Many insurance policies cover the cost of locating the leak and repairing the water damage it caused, though they often do not cover the cost of the plumbing pipe repair itself. Check your specific policy.' },
      { question: 'What is a slab leak?', answer: 'A slab leak is an industry term for a water pipe that has broken or corroded beneath your home\'s concrete foundation. These require specialized detection and repair methods.' }
    ],
    related: ['slab-leak-repair', 'pipe-repair', 'water-line-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'slab-leak-repair',
    category: 'leak-detection',
    name: 'Slab Leak Repair',
    status: 'PUBLISHED',
    seoTitle: 'Slab Leak Repair Services | Fix Under-Foundation Leaks | Elite Plumbing & Drain',
    metaDescription: 'Expert slab leak repair to fix leaking pipes under your foundation. We offer direct repair, pipe rerouting, and epoxy lining solutions. Protect your home today.',
    h1: 'Slab Leak Repair Services',
    answer: 'Slab leak repair addresses pipes that have burst or corroded beneath the concrete foundation of your home. Solutions range from jackhammering a small section of the floor to fix the pipe directly, to completely rerouting the plumbing through the walls or attic to abandon the failed underground line.',
    intro: [
      'A slab leak is one of the most serious plumbing issues a home can face. It occurs when the copper or PEX water lines buried beneath your concrete foundation degrade, shift, or burst. Left unchecked, the continuous flow of water washes away the soil supporting your foundation, leading to severe structural cracking, massive mold growth under flooring, and catastrophic water damage. Because the pipes are encased in concrete, identifying and accessing the problem requires specialized expertise.',
      'Fixing a slab leak requires careful planning to minimize disruption to your home. Depending on the condition of your plumbing network, breaking through the concrete to fix a single hole might just be a temporary patch on a failing system. Often, the best long-term solution is a pipe reroute, where the leaking under-floor line is capped off and a brand-new water line is run through the walls or ceiling, completely removing the risk of future foundation leaks.'
    ],
    signs: [
      'Unexplained warm spots on tile or hardwood floors (indicating a hot water line leak).',
      'The constant sound of running water even when the main house valve is shut off.',
      'Sudden cracking in walls, baseboards, or floor tiles due to foundation shifting.',
      'Water seeping up through the foundation, dampening carpets or causing floors to buckle.',
      'A massive, unexplained spike in your water bill.'
    ],
    process: [
      { step: 1, title: 'Precision Location', description: 'Using acoustic and thermal technology, the exact location of the break is mapped out.' },
      { step: 2, title: 'Solution Strategy', description: 'The plumber consults with you to decide between direct access (jackhammering), epoxy lining, or a full reroute.' },
      { step: 3, title: 'Execution', description: 'If rerouting, new lines are run cleanly through the attic or walls. If repairing directly, a neat square of concrete is removed to fix the copper.' },
      { step: 4, title: 'Restoration Prep', description: 'Lines are pressure tested, and concrete is re-poured and leveled, ready for your flooring contractor.' }
    ],
    costFactors: [
      'The method of repair (rerouting often costs more upfront but is safer long-term than repeatedly jackhammering floors).',
      'The length of pipe that needs to be bypassed or replaced.',
      'The type of flooring that must be removed or repaired (hardwood, custom tile, carpet).',
      'Whether multiple lines have degraded and require a whole-house repipe instead of a spot fix.'
    ],
    diy: {
      safe: [
        'Shutting off the main water valve to the house immediately to stop the flow of water and prevent foundation washout.'
      ],
      stop: [
        'Attempting to break through the concrete slab yourself; you risk severing electrical conduits or destroying adjacent plumbing lines.'
      ]
    },
    faqs: [
      { question: 'Why do pipes leak under the concrete slab?', answer: 'Common causes include poor installation resulting in kinked pipes, friction from pipes rubbing against concrete as they expand with hot water, and soil shifting. In older homes, the copper naturally corrodes over time.' },
      { question: 'Is it better to fix the leak or reroute the pipe?', answer: 'If your home is older and the copper is thinning everywhere, repairing one spot is usually followed by another leak a few months later. Bypassing the underground line entirely via a reroute is the most permanent and reliable solution.' },
      { question: 'Will a slab leak cause my foundation to collapse?', answer: 'While a total collapse is rare, the escaping water can severely erode the soil beneath the slab, causing the concrete to crack and the house to settle unevenly, leading to massive structural damage.' }
    ],
    related: ['leak-detection', 'repiping', 'water-line-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'pipe-repair',
    category: 'leak-detection',
    name: 'Pipe Repair',
    status: 'PUBLISHED',
    seoTitle: 'Professional Pipe Repair & Replacement | Elite Plumbing & Drain',
    metaDescription: 'Expert pipe repair for burst, leaking, or frozen pipes. Fast response to stop water damage and secure your plumbing system. Copper, PEX, and PVC repairs.',
    h1: 'Professional Pipe Repair Services',
    answer: 'Pipe repair involves sealing leaks, replacing burst sections, or fixing degraded joints in your home\'s water supply or drainage lines. We quickly restore the integrity of copper, PEX, CPVC, and galvanized steel pipes to prevent water damage.',
    intro: [
      'The plumbing network inside your walls and ceilings operates under constant pressure. When a pipe develops a pinhole leak, a joint fails, or a sudden freeze causes a burst, the resulting water damage can be immediate and devastating. From slowly dripping drain lines under a sink to high-pressure blowouts in the main supply, prompt and professional pipe repair is the only way to protect your home\'s drywall, flooring, and electrical systems.',
      'Repairing a pipe correctly means matching the right materials and techniques to your existing system. Slapping on a temporary rubber patch or using chemical sealants is a recipe for disaster. A professional repair involves cutting out the compromised section entirely and soldering new copper fittings, crimping new PEX, or properly cementing new PVC. This ensures the repaired section is just as strong, if not stronger, than the rest of the plumbing system.'
    ],
    signs: [
      'Visible water stains, bubbling paint, or peeling drywall on ceilings and walls.',
      'A persistent musty odor indicating hidden mold growth from a slow leak.',
      'A noticeable drop in water pressure when using a specific fixture.',
      'Puddles forming under sinks or in the basement near exposed plumbing.',
      'Flaking rust or heavy green corrosion (patina) visible on exposed copper or galvanized pipes.'
    ],
    process: [
      { step: 1, title: 'Damage Assessment', description: 'The exact location and cause of the leak (corrosion, high pressure, freezing) are identified.' },
      { step: 2, title: 'Water Shutoff', description: 'The water supply to the affected zone or the entire house is shut off and the lines are drained.' },
      { step: 3, title: 'Section Replacement', description: 'The damaged pipe is cut out, and a new segment is securely grafted in using trade-standard fittings.' },
      { step: 4, title: 'Pressure Testing', description: 'The water is turned back on and the new joints are inspected under full street pressure to guarantee a perfect seal.' }
    ],
    costFactors: [
      'The accessibility of the pipe (exposed basement pipes are cheaper to fix than pipes buried behind tiled shower walls).',
      'The material of the existing plumbing (older galvanized pipes are difficult to thread and tie into).',
      'The size and function of the pipe (a 1-inch main supply line vs. a 1/2-inch fixture branch line).',
      'Emergency after-hours fees if the burst occurs at night.'
    ],
    diy: {
      safe: [
        'Knowing exactly where your main water shutoff valve is and turning it off immediately in the event of a burst pipe.',
        'Wrapping exposed pipes in unheated areas with foam insulation to prevent winter freezing.'
      ],
      stop: [
        'Using "sharkbite" push-to-connect fittings in enclosed walls; while easy for DIY, they rely on a single rubber O-ring that can eventually fail.',
        'Using flex-tape or epoxy putty on a pressurized water line as a permanent fix.'
      ]
    },
    faqs: [
      { question: 'How do you fix a pinhole leak in a copper pipe?', answer: 'A pinhole leak is usually caused by acidic water eroding the copper from the inside out. The only proper fix is to cut out the affected section of pipe and solder in a new piece of copper or transition to PEX.' },
      { question: 'Why do pipes burst in the winter?', answer: 'When water freezes, it expands with tremendous force. This expansion increases the water pressure trapped between the ice blockage and a closed faucet until the pipe physically bursts open.' },
      { question: 'Is PEX better than copper?', answer: 'PEX (cross-linked polyethylene) is highly flexible, won\'t corrode, and is slightly resistant to bursting from freezing. It is currently the industry standard for new piping, though copper remains an excellent, long-lasting material.' }
    ],
    related: ['leak-detection', 'water-line-repair', 'repiping'],
    isEmergencyCapable: true
  }
];
