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
        green: {
          100: "#C8E3B5",
          200: "#9FCE7D",
          300: "#77BA47",
          400: "#5E9438",
          500: "#476F2A",
          DEFAULT: "#77BA47",
        },
        cyan: {
          100: "#E7F3F4",
          200: "#C4E2E4",
          300: "#A0D1D3",
          400: "#6DB8BB",
          500: "#459396",
          DEFAULT: "#A0D1D3",
        },
        black: {
          100: "#BABABA",
          200: "#878787",
          300: "#202020",
          400: "080808",
          500: "000000",
          DEFAULT: "#202020",
        },
        gray: {
          100: "#FFFFFF",
          200: "#FCFCFC",
          300: "#F4F4F4",
          400: "#C2C2C2",
          500: "#8F8F8F",
          DEFAULT: "#F4F4F4",
        },
        lime: {
          100: "#E9F9E1",
          200: "#BAECA2",
          300: "#8ADF60",
          400: "#5FCC29",
          500: "#418C1C",
          DEFAULT: "#8ADF60",
        },
        blue: {
          100: "#A9E6EF",
          200: "#69D3E3",
          300: "#28C0D7",
          400: "#1C8696",
          500: "#104D56",
          DEFAULT: "#28C0D7",
        },
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
  plugins: [require("tailwindcss-animate")],
};

export default config;
