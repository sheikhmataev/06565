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
      },
      boxShadow: {
        'custom-soft': '0 10px 30px -15px rgba(82, 42, 91, 0.2), 0 4px 6px -2px rgba(82, 42, 91, 0.05)',
        'custom-soft-hover': '0 20px 40px -15px rgba(82, 42, 91, 0.3), 0 8px 10px -4px rgba(82, 42, 91, 0.1)',
      }
    },
  },
  plugins: [],
}
export default config
