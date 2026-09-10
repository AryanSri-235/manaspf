export interface ProofCaseStudy {
  id: string;
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  results: string[];
  metricLabel: string;
  metricValue: string;
}

export interface GrowthWay {
  id: string;
  name: string;
  headline: string;
  body: string;
  punchline: string;
  emoji: string;
  bullets: string[];
}

export const portfolioConfig = {
  name: "MANAS",
  fullName: "Manas Srivastava",
  role: "GTM Strategy | Performance | AI Campaigns | LinkedIn",
  heroHeadline: "I DON'T FOLLOW THE MARKETING PLAYBOOK.",
  heroHeadlineAccent: "I TEST IT, BREAK IT, AND FIND WHAT WORKS.",
  heroSubtext: "I work at the intersection of GTM Strategy, Performance Marketing, AI-powered Campaigns and LinkedIn Personal Branding.\n\nThe goal isn't just to make something look good or get attention.\n\nThe goal is to know whether it generated leads, revenue, growth—or absolutely nothing.\n\nBecause if you can't measure marketing, you're mostly guessing.",
  heroTagline: "Creative thinking × Data × AI × Experimentation",
  coreStatement: "Creative enough to get attention.\nData-driven enough to prove it worked.",
  pillarsSummary: "GTM Strategy × Performance Marketing × AI Campaigns × LinkedIn Growth",
  linkedinUrl: "https://www.linkedin.com/in/personalbrandingmanas/",
  whatsappUrl: "https://wa.me/919999999999?text=Hi%20Manas,%20I'd%20like%20to%20talk%20about%20growth%20campaigns.",
  email: "contact@manassrivastava.com",
};

export const proofCaseStudies: ProofCaseStudy[] = [
  {
    id: "case-01",
    number: "01",
    tag: "US Meta Ads · Acquisition",
    title: "International Lead Generation",
    subtitle: "From an idea → to actual conversions",
    description: "A creative campaign designed to do more than collect views. Engineered with rigorous US audience testing, tailored messaging, and continuous cost optimization.",
    results: [
      "₹5–₹40 CPL on High-Value US Leads",
      "Consistent Inbound Lead Qualification",
      "Scalable Paid Acquisition Funnel"
    ],
    metricLabel: "Cost Per Lead",
    metricValue: "₹5–₹40 CPL",
  },
  {
    id: "case-02",
    number: "02",
    tag: "Head of Growth · Scaling",
    title: "Champions 11 Cricket League (C11CL)",
    subtitle: "Performance over vanity metrics.",
    description: "Campaigns where every rupee spent had a question attached: “What are we getting back?” Full-funnel campaign architecture combining AI creatives and targeted paid media.",
    results: [
      "1M+ Targeted Reach & Community Growth",
      "Measurable Full-Funnel Registration Volume",
      "High-Converting AI Creatives + Multi-Channel Rollout"
    ],
    metricLabel: "Total Reach",
    metricValue: "1M+ Impressions",
  },
  {
    id: "case-03",
    number: "03",
    tag: "AI Creatives · Rapid Sprint",
    title: "Jagannath Yatra Sprint & Bano Champion",
    subtitle: "Attention is useless if it doesn't lead anywhere.",
    description: "Creative campaigns built to capture attention and move people toward action. From producing an AI-generated anthem with Suno AI to driving 48-hour sprint sales.",
    results: [
      "30+ Completed Sales in 48 Hours",
      "Viral Suno AI Campaign Theme Song Anthem",
      "Contextual Creative Hooks Turning Intent Into Action"
    ],
    metricLabel: "Sprint Result",
    metricValue: "30+ Sales in 48h",
  },
];

export const fourWays: GrowthWay[] = [
  {
    id: "01",
    name: "GTM STRATEGY",
    headline: "Before spending money, know where you're going.",
    body: "A good product can fail with bad positioning. I help businesses think through:\n• Who are we targeting?\n• Why should they care?\n• What message will make them act?\n• Which channels should we test first?",
    punchline: "The objective is simple: Reduce guesswork before increasing spend.",
    emoji: "🎯",
    bullets: [
      "Ideal Customer Profile (ICP) & Buyer Intent",
      "Positioning & Message-Market Fit",
      "Channel Prioritization & Sequencing",
      "Budget Allocation Hypotheses"
    ],
  },
  {
    id: "02",
    name: "PERFORMANCE MARKETING",
    headline: "If we're spending money, we should know what we're getting back.",
    body: "I work on performance campaigns across lead generation, e-commerce and customer acquisition.\n\nBut I don't believe in running ads just because “the campaign got 2 million impressions.”\n\nCool. Did the business grow? That's the question.",
    punchline: "I focus on metrics that actually affect the business: CPL • CAC • Conversion Rate • ROAS • Revenue. Marketing should be measurable. Period.",
    emoji: "📈",
    bullets: [
      "Meta Ads & Multi-Channel Paid Campaigns",
      "Continuous A/B Angle & Creative Testing",
      "CAPI & Full-Funnel Conversion Tracking",
      "Predictable ROAS & Cost-per-Lead Scaling"
    ],
  },
  {
    id: "03",
    name: "AI-POWERED CAMPAIGNS",
    headline: "AI doesn't replace creativity. It multiplies experimentation.",
    body: "I use AI across creative ideation, copywriting, scripting, visual production, creative testing, and campaign experimentation.\n\nThe advantage? Test more ideas. Move faster. Learn quicker. Instead of spending weeks producing one campaign, we can explore multiple directions and identify what actually works.",
    punchline: "AI is not the strategy. Knowing what to test is.",
    emoji: "⚡",
    bullets: [
      "Rapid Hook & Angle Ideation",
      "AI Visuals, Video Scripts & Audio (Suno AI)",
      "Multi-Variant Campaign Experimentation",
      "Fast Turnaround Creative Iteration"
    ],
  },
  {
    id: "04",
    name: "LINKEDIN DISTRIBUTION",
    headline: "Your profile shouldn't just be an online resume.",
    body: "Most founders and professionals treat LinkedIn as a passive CV. I turn it into an active distribution and inbound acquisition engine that breaks generic patterns and builds durable authority.",
    punchline: "Turn founder authority into an inbound lead-generation engine.",
    emoji: "🔵",
    bullets: [
      "Scroll-Stopping Founder Content",
      "Pattern-Interrupt Positioning",
      "Inbound Profile Funnel Architecture",
      "High-Value Discovery DMs & Leads"
    ],
  },
];

export const linkedInFramework = {
  headline: "LINKEDIN IS MY PLAYGROUND.",
  subheadline: "BUT I DON'T TREAT IT LIKE EVERYONE ELSE.",
  intro: "LinkedIn is a professional platform. Which means people expect:",
  cliches: [
    "Corporate announcements",
    "Generic motivation",
    "“5 lessons my CEO taught me”",
    "The same recycled carousel"
  ],
  punchline: "And that's exactly why I believe in breaking the pattern.\n\nGive people something they don't expect—while still giving them something valuable.\n\nThat's how attention works.",
  steps: [
    {
      num: "01",
      title: "STOP THE SCROLL",
      desc: "The first job of content is simple. Make people stop."
    },
    {
      num: "02",
      title: "CREATE A POINT OF VIEW",
      desc: "Don't sound like everyone. Have an opinion. Even if some people disagree. Because nobody remembers safe content."
    },
    {
      num: "03",
      title: "BUILD TRUST",
      desc: "Attention without credibility is temporary. The content needs to show: What you know. What you've done. How you think."
    },
    {
      num: "04",
      title: "TURN ATTENTION INTO OPPORTUNITY",
      desc: "Getting impressions is not the final goal. The goal is to create: Conversations → Relationships → Opportunities → Leads."
    }
  ],
  bottomQuote: "Your LinkedIn shouldn't just be your online resume. It can become your distribution and lead-generation engine.",
  stats: [
    { value: "1M+", label: "Impressions Generated" },
    { value: "100+", label: "Inbound Conversations" },
    { value: "50+", label: "Opportunities Created" }
  ]
};

export const aboutPhilosophy = {
  whyHeader: "SO, WHY WORK WITH ME?",
  whyText: "Because I probably won't tell you:\n\n“This is how everyone in the industry does it.”\n\nI'm naturally curious about things that haven't been tested yet. I like experimenting. I like taking creative risks. And I like finding answers through data instead of assumptions.\n\nSometimes the experiment works. Sometimes it doesn't.\n\nBut either way: We learn something. And that learning helps us build the next campaign better.",
  philosophyHeader: "MY MARKETING PHILOSOPHY",
  philosophyPoints: [
    "Be creative enough to stand out.",
    "Be smart enough to measure everything.",
    "Be curious enough to keep experimenting."
  ],
  pillars: "GTM Strategy • Performance Marketing • AI Campaigns • LinkedIn Growth",
  ctaHeadline: "GOT SOMETHING WORTH GROWING?",
  targets: [
    "A product.",
    "A business.",
    "A campaign.",
    "Or a personal brand."
  ],
  ctaBody: "Let's figure out how to get it in front of the right people—and make sure the results actually make sense."
};
