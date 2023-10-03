/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '734px',
      lg: '833px',
      xl: '1068px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        navbar: {
          background: 'rgba(251, 251, 253, .8)',
          text: 'rgba(0,0,0,0.8)',
          hover: '#000000',
          secondary: '#333336',
        },
      },
      spacing: {
        navbar: '44px',
        mNavbar: '48px',
      },
    },
  },
  plugins: [],
}
