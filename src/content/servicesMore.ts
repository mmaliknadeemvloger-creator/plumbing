import { Service } from '@/content/types';

export const servicesMore: Service[] = [
  {
    slug: 'water-line-repair',
    category: 'water-lines',
    name: 'Water Line Repair',
    status: 'PUBLISHED',
    seoTitle: 'Main Water Line Repair & Replacement | Elite Plumbing & Drain',
    metaDescription: 'Fix main water line leaks and drops in pressure. Expert underground water line repair and replacement. Fast, code-compliant service to restore your water supply.',
    h1: 'Main Water Line Repair',
    answer: 'Main water line repair fixes leaks or blockages in the underground pipe that brings pressurized fresh water from the city meter to your home. We use advanced locating to fix the pipe quickly while minimizing disruption to your yard.',
    intro: [
      'Your main water line is the lifeline of your plumbing system, constantly delivering fresh water under high pressure. Because this pipe is buried underground, it is susceptible to freezing temperatures, ground shifting, tree root intrusion, and natural deterioration (especially in older homes with galvanized or polybutylene pipes). When this line fails, the symptoms are immediate: a massive drop in water pressure, a flooded yard, or a shockingly high water bill.',
      'Repairing a main water line requires precision and speed to restore your home\'s habitability. Depending on the extent of the damage, we can perform a spot repair to fix a single break, or replace the entire line if the material has completely degraded. Modern trenchless technologies often allow us to pull a brand-new, durable PEX or HDPE pipe through the path of the old line, avoiding the need to trench through your driveway or landscaping.'
    ],
    signs: [
      'A sudden, significant drop in water pressure across all fixtures in the home.',
      'Unexplained muddy, swampy spots in your front yard, even when it hasn\'t rained.',
      'Water utility company alerts you to abnormal usage or a massive spike in your bill.',
      'A hissing or rushing water sound coming from where the pipe enters the foundation.',
      'Discolored, rusty, or dirt-filled water coming out of your faucets.'
    ],
    process: [
      { step: 1, title: 'Locating and Diagnostics', description: 'We pressure test the line and use acoustic sensors to pinpoint the exact location of the underground leak.' },
      { step: 2, title: 'Utility Marking', description: 'We coordinate with local authorities to mark underground gas and electrical lines before any digging begins.' },
      { step: 3, title: 'Excavation or Boring', description: 'The damaged section is carefully exposed via targeted digging, or access pits are made for trenchless replacement.' },
      { step: 4, title: 'Repair and Restoration', description: 'The pipe is repaired or replaced, inspected under pressure, and the trench is carefully backfilled.' }
    ],
    costFactors: [
      'The length of the line requiring repair or replacement.',
      'The depth of the pipe (lines below the frost line require deep, shored trenches).',
      'Obstacles like concrete driveways, retaining walls, or large tree roots.',
      'Whether local municipal codes require the installation of a new backflow preventer or pressure reducing valve.'
    ],
    diy: {
      safe: [
        'Shutting off the water at the city meter using a water key to stop the flooding immediately.'
      ],
      stop: [
        'Attempting to dig up the yard yourself without calling 811 to mark utilities; hitting a buried gas or high-voltage line is deadly.'
      ]
    },
    faqs: [
      { question: 'Who is responsible for the main water line?', answer: 'In most municipalities, the city is responsible for the water main in the street and the meter itself. The homeowner is completely responsible for the pipe running from the meter into the house.' },
      { question: 'Can you fix a polybutylene water line?', answer: 'Polybutylene is a defective plastic piping used in the 80s and 90s that degrades and catastrophically ruptures when exposed to chlorine. It cannot be repaired; the entire line must be replaced.' },
      { question: 'Why do I need a Pressure Reducing Valve (PRV)?', answer: 'If the city supplies water at a pressure higher than 80 PSI, it will slowly destroy your home\'s fixtures, appliances, and pipes. A PRV regulates that pressure down to a safe 50-60 PSI.' }
    ],
    related: ['repiping', 'leak-detection', 'pipe-repair'],
    isEmergencyCapable: true
  },
  {
    slug: 'repiping',
    category: 'water-lines',
    name: 'Whole-House Repiping',
    status: 'PUBLISHED',
    seoTitle: 'Whole-House Repiping Services | PEX & Copper | Elite Plumbing & Drain',
    metaDescription: 'Eliminate rusty water and low pressure with whole-house repiping. We replace old, failing pipes with modern PEX or copper. Get a comprehensive quote today.',
    h1: 'Whole-House Repiping Services',
    answer: 'Whole-house repiping is the complete replacement of your home\'s aging, corroded hot and cold water supply lines with modern, durable materials like PEX or copper. This permanent solution eliminates chronic leaks, rusty water, and poor water pressure.',
    intro: [
      'Plumbing materials don\'t last forever. If your home was built decades ago using galvanized steel, polybutylene, or early generations of thin-walled copper, your system is living on borrowed time. Galvanized pipes rust from the inside out, restricting water flow to a trickle and delivering brown, foul-tasting water. When you start fixing pinhole leaks every few months, patching the system is no longer cost-effective; it\'s time for a clean slate.',
      'A whole-house repipe is a major project, but it instantly modernizes your home\'s infrastructure. Our specialized repiping crews map out the most efficient routes to run new, flexible PEX tubing through your walls, attics, or crawlspaces with minimal drywall removal. Once complete, you will experience robust water pressure, clean water, and the peace of mind that comes knowing you are safe from sudden catastrophic pipe bursts.'
    ],
    signs: [
      'Frequent, recurring leaks requiring constant visits from a plumber.',
      'Brown, yellow, or rust-colored water when you first turn on the tap.',
      'Severe drops in water pressure, especially when running two fixtures at once.',
      'Your home has galvanized steel or known defective polybutylene piping.',
      'Exposed pipes in the basement or crawlspace show heavy scaling, rust, or green corrosion.'
    ],
    process: [
      { step: 1, title: 'System Mapping', description: 'We design a new layout for the pipes, often bypassing the old lines entirely and leaving them abandoned in the walls.' },
      { step: 2, title: 'Strategic Access', description: 'Small, neat cuts are made in the drywall to access fixture connection points.' },
      { step: 3, title: 'Running New Lines', description: 'New PEX or copper lines are routed from the water heater and main supply to every fixture in the home.' },
      { step: 4, title: 'Testing and Patching', description: 'The new system is pressure-tested. Once passed, we coordinate the drywall patching and texture matching.' }
    ],
    costFactors: [
      'The size of the home and the number of plumbing fixtures (bathrooms, kitchens, laundry).',
      'The material chosen (PEX is significantly faster to install and less expensive than rigid copper).',
      'The accessibility of the home\'s structure (open basements and crawlspaces make routing much easier than slab foundations).',
      'The extent of drywall removal and patching required.'
    ],
    diy: {
      safe: [
        'Clearing out the cabinets under every sink in the house before the crew arrives.',
        'Securing pets and clearing pathways to minimize disruption during the project.'
      ],
      stop: [
        'Attempting to repipe a section of the house yourself without a permit; poor routing or unapproved fittings will fail building inspections and cause major leaks.'
      ]
    },
    faqs: [
      { question: 'How long does a whole-house repipe take?', answer: 'For a standard-sized home, the actual plumbing work usually takes 2 to 4 days. You will typically only be without water during the daytime working hours, as the crew will restore temporary service each evening.' },
      { question: 'Is PEX better than copper for repiping?', answer: 'PEX is the industry standard for repiping. It is highly flexible (meaning fewer joints and less drywall removal), resistant to scale buildup, immune to corrosion, and expands slightly to resist bursting if frozen.' },
      { question: 'Do I have to move out during a repipe?', answer: 'No. While the process is noisy and disruptive during the day, the crew will clean up the work areas and ensure you have at least one working bathroom and running water every night.' }
    ],
    related: ['water-line-repair', 'pipe-repair', 'slab-leak-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'faucet-repair',
    category: 'fixtures',
    name: 'Faucet Repair & Installation',
    status: 'PUBLISHED',
    seoTitle: 'Faucet Repair & Installation | Fix Leaky Sinks | Elite Plumbing & Drain',
    metaDescription: 'Stop that annoying drip. We repair and install kitchen, bathroom, and utility faucets. Fast service to save water and upgrade your fixtures.',
    h1: 'Faucet Repair & Installation',
    answer: 'Faucet repair involves replacing worn-out internal cartridges, O-rings, or aerators to stop leaks and restore proper water flow. If a fixture is heavily corroded or outdated, we provide professional installation of high-quality new faucets.',
    intro: [
      'A dripping faucet is more than just an annoying sound that keeps you awake at night; it\'s a steady drain on your water bill. A faucet that drips just once per second can waste over 3,000 gallons of water a year. Modern faucets are precision engineered with ceramic disc cartridges, but hard water, heavy use, and time eventually wear down the internal seals, leading to leaks around the base or directly from the spout.',
      'Whether you need a simple cartridge replacement for your bathroom sink or want to upgrade your kitchen to a modern, pull-down touchless faucet, professional service ensures a perfect result. Improper DIY installation often leads to stripped supply lines, hidden leaks inside the vanity cabinet, or wobbly fixtures. We use high-quality parts and ensure every connection is watertight and securely mounted.'
    ],
    signs: [
      'A constant drip from the spout even when the handles are completely shut off.',
      'Water pooling around the base of the faucet on the countertop.',
      'The handle feels stiff, grinds, or is difficult to turn on and off.',
      'Squealing or whistling noises when the water is running.',
      'Water spraying unevenly or with very low pressure from the aerator.'
    ],
    process: [
      { step: 1, title: 'Water Shutoff', description: 'The angle stops beneath the sink are turned off to safely isolate the fixture.' },
      { step: 2, title: 'Disassembly and Diagnosis', description: 'The handle is removed to inspect the cartridge, seats, and springs for wear or mineral buildup.' },
      { step: 3, title: 'Repair or Replacement', description: 'The faulty components are swapped out. If replacing the whole unit, the old faucet is unbolted and the sink deck is cleaned.' },
      { step: 4, title: 'Testing', description: 'The water is restored, and the fixture is tested for smooth operation, proper flow, and zero leaks under the sink.' }
    ],
    costFactors: [
      'Whether the faucet can be repaired with a new cartridge or needs total replacement.',
      'The brand and model of the replacement fixture.',
      'The condition of the shutoff valves under the sink (old valves often break and require replacement at the same time).',
      'The complexity of the installation (e.g., touchless electronic faucets require electrical connections).'
    ],
    diy: {
      safe: [
        'Unscrewing the aerator at the tip of the spout and soaking it in vinegar to remove mineral buildup.',
        'Checking the supply lines under the sink for any signs of moisture.'
      ],
      stop: [
        'Forcing corroded shutoff valves under the sink to turn; they will snap and cause an immediate flood.',
        'Using excessive force or large pipe wrenches on delicate decorative faucet finishes.'
      ]
    },
    faqs: [
      { question: 'Why is my faucet leaking from the base?', answer: 'A leak at the base usually means the O-rings at the bottom of the internal cartridge have degraded, or the cartridge retaining nut has come loose. Water escapes the housing and runs down the body of the faucet.' },
      { question: 'Can all faucets be repaired?', answer: 'Most high-quality faucets from brands like Moen, Delta, or Kohler can easily be repaired by swapping the cartridge. Cheap, unbranded faucets often do not have replacement parts available and must be replaced entirely.' },
      { question: 'Why is my water pressure suddenly low in just one sink?', answer: 'This is almost always caused by a clogged aerator. Minerals from hard water or debris knocked loose in the pipes get trapped in the fine mesh screen at the tip of the faucet.' }
    ],
    related: ['toilet-repair', 'shower-repair', 'garbage-disposal'],
    isEmergencyCapable: false
  },
  {
    slug: 'toilet-repair',
    category: 'fixtures',
    name: 'Toilet Repair & Installation',
    status: 'PUBLISHED',
    seoTitle: 'Toilet Repair & Replacement Services | Elite Plumbing & Drain',
    metaDescription: 'Expert toilet repair for clogs, leaks, and running tanks. We also install modern, high-efficiency toilets. Fast, clean, and reliable plumbing service.',
    h1: 'Toilet Repair & Installation',
    answer: 'Toilet repair involves fixing components like flappers, fill valves, and wax rings to stop leaks, running water, and weak flushes. If a toilet is cracked or constantly clogging, we provide full replacement and professional installation of high-efficiency models.',
    intro: [
      'The toilet is arguably the most essential fixture in your home, and when it malfunctions, it causes immediate disruption. A toilet that constantly runs can waste hundreds of gallons of water a day, silently driving up your utility bill. Meanwhile, weak flushes, phantom flushing, or water pooling around the base indicate failing internal parts or a compromised seal that could be rotting your bathroom floor from the inside out.',
      'Most toilet issues are entirely repairable. Replacing the fill valve and flapper will solve 90% of running toilet problems. However, if your toilet is an older model (using 3.5+ gallons per flush), has a cracked porcelain tank, or requires plunging every other week due to a poorly designed trapway, it is time for a replacement. We install modern, powerful, low-flow toilets that provide superior flushing performance while saving you money on water.'
    ],
    signs: [
      'The toilet runs constantly or turns itself on and off randomly (phantom flushing).',
      'Water pooling around the base of the toilet, indicating a failed wax ring.',
      'The handle is loose, broken, or has to be held down to complete a flush.',
      'The toilet lacks flushing power, requiring multiple flushes or frequent plunging.',
      'Visible cracks in the porcelain tank or bowl.'
    ],
    process: [
      { step: 1, title: 'Diagnosis', description: 'Checking the tank components, water level, and base seal to identify the specific failure.' },
      { step: 2, title: 'Tank Rebuild', description: 'If repairing, the water is shut off and the internal fill valve, flapper, and flush valve are replaced.' },
      { step: 3, title: 'Bowl Removal (If Needed)', description: 'If replacing the wax ring or the entire toilet, the unit is unbolted, lifted, and the closet flange is cleaned.' },
      { step: 4, title: 'Installation and Sealing', description: 'The new toilet or wax ring is set perfectly level, bolted down tight, and tested for leaks and flushing power.' }
    ],
    costFactors: [
      'Whether it is a simple tank repair or a full toilet replacement.',
      'The cost of the new toilet (standard gravity flush vs. pressure-assisted or smart toilets).',
      'The condition of the closet flange in the floor; if it is rusted or broken, it must be rebuilt before a new toilet can be set.',
      'Whether water damage has rotted the subfloor around the toilet base.'
    ],
    diy: {
      safe: [
        'Using a flange plunger (the one with the rubber extension at the bottom) to clear standard clogs.',
        'Adjusting the float arm to lower the water level if it is spilling into the overflow tube.'
      ],
      stop: [
        'Pouring chemical drain cleaners into the bowl; they generate extreme heat that will crack the porcelain.',
        'Over-tightening the bolts at the base of the toilet; this will crack the base and ruin the toilet.'
      ]
    },
    faqs: [
      { question: 'Why does my toilet randomly flush on its own?', answer: 'This is called "phantom flushing." It happens when the rubber flapper at the bottom of the tank degrades and slowly leaks water into the bowl. Once the tank level drops too low, the fill valve turns on to refill it.' },
      { question: 'Why is there water around the base of my toilet?', answer: 'A leak at the base means the wax ring sealing the toilet to the drain pipe has failed, or the toilet is loose. This requires removing the toilet entirely, installing a new wax ring, and resetting the fixture.' },
      { question: 'Should I buy a standard or elongated toilet?', answer: 'Elongated bowls are generally more comfortable for adults and are the standard in modern homes, but round bowls save about 2 inches of space, making them ideal for very small powder rooms.' }
    ],
    related: ['faucet-repair', 'shower-repair', 'drain-cleaning'],
    isEmergencyCapable: false
  },
  {
    slug: 'shower-repair',
    category: 'fixtures',
    name: 'Shower & Tub Repair',
    status: 'PUBLISHED',
    seoTitle: 'Shower & Tub Repair | Fix Leaks & Valves | Elite Plumbing & Drain',
    metaDescription: 'Expert shower and bathtub plumbing repair. We fix leaking showerheads, faulty mixing valves, and slow drains. Fast service to restore your daily routine.',
    h1: 'Shower & Tub Plumbing Repair',
    answer: 'Shower and tub repair resolves issues with temperature control, low water pressure, and constant dripping by replacing faulty diverters or shower valve cartridges hidden behind the wall.',
    intro: [
      'Your shower and tub see the heaviest daily use of any plumbing fixture in your home. When the showerhead constantly drips, the water pressure drops, or you can no longer get a consistent mix of hot and cold water, the daily routine becomes frustrating. Because the most critical components of a shower—the rough-in valve and pipes—are hidden behind tiled walls, repairs require specialized knowledge to fix the issue without destroying your bathroom.',
      'The heart of any modern shower is the mixing valve cartridge. This internal component balances the pressure of hot and cold water to prevent scalding if someone flushes a toilet elsewhere in the house. Over time, hard water minerals calcify inside this cartridge, causing the handle to seize up or water to leak continuously. We carry a vast array of specialized cartridges and tools to extract and replace these components safely.'
    ],
    signs: [
      'The showerhead drips constantly even when the handle is turned off forcefully.',
      'The handle is extremely stiff, hard to turn, or freely spins without doing anything.',
      'You experience sudden blasts of scalding or freezing water when other fixtures are used.',
      'The tub spout continues to run water even when the diverter is pulled up to shower mode.',
      'Water pressure is significantly lower in the shower than in the rest of the house.'
    ],
    process: [
      { step: 1, title: 'Valve Access', description: 'The handle and decorative trim plate (escutcheon) are carefully removed to access the valve body in the wall.' },
      { step: 2, title: 'Cartridge Extraction', description: 'Using specialized pullers, the old, calcified cartridge is extracted from the brass valve body.' },
      { step: 3, title: 'Component Replacement', description: 'A new balancing cartridge or tub diverter is installed and lubricated.' },
      { step: 4, title: 'Calibration', description: 'The rotational limit stop is adjusted to ensure the water gets hot enough without reaching scalding temperatures.' }
    ],
    costFactors: [
      'The brand and age of the shower valve (some rare or obsolete cartridges are expensive and hard to source).',
      'Whether the valve body itself is cracked, which requires cutting open the drywall from behind to replace the entire brass unit.',
      'If the issue includes a clogged or leaking drain that requires accessing the ceiling below.'
    ],
    diy: {
      safe: [
        'Unscrewing the showerhead and soaking it in CLR or vinegar to dissolve mineral buildup.',
        'Checking the caulk lines around the tub to ensure water isn\'t seeping behind the tile.'
      ],
      stop: [
        'Attempting to pry out a stuck shower cartridge with pliers; you will likely break the brass valve body inside the wall, turning a $200 repair into a $1,500 wall-rebuild.'
      ]
    },
    faqs: [
      { question: 'Why is my shower handle so hard to turn?', answer: 'The internal rubber seals and plastic gears of the mixing cartridge have calcified or degraded. Forcing the handle will eventually snap the stem. The cartridge needs to be replaced.' },
      { question: 'Why does my shower go freezing cold when a toilet is flushed?', answer: 'Older showers lack "pressure-balancing" valves. When the toilet flushes, it steals cold water pressure, so the shower suddenly delivers straight hot water (or vice versa). We can upgrade the valve to a modern balancing model to prevent scalding.' },
      { question: 'How do I fix a leaky tub spout?', answer: 'If water leaks from the spout when the shower is on, the diverter gate inside the spout is failing. The spout itself needs to be unthreaded or un-set-screwed and replaced.' }
    ],
    related: ['faucet-repair', 'toilet-repair', 'slow-drain-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'gas-line-repair',
    category: 'gas-lines',
    name: 'Gas Line Repair',
    status: 'PUBLISHED',
    seoTitle: 'Emergency Gas Line Repair | Leak Detection | Elite Plumbing & Drain',
    metaDescription: 'Smell gas? Evacuate and call for expert gas line repair. We offer precision gas leak detection and code-compliant pipe repair for your safety.',
    h1: 'Emergency Gas Line Repair & Leak Detection',
    answer: 'Gas line repair is a critical safety service that involves locating hidden gas leaks, repairing degraded black iron or CSST pipes, and pressure testing the entire system to ensure zero leaks before restoring utility service.',
    intro: [
      'Natural gas is an incredibly efficient and powerful fuel source for heating your home, water, and cooking. However, a gas leak is an immediate and severe hazard. Gas lines are typically made of black iron pipe or flexible corrugated stainless steel tubing (CSST). Over time, shifting soil, improper initial installation, or corrosion at the threaded joints can cause the pipe to lose its airtight seal, allowing highly flammable gas to escape into your walls or basement.',
      'Repairing a gas line is not a standard plumbing task—it requires strict adherence to fire safety codes, specialized diagnostic equipment, and often, permits and inspections from the local municipality. Our technicians use highly sensitive electronic gas "sniffers" and pressure gauges to isolate the exact location of the leak. Once found, we replace the compromised section of pipe, re-thread connections, and perform rigorous drop-tests to guarantee the entire system is perfectly sealed.'
    ],
    signs: [
      'The distinct smell of sulfur or "rotten eggs" inside or outside your home.',
      'A hissing sound near gas appliances like the water heater, furnace, or stove.',
      'Dying or dead houseplants, or dead patches of grass near underground gas lines.',
      'Higher than normal gas bills without an increase in appliance usage.',
      'The gas company has locked your meter due to a suspected leak.'
    ],
    process: [
      { step: 1, title: 'Safety Evacuation and Shutoff', description: 'If a major leak is detected, the property is evacuated and the main gas supply is shut off at the meter.' },
      { step: 2, title: 'Pressure Testing', description: 'A pressure gauge is attached to the system. The lines are pressurized with air to confirm a leak exists.' },
      { step: 3, title: 'Leak Isolation', description: 'Using electronic combustible gas detectors and soap solutions, the exact failing joint or pipe is pinpointed.' },
      { step: 4, title: 'Repair and City Inspection', description: 'The pipe is repaired, re-tested under pressure, and (if required) inspected by the city before the utility company unlocks the meter.' }
    ],
    costFactors: [
      'The location of the leak (underground lines or lines buried inside drywall require excavation/demolition).',
      'The size and material of the pipe being repaired.',
      'Whether the city requires a full system pressure test and permit before utility restoration.',
      'The length of the pipe run that must be replaced if it is severely corroded.'
    ],
    diy: {
      safe: [
        'Knowing where your main gas meter shutoff is and having a wrench nearby to turn it off in an emergency.',
        'Evacuating the house immediately if you smell a strong odor of gas.'
      ],
      stop: [
        'Attempting to tighten or repair gas pipes yourself. A tiny mistake can lead to a catastrophic explosion.',
        'Using matches or lighters to look for a leak, or flipping electrical switches (which can cause a spark) when you smell gas.'
      ]
    },
    faqs: [
      { question: 'What should I do if I smell gas in my house?', answer: 'Do not turn on lights, use your phone, or create any sparks. Evacuate the house immediately, leave the doors open, and call your gas utility provider or 911 from outside. Once the gas is shut off, call a licensed plumber for repairs.' },
      { question: 'Why did the gas company lock my meter?', answer: 'If the utility company detects a leak on your side of the meter, they are required by law to "red-tag" and lock the meter until a licensed plumber repairs the leak and a city inspector signs off on a pressure test.' },
      { question: 'How do plumbers find a gas leak?', answer: 'We pump the gas lines full of compressed air and use highly sensitive electronic combustible gas detectors. We also spray a specialized bubbling soap solution on all joints; if the soap bubbles, we know exactly where the air is escaping.' }
    ],
    related: ['gas-line-installation', 'water-heater-installation', 'tankless-water-heater'],
    isEmergencyCapable: true
  },
  {
    slug: 'gas-line-installation',
    category: 'gas-lines',
    name: 'Gas Line Installation',
    status: 'PUBLISHED',
    seoTitle: 'Gas Line Installation & Extending | Elite Plumbing & Drain',
    metaDescription: 'Expert gas line installation for new appliances, outdoor kitchens, and fire pits. Safe, code-compliant piping by licensed gas plumbing professionals.',
    h1: 'Gas Line Installation Services',
    answer: 'Gas line installation involves sizing, routing, and installing new gas pipes to power appliances like stoves, dryers, outdoor grills, and backup generators safely and efficiently.',
    intro: [
      'Adding a new gas appliance to your home, such as a professional-grade gas range, a high-efficiency tankless water heater, or an outdoor fire pit, requires more than just hooking up a hose. The gas plumbing system must be carefully engineered. If a new pipe is run without properly calculating the BTU (British Thermal Unit) demand of all the appliances on that line, you will suffer from "gas starvation." This causes appliances to underperform, pilot lights to go out, and creates severe safety hazards.',
      'Professional gas line installation ensures the correct pipe diameter is chosen and routed safely. We work with rigid black iron pipe for exposed areas and flexible CSST (corrugated stainless steel tubing) for complex routing through walls and joists. Every installation includes the necessary shutoff valves, sediment traps, and rigorous pressure testing to guarantee the system easily passes municipal inspections and provides decades of safe, reliable fuel delivery.'
    ],
    signs: [
      'You are converting your kitchen from an electric stove to a gas range.',
      'You are upgrading to a tankless water heater, which requires a much larger gas supply line.',
      'You want to run a permanent gas line to your patio for a grill, eliminating the need for propane tanks.',
      'You are installing a whole-home backup generator that runs on natural gas.',
      'You are finishing a basement and adding a new gas fireplace.'
    ],
    process: [
      { step: 1, title: 'BTU Load Calculation', description: 'We calculate the total gas demand of the new appliance and your existing ones to ensure the main line can handle the load.' },
      { step: 2, title: 'Permitting', description: 'We secure the necessary municipal permits required for running new gas lines.' },
      { step: 3, title: 'Pipe Routing and Installation', description: 'The new pipe is cut, threaded, and routed safely through the home, installing shutoff valves and sediment traps at the appliance.' },
      { step: 4, title: 'Pressure Testing and Sign-Off', description: 'The new line is capped and pumped with air to test for pressure drops, followed by a final city inspection.' }
    ],
    costFactors: [
      'The length of the new pipe run (distance from the main trunk line to the new appliance).',
      'The required pipe diameter (larger pipes needed for high-demand appliances like tankless heaters cost more).',
      'The routing complexity (trenching for an outdoor fire pit or navigating finished basement ceilings).',
      'Cost of municipal permits and inspections.'
    ],
    diy: {
      safe: [
        'Researching the BTU requirements of the new appliance you wish to purchase.',
        'Clearing the path in the basement or yard where the new pipe will need to be run.'
      ],
      stop: [
        'Using unapproved materials like PVC, standard water copper, or cheap flex-lines to run permanent gas lines.',
        'Connecting a new appliance yourself without installing a dedicated shutoff valve and drip leg (sediment trap).'
      ]
    },
    faqs: [
      { question: 'Can you run a gas line outside for a grill?', answer: 'Yes. We run specialized underground-rated gas piping from your house to your patio or outdoor kitchen, so you never have to swap out a heavy propane tank again.' },
      { question: 'What is a sediment trap (drip leg)?', answer: 'A sediment trap is a small T-fitting installed just before the appliance. It forces the gas to change direction, causing any moisture or debris in the gas line to drop into the trap rather than entering and destroying the appliance\'s delicate gas valve.' },
      { question: 'Do I need a permit to install a new gas line?', answer: 'In almost all municipalities, yes. Gas work is heavily regulated due to the severe fire and explosion risks. A permit and final inspection ensure the work was done to code.' }
    ],
    related: ['gas-line-repair', 'tankless-water-heater', 'water-heater-installation'],
    isEmergencyCapable: false
  },
  {
    slug: 'garbage-disposal',
    category: 'garbage-disposals',
    name: 'Garbage Disposal Repair',
    status: 'PUBLISHED',
    seoTitle: 'Garbage Disposal Repair & Installation | Elite Plumbing & Drain',
    metaDescription: 'Garbage disposal jammed, leaking, or dead? We offer fast repair and replacement of InSinkErator and other top disposal brands. Clear your sink today.',
    h1: 'Garbage Disposal Repair & Installation',
    answer: 'Garbage disposal repair fixes jammed impellers, electrical faults, and housing leaks. If the motor is burnt out or the casing is cracked, we provide seamless installation of powerful new, quiet-running disposal units.',
    intro: [
      'Your garbage disposal is the workhorse of the kitchen sink, designed to shred food waste so it can pass safely through your plumbing. However, disposals are frequently abused. Fibrous foods like celery, starchy items like potato peels, and hard objects like bones or dropped silverware can easily jam the impellers or burn out the motor. When the disposal stops working, the kitchen sink quickly backs up, bringing meal prep and cleanup to a halt.',
      'Many disposal issues, such as a simple jam or a tripped reset switch, can be fixed quickly by a professional. However, if water is leaking from the bottom of the unit (the motor housing), the internal seals have failed and the disposal must be replaced. We install high-quality, continuous-feed disposals ranging from standard 1/3 HP units to heavy-duty 1 HP models with stainless steel grinding components for maximum durability and noise reduction.'
    ],
    signs: [
      'The disposal makes a loud humming noise but the blades do not spin.',
      'The unit is completely dead and makes no sound when the switch is flipped.',
      'Water is leaking from the bottom of the disposal unit itself.',
      'Foul, rotting odors persist despite running the disposal with soap.',
      'The sink takes forever to drain even when the disposal is running.'
    ],
    process: [
      { step: 1, title: 'Electrical and Jam Check', description: 'We test the power supply, reset switch, and manually rotate the impellers using an Allen wrench to clear physical jams.' },
      { step: 2, title: 'Removal', description: 'If the unit is cracked, leaking, or burnt out, we disconnect the plumbing and unmount it from the sink flange.' },
      { step: 3, title: 'Installation', description: 'A new unit is mounted. We ensure the dishwasher drain knockout plug is removed if a dishwasher is connected.' },
      { step: 4, title: 'Testing', description: 'Water is run continuously while testing the new disposal to ensure zero leaks at the flange and drain connections.' }
    ],
    costFactors: [
      'Whether the unit can be unjammed or requires total replacement.',
      'The horsepower and quality of the new unit (1/2 HP is standard; 3/4 HP or 1 HP models are more expensive but handle tough food better and run quieter).',
      'The condition of the sink flange and the P-trap plumbing connected to the unit.'
    ],
    diy: {
      safe: [
        'Pressing the red reset button on the bottom of the disposal if it has overheated and shut off.',
        'Using an Allen wrench (hex key) inserted into the bottom center hole to manually unjam the blades.',
        'Grinding ice cubes and lemon peels to clean the blades and freshen the smell.'
      ],
      stop: [
        'Reaching your hand down into the disposal while it is plugged in or the breaker is on.',
        'Pouring liquid chemical drain cleaners into the disposal; it will corrode the metal and damage the plastic housing.'
      ]
    },
    faqs: [
      { question: 'Why is my disposal humming but not spinning?', answer: 'The humming means the motor is receiving electricity, but the grinding plate is physically jammed by an object (like a bone, fruit pit, or piece of glass). The motor will quickly overheat and trip the breaker if left on.' },
      { question: 'Can I put coffee grounds in the garbage disposal?', answer: 'No. While coffee grounds go down easily, they turn into a thick, muddy sludge in your pipes that is a leading cause of kitchen sink clogs. Throw them in the trash or compost.' },
      { question: 'Why is water leaking out of the bottom of the disposal?', answer: 'A leak from the bottom center (where the motor is housed) means the internal water seal has ruptured. The unit cannot be repaired and must be replaced immediately before the electrical components short out.' }
    ],
    related: ['faucet-repair', 'drain-cleaning', 'slow-drain-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'water-softener',
    category: 'water-treatment',
    name: 'Water Softener Installation',
    status: 'PUBLISHED',
    seoTitle: 'Water Softener Installation & Repair | Elite Plumbing & Drain',
    metaDescription: 'Eliminate hard water stains and protect your plumbing. We install, repair, and maintain high-efficiency water softeners. Enjoy softer skin and cleaner dishes.',
    h1: 'Water Softener Systems',
    answer: 'A water softener removes hard minerals like calcium and magnesium from your home\'s water supply through a process called ion exchange. This protects your plumbing, appliances, and fixtures from damaging scale buildup.',
    intro: [
      'Hard water is one of the most common and destructive issues for residential plumbing. When water contains high levels of dissolved calcium and magnesium, it leaves behind a stubborn white crust (scale) on everything it touches. This scale clogs showerheads, destroys the heating elements in water heaters, ruins the seals in dishwashers, and forces you to use twice as much soap for laundry and bathing. Over time, the inside of your pipes will calcify, drastically reducing water pressure.',
      'Installing a whole-home water softening system fundamentally changes the quality of your water. The system uses a resin bed to attract and trap the hard minerals, exchanging them for a tiny amount of sodium or potassium. The result is "soft" water that lathers beautifully, leaves glass shower doors spotless, and extends the lifespan of every water-using appliance in your home by years. We provide expert installation, salt-delivery maintenance, and repair for all major softener systems.'
    ],
    signs: [
      'Chalky white spots on glassware, shower doors, and chrome faucets.',
      'Dry, itchy skin and brittle hair after showering.',
      'Clothes feeling stiff, scratchy, and looking faded straight out of the laundry.',
      'Frequent failure or loss of efficiency in your water heater.',
      'Soap not lathering well, requiring you to use excessive amounts to get suds.'
    ],
    process: [
      { step: 1, title: 'Water Testing', description: 'We test your water to determine the exact hardness level (measured in grains per gallon) to size the system correctly.' },
      { step: 2, title: 'Location Prep', description: 'The ideal location is chosen near where the main water line enters the home, requiring access to a drain and an electrical outlet.' },
      { step: 3, title: 'Installation and Bypass', description: 'The system is plumbed into the main line. A bypass valve is installed so you can shut off the softener for maintenance without losing house water.' },
      { step: 4, title: 'Programming', description: 'The control head is programmed for your specific hardness level to optimize salt usage and regeneration cycles.' }
    ],
    costFactors: [
      'The capacity of the softener (measured in grains), which depends on water hardness and household size.',
      'The type of control valve (metered/demand-initiated valves cost more upfront but save massive amounts of salt and water long-term).',
      'The difficulty of plumbing the system into the main water line and routing the discharge line to a drain.',
      'Whether a pre-filter is added to catch sediment and protect the resin bed.'
    ],
    diy: {
      safe: [
        'Checking the salt tank monthly and keeping it at least half full of high-quality salt pellets.',
        'Breaking up "salt bridges" (a hard crust of salt that forms an empty dome over the water) with a broom handle.'
      ],
      stop: [
        'Adjusting the programming head without knowing your water hardness; setting it too high wastes salt, setting it too low renders the unit useless.',
        'Using rock salt meant for de-icing driveways; it contains dirt and debris that will destroy the system.'
      ]
    },
    faqs: [
      { question: 'Does a water softener make the water taste salty?', answer: 'No. The ion exchange process adds a microscopic amount of sodium to the water—about as much as is in a slice of white bread per quart. If you are on a strict low-sodium diet, potassium chloride can be used instead of salt.' },
      { question: 'How often do I need to add salt?', answer: 'For a family of four with average hard water, you will typically add one 40-lb bag of salt per month. Modern demand-initiated softeners are highly efficient and only regenerate when necessary.' },
      { question: 'Why does my skin feel "slippery" after washing with soft water?', answer: 'Hard water leaves a layer of soap scum on your skin, making it feel "squeaky." Soft water washes the soap away completely, leaving your skin\'s natural, smooth oils intact. It is actually cleaner!' }
    ],
    related: ['water-filtration', 'water-heater-installation', 'pipe-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'water-filtration',
    category: 'water-treatment',
    name: 'Water Filtration',
    status: 'PUBLISHED',
    seoTitle: 'Whole House Water Filtration Systems | Elite Plumbing & Drain',
    metaDescription: 'Drink clean, safe water straight from the tap. We install whole-house water filters and under-sink reverse osmosis systems to remove chlorine, lead, and chemicals.',
    h1: 'Water Filtration & Purification',
    answer: 'Water filtration systems remove impurities, chemicals, bad tastes, and odors from your drinking water. We install everything from simple under-sink reverse osmosis units to comprehensive whole-house carbon filtration systems.',
    intro: [
      'While municipal water is treated to meet minimum safety standards, it often arrives at your home carrying high levels of chlorine, chloramines, heavy metals, and sediment picked up from miles of aging city pipes. If your water tastes like a swimming pool, smells swampy, or has floating particles, you shouldn\'t have to rely on expensive and environmentally wasteful bottled water. A proper filtration system provides spring-quality water at every tap.',
      'Water filtration is not a one-size-fits-all solution; it requires targeting the specific contaminants in your supply. A whole-house carbon filter is excellent for removing chlorine and volatile organic compounds (VOCs) before they degrade your plumbing or vaporize in the shower. For the absolute highest purity drinking water, an under-sink Reverse Osmosis (RO) system uses a semi-permeable membrane to strip out 99% of contaminants, including lead, fluoride, and microplastics.'
    ],
    signs: [
      'Water that smells strongly of chlorine or has a metallic, swampy, or rotten egg taste.',
      'Fine sand, dirt, or sediment visibly settling at the bottom of your drinking glasses.',
      'Your home was built before 1986 and may have lead solder in the plumbing joints.',
      'You are relying on well water, which requires aggressive filtration against bacteria and agricultural runoff.',
      'You want to stop buying cases of plastic water bottles.'
    ],
    process: [
      { step: 1, title: 'Water Analysis', description: 'Testing the water to identify specific contaminants (chlorine, iron, lead, etc.) to select the correct filter media.' },
      { step: 2, title: 'System Selection', description: 'Choosing between point-of-use (like an under-sink RO system) or point-of-entry (whole-house filtration).' },
      { step: 3, title: 'Installation', description: 'Mounting the housings, tying into the water lines, and running dedicated dispensing faucets for RO systems.' },
      { step: 4, title: 'Flushing and Calibration', description: 'Flushing the new carbon blocks and ensuring proper water pressure is maintained throughout the house.' }
    ],
    costFactors: [
      'The scope of the system (under-sink RO systems are much cheaper than whole-house heavy-metal filters).',
      'The number of filtration stages (e.g., sediment pre-filter, carbon block, UV light purifier).',
      'The expected flow rate (whole-house systems must be sized large enough so they do not restrict shower pressure).',
      'Cost and frequency of replacement filter cartridges.'
    ],
    diy: {
      safe: [
        'Changing the standard sediment or carbon filter cartridges every 6-12 months according to the manufacturer schedule.',
        'Sanitizing the RO storage tank during an annual filter change.'
      ],
      stop: [
        'Ignoring filter changes; expired filters become breeding grounds for bacteria and will make your water worse than having no filter at all.',
        'Attempting to plumb a whole-house system without a bypass loop, leaving you with no water during maintenance.'
      ]
    },
    faqs: [
      { question: 'What is the difference between a water softener and a water filter?', answer: 'A water softener only removes calcium and magnesium to prevent scale buildup. It does not remove chemicals, chlorine, or make the water healthier to drink. A water filter removes chemicals and bad tastes, but does not soften the water. Many homes need both.' },
      { question: 'What is Reverse Osmosis (RO)?', answer: 'RO is a highly advanced filtration process that forces water through a membrane with microscopic pores. It removes almost everything, including salt, lead, fluoride, and bacteria, producing the purest drinking water possible.' },
      { question: 'Will a whole-house filter drop my water pressure?', answer: 'If properly sized by a professional, the pressure drop is unnoticeable. However, if the sediment pre-filter becomes clogged because it hasn\'t been changed in a year, it will drastically reduce your home\'s water pressure.' }
    ],
    related: ['water-softener', 'repiping', 'faucet-repair'],
    isEmergencyCapable: false
  },
  {
    slug: 'outdoor-faucet',
    category: 'outdoor',
    name: 'Outdoor Faucet & Hose Bib Repair',
    status: 'PUBLISHED',
    seoTitle: 'Outdoor Faucet & Hose Bib Repair | Frost-Free Spigots | Elite Plumbing & Drain',
    metaDescription: 'Fix leaking outdoor faucets and upgrade to frost-free hose bibs. Prevent burst pipes in the winter with professional exterior plumbing services.',
    h1: 'Outdoor Faucet & Hose Bib Services',
    answer: 'Outdoor faucet repair fixes leaking, dripping, or frozen spigots on the exterior of your home. We specialize in upgrading old spigots to modern, frost-free hose bibs that prevent pipes from bursting during winter freezes.',
    intro: [
      'Outdoor faucets, commonly known as hose bibs or spigots, endure the harshest conditions of any plumbing fixture. Exposed to freezing winters, blazing summers, and constant yanking from garden hoses, they are highly prone to developing leaks. A spigot that constantly drips not only wastes water but can also erode the soil around your foundation, leading to moisture intrusion in your basement or crawlspace.',
      'The most critical issue with outdoor faucets is winter freezing. Standard spigots hold water right up to the exterior valve. When temperatures drop below freezing, that water expands into ice, bursting the copper pipe just inside the wall of your home. You usually don\'t discover the burst until spring when you turn the hose on, flooding your basement. We replace standard spigots with "frost-free" sillcocks, which shut off the water deep inside the warm interior of the house, keeping the exterior portion completely dry and safe from freezing.'
    ],
    signs: [
      'The spigot drips continuously, even when the handle is cranked completely shut.',
      'Water sprays out from the handle stem (the packing nut) when the hose is turned on.',
      'When you turn the hose on outside, water begins leaking from the ceiling or wall inside the house.',
      'The handle is stripped, broken, or impossibly stiff to turn.',
      'The vacuum breaker (anti-siphon valve) on top of the spigot is spraying water everywhere.'
    ],
    process: [
      { step: 1, title: 'Water Isolation', description: 'The water line feeding the outdoor faucet is shut off from inside the basement or crawlspace.' },
      { step: 2, title: 'Removal of Old Fixture', description: 'The old spigot is unthreaded or cut from the copper line inside the home.' },
      { step: 3, title: 'Frost-Free Installation', description: 'A new frost-free sillcock (sized correctly to reach deep into the warm interior) is installed with a slight downward pitch so it drains completely when turned off.' },
      { step: 4, title: 'Sealing and Testing', description: 'The new connection is soldered or crimped, the exterior penetration is caulked to prevent drafts, and the fixture is tested.' }
    ],
    costFactors: [
      'Accessibility to the pipe inside the house (an unfinished basement is easy; a finished drywall ceiling requires cutting an access hole).',
      'The length of the frost-free stem required (ranges from 4 to 14 inches depending on the wall thickness).',
      'Whether a burst pipe inside the wall has already caused damage requiring repair.',
      'Upgrading to high-end quarter-turn ball valve bibs versus standard compression bibs.'
    ],
    diy: {
      safe: [
        'Disconnecting all garden hoses from the spigot every fall before the first freeze; even a frost-free bib will burst if a hose is left attached.',
        'Tightening the packing nut slightly behind the handle if water is leaking from the stem.'
      ],
      stop: [
        'Trying to forcefully wrench off a stuck spigot from the outside; you will twist and snap the copper pipe inside the wall, causing a massive leak.'
      ]
    },
    faqs: [
      { question: 'Why does my hose bib leak inside the house when I turn it on?', answer: 'This means the pipe just inside the wall burst during the winter because water was trapped in it. The spigot holds the pressure when off, but the moment you turn it on, water flows out of the crack into your wall.' },
      { question: 'What is a frost-free hose bib?', answer: 'A frost-free bib has a long brass stem that extends through the exterior wall and into the heated space of the house. The actual shut-off valve is located at the very end of this stem, keeping the water inside the warm house and the exterior pipe empty.' },
      { question: 'Why is water spraying out the top of my outdoor faucet?', answer: 'That is the vacuum breaker. It prevents contaminated garden water (like from a pesticide sprayer or muddy puddle) from being sucked backward into your home\'s drinking water. If it constantly sprays, the cheap plastic seal has failed and needs to be replaced.' }
    ],
    related: ['pipe-repair', 'water-line-repair', 'leak-detection'],
    isEmergencyCapable: false
  },
  {
    slug: 'irrigation-repair',
    category: 'outdoor',
    name: 'Irrigation Line Repair',
    status: 'PUBLISHED',
    seoTitle: 'Irrigation & Sprinkler Line Repair | Elite Plumbing & Drain',
    metaDescription: 'Expert repair for the main plumbing lines feeding your lawn sprinkler system. We fix broken PVC mains, backflow preventers, and pressure issues.',
    h1: 'Irrigation Plumbing Repair',
    answer: 'Irrigation repair focuses on the critical plumbing connections that feed your lawn sprinkler system, including repairing the main supply line, replacing faulty backflow preventers, and fixing underground PVC breaks.',
    intro: [
      'While landscapers handle sprinkler heads and programming, the heavy lifting of an irrigation system relies on core plumbing infrastructure. The main water line that branches off from your house to feed the irrigation manifold is under constant pressure. When this underground PVC or poly pipe cracks due to ground settling, tree roots, or freezing, it can send thousands of gallons of water flooding into your yard, threatening your home\'s foundation and resulting in a massive water bill.',
      'The most vital component of any irrigation system is the backflow preventer. Because sprinkler heads sit in the dirt—often submerged in puddles of fertilizer, pesticides, and animal waste—municipal codes require a heavy-duty backflow device to ensure that contaminated water can never be siphoned back into your home\'s pure drinking water. We specialize in testing, repairing, and replacing these brass assemblies, as well as fixing high-pressure underground breaks.'
    ],
    signs: [
      'A flooded, swampy area in the yard even when the sprinklers are turned off.',
      'Water spraying out of the brass backflow preventer assembly attached to the side of the house.',
      'A severe drop in water pressure causing the sprinkler heads to barely pop up.',
      'The water bill has doubled or tripled during the summer months.',
      'A noticeable crack or leak in the PVC manifold box in the ground.'
    ],
    process: [
      { step: 1, title: 'System Isolation', description: 'Shutting off the dedicated irrigation valve to stop the flooding without cutting water to the main house.' },
      { step: 2, title: 'Excavation', description: 'Carefully digging around the broken PVC main line or manifold to expose the damage without cutting electrical control wires.' },
      { step: 3, title: 'Pipe Repair or Component Replacement', description: 'Cutting out the shattered PVC and cementing new sections, or replacing a cracked brass backflow preventer.' },
      { step: 4, title: 'Pressure Testing', description: 'Slowly turning the water back on to test the cemented joints under high pressure before backfilling the dirt.' }
    ],
    costFactors: [
      'The size of the broken pipe (main lines are typically larger 1" to 1.5" pipes).',
      'Whether the brass backflow preventer needs to be replaced, which is a highly engineered and expensive component.',
      'The depth of the pipe and presence of tangled tree roots making excavation difficult.',
      'Cost of municipal backflow testing and certification if required after a repair.'
    ],
    diy: {
      safe: [
        'Turning off the dedicated water shutoff valve for the irrigation system if you suspect a leak.',
        'Replacing broken plastic sprinkler heads on the surface yourself.'
      ],
      stop: [
        'Attempting to repair a backflow preventer without specialized training; improper reassembly bypasses the safety mechanism, putting your home\'s drinking water at risk.',
        'Gluing dirty or wet PVC pipes; the cement will fail instantly under pressure.'
      ]
    },
    faqs: [
      { question: 'Why is my backflow preventer leaking from the bottom?', answer: 'The backflow preventer is designed to dump water out of the bottom relief valve if it senses a sudden drop in city water pressure, preventing back-siphonage. However, if it constantly dumps water, the internal rubber check valves have failed or debris is stuck in them.' },
      { question: 'Do I need to winterize my irrigation system?', answer: 'Absolutely. The pipes are buried shallowly in the yard and will freeze. A professional must hook up an industrial air compressor to blow all the water out of the lines and the backflow preventer before the first hard freeze.' },
      { question: 'Can you fix the wiring on my sprinkler timer?', answer: 'As plumbers, we handle the pressurized water lines, backflow devices, and manifolds. For complex low-voltage wiring issues and timer programming, you would typically need a dedicated irrigation or landscaping specialist.' }
    ],
    related: ['outdoor-faucet', 'water-line-repair', 'pipe-repair'],
    isEmergencyCapable: false
  }
];
