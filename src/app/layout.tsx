import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { portfolioConfig } from "@/data/portfolioData";

const inter = localFont({
  src: "../../public/fonts/inter-var.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const outfit = localFont({
  src: "../../public/fonts/outfit-var.woff2",
  variable: "--font-outfit",
  display: "swap",
  weight: "100 900",
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
