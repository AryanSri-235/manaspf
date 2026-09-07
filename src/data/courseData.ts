export interface Module {
  number: string;
  title: string;
  iconName: string;
  topics: string[];
}

export interface Bonus {
  number: string;
  title: string;
  value: string;
  image: string;
}

export interface VideoTestimonial {
  name: string;
  role: string;
  duration: string;
  headline: string;
  videoSrc: string;
  poster: string;
}

export interface WrittenReview {
  name: string;
  source: "Google" | "Discord" | "YouTube";
  quote: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface FAQItem {
  q: string;
  a: string | string[];
}

export const siteConfig = {
  title: "Performance Marketing & Founder-Led Growth | Manas Srivastava",
  description: "Master AI-First Performance Marketing, Storytelling, and Founder-Led Growth with Manas Srivastava. 1M+ impressions, hands-on campaign scaling, and startup leadership.",
  author: "Manas Srivastava",
  mentorTitle: "Head of Growth & Performance Marketing | Founder-Led Growth | AI",
  headlineBadge: "Head of Growth @ C11CL · Co-Founder @ Markup Media",
  linkedin: "https://www.linkedin.com/in/personalbrandingmanas/",
  pricing: {
    standard: {
      priceInr: "₹2,499",
      originalPriceInr: "₹9,999",
      discountBadge: "75% off",
      usdPrice: "$29",
      amount: 249900,
      planId: "standard",
    },
    elite: {
      priceInr: "₹9,999",
      originalPriceInr: "₹29,999",
      usdPrice: "$119",
      amount: 999900,
      planId: "elite",
    },
  },
  contactEmail: "info@socialmasla.com",
};

export const heroPerks = [
  "Learn everything in simple Hindi & English.",
  "Master Facebook, Instagram, and Google Ads.",
  "No hard words, just 100% practical steps.",
];

export const mentorStats = [
  { value: "1M+ Impressions", label: "Organic & Paid", color: "text-primary", bgColor: "bg-red-50", icon: "trending-up" },
  { value: "Head of Growth", label: "Champions 11", color: "text-blue-600", bgColor: "bg-blue-50", icon: "briefcase" },
  { value: "4+ Startups", label: "Founder & Co-Founder", color: "text-green-600", bgColor: "bg-green-50", icon: "building" },
  { value: "AI & Paid Ads", label: "Full-Funnel Stack", color: "text-purple-600", bgColor: "bg-purple-50", icon: "sparkles" },
];

export const partnerBrands = [
  { name: "Champions 11", logo: "/assets/manas/c11cl.png" },
  { name: "Google", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/google.webp" },
  { name: "Meta", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/meta.webp" },
  { name: "Markup Media", logo: "/assets/manas/markup.png" },
  { name: "Edoofa", logo: "/assets/manas/edoofa.png" },
  { name: "TikTok", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/tiktok.webp" },
  { name: "Josh Talks", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/josh_talks.webp" },
  { name: "Aon", logo: "https://socialmasla-pm.pages.dev/pm/assets/teams_worked_with/compressed/aon.webp" },
];

export const roleCards = [
  {
    title: "Work with Ad Platforms",
    description: "You work with different platforms like Google Ads, Facebook Ads, Instagram Ads, and WhatsApp Ads to reach people.",
    color: "text-red-600",
    bgColor: "bg-red-50",
    icon: "target",
  },
  {
    title: "Handle Analytics",
    description: "You work on analytics using tools like Google Analytics and Google Tag Manager to see exactly what's happening.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    icon: "trending-up",
  },
  {
    title: "Creative Design",
    description: "You tap into your creative side to work on the actual ad and the design of the landing page people see.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    icon: "sparkles",
  },
  {
    title: "Understand the Funnel",
    description: "You try to understand the entire journey, from the first time someone clicks an ad to the moment they actually buy.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    icon: "users",
  },
  {
    title: "AI Makes it Easy",
    description: "It sounds technical, right? Don't worry you use AI to make all of these activities easy for you.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    icon: "layout",
  },
];

export const audienceCards = [
  {
    title: "Students",
    desc: "Learned marketing but still can't find a good job?",
    metric: "₹6–8 LPA",
    label: "starting salary",
    icon: "graduation-cap",
  },
  {
    title: "Early Marketers",
    desc: "Ready to move beyond just clicking buttons?",
    metric: "₹12–18 LPA",
    label: "3 years experience salary",
    icon: "briefcase",
  },
  {
    title: "Freelancers",
    desc: "Want to stop working for low-paying clients?",
    metric: "$40–$120 / Hr",
    label: "freelancer hourly rate",
    icon: "handshake",
  },
  {
    title: "Founders",
    desc: "Want to take control of your growth instead of just trusting agencies?",
    metric: "4x–6x ROAS",
    label: "targeted scaling potential",
    icon: "building",
  },
];

export const curriculumModules: Module[] = [
  {
    number: "01",
    title: "Basics of Digital Marketing",
    iconName: "globe",
    topics: [
      "Introduction to content and video marketing",
      "How search works (SEO, GEO, and AEO)",
      "Basics of social media marketing",
      "How email and WhatsApp marketing work",
      "Understanding websites vs landing pages",
      "Where performance marketing fits in",
    ],
  },
  {
    number: "02",
    title: "Performance Marketing Fundamentals",
    iconName: "target",
    topics: [
      "What is Performance Marketing",
      "Branding vs Performance Marketing",
      "Core Metrics & KPIs",
      "Funnel Thinking for Paid Ads",
      "Why Companies Pay for Performance",
      "The Math Behind Profitable Ads",
    ],
  },
  {
    number: "03",
    title: "Market Research & Audience Intelligence",
    iconName: "user",
    topics: [
      "Understanding Buyer Psychology",
      "Market & Competitor Research",
      "Persona Building",
      "Offer–Market Fit",
      "Finding Your 'Dream Customer'",
      "Analyzing Successful Market Patterns",
    ],
  },
  {
    number: "04",
    title: "Tracking, Attribution & Analytics",
    iconName: "crosshair",
    topics: [
      "Why Tracking Is the Backbone",
      "Pixels, Tags & Events",
      "GA4 for Marketers",
      "UTMs & Attribution Models",
      "Seeing Where Every Rupee Goes",
      "Understanding User Behaviour Patterns",
    ],
  },
  {
    number: "05",
    title: "Ad Platform Basics",
    iconName: "tag",
    topics: [
      "How Ad Network Algorithms Work",
      "Bidding Mechanics & Auctions",
      "Why Some Ads Get Cheaper Over Time",
      "Quality Scores & Platform Trust",
      "Budget Liquidity & Learning Phase",
    ],
  },
  {
    number: "06",
    title: "Google Ads",
    iconName: "google",
    topics: [
      "Account Structure & Search Intent",
      "Keyword Research & Writing Search Ads",
      "Bidding Strategies & Diagnostics",
      "Scaling Non-Search Campaigns",
      "Capturing High-Intent Customers",
    ],
  },
  {
    number: "07",
    title: "Meta Ads",
    iconName: "meta",
    topics: [
      "How Meta Ads Work & Architecture",
      "Campaign Creation & Objectives",
      "Audience Targeting Strategies",
      "Creatives That Convert",
      "Interruption-Based Marketing",
      "Scaling from ₹500 to ₹50,000/day",
    ],
  },
  {
    number: "08",
    title: "TikTok Ads",
    iconName: "music",
    topics: [
      "The Power of Vertical Video",
      "Campaign Creation & Ad Formats",
      "Creative Strategy & Hooks",
      "Targeting, Measurement & Scaling",
      "Creating Ads That Don't Look Like Ads",
    ],
  },
  {
    number: "09",
    title: "Snapchat Ads",
    iconName: "ghost",
    topics: [
      "Snapchat Platform Fit & Campaign",
      "Ad Formats & Creative Strategy",
      "Targeting the Younger Demographic",
      "Building Brand Awareness & Reach",
      "Unique Ad Formats & Engagement",
    ],
  },
  {
    number: "10",
    title: "Twitter (X) Ads",
    iconName: "x",
    topics: [
      "Platform Behaviour & Context",
      "Campaign Creation & Ad Formats",
      "Writing X Ads",
      "Context-Based Targeting",
      "Real-Time Engagement Strategies",
    ],
  },
  {
    number: "11",
    title: "LinkedIn Ads",
    iconName: "linkedin",
    topics: [
      "B2B Marketing Excellence",
      "Targeting by Job Title & Company",
      "High-Ticket Lead Generation",
      "Budgeting, CPL & Optimization",
      "Objectives & Funnel Fit",
    ],
  },
  {
    number: "12",
    title: "Advanced Shopping Campaigns",
    iconName: "shopping-cart",
    topics: [
      "Product Feeds & Data Quality",
      "Performance Max Setup",
      "Advantage+ Shopping",
      "Selling Products While You Sleep",
      "Maximizing ROI for E-commerce",
    ],
  },
  {
    number: "13",
    title: "Creative Strategy & Copywriting",
    iconName: "pen",
    topics: [
      "The 'Hook' That Stops the Scroll",
      "Why Creatives Matter (Hooks & Angles)",
      "Copywriting Frameworks",
      "High-Converting Creative Formats",
      "Storytelling for Conversions",
    ],
  },
  {
    number: "14",
    title: "AI for Performance Marketers",
    iconName: "brain-circuit",
    topics: [
      "AI Mindset Shift",
      "Connect ads account with Manus AI, ChatGPT, Claude Code",
      "Optimize and scale ads with AI",
      "AI for Copy, Images & Video",
      "AI Analysis & Rapid Workflows",
      "Data Analysis Without the Math",
    ],
  },
  {
    number: "15",
    title: "Landing Pages & CRO",
    iconName: "panels",
    topics: [
      "The 'First Impression' Rule",
      "CRO Basics & Landing Psychology",
      "Page Structure & Common Mistakes",
      "A/B Testing & The CRO Process",
      "Turning Visitors Into Buyers",
    ],
  },
  {
    number: "16",
    title: "Budgeting, Pacing & Scaling",
    iconName: "calculator",
    topics: [
      "Budgeting Basics & Break-Even Math",
      "Channel Allocation & Scaling",
      "How Much Should You Spend?",
      "Planning for Long-Term Growth",
      "Avoiding Common Budget Traps",
    ],
  },
  {
    number: "17",
    title: "Automation & Reporting",
    iconName: "settings",
    topics: [
      "Lead Automation & Reporting",
      "Automation Tools (n8n, Zapier)",
      "Setting up Alerts & QA Workflows",
      "Saving 10+ Hours Every Week",
      "Simple Dashboards for Clients",
    ],
  },
  {
    number: "18",
    title: "Privacy & Compliance",
    iconName: "shield",
    topics: [
      "Keeping Your Ad Account Safe",
      "Ad Policies & Consent Rules",
      "Future-Proofing Your Tracking",
      "Privacy Basics & Durable Tracking",
      "Compliance at Scale",
    ],
  },
  {
    number: "19",
    title: "How to Get High-Paying Clients",
    iconName: "handshake",
    topics: [
      "Sure-Shot Way to Get Clients",
      "Building Credibility",
      "Outreach Strategies",
      "Discovery Calls",
      "Getting Referrals",
    ],
  },
  {
    number: "20",
    title: "Career & Long-Term Growth",
    iconName: "trending-up",
    topics: [
      "Navigating Career Paths",
      "Getting High-Ticket Clients",
      "Pricing Your Services Correctly",
      "International Client Acquisition",
      "Building Your Personal Brand",
    ],
  },
  {
    number: "21",
    title: "Build Your Portfolio",
    iconName: "briefcase",
    topics: [
      "Build a real portfolio — no clients needed",
      "Brand, business goal & audience research",
      "Full-funnel Meta & Google Ads campaigns",
      "Creatives, landing page & tracking setup",
      "Dashboard, optimization & final case study",
    ],
  },
];

export const techStackTools = [
  { name: "Google Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_ads.jpg" },
  { name: "Meta Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/meta_ads.jpg" },
  { name: "Facebook Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/facebook_ads.jpg" },
  { name: "Instagram Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/instagram_ads.jpg" },
  { name: "TikTok Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/tiktok_ads.jpg" },
  { name: "LinkedIn Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/linkedin_ads.jpg" },
  { name: "Google Analytics 4", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_analytics_4.jpg" },
  { name: "Google Tag Manager", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_tag_manager.jpg" },
  { name: "Google Sheets", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/google_sheet.jpg" },
  { name: "X Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/twitter_x_ads.jpg" },
  { name: "Shopify", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/shopify.jpg" },
  { name: "WordPress", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/wordpress.jpg" },
  { name: "n8n", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/n8n.jpg" },
  { name: "Looker Studio", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/looker_studio.jpg" },
  { name: "Microsoft Clarity", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/microsoft_clarity.jpg" },
  { name: "ChatGPT", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/chatgpt.jpg" },
  { name: "Gemini", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/gemini.jpg" },
  { name: "Claude Code", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/claude-color.webp" },
  { name: "WhatsApp Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/whatsapp_ads.jpg" },
  { name: "Snapchat Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/snapchat_ads.jpg" },
  { name: "YouTube Ads", logo: "https://socialmasla-pm.pages.dev/pm/assets/tools_covered/compressed/youtube_ads.jpg" },
];

export const bonusList: Bonus[] = [
  {
    number: "Bonus 1",
    title: "Advanced Tracking Blueprint Kit (Full CAPI Setup)",
    value: "₹10,000",
    image: "https://socialmasla-pm.pages.dev/pm/assets/pm1/compressed/bonus1_kit.jpg",
  },
  {
    number: "Bonus 2",
    title: "Plug & Play Automation Workflows (n8n+Zapier)",
    value: "₹20,000",
    image: "https://socialmasla-pm.pages.dev/pm/assets/pm1/compressed/bonus2_automation.jpg",
  },
  {
    number: "Bonus 3",
    title: "Elite Interview Toolkit & Case Studies",
    value: "₹5,000",
    image: "https://socialmasla-pm.pages.dev/pm/assets/pm1/compressed/bonus3_interview.jpg",
  },
  {
    number: "Bonus 4",
    title: "150+ AI Marketing Prompts (ChatGPT, Gemini, Claude)",
    value: "₹5,000",
    image: "https://socialmasla-pm.pages.dev/pm/assets/pm1/bonus4_library.png",
  },
  {
    number: "Bonus 5",
    title: "100+ Claude Code Prompts (MCP Connection)",
    value: "₹5,000",
    image: "https://socialmasla-pm.pages.dev/pm/assets/pm1/bonus5_playbook.png",
  },
];

export const videoReviews: VideoTestimonial[] = [
  {
    name: "Rahul",
    role: "D2C brand operator",
    duration: "0:32",
    headline: "Scaling ad budgets with confidence",
    videoSrc: "https://vz-0831aa7f-e1f.b-cdn.net/730e4c92-7092-479d-8afe-40baede4216e/playlist.m3u8",
    poster: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/video-reviews/rahul-performance-marketing-course-video-review-poster.webp",
  },
  {
    name: "Lejin",
    role: "Career learner",
    duration: "0:27",
    headline: "Finding a clearer career direction",
    videoSrc: "https://vz-0831aa7f-e1f.b-cdn.net/f3f9aea0-4c7b-47f5-a5a5-963829f55643/playlist.m3u8",
    poster: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/video-reviews/lejin-performance-marketing-course-video-review-poster.webp",
  },
  {
    name: "Jaya",
    role: "Freelancer",
    duration: "0:55",
    headline: "Support beyond the lessons",
    videoSrc: "https://vz-0831aa7f-e1f.b-cdn.net/2c487e62-38d2-428a-adec-5f34d32d97c7/playlist.m3u8",
    poster: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/video-reviews/jaya-performance-marketing-course-video-review-poster.webp",
  },
  {
    name: "Harry",
    role: "Business learner",
    duration: "0:47",
    headline: "Applying techniques to real work",
    videoSrc: "https://vz-0831aa7f-e1f.b-cdn.net/d907c442-9eb7-4b45-af88-a7247cada915/playlist.m3u8",
    poster: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/video-reviews/harry-performance-marketing-course-video-review-poster.webp",
  },
  {
    name: "Angad",
    role: "Real estate business owner",
    duration: "0:34",
    headline: "Generating more real estate leads",
    videoSrc: "https://vz-0831aa7f-e1f.b-cdn.net/ebc5cc29-1c82-4497-a3ab-b512dbbdab4d/playlist.m3u8",
    poster: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/video-reviews/angad-performance-marketing-course-video-review-poster.webp",
  },
];

export const writtenReviews: WrittenReview[] = [
  {
    name: "Sameer Sankhla",
    source: "Google",
    quote: "Manas personally answers every query related to the course or career. I highly recommend it to anyone looking for a performance marketing course.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/sameer-sankhla-google-performance-marketing-course-review.webp",
    alt: "Five-star Google review by Sameer Sankhla",
    width: 1248,
    height: 588,
  },
  {
    name: "Sunil K Sharma",
    source: "Discord",
    quote: "I have gained a lot of confidence because of you. My past experience is really helping me out when I go on calls with clients.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/sunilk-sharma-discord-performance-marketing-course-review.webp",
    alt: "Discord review from Sunil K Sharma",
    width: 2234,
    height: 272,
  },
  {
    name: "Nishant Deo",
    source: "Discord",
    quote: "This course has the best information and knowledge. Thank you again—you deserve a 10M YouTube community.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/nishant-deo-discord-performance-marketing-course-review.webp",
    alt: "Discord course review from Nishant Deo",
    width: 1638,
    height: 208,
  },
  {
    name: "Sachin Godara",
    source: "Discord",
    quote: "I created a Gmail automation using just a mobile phone. Now I want to implement more things that combine performance marketing and automation—my learning started with you.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/sachin-godara-discord-performance-marketing-automation-course-review.webp",
    alt: "Discord review from Sachin Godara",
    width: 1550,
    height: 282,
  },
  {
    name: "Sachin Godara",
    source: "Google",
    quote: "The AI-powered performance marketing course explains concepts in a simple, practical way, even for beginners. The mix of AI tools, performance marketing strategies and real-world examples provides useful insights that can be applied to grow businesses and improve marketing results.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/sachin-godara-google-ai-performance-marketing-course-review.webp",
    alt: "Five-star Google review from Sachin Godara",
    width: 1220,
    height: 486,
  },
  {
    name: "Sameer Sankhla",
    source: "Discord",
    quote: "Seeing you reply to each of our doubts and queries without us even asking is just wow. It feels like I invested in something valuable.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/sameer-sankhla-discord-paid-performance-marketing-course-follow-up-review.webp",
    alt: "Discord follow-up review by Sameer Sankhla",
    width: 1626,
    height: 420,
  },
  {
    name: "@UmarKhan-c1t5i",
    source: "YouTube",
    quote: "After completing your course, I closed my first international client at $1,000 per month.",
    image: "https://socialmasla-pm.pages.dev/pm/assets/testimonials/paid-course/umar-khan-youtube-performance-marketing-course-international-client-review.webp",
    alt: "YouTube review by Umar Khan",
    width: 1470,
    height: 198,
  },
];

export const valueStackItems = [
  { label: "Full Performance Marketing System (21 Modules)", value: "₹10,000" },
  { label: "Bonus 1: Advanced Tracking Blueprint Kit (Full CAPI Setup)", value: "₹10,000" },
  { label: "Bonus 2: Plug & Play Automation Workflows (n8n+Zapier)", value: "₹20,000" },
  { label: "Bonus 3: Elite Interview Toolkit & Case Studies", value: "₹5,000" },
  { label: "Bonus 4: 150+ AI Marketing Prompts (ChatGPT, Gemini, Claude)", value: "₹5,000" },
  { label: "Bonus 5: 100+ Claude Code Prompts (MCP Connection)", value: "₹5,000" },
];

export const faqData: Record<string, FAQItem[]> = {
  General: [
    {
      q: "How is this course different from the courses uploaded on YouTube?",
      a: [
        "It's a structured 50+ hour exhaustive course. The YouTube courses are good to get started but when it comes to this course you are not only paying for the resources and the materials but also for the access and the networking that you will get in the community.",
        "There are some advanced strategies that we have covered related to Budgeting, Pacing, Scaling, Creative, Automation, and Reporting.",
        "You also understand the science behind getting a high-paying client, career and long-term growth prospects, and get access to a dedicated community that helps you resolve any doubt you encounter.",
      ],
    },
    {
      q: "Is there any discount available?",
      a: "The price is already kept very fair for the value you receive. Our focus is on helping you make more profit, which is worth much more than a small discount.",
    },
    {
      q: "Why is this considered the best course in India?",
      a: "Because we don't just teach you how to click buttons. We teach you how to think like a growth expert and build real systems. This is why top specialists recommend us.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you will receive a verifiable certificate after completing the course.",
    },
    {
      q: "How long will I have access to the course?",
      a: "You get lifetime access. You can watch the lessons whenever you want, as many times as you want.",
    },
    {
      q: "I don't know Hindi well. Will I be able to understand the course?",
      a: "Yes. We use simple Hindi and English. All technical terms are in English, so if you understand basic conversational Hindi, you will have no trouble.",
    },
    {
      q: "What happens immediately after I enroll?",
      a: "You will instantly receive your login credentials via email and WhatsApp so you can start learning right away.",
    },
    {
      q: "What all AI-powered strategies does this course cover?",
      a: "The course covers end-to-end AI integration including ad optimization, image & video generation, copy generation, landing page design, scaling the ads, and linking your favorite AI agents with your ad account.",
    },
  ],
  Freelancers: [
    {
      q: "How can I stop doing cheap projects for low-paying clients?",
      a: "When you stop selling 'services' and start selling 'profit,' your value goes up. This course teaches you how to deliver and prove that profit so you can charge premium prices.",
    },
    {
      q: "How can I charge 3x more than what I charge now?",
      a: "Most freelancers just 'set up' ads. When you start giving your clients real growth instead of just reports, you can easily justify charging much higher fees.",
    },
    {
      q: "I already run ads. Why should I join?",
      a: "There is a big difference between clicking buttons and knowing the logic that makes an ad successful. You’ll learn the thinking that separates the top earners from the rest.",
    },
  ],
  "Student & Aspirants": [
    {
      q: "I learned digital marketing but still can't find a high-paying job. Why?",
      a: "Most courses only teach you the basics. Companies today want experts who can actually grow their revenue. This course bridges that gap by teaching you high-level growth skills.",
    },
    {
      q: "Will this course really help me get a better job?",
      a: "Yes. You will learn skills that are in high demand but low supply. This makes you the person every company wants to hire for senior roles.",
    },
    {
      q: "I'm a complete beginner. Can I do this?",
      a: "Yes. We start from the absolute basics. Even if you have never run an ad in your life, you will be able to follow along easily.",
    },
  ],
  Founders: [
    {
      q: "How do I know if my agency is actually doing a good job?",
      a: "We show you exactly which numbers to check and what questions to ask. No more being fooled by 'vanity metrics' like impressions or clicks that don't bring sales.",
    },
    {
      q: "Is this worth my time if I don't run the ads myself?",
      a: "Yes. A founder needs to understand the engine of their business. Knowing the logic of your ads helps you make better hiring and budgeting decisions.",
    },
    {
      q: "How will this help me grow my business?",
      a: "You will stop guessing and start knowing. You will learn how to spend money on ads and actually get more money back with confidence.",
    },
  ],
};
