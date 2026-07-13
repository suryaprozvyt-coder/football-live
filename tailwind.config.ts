import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          black: "#0A0A0A",
          gray: "#171717",
          "gray-light": "#262626",
          white: "#FFFFFF",
        },
        accent: {
          red: "#E11D2A",
          "red-dark": "#B0151F",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
