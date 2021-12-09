const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    purge: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        screenLessHeader: "calc(100vh - 96px)",
        screenLessHeaderAndFooter: "calc(100vh - 64px - 120px)",
      },
      minHeight: {
        screenLessHeaderAndFooter: "calc(100vh - 64px - 120px)",
      },
      colors: {
        // Colors you want to add go here
        transparent: "transparent",
        current: "currentColor",
        primary: colors.lime,
        gray: colors.warmGray,
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        auto: "auto",
      },
      screens: {
        xs: "479px",
        ...defaultTheme.screens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
