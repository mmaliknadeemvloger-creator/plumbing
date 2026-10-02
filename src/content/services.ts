import { ServiceCategory, Service } from '@/content/types';

export const categories: ServiceCategory[] = [
  { slug: 'general-plumbing', name: 'General & Comprehensive Plumbing', description: 'Full-service residential, commercial, installation, and inspection solutions nationwide.' },
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
  },
  {
    slug: 'residential-plumbing',
    category: 'general-plumbing',
    name: 'Residential Plumbing',
    status: 'PUBLISHED',
    seoTitle: 'Residential Plumbing Services Across the USA | Elite Plumbing',
    metaDescription: 'Trusted residential plumbing services nationwide. From drain cleaning and pipe repair to water heater installation, get fast help from licensed local plumbers.',
    h1: 'Residential Plumbing Services Nationwide',
    answer: 'Residential plumbing services encompass full-scope repairs, maintenance, and new installations for single-family homes, townhouses, and multi-family residences across the United States. Our licensed plumbers handle everything from leaky faucets to main sewer line replacements.',
    intro: [
      'Your home’s plumbing system is an intricate network of supply lines, drainage pipes, vents, and fixtures that keep your daily routine running smoothly. When a drain clogs, a water heater fails, or a pipe bursts behind drywall, you need dependable residential plumbers who diagnose the root problem quickly and provide permanent solutions.',
      'Elite Plumbing connects homeowners across the USA with licensed, pre-screened plumbing contractors. We focus on transparent upfront pricing, clean workmanship, and code-compliant installations. Whether you need an emergency repair or are planning a kitchen or bathroom remodel, our nationwide network delivers exceptional service backed by guaranteed craftsmanship.'
    ],
    signs: [
      'Low water pressure across multiple bathroom or kitchen fixtures.',
      'Slow drains or recurring clogs in sinks, showers, and toilets.',
      'Unexplained spikes in your monthly water utility bills.',
      'Water heater delivering insufficient hot water or producing rumbling sounds.',
      'Damp spots, water stains, or mildew odors near baseboards and ceilings.'
    ],
    process: [
      { step: 1, title: 'In-Depth Evaluation', description: 'Our licensed residential plumbers perform a comprehensive diagnostic inspection of your fixtures and piping.' },
      { step: 2, title: 'Clear Upfront Estimate', description: 'You receive transparent pricing options with no hidden fees before any work begins.' },
      { step: 3, title: 'Expert Repair or Installation', description: 'Work is completed using premium materials, modern tools, and strict compliance with local plumbing codes.' },
      { step: 4, title: 'Complete Cleanup & Quality Check', description: 'We test all connections under full pressure, clean up the workspace, and ensure 100% satisfaction.' }
    ],
    costFactors: [
      'The specific type of repair (simple fixture rebuild vs. underground sewer repair).',
      'Accessibility of the plumbing lines (crawl space, slab foundation, or behind drywall).',
      'Material choices such as PEX, copper, or PVC replacement pipes.',
      'Urgency of service (standard scheduling vs. 24/7 emergency dispatch).'
    ],
    diy: {
      safe: [
        'Replacing standard faucet aerators or showerheads to improve flow.',
        'Using a hand plunger on minor toilet or sink blockages.',
        'Turning off local fixture shutoff valves during a minor leak.'
      ],
      stop: [
        'Attempting to solder copper pipes without proper fire safety and trade tools.',
        'Using caustic chemical drain cleaners that eat through residential piping.',
        'Modifying main water service lines or water heater gas connections.'
      ]
    },
    faqs: [
      { question: 'What residential plumbing services do you offer?', answer: 'We offer full-service residential plumbing, including drain cleaning, sewer repair, water heater installation and repair, leak detection, pipe repiping, toilet and faucet repair, garbage disposal service, and gas line plumbing.' },
      { question: 'Are your residential plumbers licensed and insured?', answer: 'Yes, every plumbing contractor in our nationwide network is thoroughly vetted, licensed, background-checked, and fully insured for your peace of mind.' },
      { question: 'How quickly can a residential plumber arrive?', answer: 'For urgent emergencies, dispatch can be arranged immediately. For routine repairs and installations, same-day and next-day appointment windows are readily available.' }
    ],
    related: ['emergency-plumbing', 'commercial-plumbing', 'drain-cleaning', 'water-heater-services', 'leak-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'commercial-plumbing',
    category: 'general-plumbing',
    name: 'Commercial Plumbing',
    status: 'PUBLISHED',
    seoTitle: 'Commercial Plumbing Contractors Across the USA | Elite Plumbing',
    metaDescription: 'Reliable commercial plumbing services nationwide for businesses, offices, restaurants, and facilities. 24/7 commercial emergency repairs and maintenance.',
    h1: 'Commercial Plumbing Services Nationwide',
    answer: 'Commercial plumbing services deliver heavy-duty plumbing solutions for businesses, retail facilities, office buildings, restaurants, and industrial complexes across the USA. We handle high-capacity drainage, grease traps, commercial water heaters, and code compliance.',
    intro: [
      'Commercial plumbing systems endure significantly higher usage volumes and stricter regulatory requirements than residential systems. A single plumbing failure in a commercial building—such as an overflowing restroom, a blocked grease trap, or a commercial boiler failure—can halt business operations, violate health codes, and result in substantial revenue loss.',
      'Elite Plumbing provides responsive, high-capacity commercial plumbing services across the United States. Our commercial contractors understand the urgency of minimizing downtime. We work efficiently around your operating hours to deliver robust diagnostics, preventative maintenance plans, hydro-jetting, backflow testing, and commercial fixture installations.'
    ],
    signs: [
      'Frequent mainline backups affecting multiple commercial restrooms.',
      'Foul grease or sewer gas odors in customer or dining areas.',
      'Failed annual municipal backflow prevention inspection.',
      'Commercial water heater or boiler failing to meet peak demand.',
      'Visible corrosion or leaks in high-pressure supply lines.'
    ],
    process: [
      { step: 1, title: 'Commercial Site Assessment', description: 'We review building plans, fixture loads, and inspect affected commercial systems.' },
      { step: 2, title: 'Operational Plan & Quote', description: 'We provide an upfront quote and schedule work to minimize disruption to customers and staff.' },
      { step: 3, title: 'Heavy-Duty Execution', description: 'Commercial-grade equipment—such as commercial hydro-jetters and pipe locators—is deployed for rapid resolution.' },
      { step: 4, title: 'Code Testing & Certification', description: 'System undergoes full capacity testing and required municipal documentation is completed.' }
    ],
    costFactors: [
      'Size and scale of the commercial facility (multi-story buildings vs. standalone retail units).',
      'Specialized commercial equipment required (high-capacity hydro jetters, excavation gear).',
      'Compliance and permitting requirements for municipal grease and backflow standards.',
      'Off-hours or emergency scheduling to prevent business disruption.'
    ],
    diy: {
      safe: [
        'Checking and recording water pressure readings on building supply gauges.',
        'Scheduling regular scheduled preventative cleanings for grease interceptors.',
        'Posting proper fixture usage signage in public and employee restrooms.'
      ],
      stop: [
        'Allowing untrained staff to service commercial gas boilers or main water valves.',
        'Pouring chemical degreasers down commercial kitchen drain lines.'
      ]
    },
    faqs: [
      { question: 'What commercial industries do you service?', answer: 'We service restaurants, retail stores, corporate offices, healthcare clinics, multi-family apartment complexes, warehouses, hotels, and schools across the country.' },
      { question: 'Do you offer 24/7 emergency commercial plumbing?', answer: 'Yes, commercial plumbing emergencies require immediate action to protect operations. Our network provides 24/7 emergency dispatch for burst lines, severe backups, and hot water outages.' },
      { question: 'Can you handle commercial backflow testing and certification?', answer: 'Yes, our certified commercial technicians perform mandatory annual backflow prevention assembly testing, repair, and state compliance reporting.' }
    ],
    related: ['residential-plumbing', 'drain-cleaning', 'hydro-jetting', 'sewer-line-repair', 'water-heater-services'],
    isEmergencyCapable: true
  },
  {
    slug: 'water-heater-services',
    category: 'water-heaters',
    name: 'Water Heater Services',
    status: 'PUBLISHED',
    seoTitle: 'Complete Water Heater Services Across the USA | Elite Plumbing',
    metaDescription: 'Expert water heater repair, replacement, and tankless installation across the USA. Fast same-day service for gas, electric, and hybrid water heaters.',
    h1: 'Water Heater Services: Repair, Replacement & Tankless',
    answer: 'Water heater services cover complete diagnostic repair, routine maintenance, new tank installation, and tankless conversions for both residential and commercial properties nationwide.',
    intro: [
      'Reliable hot water is essential for sanitation, cooking, and everyday comfort. When your water heater breaks down, leaks, or fails to reach adequate temperatures, you need prompt and professional service to restore your hot water supply without delay.',
      'Elite Plumbing provides comprehensive water heater solutions across the USA. We service and install all major brands and models, including atmospheric gas heaters, power-vent systems, electric tanks, heat pump hybrids, and high-efficiency on-demand tankless water heaters. Our technicians evaluate your household water usage to recommend the most energy-efficient, cost-effective solution.'
    ],
    signs: [
      'No hot water or hot water depleting rapidly during normal use.',
      'Rusty or discolored water when running hot water taps.',
      'Loud banging, popping, or rumbling noises from inside the tank.',
      'Active water pooling around the base or temperature/pressure valve.',
      'Water heater unit is over 10 years old and showing exterior corrosion.'
    ],
    process: [
      { step: 1, title: 'Thermal & Electrical Diagnostics', description: 'Technicians test heating elements, thermostats, thermocouples, and gas valves.' },
      { step: 2, title: 'Repair vs. Replacement Analysis', description: 'We provide clear cost comparisons so you can make the smartest financial decision.' },
      { step: 3, title: 'Precision Installation or Repair', description: 'Parts are replaced or a new unit is installed with proper expansion tanks and ventilation.' },
      { step: 4, title: 'Safety & Flow Calibration', description: 'We verify proper gas draft, check for zero leaks, and set temperatures to a safe 120°F.' }
    ],
    costFactors: [
      'Type of unit: conventional storage tank vs. high-efficiency tankless system.',
      'Fuel type: standard electric, natural gas, propane, or hybrid heat pump.',
      'Capacity needs (40-gallon, 50-gallon, 80-gallon, or continuous GPM rating).',
      'Venting modifications or electrical panel upgrades required for modern code compliance.'
    ],
    diy: {
      safe: [
        'Checking circuit breakers to confirm an electric water heater has power.',
        'Inspecting the pilot light window on a gas unit according to manufacturer instructions.',
        'Testing the temperature setting on the thermostat dial.'
      ],
      stop: [
        'Tampering with the temperature and pressure relief valve (T&P) while the tank is hot.',
        'Attempting DIY gas line connections or gas valve replacements.'
      ]
    },
    faqs: [
      { question: 'Should I repair or replace my water heater?', answer: 'If your water heater is under 8 years old and requires a minor component repair (like a thermostat or element), repair is typically best. If the tank is over 10-12 years old or the tank body itself is leaking, replacement is the safest, most economical choice.' },
      { question: 'What are the benefits of upgrading to a tankless water heater?', answer: 'Tankless water heaters provide continuous, endless hot water, consume up to 34% less energy, take up a fraction of the wall space, and last 15-20 years compared to 8-12 years for traditional tanks.' },
      { question: 'How often should a water heater be flushed?', answer: 'We recommend flushing your water heater once a year to remove mineral sediment that reduces heating efficiency and causes tank corrosion.' }
    ],
    related: ['water-heater-repair', 'water-heater-installation', 'tankless-water-heater', 'gas-line-installation'],
    isEmergencyCapable: true
  },
  {
    slug: 'leak-repair',
    category: 'leak-detection',
    name: 'Leak Detection & Repair',
    status: 'PUBLISHED',
    seoTitle: 'Water Leak Detection & Repair Services Across the USA | Elite Plumbing',
    metaDescription: 'Pinpoint and fix hidden water leaks fast. Non-invasive acoustic & thermal leak detection and durable pipe repairs for homes and businesses nationwide.',
    h1: 'Professional Water Leak Detection & Repair Services',
    answer: 'Leak detection and repair involves using acoustic sonar, infrared thermal imaging, and pressure testing to locate hidden plumbing leaks behind walls, under concrete slabs, or underground, followed by precise, minimally invasive pipe repairs.',
    intro: [
      'Unchecked water leaks can quickly cause thousands of dollars in structural damage, encourage toxic black mold growth, and waste thousands of gallons of water. Because water travels along framing and pipes, the spot where water appears on your ceiling or floor is rarely where the leak originates.',
      'Elite Plumbing provides advanced, non-invasive water leak detection and rapid repair services across the United States. Our experienced plumbers utilize acoustic microphones, tracer gas, and infrared technology to pinpoint the exact leak location without tearing apart your home. Once identified, we execute durable repairs using modern materials like PEX, copper, and seamless epoxy linings.'
    ],
    signs: [
      'Continuous sound of running water when all taps and appliances are shut off.',
      'Unexplained increases in your monthly municipal water utility bill.',
      'Damp or warm spots on carpet, hardwood, or tile floors (slab leak symptoms).',
      'Cracking drywall, peeling paint, or musty mildew odors.',
      'Water meter dial spinning when no water is being consumed in the building.'
    ],
    process: [
      { step: 1, title: 'Pressure & Meter Diagnostics', description: 'We isolate the supply lines to confirm pressure loss and verify active leakage.' },
      { step: 2, title: 'Non-Invasive Electronic Locating', description: 'Thermal imaging and acoustic listening devices pinpoint the exact leak coordinates.' },
      { step: 3, title: 'Targeted Surgical Access', description: 'We create minimal openings directly at the leak site to preserve your floors and walls.' },
      { step: 4, title: 'Permanent Pipe Repair & Testing', description: 'The compromised pipe is replaced or lined, and the entire system is re-pressurized.' }
    ],
    costFactors: [
      'Location of the leak (accessible wall cavity vs. deep under a concrete slab foundation).',
      'Depth and length of the pipe run requiring replacement.',
      'Type of repair method: spot repair, pipe rerouting, or whole-line replacement.',
      'Extent of surrounding restoration or drywall repair needed.'
    ],
    diy: {
      safe: [
        'Checking all visible toilet flappers and sink shutoffs for surface drips.',
        'Shutting off the main water valve immediately if water is actively flooding.',
        'Placing towels and buckets to catch immediate dripping water.'
      ],
      stop: [
        'Randomly knocking holes in drywall searching for hidden moisture.',
        'Using temporary wrap tape as a permanent fix on pressurized supply lines.'
      ]
    },
    faqs: [
      { question: 'How do you find leaks without damaging walls?', answer: 'We use non-invasive diagnostic tools, including thermal imaging cameras that detect moisture temperature differentials and acoustic sensors that listen for the high-frequency vibration of escaping water.' },
      { question: 'What is a slab leak and how is it repaired?', answer: 'A slab leak is a leak in the copper or PEX water lines running beneath your home’s concrete foundation. Repairs can be done via direct spot repair, rerouting the pipe through walls/attics, or trenchless epoxy pipe lining.' },
      { question: 'Will my homeowner’s insurance cover leak repair?', answer: 'In many cases, insurance covers the water damage caused by sudden and accidental plumbing leaks. We provide detailed diagnostic reports that you can submit to your insurance adjuster.' }
    ],
    related: ['leak-detection', 'slab-leak-repair', 'pipe-repair', 'repiping', 'water-line-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'toilet-faucet-repair',
    category: 'fixtures',
    name: 'Toilet & Faucet Repair',
    status: 'PUBLISHED',
    seoTitle: 'Toilet & Faucet Repair Services Across the USA | Elite Plumbing',
    metaDescription: 'Fix running toilets, leaky faucets, low pressure, and broken handles. Fast, affordable fixture repair and installation services nationwide.',
    h1: 'Toilet & Faucet Repair & Replacement Nationwide',
    answer: 'Toilet and faucet repair services resolve chronic drips, running tanks, weak flushes, faulty valves, and handle malfunctions. We also provide professional installation of new, high-efficiency kitchen and bathroom fixtures.',
    intro: [
      'Toilets and faucets are the hardest working fixtures in any home or commercial building. A single dripping faucet can waste over 3,000 gallons of water per year, while a running toilet flapper can waste up to 200 gallons every day. Beyond wasted water, fixture leaks can rot vanity cabinets, soften subfloors, and cause severe moisture damage.',
      'Elite Plumbing connects you with licensed plumbing technicians nationwide to service, rebuild, or replace all types of faucets and toilets. From luxury kitchen pull-down sprayers and touchless electronic faucets to dual-flush and smart toilets, we ensure clean, watertight installations and long-lasting performance.'
    ],
    signs: [
      'Toilet continuously running, hissing, or phantom flushing on its own.',
      'Water pooling around the base of the toilet bowl on the floor.',
      'Constant dripping from the faucet spout or leaking under the sink vanity.',
      'Stiff, squeaking, or loose faucet handles that are difficult to operate.',
      'Weak flushing power or frequent toilet clogs requiring plunging.'
    ],
    process: [
      { step: 1, title: 'Component Inspection', description: 'We examine cartridges, O-rings, shutoff valves, flappers, and wax seals.' },
      { step: 2, title: 'Rebuild or Replacement Plan', description: 'We provide clear recommendations for part replacement or new fixture upgrades.' },
      { step: 3, title: 'Precision Installation', description: 'High-grade replacement parts or new brand-name fixtures are installed securely.' },
      { step: 4, title: 'Watertight Verification', description: 'We run multiple flush cycles and high-pressure water tests to verify zero leaks.' }
    ],
    costFactors: [
      'Scope of repair: simple internal cartridge replacement vs. full fixture replacement.',
      'Condition of supply lines and under-sink shutoff valves.',
      'Floor condition (rotted subfloor or damaged toilet closet flange requires restoration).',
      'Fixture grade (standard residential fixtures vs. high-end smart fixtures).'
    ],
    diy: {
      safe: [
        'Replacing an accessible toilet flapper or tank handle.',
        'Cleaning mineral deposits from faucet aerators using white vinegar.',
        'Using a standard flange plunger to clear minor toilet clogs.'
      ],
      stop: [
        'Over-tightening toilet mounting bolts, which can instantly crack the porcelain bowl.',
        'Using heavy wrenches on decorative faucet finishes without protective padding.'
      ]
    },
    faqs: [
      { question: 'Why does my toilet keep running after flushing?', answer: 'A running toilet is typically caused by a worn-out rubber flapper, an improperly adjusted float, or a failing fill valve. Replacing these internal components restores normal operation.' },
      { question: 'Can you repair my existing faucet or do I need a new one?', answer: 'Most major faucet brands (Moen, Delta, Kohler, American Standard) can be easily repaired by replacing the internal cartridge and O-rings. If the faucet body is corroded or cracked, replacement is recommended.' },
      { question: 'Why is there water on the bathroom floor around the toilet base?', answer: 'Water around the base usually indicates that the wax ring seal between the toilet and the drain flange has failed. This requires unbolting the toilet, replacing the wax ring, and resetting the fixture.' }
    ],
    related: ['toilet-repair', 'faucet-repair', 'shower-repair', 'garbage-disposal', 'drain-cleaning'],
    isEmergencyCapable: false
  },
  {
    slug: 'plumbing-installation',
    category: 'general-plumbing',
    name: 'Plumbing Installation',
    status: 'PUBLISHED',
    seoTitle: 'Plumbing Installation & Remodeling Across the USA | Elite Plumbing',
    metaDescription: 'Professional plumbing installation for homes and commercial buildings nationwide. Fixtures, water heaters, repiping, and new construction plumbing.',
    h1: 'Professional Plumbing Installation Services Across the USA',
    answer: 'Plumbing installation involves installing new water lines, drain-waste-vent (DWV) systems, water heaters, filtration units, and luxury fixtures for residential remodels, additions, and commercial build-outs.',
    intro: [
      'Whether you are building a new home, remodeling a kitchen, adding an ensuite bathroom, or upgrading commercial facilities, expert plumbing installation is the foundation of long-term property value and reliability. Substandard installation leads to hidden leaks, code violations, poor drainage slopes, and costly renovations down the line.',
      'Elite Plumbing connects you with certified, licensed plumbing contractors across the USA who specialize in new installations and remodeling projects. We adhere strictly to national Uniform Plumbing Code (UPC) and International Plumbing Code (IPC) standards, ensuring all sizing, venting, water supply lines, and fixture installations pass municipal inspections on the first attempt.'
    ],
    signs: [
      'Planning a kitchen, bathroom, or laundry room remodel.',
      'Building an addition, mother-in-law suite, or detached garage workspace.',
      'Converting from an electric water heater to an energy-efficient gas tankless system.',
      'Replacing outdated galvanized or polybutylene pipes with modern PEX piping.',
      'Installing new commercial sinks, dishwashers, or utility lines.'
    ],
    process: [
      { step: 1, title: 'Blueprint & Load Planning', description: 'We calculate fixture units, water supply demand, and design optimized pipe routes.' },
      { step: 2, title: 'Permits & Code Coordination', description: 'We handle local municipal permit applications and schedule required milestone inspections.' },
      { step: 3, title: 'Rough-In Installation', description: 'Supply lines, drainage pipes, and vent stacks are precisely routed, secured, and pressure-tested.' },
      { step: 4, title: 'Trim-Out & Fixture Setting', description: 'Sinks, faucets, toilets, tubs, and appliances are installed, connected, and calibrated.' }
    ],
    costFactors: [
      'Scope of the project (single fixture installation vs. full-house new construction plumbing).',
      'Structural access (open framing vs. retrofitting through finished drywall and slabs).',
      'Material selections: premium PEX-A, copper, cast iron drainage, or PVC.',
      'Municipal permit fees and local inspection requirements.'
    ],
    diy: {
      safe: [
        'Selecting and purchasing preferred decorative trim, sinks, and faucets.',
        'Clearing work zones and storage areas before plumbers arrive on site.'
      ],
      stop: [
        'Attempting rough-in plumbing without code knowledge of proper drainage pitch and venting.',
        'Connecting gas appliances without certified pressure testing.'
      ]
    },
    faqs: [
      { question: 'Do I need a building permit for new plumbing installations?', answer: 'Yes, most cities and counties require permits for new plumbing lines, water heater replacements, bathroom additions, and major remodeling to ensure safety and code compliance.' },
      { question: 'What is the difference between rough-in and trim-out plumbing?', answer: 'Rough-in plumbing involves installing all underground and in-wall pipes, vents, and valve bodies before drywall is hung. Trim-out occurs after walls and tile are finished, where fixtures, faucets, and toilets are mounted.' },
      { question: 'Can you install customer-supplied plumbing fixtures?', answer: 'Yes, our licensed plumbers can install high-quality fixtures you have purchased, provided they meet standard US plumbing specifications and local code requirements.' }
    ],
    related: ['residential-plumbing', 'commercial-plumbing', 'repiping', 'water-heater-services', 'gas-line-installation'],
    isEmergencyCapable: false
  },
  {
    slug: 'plumbing-inspection',
    category: 'general-plumbing',
    name: 'Plumbing Inspection',
    status: 'PUBLISHED',
    seoTitle: 'Plumbing Inspection & Diagnostics Across the USA | Elite Plumbing',
    metaDescription: 'Comprehensive plumbing inspections for home buyers, owners, and commercial properties nationwide. High-definition video camera inspections and diagnostic testing.',
    h1: 'Whole-Home Plumbing Inspection & Diagnostics',
    answer: 'A whole-home plumbing inspection is a comprehensive diagnostic evaluation of your entire plumbing infrastructure, including supply lines, drains, sewer mains, water heaters, gas lines, and fixtures, using advanced diagnostic tools and video cameras.',
    intro: [
      'Many serious plumbing issues develop silently out of sight—under concrete slabs, inside wall cavities, or deep underground in the sewer line. By the time a leak or root intrusion becomes obvious, severe property damage may have already occurred. A professional plumbing inspection provides complete transparency regarding the health and safety of your plumbing system.',
      'Elite Plumbing provides comprehensive residential and commercial plumbing inspections across the United States. Whether you are purchasing a new home, conducting preventative maintenance, or seeking the root cause of recurring drainage failures, our licensed inspectors provide thorough diagnostic evaluations and clear, documented reports with zero high-pressure sales tactics.'
    ],
    signs: [
      'You are in the process of purchasing a home and want a specialized plumbing inspection.',
      'Your home is over 20 years old and has never had its plumbing infrastructure evaluated.',
      'Experiencing recurring clogs or unexplained water pressure fluctuations.',
      'Suspecting hidden leaks due to unexplained spikes in water bills.',
      'Preparing to sell a property and wanting to resolve potential inspection red flags early.'
    ],
    process: [
      { step: 1, title: 'Fixture & Valve Testing', description: 'We test all faucets, toilets, emergency shutoff valves, and check for hidden moisture.' },
      { step: 2, title: 'Water Heater & Pressure Check', description: 'We verify static water pressure, thermal expansion tanks, and water heater safety valves.' },
      { step: 3, title: 'Sewer Camera Inspection', description: 'A high-definition video camera travels through the main sewer line to inspect for roots and cracks.' },
      { step: 4, title: 'Comprehensive Report', description: 'You receive a detailed digital report with photos, video footage, and prioritized repair guidance.' }
    ],
    costFactors: [
      'Scope of the inspection (standard visual check vs. full sewer video camera inspection).',
      'Size of the property and number of plumbing fixtures.',
      'Cleanout accessibility (if a cleanout is buried or missing, access requires additional labor).'
    ],
    diy: {
      safe: [
        'Regularly testing your main water shutoff valve to ensure it turns smoothly.',
        'Checking under sink vanities periodically for any dampness or mineral staining.'
      ],
      stop: [
        'Relying solely on a general home inspection for sewer line health; general home inspectors do not perform full sewer camera runs.'
      ]
    },
    faqs: [
      { question: 'Why should I get a plumbing inspection before buying a house?', answer: 'Standard home inspections only check if faucets run and toilets flush. A dedicated plumbing inspection with a sewer camera reveals hidden issues like collapsed sewer pipes, slab leaks, and galvanized corrosion that can cost thousands of dollars to fix.' },
      { question: 'How long does a full plumbing inspection take?', answer: 'A comprehensive whole-house plumbing inspection typically takes between 60 and 90 minutes depending on the property size.' },
      { question: 'What is included in a whole-home plumbing inspection report?', answer: 'Our inspection covers water supply pressure, water heater condition, fixture operation, exposed piping integrity, emergency shutoff valves, drainage flow, and sewer camera video findings.' }
    ],
    related: ['sewer-camera-inspection', 'leak-detection', 'residential-plumbing', 'water-heater-services', 'pipe-repair'],
    isEmergencyCapable: false
  }
];

