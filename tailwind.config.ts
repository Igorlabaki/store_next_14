import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('/assets/images/carroucel/banner2.png')",
      },
      fontFamily: {
        tenor: ['var(--font-tenor-sans)'],
        bondoni: ['var(--font-bondoni-nova)'],
      },
      colors:{
        'custom-orange' : '#DD8560',
        'custom-white'  : '#D6D6D6',
        'custom-black'  : '#000000',
        'custom-gray-dark' : '#333333',
        'custom-gray-reg' :  '#555555',
        'custom-gray-ligth' :  '#888888',
      }
    },
  },
  plugins: [],
}
export default config
