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
          '0%': { translate: '-150px 0px'},
          '100%': { translate: '0px 0px'}
        },
        'fade': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' }
        },
      },
      animation: {
        'open-menu': 'open-menu ease-in-out',
        'fade': 'fade ease-in-out'
      }
    },
  },
  plugins: [],
} satisfies Config;
