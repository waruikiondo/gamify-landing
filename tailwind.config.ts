import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#12101C',
        primary: '#8A2BE2',
        surface: '#1E1C2A',
        textGrey: '#A09EAC',
        borderDark: '#2C2A3A',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(138, 43, 226, 0.5)',
        'neon-strong': '0 0 40px rgba(138, 43, 226, 0.8)',
      }
    },
  },
  plugins: [],
}
export default config