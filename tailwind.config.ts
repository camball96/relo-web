import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        relo: {
          dark:    '#111e18',
          dark2:   '#172b22',
          green:   '#1C3329',
          'green-light': '#254438',
          bright:  '#2D4A3E',
          gbg:     '#ddeae3',
          accent:  '#7bbfa0',
          bg:      '#EDECEA',
          border:  '#c8cec8',
          text:    '#0f1f1a',
          muted:   '#4a6359',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
