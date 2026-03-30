/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C09A5E',
          light: '#D4AE72',
          lighter: '#E8C992',
          glass: 'rgba(192,154,94,.1)',
        },
        cream: {
          DEFAULT: '#F4F1EB',
          dark: '#EAE6DC',
          light: '#F8F6F1',
        },
        dark: {
          DEFAULT: '#0B0B09',
          2: '#111111',
          3: '#1A1A16',
          4: '#222220',
        },
        accent: {
          DEFAULT: '#553F83',
          light: '#6B5299',
        },
        mid: '#706A62',
        muted: '#9E978F',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderColor: {
        gold: {
          DEFAULT: 'rgba(192,154,94,.18)',
          strong: 'rgba(192,154,94,.32)',
        },
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '.25', transform: 'scaleY(.4)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        widthGrow: {
          from: { width: '0' },
          to: { width: '52px' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s cubic-bezier(.4,0,.2,1) both',
        'fadeUp-d1': 'fadeUp 1s cubic-bezier(.4,0,.2,1) both 0.15s',
        'fadeUp-d2': 'fadeUp 1s cubic-bezier(.4,0,.2,1) both 0.3s',
        'fadeUp-d3': 'fadeUp 1s cubic-bezier(.4,0,.2,1) both 0.44s',
        'fadeUp-d4': 'fadeUp 1s cubic-bezier(.4,0,.2,1) both 0.55s',
        'fadeUp-d5': 'fadeUp 1s cubic-bezier(.4,0,.2,1) both 0.68s',
        fadeIn: 'fadeIn 1.4s cubic-bezier(.4,0,.2,1) both 1.2s',
        'fadeIn-stats': 'fadeIn 1.2s cubic-bezier(.4,0,.2,1) both 1s',
        slideInLeft: 'slideInLeft 0.8s cubic-bezier(.4,0,.2,1) both',
        slideInRight: 'slideInRight 0.8s cubic-bezier(.4,0,.2,1) both',
        pulse: 'pulse 2.2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
