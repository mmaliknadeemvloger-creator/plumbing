import { CityService } from './types';

export const cityServices: CityService[] = [
  {
    citySlug: 'charlotte',
    stateSlug: 'north-carolina',
    serviceSlug: 'drain-cleaning',
    status: 'PUBLISHED',
    localAngle: [
      'In Charlotte, our heavy red clay soil and dense canopy of old-growth oak trees create the perfect storm for drain and sewer line issues. As the clay soil expands and contracts with seasonal rainfall, it places immense pressure on underground pipes, frequently causing them to shift or develop small cracks. Once a crack forms, the aggressive root systems of Charlotte’s iconic mature trees quickly seek out the moisture inside the line, leading to severe root intrusions and stubborn blockages.',
      'Additionally, the wide variety of housing stock across the Queen City means drain cleaning isn\'t a one-size-fits-all job. Historic homes in neighborhoods like Dilworth and Plaza Midwood often still rely on original cast iron or terracotta pipes, which are highly susceptible to scaling and root damage. Meanwhile, newer homes in Ballantyne or University City might experience clogs from modern usage habits, like excessive use of garbage disposals. Our drain cleaning approach in Charlotte always starts with understanding the specific age and material of your home\'s plumbing.'
    ],
    localFaqs: [
      {
        question: 'Are tree roots in my sewer line covered by Charlotte Water?',
        answer: 'Charlotte Water is only responsible for the main sewer line in the street and the lateral line up to your property line (usually at the cleanout near the street). Any clogs or root intrusions occurring between your house and the property line cleanout are the homeowner\'s responsibility.'
      },
      {
        question: 'Does the red clay soil cause my drains to back up?',
        answer: 'Indirectly, yes. The expansive clay soil common in Charlotte shifts significantly between our wet winters and dry summers. This shifting can cause pipes to sag (creating "bellies" where debris catches) or crack, which eventually leads to a backup inside your home.'
      }
    ]
  },
  {
    citySlug: 'charlotte',
    stateSlug: 'north-carolina',
    serviceSlug: 'water-heater-repair',
    status: 'PUBLISHED',
    localAngle: [
      'Charlotte\'s climate and water quality play a significant role in the lifespan and performance of your water heater. While Charlotte Water generally provides high-quality, moderately soft water from the Catawba River, older municipal mains and aging home pipes can introduce sediment into your system. Over time, this sediment settles at the bottom of your water heater tank, reducing efficiency, increasing energy bills, and eventually leading to loud popping noises and premature tank failure if not regularly flushed.',
      'Furthermore, Charlotte experiences hot, humid summers and occasionally freezing winter nights. Water heaters located in unconditioned spaces—like garages, crawlspaces, or unfinished basements—must work much harder during winter temperature drops. This thermal stress frequently exposes underlying issues, making winter our busiest season for emergency water heater repairs across Mecklenburg County. Recognizing early warning signs like lukewarm water or minor leaks can save Charlotte homeowners from a major, costly replacement.'
    ],
    localFaqs: [
      {
        question: 'Do I need a permit to replace a water heater in Charlotte?',
        answer: 'Yes. Mecklenburg County Code Enforcement mandates that all water heater replacements require a plumbing permit and a post-installation inspection to ensure the new unit meets current safety and venting codes.'
      },
      {
        question: 'How often should I flush my water heater in Charlotte?',
        answer: 'We recommend flushing your traditional tank water heater at least once a year. If you live in an older Charlotte neighborhood where sediment buildup is more common, or if you have a tankless unit, annual maintenance is critical to preserve the warranty and lifespan.'
      }
    ]
  },
  {
    citySlug: 'fort-mill',
    stateSlug: 'south-carolina',
    serviceSlug: 'sewer-line-repair',
    status: 'PUBLISHED',
    localAngle: [
      'Fort Mill is one of the fastest-growing towns in South Carolina, and this rapid development brings unique challenges to underground sewer lines. Much of the town\'s newer housing stock, built over the last two decades, was constructed quickly to meet high demand. Unfortunately, we frequently see issues related to the original installation, such as improperly bedded pipes or soil settling around new foundations, which can cause modern PVC sewer lines to sag, separate, or fail prematurely.',
      'For the older, established neighborhoods near downtown Fort Mill, the challenges are different. These homes often still rely on aging cast iron or terracotta sewer lines that have simply reached the end of their useful life. These legacy pipes are highly vulnerable to corrosion and root intrusion from large, established trees. Whether dealing with new construction settling in Baxter Village or aging infrastructure near Main Street, addressing a sewer line issue promptly is vital to protect your property and prevent severe health hazards.'
    ],
    localFaqs: [
      {
        question: 'Is a sewer line repair disruptive to my landscaping?',
        answer: 'It depends on the location and severity of the damage. Whenever possible, we utilize trenchless sewer repair technologies that require minimal digging. However, if the pipe is severely collapsed or improperly sloped, traditional excavation may be necessary.'
      },
      {
        question: 'Who do I call first if I smell sewage in Fort Mill?',
        answer: 'If the smell or backup is only occurring inside your home, call a licensed plumber immediately to diagnose the issue. If you notice a major backup in the street or at the main cleanout, contact the Town of Fort Mill Utilities Department.'
      }
    ]
  }
];
