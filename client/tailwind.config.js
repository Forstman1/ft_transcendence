/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-primary':'#121212',
        'text-primary':'#E4E4E4',
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2400px',
        '6xl': '2880px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1000px',
      'lg': '1024px',
      'xl':'1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
