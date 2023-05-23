/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-principal)',
        alt: 'var(--font-bai-jamjuree)',
      },

      colors: {
        blue: {
          50: '#06c7c0',
          100: '#03045e',
          200: '#02034b',
          300: '#020241',
          400: '#010238',
          500: '#01022f',
          600: '#010125',
          700: '#00011c',
          800: '#000012',
          900: '#000009',
        },
        yellow: {
          50: '#fbf8cc',
          100: '#e1dfb7',
          200: '#c8c6a3',
          300: '#afad8e',
          400: '#96947a',
          500: '#7d7c66',
          600: '#646351',
          700: '#4b4a3d',
          800: '#323128',
          900: '#191814',
        },
      },
    },
  },
  plugins: [],
}
