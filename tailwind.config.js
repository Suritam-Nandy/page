const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".5rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: "#FFF",
      offWhite: "#C4CACF",
      gray: "#3C464F",
      darkGray: "#21272C",
      lightGray: "#465D68",
      blueGray: "#374B5B",
      orange: "#DB9D24",
      darkBlueGray: "#13324A",

      sky: "#067BD8",
      green: "#24DB6D",
      baseBlack: "#08090C",
    },
    extend: {},
  },
  plugins: [],
};
