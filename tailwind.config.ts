import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna utama brand
        "brand-primary": "#6faa26",
        "brand-secondary": "#58b9d1",

        // Warna netral
        "brand-black": "#1a1a1a",
        "brand-grey": "#e2e2e2",
        "brand-light-blue": "#a7cdd1",
        "brand-light-white": "#fdfdfd",

        // Warna 180 series
        "brand-black-180": "#25313c",
        "brand-grey-black-180": "#6d7d8b",
        "brand-grey-white-180": "#bbc8d4",
        "brand-white-180": "#dae3ea",
        "brand-blue-180": "#5a4ff3",
        "brand-green-180": "#00c04d",
        "brand-yellow-180": "#ffbb00",
        "brand-red-180": "#ed455d",
      },
      fontFamily: {
        // Mulish fonts
        "mulish-light": ["var(--font-mulish-light)"],
        "mulish-regular": ["var(--font-mulish-regular)"],
        "mulish-semibold": ["var(--font-mulish-semibold)"],
        "mulish-bold": ["var(--font-mulish-bold)"],
        "mulish-extrabold": ["var(--font-mulish-extrabold)"],

        // Avenir fonts
        "avenir-black": ["var(--font-avenir-black)"],
        "avenir-book": ["var(--font-avenir-book)"],
        "avenir-heavy": ["var(--font-avenir-heavy)"],
        "avenir-light": ["var(--font-avenir-light)"],
        "avenir-regular": ["var(--font-avenir-regular)"],

        // Lato fonts
        "lato-bold": ["var(--font-lato-bold)"],
        "lato-bold-italic": ["var(--font-lato-bold-italic)"],
        "lato-regular": ["var(--font-lato-regular)"],
        "lato-light": ["var(--font-lato-light)"],
        "lato-light-italic": ["var(--font-lato-light-italic)"],
        "lato-semibold": ["var(--font-lato-semibold)"],
        "lato-semibold-italic": ["var(--font-lato-semibold-italic)"],
      },
      animation: {
        "moving-pointer": "downPointer 2s ease-in-out infinite",
      },
      keyframes: {
        downPointer: {
          "0%, 10%, 90%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50%)" },
        },
      },
      aspectRatio: {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
