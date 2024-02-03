import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':	'768px',	
      'lg':	'1024px',
      '2lg': '1200px',	
      'xl':	'1280px',	
      '2xl':	'1536px',
    },
    extend: {
      animation: {
        fadeUp: 'fadeUp 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
