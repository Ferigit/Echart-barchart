/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      base: {
        white: 'var(--base-white)',
        black: 'var(--base-black)',
        background: 'var(--base-background)',
      },
      transparent: 'transparent',
      disabled: '#C9C9C9',
      primary: {
        DEFAULT: '#39B8C6',
        accent: '#92C8BB',
      },

      background: {
        DEFAULT: '#F9F9F9',
        leftMenu: '#EFEFEF',
      },
      grey:{
        DEFAULT: 'var(--text-grey)',
      },
      green: {
        DEFAULT: 'var(--green-100)',
        '100': 'var(--green-100)',
        '200': 'var(--gray-200)',
      },

    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Adamina', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '0px 0px 8px 4px rgba(62, 49, 108, 0.05)'
      }
    },
  },
  plugins: [],
}

