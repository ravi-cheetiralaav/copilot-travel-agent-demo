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
        // Orange theme colors
        'theme-primary': {
          50: 'var(--theme-primary-50)',
          100: 'var(--theme-primary-100)',
          500: 'var(--theme-primary-500)',
          600: 'var(--theme-primary-600)',
          700: 'var(--theme-primary-700)',
        },
        'theme-secondary': {
          50: 'var(--theme-secondary-50)',
          100: 'var(--theme-secondary-100)',
          500: 'var(--theme-secondary-500)',
          600: 'var(--theme-secondary-600)',
          700: 'var(--theme-secondary-700)',
        },
      },
    },
  },
  plugins: [],
}
