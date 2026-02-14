import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FEFAE0",
        "cream-dark": "#F5F0C8",
        "forest": "#2D5016",
        "forest-light": "#3A6B1E",
        "bark": "#4A3728",
        "bark-light": "#6B5344",
      },
      screens: {
        print: { raw: "print" },
      },
      minHeight: {
        touch: "48px",
      },
      minWidth: {
        touch: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
