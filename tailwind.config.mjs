/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
      },
      colors: {
        primary: '#0079FF',
        'primary-hover': '#60ABFF',
        light: {
          gray: '#697C9A',
          stone: '#4B6A9B',
          black: '#2B3442',
          silver: '#F6F8FF',
          white: '#FEFEFE'
        },
        dark: {
          stone: '#1E2A47',
          black: '#141D2F',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
};
