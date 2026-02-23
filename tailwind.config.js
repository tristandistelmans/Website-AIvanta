/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Organic Tech — Flowgent Design Tokens
        moss:      '#2E4036',
        clay:      '#CC5833',
        cream:     '#F2F0E9',
        charcoal:  '#1A1A1A',
        'moss-light': '#3d5449',
        'moss-dark':  '#1e2b24',
        'clay-light': '#d96b47',
        'clay-dark':  '#a8461f',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"Outfit"', 'sans-serif'],
        drama:   ['"Cormorant Garamond"', 'serif'],
        mono:    ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, #1A1A1A 0%, #2E4036 40%, transparent 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1e2b24 0%, #1A1A1A 100%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'flip':   'flip 6s infinite steps(2, end)',
        'rotate': 'rotate 3s linear infinite both',
      },
      keyframes: {
        flip: {
          to: { transform: 'rotate(360deg)' },
        },
        rotate: {
          to: { transform: 'rotate(90deg)' },
        },
      },
    },
  },
  plugins: [],
}
