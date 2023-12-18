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
      '3xl': '2560px',
    },
    extend: {
      colors: {
        navbar: {
          background: 'rgba(250, 250, 252)',
          darkBackground: 'rgba(22, 22, 23, .8)',
          text: 'rgba(0,0,0,0.8)',
          hover: '#000000',
          secondary: '#333336',
        },
        footer: {
          background: '#f5f5f7',
          border: '#d2d2d7',
          text: '#6e6e73',
          link: '#424245',
          title: '#1d1d1f',
        },
        link: {
          light: '#06c',
          dark: '#2997ff',
        },
      },
      maxWidth: {
        largeTV: '2560px',
      },
    },
  },
  plugins: [],
}
