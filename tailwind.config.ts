import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FDE68A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Black Ops One"', "Impact", "sans-serif"],
      },
      boxShadow: {
        "glow-amber": "0 0 20px rgba(245, 158, 11, 0.35)",
        "glow-amber-lg": "0 0 40px rgba(245, 158, 11, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
