/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7EC850', // Verde manzana
        secondary: '#333333',
        tertiary: '#666666',
        quaternary: '#999999',
        background: '#FFFFFF',
        light: '#FAFAFA'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        nutridiet: {
          "primary": "#7EC850",
          "secondary": "#333333", 
          "accent": "#666666",
          "neutral": "#999999",
          "base-100": "#FFFFFF",
          "base-200": "#FAFAFA",
          "base-300": "#F5F5F5",
        },
      },
    ],
  },
};