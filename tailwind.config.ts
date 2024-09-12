import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import typography from "@tailwindcss/typography";
import { dark, light } from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wuorange: "#f68714",
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
      // {
      //   myLight: {
      //     ...light,
      //     "primary": "#007F73",
      //     "secondary": "#48eddd",
      //     "accent": "#FFC700",
      //   },
      // },
      {
        myDark: {
          ...dark,
          "primary": "#48eddd",
          "secondary": "#007F73",
          "accent": "#FFC700",
        },
      },
    ],
    // darkTheme: "myDark"
  }
};
export default config;
