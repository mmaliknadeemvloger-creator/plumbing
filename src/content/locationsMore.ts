import { City } from './types';

export const citiesMore: City[] = [
  {
    slug: 'rock-hill',
    stateSlug: 'south-carolina',
    name: 'Rock Hill',
    county: 'York County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['29730', '29732', '29733'],
    areas: ['Ebenezer', 'Newport', 'Cherry Road', 'Downtown Rock Hill', 'Riverwalk'],
    intro: 'As the largest city in York County, Rock Hill offers a diverse mix of historic homes, mid-century suburban neighborhoods, and expanding new construction. The city has a well-established municipal infrastructure but also faces the challenges of maintaining aging water and sewer lines in its older districts.',
    housingNotes: 'Housing ranges from historic properties near Winthrop University with legacy plumbing to modern developments on the city’s edges utilizing the latest PEX and CPVC systems.',
    localIssues: [
      {
        title: 'Aging Sewer Infrastructure',
        description: 'In older neighborhoods near the university and downtown, century-old terracotta and cast iron sewer lines are prone to collapse and heavy root intrusion from mature trees.'
      },
      {
        title: 'Water Hardness and Sediment',
        description: 'While municipal water from the Catawba River is generally good, older city mains can sometimes introduce sediment into home systems, requiring point-of-entry filtration.'
      },
      {
        title: 'Mixed Piping in Renovations',
        description: 'Frequent renovations of mid-century homes often reveal a patchwork of galvanized, copper, and early plastics, requiring comprehensive repiping to ensure reliability.'
      }
    ],
    popularServices: ['sewer-line-repair', 'pipe-repair', 'water-heater-repair', 'drain-cleaning', 'water-filtration'],
    nearby: ['fort-mill', 'tega-cay'],
    faqs: [
      {
        question: 'Does Rock Hill have its own water department?',
        answer: 'Yes, the City of Rock Hill operates its own utilities department, drawing and treating water primarily from Lake Wylie.'
      },
      {
        question: 'Are permits required for plumbing repairs in Rock Hill?',
        answer: 'Major plumbing work like replacing a water heater or sewer line requires a permit from the City of Rock Hill’s Planning and Development Department. Routine repairs do not.'
      }
    ]
  },
  {
    slug: 'tega-cay',
    stateSlug: 'south-carolina',
    name: 'Tega Cay',
    county: 'York County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['29708'],
    areas: ['Tega Cay Peninsula', 'Lake Shore', 'Windjammer', 'Stonecrest'],
    intro: 'Located on a peninsula in Lake Wylie, Tega Cay is a heavily wooded, resort-style community known for its steep, hilly terrain and waterfront properties. The unique geography presents specific challenges for plumbing, particularly regarding water pressure and sewer line routing.',
    housingNotes: 'Homes are typically large, custom-built properties dating from the 1970s to modern new builds. The steep lots often require creative plumbing solutions and grinder pumps for sewer access.',
    localIssues: [
      {
        title: 'Grinder Pump Maintenance',
        description: 'Because of the hilly terrain, many homes in Tega Cay sit below the municipal sewer line and rely on residential grinder pumps to move wastewater, which require regular maintenance.'
      },
      {
        title: 'High Water Pressure',
        description: 'To service homes at varying elevations, municipal water pressure can be extremely high in certain low-lying areas, making functional Pressure Reducing Valves (PRVs) critical.'
      },
      {
        title: 'Lake Water Irrigation',
        description: 'Many lakefront properties pull irrigation water directly from Lake Wylie, which requires proper backflow prevention to keep lake water out of the home’s potable supply.'
      }
    ],
    popularServices: ['leak-detection', 'pipe-repair', 'water-heater-installation', 'faucet-repair', 'drain-cleaning'],
    nearby: ['fort-mill', 'rock-hill', 'lake-wylie'],
    faqs: [
      {
        question: 'What do I do if my grinder pump alarm goes off?',
        answer: 'Stop using water immediately to prevent sewage backup and call a licensed plumber. The alarm indicates the pump has failed or the basin is overflowing.'
      },
      {
        question: 'Who supplies water to Tega Cay?',
        answer: 'Tega Cay’s water and sewer utility services are managed by Tega Cay Water Service, a private utility company.'
      }
    ]
  },
  {
    slug: 'lake-wylie',
    stateSlug: 'south-carolina',
    name: 'Lake Wylie',
    county: 'York County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['29710'],
    areas: ['River Hills', 'Crowders Creek', 'Allison Creek', 'Clover area'],
    intro: 'Lake Wylie is a vibrant waterfront community that blends relaxed lake living with rapid suburban growth. The area features a high concentration of custom waterfront homes alongside newer, dense subdivisions. Proximity to the lake influences local plumbing needs, especially concerning environmental regulations and water quality.',
    housingNotes: 'Housing ranges from older, modest lake cabins to sprawling modern estates and large master-planned communities. Custom luxury fixtures and complex water heating demands are common.',
    localIssues: [
      {
        title: 'Septic System Sensitivity',
        description: 'Many older lakefront homes still operate on septic systems. Due to environmental regulations near the lake, maintaining these systems and preventing failures is highly scrutinized.'
      },
      {
        title: 'Complex Water Filtration Needs',
        description: 'Depending on the specific location, some homes rely on private wells that draw hard water, requiring robust filtration to protect luxury plumbing fixtures.'
      },
      {
        title: 'Polybutylene Pipe Issues',
        description: 'Many homes built in the 1980s and 90s, particularly in established communities like River Hills, originally used polybutylene pipes, which are highly prone to failure and require repiping.'
      }
    ],
    popularServices: ['water-filtration', 'tankless-water-heater', 'pipe-repair', 'fixture-installation', 'leak-detection'],
    nearby: ['tega-cay', 'rock-hill', 'belmont', 'gastonia'],
    faqs: [
      {
        question: 'Is it safe to drink well water near the lake?',
        answer: 'Yes, if properly filtered. We recommend comprehensive water testing and installing appropriate whole-home filtration or UV purification systems for well water.'
      },
      {
        question: 'Who handles plumbing permits in Lake Wylie?',
        answer: 'Since Lake Wylie is an unincorporated area, plumbing permits and inspections are handled by York County.'
      }
    ]
  },
  {
    slug: 'weddington',
    stateSlug: 'north-carolina',
    name: 'Weddington',
    county: 'Union County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28104'],
    areas: ['Weddington proper', 'Aero Plantation', 'Providence', 'Hemby Bridge area'],
    intro: 'Weddington is known for its large lot sizes, strict zoning against dense development, and luxurious custom homes. The area retains a quiet, rural-suburban feel. Plumbing here often involves servicing large, sprawling estates that rely heavily on private well and septic systems rather than municipal utilities.',
    housingNotes: 'Homes in Weddington are predominantly large, high-end, and custom-built, primarily from the 1990s to the present. They often feature multiple bathrooms, complex water heating setups, and luxury fixtures.',
    localIssues: [
      {
        title: 'Well Water Hardness and Iron',
        description: 'Most homes in Weddington are on private wells, which frequently yield water with high iron content and hardness, necessitating advanced, heavy-duty water softening systems.'
      },
      {
        title: 'Septic System Maintenance',
        description: 'With nearly all homes on septic, regular maintenance and careful plumbing habits are required to prevent costly drainfield failures and backups.'
      },
      {
        title: 'High-Demand Water Heating',
        description: 'Large estates with large soaking tubs and multiple luxury showers often outgrow standard water heaters, requiring complex tankless arrays or high-capacity hybrid systems.'
      }
    ],
    popularServices: ['water-filtration', 'well-pump-repair', 'tankless-water-heater', 'drain-cleaning', 'pipe-repair'],
    nearby: ['waxhaw', 'matthews', 'indian-trail'],
    faqs: [
      {
        question: 'Do you repair well pumps in Weddington?',
        answer: 'Yes, we service and replace well pumps, pressure tanks, and handle all related interior plumbing issues stemming from well systems.'
      },
      {
        question: 'What size water heater do I need for a 5-bathroom home?',
        answer: 'For large custom homes, we often recommend installing multiple tankless water heaters in parallel to ensure endless hot water for simultaneous high-demand usage.'
      }
    ]
  },
  {
    slug: 'waxhaw',
    stateSlug: 'north-carolina',
    name: 'Waxhaw',
    county: 'Union County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28173'],
    areas: ['Downtown Waxhaw', 'Cureton', 'Marvin', 'Millbridge', 'Lawson'],
    intro: 'Waxhaw balances a historic, charming downtown with some of the fastest-growing suburban developments in the Charlotte region. The town blends the plumbing needs of 19th-century historic structures with massive new master-planned communities that demand modern, high-efficiency plumbing solutions.',
    housingNotes: 'The housing stock is highly bifurcated: aging historic homes near the downtown core and thousands of new, large suburban homes built since 2005 in sprawling neighborhoods.',
    localIssues: [
      {
        title: 'New Construction PRV Failures',
        description: 'In the rapid build-out of new neighborhoods, some builder-installed Pressure Reducing Valves fail early, leading to damaging pressure spikes in modern PEX systems.'
      },
      {
        title: 'Hard Water Scaling',
        description: 'Waxhaw’s water, whether municipal or well-sourced, tends to be hard, causing rapid scale buildup in tankless water heaters and requiring frequent descaling service.'
      },
      {
        title: 'Historic District Piping',
        description: 'Updating plumbing in the historic homes near downtown requires careful navigation of legacy materials like cast iron and galvanized steel, often complicated by crawlspace access.'
      }
    ],
    popularServices: ['tankless-water-heater', 'water-filtration', 'pipe-repair', 'leak-detection', 'toilet-repair'],
    nearby: ['weddington', 'indian-trail', 'pineville'],
    faqs: [
      {
        question: 'Why does my tankless water heater need flushing?',
        answer: 'Hard water in Waxhaw causes mineral buildup inside the heat exchanger of tankless units. Annual flushing is required to maintain efficiency and prevent premature failure.'
      },
      {
        question: 'Who manages water in Waxhaw?',
        answer: 'Union County Public Works manages water and sewer for the newer subdivisions, while many older properties outside the core still rely on well and septic.'
      }
    ]
  },
  {
    slug: 'gastonia',
    stateSlug: 'north-carolina',
    name: 'Gastonia',
    county: 'Gaston County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28052', '28054', '28056'],
    areas: ['Loray Mill', 'Crowders Mountain', 'Ashbrook', 'New Hope', 'Downtown Gastonia'],
    intro: 'Gastonia is the largest city in Gaston County, known for its rich textile history and proximity to Crowders Mountain. The city features a dense urban core of historic and mid-century homes, surrounded by newer suburban sprawl, creating a diverse set of plumbing requirements.',
    housingNotes: 'Housing includes early 20th-century mill houses, mid-century brick ranches, and an increasing number of new subdivisions. Aging infrastructure is a common theme in the central neighborhoods.',
    localIssues: [
      {
        title: 'Cast Iron Sewer Failure',
        description: 'Many homes built before the 1970s rely on original cast iron sewer lines that are now severely corroded, cracking, and suffering from heavy root intrusion.'
      },
      {
        title: 'Galvanized Water Line Corrosion',
        description: 'Older mill homes frequently still have galvanized steel water lines that restrict water flow and cause rusty, discolored water, requiring full home repiping.'
      },
      {
        title: 'Crawlspace Moisture Issues',
        description: 'High humidity and poor ventilation in older Gastonia crawlspaces often exacerbate plumbing leaks, leading to rapid rot and complicating pipe repairs.'
      }
    ],
    popularServices: ['sewer-line-repair', 'pipe-repair', 'drain-cleaning', 'water-heater-repair', 'leak-detection'],
    nearby: ['belmont', 'mount-holly', 'lake-wylie'],
    faqs: [
      {
        question: 'Does Gastonia require permits for plumbing work?',
        answer: 'Yes, the City of Gastonia requires permits for major plumbing work such as water heater installations, sewer repairs, and repiping to ensure safety and code compliance.'
      },
      {
        question: 'How do I know if my cast iron pipes are bad?',
        answer: 'Signs include frequent backups, slow drains, a sewage smell in the home, or unusually green patches of grass in your yard. A camera inspection can confirm their condition.'
      }
    ]
  },
  {
    slug: 'mount-holly',
    stateSlug: 'north-carolina',
    name: 'Mount Holly',
    county: 'Gaston County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28120'],
    areas: ['Downtown Mount Holly', 'Mountain Island Lake', 'Riverbend', 'Stonewater'],
    intro: 'Situated along the Catawba River, Mount Holly is a rapidly growing suburb that appeals to those seeking a small-town feel near Charlotte. The town’s proximity to Mountain Island Lake brings unique plumbing considerations for waterfront homes, alongside the typical needs of aging historic properties and new developments.',
    housingNotes: 'Mount Holly features a mix of historic downtown homes, mid-century neighborhoods, and newer, large-scale waterfront communities along the river and lake.',
    localIssues: [
      {
        title: 'High Water Table Challenges',
        description: 'For homes situated close to the Catawba River and Mountain Island Lake, a high water table can complicate underground plumbing repairs and increase the risk of ground shifting.'
      },
      {
        title: 'Aging Municipal Infrastructure',
        description: 'Some older neighborhoods experience fluctuating municipal water pressure and occasional sediment due to the aging nature of the town’s older water mains.'
      },
      {
        title: 'Sump Pump Reliance',
        description: 'Many homes with basements or deep crawlspaces near the water rely heavily on sump pumps to prevent flooding, requiring regular maintenance and backup systems.'
      }
    ],
    popularServices: ['sump-pump-repair', 'pipe-repair', 'water-heater-installation', 'drain-cleaning', 'leak-detection'],
    nearby: ['belmont', 'gastonia', 'charlotte'],
    faqs: [
      {
        question: 'Do you install battery backup sump pumps?',
        answer: 'Yes, for homes near the river or lake, we highly recommend and install battery backup systems to ensure your sump pump works during power outages.'
      },
      {
        question: 'Who manages water in Mount Holly?',
        answer: 'The City of Mount Holly operates its own Public Utilities department to provide water and sewer services to residents.'
      }
    ]
  },
  {
    slug: 'belmont',
    stateSlug: 'north-carolina',
    name: 'Belmont',
    county: 'Gaston County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28012'],
    areas: ['Downtown Belmont', 'Catawba Heights', 'South Point', 'McLean'],
    intro: 'Belmont is a highly sought-after town nestled between Gastonia and Charlotte, featuring a vibrant, historic downtown and extensive waterfront along the Catawba River. The plumbing landscape spans from preserving the integrity of century-old homes to servicing modern luxury estates in new waterfront developments.',
    housingNotes: 'Belmont boasts beautifully preserved historic homes, older mill villages undergoing gentrification, and massive new luxury developments like McLean on Lake Wylie.',
    localIssues: [
      {
        title: 'Historic Repiping Complexities',
        description: 'Renovating the historic homes near downtown often requires navigating tight crawlspaces, lath and plaster walls, and safely replacing mixed legacy piping systems.'
      },
      {
        title: 'Water Pressure Variability',
        description: 'As the town expands rapidly into previously rural areas like South Point, water pressure can vary significantly, requiring careful PRV management.'
      },
      {
        title: 'Luxury Fixture Installation',
        description: 'The influx of high-end custom homes on the waterfront demands expertise in installing and maintaining complex, luxury plumbing fixtures and multi-head shower systems.'
      }
    ],
    popularServices: ['pipe-repair', 'tankless-water-heater', 'fixture-installation', 'water-filtration', 'sewer-line-repair'],
    nearby: ['mount-holly', 'gastonia', 'lake-wylie', 'charlotte'],
    faqs: [
      {
        question: 'Can you update the plumbing in my historic Belmont home?',
        answer: 'Absolutely. We specialize in safely replacing old galvanized and cast-iron pipes with modern materials while minimizing disruption to historic architectural features.'
      },
      {
        question: 'Are plumbing permits required in Belmont?',
        answer: 'Yes, Gaston County Building Inspections handles the permitting and inspections for major plumbing work performed within the city limits of Belmont.'
      }
    ]
  },
  {
    slug: 'concord',
    stateSlug: 'north-carolina',
    name: 'Concord',
    county: 'Cabarrus County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28025', '28027'],
    areas: ['Historic Downtown', 'Cabarrus', 'Afton Village', 'Concord Mills area'],
    intro: 'Concord is a major suburban city northeast of Charlotte, known for its historic downtown, massive retail centers, and the Charlotte Motor Speedway. The city has experienced explosive growth, resulting in a plumbing landscape that includes 19th-century historic properties, sprawling 1990s subdivisions, and continuous new construction.',
    housingNotes: 'Housing is incredibly diverse, featuring dense historic neighborhoods with legacy cast iron, expansive 1990s neighborhoods prone to polybutylene issues, and modern new builds.',
    localIssues: [
      {
        title: 'Polybutylene Pipe Replacement',
        description: 'Many of the large subdivisions built around Concord in the late 1980s and early 1990s utilized polybutylene piping, which is now failing and requires complete home repiping.'
      },
      {
        title: 'Slab Foundation Leaks',
        description: 'A significant portion of homes built in the 70s and 80s were constructed on concrete slabs. Aging copper pipes beneath these slabs frequently develop pinhole leaks.'
      },
      {
        title: 'Hard Water Scaling',
        description: 'Concord’s municipal water can be moderately hard, leading to scale buildup in fixtures and reducing the lifespan of traditional and tankless water heaters.'
      }
    ],
    popularServices: ['pipe-repair', 'slab-leak-repair', 'water-heater-repair', 'water-filtration', 'drain-cleaning'],
    nearby: ['huntersville', 'charlotte'],
    faqs: [
      {
        question: 'Who provides water for Concord?',
        answer: 'The City of Concord Water Resources department manages the municipal water and sewer system, drawing water from multiple local reservoirs.'
      },
      {
        question: 'How do you fix a leak under a concrete slab?',
        answer: 'We use advanced leak detection equipment to locate the exact source. We can then either repair the pipe by opening a small section of the slab or, more commonly, bypass the leaking section by rerouting the pipe through the walls or attic.'
      }
    ]
  }
];
