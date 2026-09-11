import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A66C2",
          hover: "#004182",
          light: "#E8F3FD",
          surface: "#F3F8FC",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "var(--font-inter)", "system-ui", "sans-serif"],
        outfit: ["'Outfit'", "var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "brands-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "brands-scroll": "brands-scroll 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
