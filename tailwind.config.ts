import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: '#f77317',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-gradients')],
}
export default config
