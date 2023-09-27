/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mulishLight: ["mulish-light"],
        mulishRegular: ["mulish-regular"],
        mulishSemibold: ["mulish-semibold"],
        mulishBold: ["mulish-bold"],
        mulishExtrabold: ["mulish-extrabold"],
        avenirBlack: ["avenir-black"],
        avenirBook: ["avenir-book"],
        avenirHeavy: ["avenir-heavy"],
        avenirLight: ["avenir-light"],
        avenirRegular: ["avenir-regular"],
        latoBold: ["lato-bold"],
        latoBoldItalic: ["lato-bold-italic"],
        latoRegular: ["lato-regular"],
        latoSemibold: ["lato-semibold"],
        latoSemiboldItalic: ["lato-semibold-italic"],
      },
      colors: {
        primary: "#6FAA26",
        secondary: "#58B9D1",
        black: "#1A1A1A",
        lightBlue: "#A7CDD1",
        grey: "#E2E2E2",
        lightWhite: "#FDFDFD",
        black180: "#25313C",
        "grey-black180": "#6D7D8B",
        "grey-white180": "#BBC8D4",
        white180: "#DAE3EA",
        blue180: "#5A4FF3",
        green180: "#00C04D",
        yellow180: "#FFBB00",
        red180: "#ED455D",
      },
      keyframes: {
        downPointer: {
          "0%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50%)" },
          "90%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        movingPointer: "downPointer 2s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};
