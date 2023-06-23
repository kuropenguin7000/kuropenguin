/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      outlineOffset: {
        16: '16px'
      },
      colors: {
        'gold-lock-100': 'hsl(38, 100%, 50%)',
        'gold-lock-200': 'hsl(50, 100%, 50%)'
      },
      backgroundImage: {
        'home': "url('@/assets/img/home.webp')"
      },
      height: {
        128: '32rem',
        '42rem': '42rem',
        '60rem': '60rem'
      }
    }
  },
  plugins: []
}
