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
        'primary-1': '#522a5b',
        'primary-2': '#923d67',
        'primary-3': '#c95b66',
        'accent-1': '#ef875e',
        'accent-2': '#ffbd5b',
        'accent-3': '#f9f871',
      }
    },
  },
  plugins: [],
}
export default config
