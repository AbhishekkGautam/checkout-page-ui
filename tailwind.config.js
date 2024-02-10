/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        greyPrimary: '#1C2024',
        greySecondary: '#60646C',
        greyTertiary: '#7E808A',
        lightGrey: 'rgba(249, 249, 251, 0.25)',
        greyDisabled: '#8B8D98',
        greyDivider: '#3C3F44',
        grey: {
          100: '#FCFCFD',
          200: '#D3D4DB',
          300: '#B9BBC6',
          400: '#DDDDE3',
          500: '#EDEEF0',
          600: '#F9F9FB',
          700: '#E4E4E9',
          800: '#ADB1B8',
          900: '#7D828A',
        },
        green: {
          primary: '#299764',
          secondary: '#E9F9EE',
        },
        indigo: {
          primary: '#3A5CCC',
        },
      },
      fontFamily: {
        opensans: ['var(--font-open-sans)'],
        robotoserif: ['var(--font-roboto-serif)'],
      },
    },
  },
  plugins: [],
};
