const { colors: defaultColors } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const colors = {
  ...defaultColors,
  ...{
    blue: {
      primary: "#044899",
      secondary: "#9EBEE2",
    },
    white: {
      primary: "#ffffff",
    },
    gray: {
      primary: "#D9D9D9",
    },
    black: {
      primary: "#232325",
    },
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
