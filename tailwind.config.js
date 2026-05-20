/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          wine: '#5C2A33',
          dark: '#7A2E3A',
          deep: '#C46F78',
          soft: '#E8C5CC',
          blush: '#F6EDEE',
          gold: '#E0BCC0',
        },
        cream: '#FFF9FA',
        bone: '#F4ECE6',
        ink: '#1F1F1F',
        'ink-soft': '#6B6B6B',
        nocturne: '#221218',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        luxe: '0 24px 48px -24px rgba(196,111,120,0.18)',
        glass: '0 4px 24px rgba(31,31,31,0.04)',
        soft: '0 8px 24px -8px rgba(196,111,120,0.12)',
        deep: '0 30px 60px -30px rgba(92,42,51,0.35)',
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #C46F78 0%, #D8909A 100%)',
        'rose-soft-gradient': 'linear-gradient(135deg, #F6EDEE 0%, #E8C5CC 100%)',
        'wine-gradient': 'linear-gradient(135deg, #5C2A33 0%, #7A2E3A 60%, #C46F78 100%)',
        'cream-radial': 'radial-gradient(circle at 30% 20%, #F6EDEE 0%, #FFF9FA 60%)',
        'blush-radial': 'radial-gradient(ellipse at top, #F6EDEE 0%, #FFF9FA 70%)',
      },
      borderRadius: {
        '2.5xl': '1.75rem',
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
