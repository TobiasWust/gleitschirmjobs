import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import typography from "@tailwindcss/typography";
import { dark } from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    typography,
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...dark,
          "primary": "#4CCD99",
          "secondary": "#007F73",
          "accent": "#FFC700",
          // "neutral": "#4CCD99",
          // "base-100": "#233423",
          // 007F73
        },
      },
    ],
  }
};
export default config;
