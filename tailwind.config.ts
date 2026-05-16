import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fb',
          100: '#e0f3f6',
          200: '#c2e8ed',
          300: '#93d5e0',
          400: '#5abdd1',
          500: '#32a8c3',
          600: '#1a7fa8',
          700: '#1a5f7a',
          800: '#1a4a5e',
          900: '#1a3d4f',
        },
        secondary: {
          50: '#fef2f2',
          100: '#fee4e2',
          200: '#fcc9c5',
          300: '#f8a59a',
          400: '#f27d68',
          500: '#ea5e48',
          600: '#dc4c38',
          700: '#b53a2c',
          800: '#972f25',
          900: '#7d2721',
        },
        accent: {
          light: '#06b6d4',
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px rgba(26, 95, 122, 0.1)',
        'card-hover': '0 10px 25px rgba(26, 95, 122, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
