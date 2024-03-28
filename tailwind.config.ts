import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}'],
  variants: {
    extend: {
      translate: ['dark'],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: {
        DEFAULT: '#242426',
        lighter: 'rgba(36,36,38,0.02)',
      },
      gray: {
        DEFAULT: '#48484A',
        light: '#AEAEB2',
        lighter: 'rgba(242, 242, 247, 0.1)',
      },
      blue: {
        DEFAULT: '#0A84FF',
        light: 'rgba(10, 132, 255, 0.4)',
        lighter: 'rgba(10, 132, 255, 0.1)',
      },
      orange: {
        DEFAULT: '#FF9500',
        light: 'rgba(255, 149, 0, 0.4)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwindcss-animate')],
};
export default config;
