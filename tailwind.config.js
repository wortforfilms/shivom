/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './elements/**/*.{js,ts,jsx,tsx,mdx}',
    './canvas/**/*.{js,ts,jsx,tsx,mdx}',
    './sty/**/*.{js,ts,jsx,tsx,mdx}'

  ],
  theme: {
    extend: {
colors:{
...colors
},
      animation:{
        'spin-slow': 'spin 24s linear infinite'
      },
      backgroundOpacity: ['active'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
