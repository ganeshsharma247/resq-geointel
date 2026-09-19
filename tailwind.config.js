/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#07111F',
        panel: '#0D1B2A',
        panel2: '#0F2237',
        line: '#1B324A',
        cyan: {
          DEFAULT: '#33C7E8',
          soft: '#7FDDF0',
        },
        risk: {
          high: '#E8544A',
          med: '#F0A63C',
          safe: '#3FC58A',
        },
        ink: {
          DEFAULT: '#E7EEF6',
          dim: '#93A6BC',
          faint: '#5E7086',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
