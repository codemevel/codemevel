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
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-gradients'),
    // eslint-disable-next-line global-require
    require('@tailwindcss/typography'),
  ],
}
export default config
