// Sparent Science: the monthly newsletter for the adults who surround young
// people. One issue is one object here. Add an issue by adding an object to
// ISSUES; the journal home, the topic pages and the issue page render from it.
//
// Every issue follows the same arc the Lifeguard deck set: the research, the
// tool, the conversation, your move. Sections are typed so the arc stays
// consistent as the archive grows.

export type TopicKey = 'identity' | 'mental-health' | 'race-culture' | 'relationships' | 'grief' | 'boundaries';

export interface TopicDef {
  key: TopicKey;
  label: string;
  blurb: string;
}

export const TOPICS: TopicDef[] = [
  {
    key: 'identity',
    label: 'Identity',
    blurb: 'Self-efficacy, autonomy, and the slow work of a young person deciding who they are.',
  },
  {
    key: 'mental-health',
    label: 'Mental Health',
    blurb: 'What the research says about adolescent stress, withdrawal, and resilience, and what a trusted adult can do this week.',
  },
  {
    key: 'race-culture',
    label: 'Race & Culture',
    blurb: 'Raising and teaching Black and culturally complex young people inside systems that were not built to see them.',
  },
  {
    key: 'relationships',
    label: 'Relationships',
    blurb: 'Peers, partners, mentors, and the adults at home. How connection is built, and how it is lost.',
  },
  {
    key: 'grief',
    label: 'Grief',
    blurb: 'Loss in adolescence: the kinds that get named and the kinds that do not.',
  },
  {
    key: 'boundaries',
    label: 'Boundaries',
    blurb: 'Saying no, holding a line, and the safety that comes from knowing where it is.',
  },
];

export type Section =
  | {
      kind: 'points';
      kicker: string;
      heading: string;
      lede?: string;
      points: string[];
      quote?: { text: string; cite: string };
    }
  | {
      kind: 'compare';
      kicker: string;
      heading: string;
      lede?: string;
      columns: { label: string; rows: [string, string][]; featured?: boolean }[];
      note?: string;
    }
  | {
      kind: 'number';
      kicker: string;
      number: string;
      heading: string;
      points: { title: string; body: string }[];
      close?: string;
    }
  | {
      kind: 'checklist';
      kicker: string;
      heading: string;
      lede?: string;
      groups: { title: string; items: { label: string; detail?: string }[] }[];
      close?: string;
    }
  | {
      kind: 'say';
      kicker: string;
      heading: string;
      lede?: string;
      say: string[];
      avoid: { line: string; why: string }[];
    }
  | {
      kind: 'steps';
      kicker: string;
      heading: string;
      lede?: string;
      steps: { title: string; body: string; detail?: string }[];
      note?: string;
    }
  | {
      kind: 'cards';
      kicker: string;
      heading: string;
      lede?: string;
      cards: { title: string; body: string }[];
      close?: string;
    };

export interface IssueImage {
  /** Path under public/, e.g. /sparent/job-math.jpg. Drop a file in and set this; the vignette steps aside. */
  src: string;
  alt: string;
  /** Photographer or source, shown as a caption. */
  credit?: string;
}

export interface Issue {
  slug: string;
  volume: number;
  number: number;
  title: string;
  subtitle: string;
  /** Shown to readers. Free text so a season can stand in when a month is not the point. */
  dateLabel: string;
  /** ISO date used only for ordering. */
  sortDate: string;
  topic: TopicKey;
  audience: string;
  summary: string;
  tryThis?: string;
  image?: IssueImage;
  sections: Section[];
  yourMove: { title: string; body: string }[];
  download?: { label: string; href: string; note?: string };
}

/** The issue after the latest one. Teased on the journal home; arrives in inboxes first. */
export const NEXT_ISSUE: {
  volume: number;
  number: number;
  title: string;
  topic: TopicKey;
  summary: string;
  tryThis: string;
} = {
  volume: 3,
  number: 12,
  title: 'When Your Teenager Won’t Talk',
  topic: 'relationships',
  summary:
    'Adolescent silence is data, not rejection. This issue breaks down the science of teen withdrawal and gives you three evidence-based approaches for reconnecting without pressure.',
  tryThis:
    'Ask one open question today. Not “How was school?” but “What’s something you’re thinking about?” Then wait.',
};

const jobMath: Issue = {
  slug: 'the-job-math-conversation',
  volume: 3,
  number: 11,
  title: 'The Job Math Conversation',
  subtitle: 'How to help your teen work smarter this summer.',
  dateLabel: 'Summer 2026',
  sortDate: '2026-05-01',
  topic: 'identity',
  audience: 'For the caregivers, mentors, and coaches of teens 15 to 17 who are thinking about a first job.',
  summary:
    'A first job can buy a summer back or spend it. The lifeguard math, what the certification actually takes, and how to raise it with a teenager without pressure.',
  tryThis: 'Show your teen the two-path comparison. Don’t narrate it. Let them react.',
  sections: [
    {
      kind: 'points',
      kicker: 'Why this matters',
      heading: 'What we know about teen first jobs.',
      points: [
        'Early positive work experiences are strongly linked to long-term financial confidence and economic stability.',
        'Adolescents who hold jobs they find meaningful show higher self-efficacy and lower rates of hopelessness.',
        'Trusted adults play a critical role. Teens are more likely to pursue higher-wage opportunities when a caregiver actively validates the goal.',
        'The summer job gap disproportionately affects youth who lack social capital. This resource is a leveler.',
      ],
      quote: {
        text: 'These young people weren’t hopeless. They were under-resourced, over-surveilled, and under-believed. The data just confirmed what they already knew.',
        cite: 'Dr. Erica L. Tartt, PhD · Founder & Research Director, US-Squared Research Institute',
      },
    },
    {
      kind: 'compare',
      kicker: 'The two paths',
      heading: 'Show them. Don’t tell them.',
      lede: 'Share this comparison with your teen and let the numbers do the talking.',
      columns: [
        {
          label: 'Standard teen job',
          rows: [
            ['Pay', '$7.25/hr'],
            ['Hours per week', '40'],
            ['Summer hours', '400'],
            ['Summer pay', '~$2,900'],
            ['Free time', 'Very little'],
          ],
        },
        {
          label: 'Certified lifeguard',
          featured: true,
          rows: [
            ['Pay', '$18–22/hr'],
            ['Hours per week', '~12'],
            ['Summer hours', '~120'],
            ['Summer pay', '~$2,400'],
            ['Free time', 'Abundant'],
          ],
        },
      ],
      note: 'Ohio example: Columbus City Parks pays $20/hr. Look up your city’s Parks & Rec rate to compare.',
    },
    {
      kind: 'number',
      kicker: 'The 280-hour equation',
      number: '280',
      heading: 'hours of your teen’s life bought back every summer.',
      points: [
        { title: 'Autonomy', body: 'Teens with more free time develop stronger self-direction and intrinsic motivation.' },
        {
          title: 'Bandwidth',
          body: '280 hours is time for rest, creativity, relationships. The raw material of adolescent flourishing.',
        },
        {
          title: 'Less grind is not less work ethic',
          body: 'A teenager who works smarter models resource efficiency, a skill that compounds.',
        },
      ],
      close: 'Time is the only resource you can’t replace. This conversation is worth having.',
    },
    {
      kind: 'checklist',
      kicker: 'What the certification actually requires',
      heading: 'So you can answer when your teen says “I don’t know if I can do it.”',
      groups: [
        {
          title: 'The physical test',
          items: [
            { label: 'Swim 150 yards', detail: 'front crawl or breaststroke' },
            { label: 'Tread water for 2 minutes', detail: 'legs only, no hands' },
            { label: 'Swim 50 more yards immediately after' },
            { label: 'Dive to retrieve a 10 lb brick from 7–10 ft' },
            { label: 'Swim back on their back holding it with both hands' },
            { label: 'Exit the pool without using the ladder' },
          ],
        },
        {
          title: 'The course structure',
          items: [
            { label: 'Online modules', detail: '~8 hours of videos, completable at home' },
            { label: 'In-person skills', detail: '~20 hours over 2 days' },
            { label: 'Written test', detail: '80% to pass. Mostly recall and common sense' },
            { label: 'Attendance', detail: '100% required. Plan for no conflicts' },
            { label: 'Certification', detail: 'American Red Cross, nationally recognized' },
          ],
        },
      ],
      close: 'Bottom line for you: this is manageable, time-bounded, and proven. Thousands of teens do it every summer.',
    },
    {
      kind: 'say',
      kicker: 'How to raise it',
      heading: 'Lead with curiosity, not pressure.',
      lede: 'Your teen’s ownership of the decision matters most.',
      say: [
        '“I found something that might be interesting. Want to look at the math together?”',
        '“What would you do with 280 hours of free time this summer?”',
        '“The test is intense, but it’s only two days. What would make it worth trying?”',
        '“Do you want to look up whether our city has a Parks & Rec pool that hires lifeguards?”',
      ],
      avoid: [
        { line: '“You should get a lifeguard job.”', why: 'Directive framing removes teen ownership.' },
        { line: '“Why won’t you just try it?”', why: 'Pressure triggers avoidance, not motivation.' },
        { line: '“The test isn’t that hard.”', why: 'Dismisses real fear. A motivation killer.' },
        { line: '“Other kids do this at your age.”', why: 'Comparison undermines safety and identity.' },
      ],
    },
    {
      kind: 'steps',
      kicker: 'Finding opportunities near you',
      heading: 'Built to work anywhere in the U.S.',
      lede: 'Here is how to localize it.',
      steps: [
        {
          title: 'Find the public pool',
          body: 'Search “[Your City] Parks and Recreation aquatic center.”',
          detail: 'City and county facilities almost always pay above minimum wage, often two times or more.',
        },
        {
          title: 'Call and ask two questions',
          body: 'Do you hire teen lifeguards? Is the Red Cross certification fee waived or reimbursed upon hiring?',
        },
        {
          title: 'YMCA as backup',
          body: 'ymca.net/find-your-y offers nationwide Red Cross certification.',
          detail: 'Same credential, available in most cities if municipal dates don’t align.',
        },
        {
          title: 'Red Cross course finder',
          body: 'redcross.org, then “Lifeguard Certification,” then search by zip code.',
          detail: 'The official course finder for every certified location near you.',
        },
      ],
      note: 'Ohio reference: Columbus Aquatic Center · 1160 Hunter Ave · 614-645-6122 · aquaticcenter@columbus.gov',
    },
    {
      kind: 'cards',
      kicker: 'The resume angle',
      heading: 'What your teen is actually earning.',
      lede: 'Beyond the paycheck, these credentials follow them into college applications, job interviews, and volunteering.',
      cards: [
        {
          title: 'CPR / AED',
          body: 'Nationally recognized American Red Cross certification. Valued in healthcare, childcare, education, and service sectors.',
        },
        {
          title: 'First aid',
          body: 'Included in certification. Signals preparation and care for others. Stands out on any application.',
        },
        {
          title: 'Leadership',
          body: 'Trusted with the physical safety of entire pools of people at 15 to 17 years old. That is not a line item. It is a story.',
        },
        {
          title: 'Crisis management',
          body: 'Trained to identify emergencies, make fast decisions, and execute under pressure. A genuinely rare skill at any age.',
        },
      ],
      close: 'One summer. Four credentials. One powerful story for every future application.',
    },
  ],
  yourMove: [
    {
      title: 'Share the math with your teen.',
      body: 'Show them the two-path comparison. Don’t narrate it. Let them react.',
    },
    {
      title: 'Search your city’s Parks & Rec together.',
      body: 'Google “[Your City] Parks Recreation lifeguard jobs.” Make it a ten-minute research session.',
    },
    {
      title: 'Book the pre-course skills evaluation.',
      body: 'Most aquatic centers offer a low-pressure appointment to test readiness. No commitment required.',
    },
  ],
  download: {
    label: 'Download the slide deck',
    href: '/downloads/SparentScience_LifeguardDeck.pptx',
    note: 'Nine slides, made to share with your teen or with a room of caregivers.',
  },
};

export const ISSUES: Issue[] = [jobMath];
