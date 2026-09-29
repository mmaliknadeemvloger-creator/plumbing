import { State, Region, City } from './types';

export const states: State[] = [
  {
    slug: 'north-carolina',
    name: 'North Carolina',
    abbreviation: 'NC',
    details: 'North Carolina requires plumbing work by licensed contractors. The state has diverse housing stock, ranging from historic homes in the early 1900s to modern new construction, demanding a wide array of plumbing expertise. Its clay-heavy soil and varying tree coverage can pose significant challenges for underground sewer and water lines. Additionally, varying municipal regulations mean permits and inspections are closely scrutinized, particularly for major replacements or additions. Local utilities manage water across different regions, impacting the hardness and sediment levels found in residential water supplies.'
  },
  {
    slug: 'south-carolina',
    name: 'South Carolina',
    abbreviation: 'SC',
    details: 'York County sits just south of the Charlotte metro and has seen massive residential and commercial growth in the last two decades. South Carolina follows specific plumbing codes and mandates appropriate permitting for extensive residential plumbing work. The area features a mix of expansive suburban developments, historic town centers, and lakefront properties, each bringing unique plumbing needs. Water quality can vary, with some communities drawing from surface water sources like Lake Wylie, while others rely on municipal or well water, requiring customized filtration and softening solutions.'
  }
];

export const regions: Region[] = [
  { name: 'Central Charlotte', slug: 'central-charlotte', cities: ['charlotte'] },
  { name: 'North Metro', slug: 'north-metro', cities: ['huntersville', 'cornelius', 'davidson', 'mooresville', 'concord'] },
  { name: 'East Metro', slug: 'east-metro', cities: ['mint-hill', 'matthews', 'indian-trail'] },
  { name: 'South Metro', slug: 'south-metro', cities: ['pineville', 'weddington', 'waxhaw'] },
  { name: 'West Metro', slug: 'west-metro', cities: ['gastonia', 'mount-holly', 'belmont'] },
  { name: 'York County SC', slug: 'york-county-sc', cities: ['fort-mill', 'rock-hill', 'tega-cay', 'lake-wylie'] }
];

export const cities: City[] = [
  {
    slug: 'charlotte',
    stateSlug: 'north-carolina',
    name: 'Charlotte',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28202', '28203', '28204', '28205', '28207', '28209', '28211', '28277', '28262', '28210'],
    areas: ['Dilworth', 'Myers Park', 'South End', 'NoDa', 'Plaza Midwood', 'University City', 'Ballantyne', 'Eastover', 'Cotswold'],
    intro: 'As the largest city in the region, Charlotte features an incredibly diverse mix of residential plumbing systems. From historic early-20th-century bungalows near Uptown to the sprawling modern developments in the southern suburbs, plumbing challenges vary widely. The rapid growth of the city has also placed increasing demand on aging municipal infrastructure, meaning homeowners often face a mix of local municipal issues and property-specific wear and tear.',
    housingNotes: 'Housing stock ranges from historic properties with cast iron and galvanized pipes in inner-ring neighborhoods to post-2000s suburban homes that may use CPVC or early PEX. Renovations in older areas often uncover decades of patch-job plumbing.',
    localIssues: [
      {
        title: 'Heavy Clay Soil Shifting',
        description: 'Charlotte’s native red clay soil expands and contracts dramatically with seasonal moisture changes, which frequently causes underground water and sewer lines to crack or belly.'
      },
      {
        title: 'Old-Growth Oak Root Intrusion',
        description: 'Mature oak trees in established neighborhoods like Myers Park and Dilworth have extensive root systems that aggressively seek out the moisture in aging terracotta or cast-iron sewer lines, leading to severe blockages.'
      },
      {
        title: 'Aging Galvanized Piping',
        description: 'Many homes built before the 1970s still have original galvanized steel water lines that are heavily corroded internally, leading to restricted water pressure and rusty water.'
      }
    ],
    popularServices: ['drain-cleaning', 'water-heater-repair', 'sewer-line-repair', 'pipe-repair', 'faucet-repair', 'toilet-repair'],
    nearby: ['huntersville', 'matthews', 'pineville', 'mint-hill'],
    faqs: [
      {
        question: 'Do I need a permit for plumbing work in Charlotte?',
        answer: 'Yes, Mecklenburg County Code Enforcement requires permits for most significant plumbing work, including water heater replacements, sewer line replacements, and repiping. Minor repairs like fixing leaks or swapping a faucet typically do not require a permit.'
      },
      {
        question: 'How hard is the water in Charlotte?',
        answer: 'Charlotte Water generally provides moderately soft water, drawn from the Catawba River and Mountain Island Lake. However, older homes with corroding pipes might experience localized sediment issues.'
      }
    ]
  },
  {
    slug: 'huntersville',
    stateSlug: 'north-carolina',
    name: 'Huntersville',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28070', '28078'],
    areas: ['Birkdale', 'Northcross', 'Rosedale', 'Skybrook', 'Macaulay'],
    intro: 'Huntersville is a thriving suburban community north of Charlotte, characterized by rapid expansion since the 1990s. The town features extensive master-planned communities and commercial centers, along with some older, more rural pockets on its outskirts. The fast pace of residential construction means many homes were built in large phases, occasionally leading to systemic plumbing issues related to specific materials or installation practices of the era.',
    housingNotes: 'Most of Huntersville’s housing stock was built from the late 1990s to the present. While generally modern, homes from the early 2000s are now reaching an age where original water heaters and builder-grade fixtures require replacement.',
    localIssues: [
      {
        title: 'Builder-Grade Fixture Failures',
        description: 'Many homes built during the boom of the late 90s and early 2000s utilized lower-cost, builder-grade plumbing fixtures and valves that are now failing and causing minor leaks.'
      },
      {
        title: 'Water Pressure Inconsistencies',
        description: 'As the town has grown rapidly, some neighborhoods on the fringes of the municipal water system occasionally experience fluctuations in water pressure, straining home plumbing components.'
      },
      {
        title: 'Early Generation PEX Issues',
        description: 'Some homes constructed in the 2000s used early formulations of PEX piping or specific fittings that are prone to premature degradation and failure.'
      }
    ],
    popularServices: ['water-heater-installation', 'faucet-repair', 'garbage-disposal-repair', 'toilet-repair', 'leak-detection'],
    nearby: ['cornelius', 'davidson', 'charlotte', 'concord'],
    faqs: [
      {
        question: 'Who handles water service in Huntersville?',
        answer: 'Charlotte Water provides municipal water and sewer services to the majority of Huntersville residents, though some more rural properties may still rely on private wells and septic systems.'
      },
      {
        question: 'Are permits required for water heater replacement here?',
        answer: 'Yes, because Huntersville is within Mecklenburg County, permits and inspections by County Code Enforcement are required when replacing a water heater to ensure safety and code compliance.'
      }
    ]
  },
  {
    slug: 'cornelius',
    stateSlug: 'north-carolina',
    name: 'Cornelius',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28031'],
    areas: ['Antiquity', 'Jetton', 'Bailey\'s Glen', 'The Peninsula', 'Oakhurst'],
    intro: 'Cornelius is a highly desirable lakeside town situated along the shores of Lake Norman. It boasts a mix of high-end waterfront properties, established suburban neighborhoods, and newer mixed-use developments. The presence of the lake influences both the lifestyle and some of the unique plumbing and environmental considerations for properties situated close to the water.',
    housingNotes: 'Housing includes luxurious custom lakefront homes, mid-century lakeside cottages that have been extensively renovated, and newer dense residential communities. High-end custom plumbing fixtures are common in waterfront estates.',
    localIssues: [
      {
        title: 'Lake Pump and Irrigation Complications',
        description: 'Many waterfront properties utilize lake water for irrigation, and cross-connection control or issues with secondary water lines can complicate residential plumbing maintenance.'
      },
      {
        title: 'High-End Fixture Maintenance',
        description: 'The prevalence of luxury homes means plumbers often deal with complex, high-end shower systems, specialized fixtures, and advanced water filtration setups that require specialized knowledge.'
      },
      {
        title: 'Septic System Constraints',
        description: 'While much of Cornelius is on municipal sewer, some older or secluded lakefront properties still use septic systems, which require careful water usage management and are sensitive to heavy rains.'
      }
    ],
    popularServices: ['tankless-water-heater', 'fixture-installation', 'pipe-repair', 'water-filtration', 'drain-cleaning'],
    nearby: ['huntersville', 'davidson', 'mooresville'],
    faqs: [
      {
        question: 'Does Cornelius have its own water department?',
        answer: 'No, Cornelius is serviced by Charlotte Water for municipal water and sewer. Billing and maintenance of the main lines are handled through the county system.'
      },
      {
        question: 'Can you work on plumbing for boat docks?',
        answer: 'We specialize in residential interior and immediate exterior plumbing. While we handle water lines running from the house, specific marine plumbing on docks may require specialized contractors.'
      }
    ]
  },
  {
    slug: 'davidson',
    stateSlug: 'north-carolina',
    name: 'Davidson',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28036'],
    areas: ['River Run', 'Westbranch', 'Downtown Davidson', 'Summers Walk', 'Pages Pond'],
    intro: 'Davidson is a picturesque college town known for its historic main street, extensive greenways, and strong community planning. The town balances historic preservation with careful new development. Plumbing in Davidson spans from maintaining century-old systems in historic homes to installing modern, high-efficiency plumbing in new construction and upscale communities.',
    housingNotes: 'The historic district features homes dating back to the late 1800s and early 1900s, often presenting challenges with legacy piping. Newer communities like River Run offer modern, sprawling estates with complex plumbing demands.',
    localIssues: [
      {
        title: 'Historic Preservation Constraints',
        description: 'Updating plumbing in historic homes near the college often requires careful planning to preserve architectural integrity while meeting modern building codes.'
      },
      {
        title: 'Mixed Piping Materials',
        description: 'Due to decades of renovations, it is common to find a single home in Davidson with a mix of galvanized, copper, CPVC, and PEX piping, requiring careful transitional fittings.'
      },
      {
        title: 'Tree Root Intrusions',
        description: 'The town is heavily wooded and takes pride in its tree canopy. These mature trees frequently infiltrate older sewer lines, especially terracotta pipes in established neighborhoods.'
      }
    ],
    popularServices: ['sewer-line-repair', 'pipe-repair', 'water-heater-repair', 'drain-cleaning', 'leak-detection'],
    nearby: ['cornelius', 'huntersville', 'mooresville'],
    faqs: [
      {
        question: 'Are there special rules for plumbing in Davidson’s historic district?',
        answer: 'Interior plumbing repairs generally follow standard Mecklenburg County codes, but exterior work like sewer line excavation must be carefully coordinated to avoid disturbing historic landscapes or requiring historical commission approval.'
      },
      {
        question: 'Who manages the water supply here?',
        answer: 'Like the rest of Mecklenburg County, Davidson’s municipal water and sewer are managed by Charlotte Water.'
      }
    ]
  },
  {
    slug: 'mooresville',
    stateSlug: 'north-carolina',
    name: 'Mooresville',
    county: 'Iredell County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28115', '28117'],
    areas: ['The Point', 'Langtree', 'Downtown Mooresville', 'Curtis Pond', 'Brawley School Peninsula'],
    intro: 'Known as "Race City USA," Mooresville is a rapidly expanding town in Iredell County, heavily influenced by the motorsports industry and its extensive shoreline along Lake Norman. The area has transitioned from a small textile town to a major suburban hub, resulting in a wide spectrum of housing and plumbing infrastructure.',
    housingNotes: 'Mooresville features original mill homes near downtown, vast 1990s subdivisions, and ultra-luxury waterfront estates on the Brawley School peninsula. This diversity requires broad plumbing expertise.',
    localIssues: [
      {
        title: 'Well Water Hardness',
        description: 'Many properties, especially outside the immediate downtown area or on large lots, rely on well water which often has high mineral content, requiring robust water softening systems.'
      },
      {
        title: 'Long Sewer Lateral Runs',
        description: 'Homes on the expansive lots of the Brawley School peninsula often have very long sewer lateral lines, making them more susceptible to settling, clogs, and costly repairs.'
      },
      {
        title: 'Polybutylene Pipe Presence',
        description: 'A significant number of homes were built during the 1980s and early 1990s when polybutylene piping was common. These pipes are notorious for failing and often require full home repiping.'
      }
    ],
    popularServices: ['water-filtration', 'pipe-repair', 'tankless-water-heater', 'sewer-line-repair', 'drain-cleaning'],
    nearby: ['davidson', 'cornelius'],
    faqs: [
      {
        question: 'Does Mooresville use Charlotte Water?',
        answer: 'No, Mooresville is in Iredell County and has its own municipal Public Utilities Department for water and sewer, which operates under different local regulations and billing than Mecklenburg County.'
      },
      {
        question: 'How do I know if I have polybutylene pipes?',
        answer: 'Polybutylene pipes are usually gray plastic and were commonly installed between 1978 and 1995. If you suspect you have them, a licensed plumber can inspect your system and recommend repiping options.'
      }
    ]
  },
  {
    slug: 'mint-hill',
    stateSlug: 'north-carolina',
    name: 'Mint Hill',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28227'],
    areas: ['Mint Hill proper', 'Bain Creek', 'Olde Sycamore', 'Farmwood', 'Cheval'],
    intro: 'Mint Hill offers a more relaxed, suburban-rural feel compared to the rest of the Charlotte metro area. It is known for larger lot sizes and a strong sense of community. The plumbing landscape here often bridges the gap between traditional municipal setups and rural property systems, demanding a versatile approach to plumbing service.',
    housingNotes: 'Housing is a mix of mid-century brick ranches, large custom homes on sprawling wooded lots, and newer suburban enclaves. Many properties have expansive yards that impact exterior plumbing.',
    localIssues: [
      {
        title: 'Septic System Prevalence',
        description: 'Due to larger lot sizes and rural origins, a higher percentage of homes in Mint Hill rely on private septic systems rather than municipal sewer, requiring careful plumbing habits to prevent system failure.'
      },
      {
        title: 'Well Water Filtration Needs',
        description: 'Many properties operate on private wells that frequently draw hard water or water with high iron content, necessitating whole-home filtration and softening systems.'
      },
      {
        title: 'Exterior Line Freezing',
        description: 'With longer runs of exterior piping and sometimes shallower initial installations on older rural properties, exposed or poorly insulated pipes are at a higher risk of freezing during severe winter dips.'
      }
    ],
    popularServices: ['water-filtration', 'well-pump-repair', 'drain-cleaning', 'water-heater-installation', 'pipe-repair'],
    nearby: ['matthews', 'charlotte', 'indian-trail'],
    faqs: [
      {
        question: 'Do you service homes on well water in Mint Hill?',
        answer: 'Yes, we provide extensive plumbing services for homes on well water, including installing and servicing water filtration, softeners, and addressing interior pressure issues.'
      },
      {
        question: 'Who issues plumbing permits for Mint Hill?',
        answer: 'Mint Hill relies on Mecklenburg County Code Enforcement for building and plumbing permits and inspections.'
      }
    ]
  },
  {
    slug: 'matthews',
    stateSlug: 'north-carolina',
    name: 'Matthews',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28104', '28105'],
    areas: ['Weddington Chase', 'Downtown Matthews', 'Deerfield Creek', 'Brightmoor', 'Sardis Forest'],
    intro: 'Matthews is a bustling, family-oriented suburb with a charming, historic downtown. It sits just southeast of Charlotte and features a dense mix of residential neighborhoods, commercial corridors, and historic properties. The town’s plumbing needs are typical of mature suburbs, with a significant volume of homes reaching the age where major systems require overhaul.',
    housingNotes: 'Much of the suburban growth in Matthews occurred between the 1980s and early 2000s. These homes are now seeing their original plumbing fixtures, water heaters, and sometimes piping reach the end of their useful lifespans.',
    localIssues: [
      {
        title: 'Aging Slab Foundations',
        description: 'Many neighborhoods built in the 70s and 80s were constructed on concrete slab foundations. Plumbing lines running beneath these slabs are now aging, leading to complex and hidden slab leaks.'
      },
      {
        title: 'Failing PRVs (Pressure Reducing Valves)',
        description: 'Matthews experiences areas of high municipal water pressure. Many homes rely on PRVs that are now failing due to age, causing sudden spikes in home water pressure and subsequent fixture leaks.'
      },
      {
        title: 'Mature Tree Root Blockages',
        description: 'Established neighborhoods like Sardis Forest have large, mature trees whose roots aggressively invade older sewer lines, necessitating frequent professional drain clearing or trenchless repairs.'
      }
    ],
    popularServices: ['slab-leak-repair', 'drain-cleaning', 'water-heater-repair', 'toilet-repair', 'pipe-repair'],
    nearby: ['mint-hill', 'charlotte', 'indian-trail', 'pineville'],
    faqs: [
      {
        question: 'Why is my water pressure suddenly so high in Matthews?',
        answer: 'High water pressure is often caused by a failing Pressure Reducing Valve (PRV) on your main water line. It’s important to replace it quickly to prevent damage to your pipes and appliances.'
      },
      {
        question: 'Are plumbing inspections required for renovations here?',
        answer: 'Yes. Matthews is in Mecklenburg County, so significant plumbing modifications require a permit and inspection from the county to ensure everything is up to code.'
      }
    ]
  },
  {
    slug: 'indian-trail',
    stateSlug: 'north-carolina',
    name: 'Indian Trail',
    county: 'Union County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28079'],
    areas: ['Sun Valley', 'Hemby Bridge', 'Lake Park', 'Brandon Oaks', 'Bonterra'],
    intro: 'Indian Trail is one of the fastest-growing towns in Union County, offering a blend of suburban convenience and more relaxed, spread-out living. The rapid pace of development has transformed the area from rural farmland to dense subdivisions, bringing a host of modern plumbing demands and infrastructure growing pains.',
    housingNotes: 'The vast majority of housing is new construction or built within the last 20 years. These homes heavily utilize modern materials like PEX and CPVC, though rapid construction sometimes leads to installation-related issues.',
    localIssues: [
      {
        title: 'Hard Water and Sediment',
        description: 'Union County water sources can sometimes have higher mineral and sediment content, leading to scale buildup in water heaters and reducing the lifespan of plumbing fixtures.'
      },
      {
        title: 'CPVC Brittleness',
        description: 'Many homes built in the 1990s and 2000s used CPVC piping, which becomes increasingly brittle with age and is prone to snapping or leaking, especially near hot water sources.'
      },
      {
        title: 'New Construction Settling',
        description: 'Rapidly built subdivisions sometimes experience soil settling, which can shift underground utility lines and cause stress or minor separations in sewer and water laterals.'
      }
    ],
    popularServices: ['water-filtration', 'water-heater-repair', 'pipe-repair', 'faucet-repair', 'leak-detection'],
    nearby: ['matthews', 'mint-hill', 'weddington', 'waxhaw'],
    faqs: [
      {
        question: 'Who is the water provider for Indian Trail?',
        answer: 'Union County Public Works provides water and sewer services for the majority of Indian Trail, utilizing water treated at the Catawba River Water Treatment Plant.'
      },
      {
        question: 'Why do my faucets have white crusty buildup?',
        answer: 'This is usually caused by hard water minerals (calcium and magnesium) in the local water supply. Installing a whole-home water softener can eliminate this scale buildup and protect your fixtures.'
      }
    ]
  },
  {
    slug: 'pineville',
    stateSlug: 'north-carolina',
    name: 'Pineville',
    county: 'Mecklenburg County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['28134'],
    areas: ['Carolina Place', 'McMullen Creek', 'Downtown Pineville', 'Danby', 'McCullough'],
    intro: 'Pineville is a small but bustling town that serves as a major commercial and retail hub for the southern Charlotte metro area. Despite its small geographic footprint, it has a rich history as an old railroad and mill town, which contrasts with the dense, newer residential developments springing up on its borders.',
    housingNotes: 'Housing here includes historic mill houses built in the early to mid-1900s, sprawling 1980s ranch homes, and newer high-density townhome communities. This age spread means plumbing systems are highly varied.',
    localIssues: [
      {
        title: 'Historic Home Pipe Degradation',
        description: 'The oldest homes in Pineville frequently suffer from severely degraded cast iron sewer lines and galvanized water pipes that require complete replacement.'
      },
      {
        title: 'High Water Table and Drainage',
        description: 'Parts of Pineville, especially near local creeks, have a higher water table which can complicate underground plumbing work and increase the risk of ground shifting.'
      },
      {
        title: 'Townhome Shared Line Complications',
        description: 'In the denser townhome communities, plumbing issues like major clogs or main line leaks can sometimes affect multiple units, requiring careful diagnosis to determine responsibility and source.'
      }
    ],
    popularServices: ['sewer-line-repair', 'pipe-repair', 'drain-cleaning', 'water-heater-installation', 'toilet-repair'],
    nearby: ['charlotte', 'matthews', 'fort-mill'],
    faqs: [
      {
        question: 'Does Pineville have its own water system?',
        answer: 'No, Pineville is integrated into the Charlotte Water system for municipal water and sewer services.'
      },
      {
        question: 'Do you service the older mill homes in downtown Pineville?',
        answer: 'Yes, we have extensive experience working with the legacy plumbing systems often found in Pineville’s historic homes, including safe upgrades to modern codes.'
      }
    ]
  },
  {
    slug: 'fort-mill',
    stateSlug: 'south-carolina',
    name: 'Fort Mill',
    county: 'York County',
    status: 'PUBLISHED',
    officeAddress: null,
    zips: ['29707', '29708', '29715'],
    areas: ['Baxter Village', 'Tega Cay area', 'Riverwalk', 'Kingsley', 'Springfield', 'Regent Park'],
    intro: 'Fort Mill is a rapidly booming town located just across the South Carolina border from Charlotte. Known for its excellent schools and family-friendly atmosphere, the town has seen explosive residential growth. The plumbing landscape is dominated by large, newer subdivisions, though the historic downtown area presents its own unique, older plumbing challenges.',
    housingNotes: 'The vast majority of homes in Fort Mill were built after 2000, heavily utilizing modern PEX piping and tankless water heaters. However, the sheer volume of rapid construction occasionally leads to builder-grade failures.',
    localIssues: [
      {
        title: 'Builder-Grade Water Heater Failures',
        description: 'Many subdivisions built in the early 2000s were outfitted with standard builder-grade water heaters that are now simultaneously failing across entire neighborhoods.'
      },
      {
        title: 'High Water Pressure Zones',
        description: 'Due to the town’s topography and water infrastructure design, certain neighborhoods experience very high municipal water pressure, necessitating functional PRVs to protect home plumbing.'
      },
      {
        title: 'Hard Water in New Developments',
        description: 'Residents in newer developments often report hard water issues that lead to premature wear on modern, high-efficiency appliances and tankless water heaters without proper filtration.'
      }
    ],
    popularServices: ['tankless-water-heater', 'water-heater-repair', 'water-filtration', 'faucet-repair', 'leak-detection'],
    nearby: ['rock-hill', 'tega-cay', 'pineville', 'charlotte'],
    faqs: [
      {
        question: 'Are plumbing codes different in Fort Mill since it is in SC?',
        answer: 'Yes, Fort Mill follows South Carolina building and plumbing codes. Our team is fully licensed and knowledgeable regarding the specific requirements for York County.'
      },
      {
        question: 'Who provides water service to Fort Mill?',
        answer: 'The Town of Fort Mill Utilities Department provides water and sewer service to the town, though some outlying areas may be serviced by York County or private utilities.'
      }
    ]
  }
];

export function cityLabel(city: City): string {
  const state = states.find(s => s.slug === city.stateSlug);
  const abbr = state ? state.abbreviation : '';
  return `${city.name}, ${abbr}`;
}
