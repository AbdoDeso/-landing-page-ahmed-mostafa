// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // important → tell Tailwind to scan for taos: variants
    './**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  }
} satisfies Config