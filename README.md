# Performance Marketing Landing Page & Fullstack Next.js Template

An exact, high-fidelity replica and fullstack template of [socialmasla.com/pm](https://socialmasla.com/pm) built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pff/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── checkout/route.ts   # Fullstack API for checkout sessions & orders
│   │   │   └── lead/route.ts       # Fullstack API for capturing leads
│   │   ├── globals.css             # Brand styles, button animations, marquee
│   │   ├── layout.tsx              # Google Fonts (Inter & Outfit) & Razorpay script
│   │   └── page.tsx                # Complete landing page combining all sections
│   ├── components/
│   │   ├── FloatingCTA.tsx         # Sticky bottom-right cart button with ping ring
│   │   ├── HeroSection.tsx         # Hero banner, pricing, avatar stack, mentor card
│   │   ├── BrandsMarquee.tsx       # "Trusted By Teams At" infinite marquee
│   │   ├── RolesSection.tsx        # "What does a Performance Marketer do?"
│   │   ├── VideoSection.tsx        # "Watch This Before You Spend Another ₹1 On Ads"
│   │   ├── AudienceSection.tsx     # "Who Is This For?" with salary/ROAS highlights
│   │   ├── CurriculumSection.tsx   # 21 interactive accordion modules (100+ topics)
│   │   ├── TechStackMarquee.tsx    # Dual-row marquee showcasing 21 tools
│   │   ├── MentorSection.tsx       # Photo gallery & biography of Piyush Sachdeva
│   │   ├── BonusesSection.tsx      # "Unlock Bonuses Worth ₹45,000" (5 cards)
│   │   ├── TestimonialsSection.tsx # Video reviews + verified Google/Discord proofs
│   │   ├── ValueStackSection.tsx   # "Everything You Are Getting Today" comparison
│   │   ├── PricingSection.tsx      # Dual tiers (₹2,499 & ₹9,999) + Razorpay trigger
│   │   ├── CertificateSection.tsx  # Verified certificate credentials showcase
│   │   ├── FAQSection.tsx          # Categorized tabbed accordion FAQs
│   │   └── Footer.tsx              # Brand footer and contact links
│   └── data/
│       └── courseData.ts           # 🌟 Centralized content for easy editing!
├── tailwind.config.ts              # Brand colors (#F03E3E), fonts, custom keyframes
└── package.json
```

---

## ✏️ How to Update Content (When You're Ready)

All the text, numbers, curriculum modules, pricing, testimonials, and FAQs are centralized in **[`src/data/courseData.ts`](src/data/courseData.ts)**:

- **Site & Pricing**: Change `siteConfig.pricing` (e.g. standard price, elite price, USD equivalent).
- **Curriculum**: Add or modify modules and lesson topics in `curriculumModules`.
- **Bonuses**: Modify titles and values in `bonusList`.
- **Testimonials**: Update videos, roles, and quotes in `videoReviews` and `writtenReviews`.
- **FAQs**: Modify or add categories and questions in `faqData`.

---

## 💳 Payment & Checkout Integration

The template has checkout triggers connected to:
- Razorpay Checkout script (included in `src/app/layout.tsx`)
- Server-side order creation route (`src/app/api/checkout/route.ts`)
