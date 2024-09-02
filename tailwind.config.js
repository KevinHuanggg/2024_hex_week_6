/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    extend: {

      fontFamily: {
        'serif': ['"Newsreader"', '"Noto Serif TC"', 'serif', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times, serif'],
      },

      colors: {
        primary: {
          DEFAULT: '',
          100: '#FFFDF5',
          200: '#FFFBE5',
          300: '#E8E3DA',
          400: '#6E6B67',
        },
        'accent': {
          DEFAULT: '#569573',
          200: '#569573',
        },
        'gray': {
          DEFAULT: '#343A40',          
          200: '#DEE2E6',
          300: '#ADB5BD',
          400: '#6C757D',
          500: '#343A40',
        }
      },

      fontSize: {
        xs: ["0.75rem", "1.5"],
        sm: ["0.875rem", "1.5"],
        base: ["1rem", "1.5"],
        lg: ["1.125rem", "1.5"],
        xl: ["1.25rem", "1.5"],
        "2xl": ["1.5rem", "1.5"],
        "3xl": ["1.875rem", "1.5"],
        "4xl": ["2.25rem", "1.5"],
        "5xl": ["3rem", "1.5"],
        "6xl": ["3.75rem", "1.5"],
        "7xl": ["4.5rem", "1.5"],
        "8xl": ["6rem", "1.5"],
        "9xl": ["8rem", "1.5"],
      },

      backgroundImage: {
        'banner-sm': "url('/assets/images/banner-sm.png')",
        'banner': "url('/assets/images/banner.png')",
      }
    },
    
    container: {
      center: true,
      padding: '12px',
    }
  },
  plugins: [require("@tailwindcss/forms")],
}
