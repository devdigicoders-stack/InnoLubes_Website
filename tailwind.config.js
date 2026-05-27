/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#f5d98a',
          400: '#e8c14e',
          500: '#d4a017',
          600: '#b8860b',
        },
        oil: {
          dark: '#0a0a0a',
          deeper: '#111111',
          mid: '#1a1a2e',
          blue: '#0d1b3e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,160,23,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(212,160,23,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'oil-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0d1b3e 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f5d98a 50%, #b8860b 100%)',
      }
    },
  },
  plugins: [],
}
