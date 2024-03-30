import { dark } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#3B81F6",
        secondary: "#f4f4f4",
        white: "#ffffff",
        text: {
          primary: "#3B81F6",
          light: "#6C7281",
        },
        light: {
          DEFAULT: "#FAFBFC",
          lighter: "#F3F4F6",
        },
      },
    },
  },
};
export default config;
