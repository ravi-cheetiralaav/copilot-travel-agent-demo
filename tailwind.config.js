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
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        // Christmas theme colors
        xmas: {
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#dc2626',
            600: '#b91c1c',
            700: '#991b1b',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#16a34a',
            600: '#15803d',
            700: '#14532d',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
          },
        },
      },
    },
  },
  plugins: [],
}
