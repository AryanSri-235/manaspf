export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface CaseStudy {
  id: string;
  flag?: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  image?: string;
}

export interface AudienceItem {
  title: string;
  icon: string;
  desc: string;
  badge: string;
}

export const portfolioConfig = {
  name: "Manas Srivastava",
  title: "Growth Marketer & Campaign Strategist",
  heroHeadline: "I Build Growth Campaigns That People Notice. And Businesses Can Measure.",
  heroSubtitle: "Performance Marketing × AI Campaigns × Creative Strategy × LinkedIn Personal Branding",
  heroDescription: "I help businesses, founders and individuals turn attention into measurable growth.",
  linkedinUrl: "https://www.linkedin.com/in/personalbrandingmanas/",
  email: "manas@example.com", // or contact
  calendarUrl: "https://cal.com", // booking link or direct modal
};

export const credibilityStats = [
  {
    value: "₹5–₹40 CPL",
    label: "On International Campaigns",
    sublabel: "US-focused Meta Ads with granular targeting & A/B testing",
    color: "text-primary",
    bgColor: "bg-blue-50",
    icon: "target",
  },
  {
    value: "1M+ Impressions",
    label: "Organic & Paid Growth",
    sublabel: "Campaigns engineered for scroll-stopping attention",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: "trending-up",
  },
  {
    value: "4+ Startups",
    label: "Built, Scaled & Tested",
    sublabel: "Real skin in the game: C11CL, Markup Media, BlockBuddy & PureWashr",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: "building",
  },
  {
    value: "AI × Performance",
    label: "Next-Gen Campaign Stack",
    sublabel: "Combining AI creative generation with data-driven paid advertising",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: "sparkles",
  },
];

export const fourWays = [
  {
    id: "01",
    title: "Performance Marketing",
    emoji: "📈",
    description: "Meta Ads, Lead Generation, Campaign Optimization, A/B Testing and Scaling.",
    deliverables: ["Full-Funnel Meta Ad Campaigns", "Continuous A/B Testing & Optimization", "Granular Lead Tracking & Analytics", "Budget Scaling & Pacing Control"],
    color: "text-primary",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-100",
  },
  {
    id: "02",
    title: "AI-Powered Campaigns",
    emoji: "🤖",
    description: "AI Creatives, AI Ads, Campaign Concepts and faster creative experimentation.",
    deliverables: ["AI-Generated Ad Creatives & Video Scripts", "Suno AI Audio & Theme Tracks", "Rapid Angle & Hook Iteration", "Contextual Creative Positioning"],
    color: "text-purple-600",
    bgColor: "bg-purple-50/80",
    borderColor: "border-purple-100",
  },
  {
    id: "03",
    title: "Creative Campaign Strategy",
    emoji: "💡",
    description: "Ideas people remember—not just ads people scroll past.",
    deliverables: ["Scroll-Stopping Hooks & Angles", "Psychological Offer-Market Fit", "Brand Storytelling That Sells", "High-Converting Landing Copy"],
    color: "text-amber-600",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100",
  },
  {
    id: "04",
    title: "LinkedIn Personal Branding",
    emoji: "🔵",
    description: "Helping founders and professionals turn LinkedIn into a personal brand and lead-generation engine.",
    deliverables: ["Profile Audit & Positioning Overhaul", "Founder-Led Inbound Content", "Authority Building & Social Proof", "Direct Inbound Lead Funnels"],
    color: "text-blue-600",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-100",
  },
];

export const targetAudiences: AudienceItem[] = [
  {
    title: "Founders",
    icon: "🚀",
    desc: "You have a great business. Now let's get more people to know about it.",
    badge: "Founder-Led Growth",
  },
  {
    title: "Businesses",
    icon: "🏢",
    desc: "You need measurable leads, customers and scalable growth.",
    badge: "Revenue & Leads",
  },
  {
    title: "Professionals",
    icon: "👤",
    desc: "You want your LinkedIn profile to build authority and open high-ticket doors.",
    badge: "Personal Brand",
  },
  {
    title: "Brands",
    icon: "🎯",
    desc: "You need campaigns that don't look like every other boring corporate ad.",
    badge: "Creative Impact",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "international-leads",
    flag: "🇺🇸",
    badge: "Meta Ads & Paid Growth",
    title: "International Lead Generation",
    highlight: "₹5–₹40 CPL on High-Value Leads",
    description: "US-focused campaigns using Meta Ads, detailed targeting, A/B testing and continuous optimization to maintain ultra-low cost per acquisition while driving validated leads.",
    tags: ["Meta Ads", "A/B Testing", "US Lead Gen", "CPL Optimization"],
    metricLabel: "Cost Per Lead",
    metricValue: "₹5–₹40 CPL",
  },
  {
    id: "c11cl-growth",
    flag: "🏏",
    badge: "Head of Growth",
    title: "Champions 11 Cricket League (C11CL)",
    highlight: "AI × Performance × Creative Campaigns",
    description: "End-to-end campaign strategy, Meta Ads management, AI-generated creatives, and multi-channel growth experiments to scale registration and fan engagement.",
    tags: ["Campaign Strategy", "Meta Ads", "AI Creatives", "Sports Marketing"],
    metricLabel: "Core Impact",
    metricValue: "Full-Funnel Scale",
  },
  {
    id: "bano-champion",
    flag: "🎵",
    badge: "AI Creative Experiment",
    title: "Bano Champion Anthem",
    highlight: "We Made a Campaign Song Using AI",
    description: "From initial campaign concept to a fully produced AI-generated theme song using Suno AI, turning an ordinary promotion into an emotional anthem that captured viral community attention.",
    tags: ["Suno AI", "Creative Strategy", "Campaign Song", "Viral Audio"],
    metricLabel: "Content Type",
    metricValue: "AI Theme Song",
  },
  {
    id: "jagannath-yatra",
    flag: "🛕",
    badge: "Contextual AI Ads",
    title: "Jagannath Yatra Campaign",
    highlight: "30+ Sales in 2 Days",
    description: "Leveraged contextual AI creatives and real-time cultural campaign timing to connect with high-intent devotees, converting cold interest into 30+ completed sales within 48 hours.",
    tags: ["Contextual AI", "Rapid Scaling", "E-commerce", "48-Hour Sprint"],
    metricLabel: "Speed to Result",
    metricValue: "30+ Sales in 48h",
  },
];

export const marketingStack = [
  { name: "Meta Ads", category: "Paid Acquisition", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/meta_ads.jpg" },
  { name: "ChatGPT", category: "AI Strategy", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/chatgpt.jpg" },
  { name: "Claude", category: "Deep Copywriting", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/claude-color.webp" },
  { name: "Suno AI", category: "AI Music & Audio", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/tiktok.webp" },
  { name: "AI Creative Tools", category: "Visual Generation", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/wordpress.jpg" },
  { name: "Google Analytics", category: "Analytics & Tracking", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_analytics_4.jpg" },
  { name: "Canva", category: "Visual Design", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_ads.jpg" },
  { name: "LinkedIn", category: "Personal Branding", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/linkedin_ads.jpg" },
  { name: "Meta Pixel", category: "Attribution & CAPI", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_tag_manager.jpg" },
  { name: "AI Automation", category: "n8n & Workflows", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/n8n.jpg" },
];

export const whyWorkFramework = [
  { step: "01", name: "The Idea", desc: "Finding the unique angle that makes people stop scrolling." },
  { step: "02", name: "The Creative", desc: "AI-assisted visuals, video scripts, and high-converting copy." },
  { step: "03", name: "The Audience", desc: "Pinpoint targeting, buyer psychology, and intent analysis." },
  { step: "04", name: "The Funnel", desc: "Frictionless landing pages and smooth conversion paths." },
  { step: "05", name: "The Data", desc: "Pixel tracking, UTM attribution, and real-time ROAS feedback." },
  { step: "06", name: "The Result", desc: "Measurable revenue, verified leads, and predictable scaling." },
];

export const linkedInPillars = [
  { title: "Your Credibility Engine", desc: "Prove you know your craft before you even hop on a discovery call." },
  { title: "Your Content Platform", desc: "Turn raw thoughts into high-engagement thought leadership posts." },
  { title: "Your Networking Tool", desc: "Connect directly with decision-makers, founders, and investors." },
  { title: "Your Inbound Lead Generator", desc: "Wake up to qualified DMs from people who already want what you do." },
];
