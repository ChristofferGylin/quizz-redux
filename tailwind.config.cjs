/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '440px',
    },
    extend: {
      gridTemplateColumns: {
        'leaderboard': '1rem 1fr 1fr 3rem',
        'leaderboardMb': '1rem auto 3rem'
      }
    },
  },
  plugins: [],
}
