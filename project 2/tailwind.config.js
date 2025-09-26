/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teal-primary': '#13829F',
        'slate-navy': '#333A5B',
        'warm-gold': '#F1B856',
        'fresh-green': '#4CAF50',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      }
    },
  },
  plugins: [],
};
