import type { Config } from "tailwindcss";

export default {
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
      keyframes: {
        'open-menu': {
          '0%': { translate: '0px -150px'},
          '100%': { translate: '0px 0px'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
