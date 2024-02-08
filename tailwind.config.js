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
        grey: {
          100: '#FCFCFD',
          200: '#D3D4DB',
          300: '#B9BBC6',
          400: '#DDDDE3',
        },
      },
      fontFamily: {
        'open-sans': 'var(--font-open-sans)',
        'roboto-serif': 'var(--font-roboto-serif)',
      },
    },
  },
  plugins: [],
};
