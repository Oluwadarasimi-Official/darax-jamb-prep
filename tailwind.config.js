/** @type {import('tailwindcss').Config} */
// Palette: official JAMB colours (brandfetch/jamb.gov.ng)
//   Fun Green     #006633   — primary brand / nav bar / primary actions
//   Forest Green  #1D943B   — "answered" state, positive accents
//   Cornflower    #8BB4E7   — "current" state (JAMB CBT uses blue for current)
//   Tahiti Gold   #E87E04   — warnings / highlights
// The app is light-only by design, so every colour resolves to a single value.
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        warn: 'rgb(var(--warn-rgb) / <alpha-value>)',
        danger: 'rgb(var(--danger-rgb) / <alpha-value>)',
        success: 'rgb(var(--success-rgb) / <alpha-value>)',
        info: 'rgb(var(--info-rgb) / <alpha-value>)',
        gold: '#E87E04',
        jamb: {
          50: '#EEF7F1', 100: '#D8EDDF', 200: '#B4DCC2', 300: '#83C39B',
          400: '#4CA972', 500: '#1D943B', 600: '#11803A', 700: '#006633',
          800: '#00522A', 900: '#024022',
        },
      },
      fontFamily: { sans: ['var(--font-dm-sans)', 'Inter', 'Segoe UI', 'sans-serif'] },
      borderRadius: { card: '14px' },
      boxShadow: {
        card: '0 1px 2px rgba(16,36,26,.04), 0 8px 24px rgba(16,36,26,.06)',
        lift: '0 2px 4px rgba(16,36,26,.05), 0 14px 34px rgba(16,36,26,.10)',
      },
    },
  },
  plugins: [],
};
