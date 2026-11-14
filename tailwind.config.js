/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        roemichs: {
          50: '#f8faff', 100: '#eaf1ff', 200: '#dce8ff', 300: '#b9d0f7',
          400: '#7ea6e8', 500: '#3367c1', 600: '#2b55a0', 700: '#173b78',
          800: '#122c5c', 900: '#0c1f42', 950: '#081426',
        },
        navy: { 950: '#081426', 900: '#0c1f42', 800: '#173b78', 700: '#1d4a94', 600: '#2b55a0' },
        teal2: '#3367c1',
        daraxblue: '#3367c1',
        brand: '#3367c1',
        branddeep: '#173b78',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        warn: 'rgb(var(--warn-rgb) / <alpha-value>)',
        danger: 'rgb(var(--danger-rgb) / <alpha-value>)',
      },
      fontFamily: { sans: ['var(--font-dm-sans)', 'Inter', 'Segoe UI', 'sans-serif'] },
    },
  },
  plugins: [],
};
