/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7dc5fb',
          400: '#38a5f6',
          500: '#0c87e8',
          600: '#0068c6',
          700: '#0154a1',
          800: '#064884',
          900: '#0a3c6d',
          950: '#07254a',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae5',
          300: '#abbbce',
          400: '#7d95b1',
          500: '#5e7996',
          600: '#4a617c',
          700: '#3d4f65',
          800: '#364356',
          900: '#303a4a',
          950: '#1e2431',
        },
        accent: {
          50: '#fef8ee',
          100: '#fcead5',
          200: '#f9d3aa',
          300: '#f4b675',
          400: '#ef953c',
          500: '#eb7a1a',
          600: '#d85c11',
          700: '#b44112',
          800: '#933417',
          900: '#792c17',
          950: '#41140a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}