import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': {transform : 'translateX(-20%)'},
          '50%': {transform: 'translateX(-10%)'},
          '100%': {transform : 'translateX(0%)'}
        }
      },
      animation: {
        'wave': 'wave 0.3s linear'
      }
    },
  },
  plugins: [],
};
export default config;
