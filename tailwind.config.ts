import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'super-sm': '375px',
      'sm': '640px',
      'ml': '425px',
      'md': '768px',
      'lg': '1024px',
      'super-lg': '1440px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        span: "var(--span)"
      },
      keyframes: {
        'open-menu': {
          '0%': { translate: '-150px 0px'},
          '100%': { translate: '0px 0px'}
        },
        'open-user-menu': {
          '0%': { translate: '0px 50px', opacity: '0'},
          '100%': { translate: '0px 0px', opacity: '1'}
        },
        'fade': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'open-menu': 'open-menu ease-in-out',
        'fade': 'fade ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
