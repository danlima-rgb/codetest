/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#1A1A1A',
        elevated: '#222222',
        border: '#2A2A2A',
        accent: '#F5A020',
        'accent-hover': '#D4880E',
        'on-accent': '#000000',
        'text-primary': '#FFFFFF',
        'text-muted': '#888888',
        'text-disabled': '#555555',
        'bg-light': '#F5EDE0',
        'surface-light': '#FFFFFF',
        'text-dark': '#0D0D0D',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        cta: '0 8px 32px rgba(245,160,32,0.30)',
        'amber-glow': '0 0 0 1px rgba(245,160,32,0.5), 0 0 20px rgba(245,160,32,0.15)',
        'amber-border': '0 0 0 1px rgba(245,160,32,0.4)',
      },
      maxWidth: {
        content: '1200px',
        copy: '640px',
      },
    },
  },
  plugins: [],
}
