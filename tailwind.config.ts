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
    },
  },
  plugins: [],
};
export default config;
