const colorPallete = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Montserrat Alternates", "sans-serif"],
      serif: ["Poiret One", "cursive"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    colorPallete: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      slate: colorPallete.slate,
      zinc: colorPallete.zinc,
      gray: colorPallete.gray,
      neutral: colorPallete.neutral,
      stone: colorPallete.stone,
      red: colorPallete.red,
      orange: colorPallete.orange,
      amber: colorPallete.amber,
      yellow: colorPallete.yellow,
      lime: colorPallete.lime,
      green: colorPallete.green,
      emerald: colorPallete.emerald,
      teal: colorPallete.teal,
      cyan: colorPallete.cyan,
      sky: colorPallete.sky,
      blue: colorPallete.blue,
      indigo: colorPallete.indigo,
      violet: colorPallete.violet,
      purple: colorPallete.purple,
      fuchsia: colorPallete.fuchsia,
      pink: colorPallete.pink,
      rose: colorPallete.rose,
    },
  },
  plugins: [],
};
