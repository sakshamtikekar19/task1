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
          soft: '#D8909A',
          blush: '#F5DDE1',
          gold: '#E7BCC5',
        },
        cream: '#FFF8FA',
        bone: '#F4ECE6',
        ink: '#1F1F1F',
        nocturne: '#221218',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      boxShadow: {
        luxe: '0 30px 60px -20px rgba(196,111,120,0.28)',
        glass: '0 8px 32px rgba(31,31,31,0.06)',
        soft: '0 12px 40px -10px rgba(196,111,120,0.18)',
        deep: '0 40px 80px -30px rgba(92,42,51,0.45)',
      },
      backgroundImage: {
        'rose-gradient': 'linear-gradient(135deg, #C46F78 0%, #D8909A 100%)',
        'rose-shine': 'linear-gradient(135deg, #C46F78 0%, #D8909A 50%, #E7BCC5 100%)',
        'wine-gradient': 'linear-gradient(135deg, #5C2A33 0%, #7A2E3A 60%, #C46F78 100%)',
        'cream-radial': 'radial-gradient(circle at 30% 20%, #FBE4E9 0%, #FFF8FA 60%)',
        'blush-radial': 'radial-gradient(ellipse at top, #F5DDE1 0%, #FFF8FA 70%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      borderRadius: {
        '2.5xl': '1.75rem',
        '4xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
