import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#b800ff",
          "secondary": "#7d8e00",
          "accent": "#00b8ff",
          "neutral": "#140801",
          "base-100": "#20213c",
          "info": "#0076d3",
          "success": "#00c683",
          "warning": "#ff7800",
          "error": "#cc3147",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
