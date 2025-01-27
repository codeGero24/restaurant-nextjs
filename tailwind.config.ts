import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      nunito: ['Nunito', ...fontFamily.sans],
      heebo: ['Heebo', ...fontFamily.sans],
      pacifico: ['Pacifico', ...fontFamily.sans],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1500px',
    },
    extend: {
      colors: {
        colors: {
          primary: '#fea116',
          dark: '#0F172B',
          light: '#f1f8ff',
          geyser: '#DEE2E6',
        },
      },
      animation: {
        'fede-in': 'fede-in 1s ease-out',
        'fede-in-slow': 'fede-in-slow 1.5s ease-out',
        'zoom-in': 'zoom-in 1s both',
        'zoom-out': 'zoom-out 1s both',
        'pulse-border': 'pulse-border 3s linear infinite',
        'gradient-shimmer': 'gradient-shimmer 3s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'slide-in-up': 'slide-in-up 1s both',
        'slide-in-down': 'slide-in-down 1s both',
        'slide-in-right': 'slide-in-right 1s both',
        'slide-in-left': 'slide-in-left 1s both',
      },
      keyframes: {
        'fede-in': {
          '0%': { opacity: '0', transform: 'translate3d(0,20px,0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
        'fede-in-slow': {
          '0%': { opacity: '0.5', transform: 'translate3d(0,0,0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '50%': {
            opacity: '1',
          },
        },
        'zoom-out': {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
            transform: 'scale3d(0.3, 0.3, 0.3)',
          },
          '100%': {
            opacity: '0',
          },
        },
        'pulse-border': {
          '0%': {
            opacity: '1',
            transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)',
          },
        },
        'gradient-shimmer': {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translate3d(-100%,0,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-down': {
          '0%': {
            transform: 'translate3d(0,-100%,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-up': {
          '0%': {
            transform: 'translate3d(0,100%,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translate3d(100%,0,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
