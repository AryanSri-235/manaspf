import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioConfig.name} — GTM Strategy & Performance Marketing`,
  description: `${portfolioConfig.heroHeadline} ${portfolioConfig.heroHeadlineAccent} · ${portfolioConfig.heroTagline}`,
  icons: {
    icon: "/assets/manas/manas_hero_keynote.jpg",
  },
  openGraph: {
    title: `${portfolioConfig.name} — Growth Campaigns & Performance Marketing`,
    description: `${portfolioConfig.heroHeadline} ${portfolioConfig.heroHeadlineAccent}`,
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased selection:bg-primary/20 selection:text-primary font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
