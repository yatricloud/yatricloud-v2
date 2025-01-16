/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          lighter: '#818CF8',
          dark: '#4338CA',
          darker: '#3730A3'
        },
        secondary: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          lighter: '#D1D5DB',
          dark: '#4B5563',
          darker: '#374151'
        },
        accent: {
          DEFAULT: '#EC4899',
          light: '#F472B6',
          lighter: '#F9A8D4',
          dark: '#DB2777',
          darker: '#BE185D'
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite -3s',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'tilt': 'tilt 10s infinite linear',
        'wave': 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' }
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'gradient-xy': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transformOrigin: {
        'center-left': '0 50%',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      rotate3d: {
        'flip': ['1', '0', '0', '180deg'],
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}