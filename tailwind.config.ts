import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-manrope)', 'Manrope', 'Segoe UI', 'sans-serif'],
        headline: ['var(--font-manrope)', 'Manrope', 'Segoe UI', 'sans-serif'],
        editorial: ['var(--font-manrope)', 'Manrope', 'Segoe UI', 'sans-serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'Segoe UI', 'sans-serif'],
        serif: ['var(--font-manrope)', 'Manrope', 'Segoe UI', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',

        /* ── ISCOBusiness Institutional Tokens ────────────────── */
        'isco-ink': 'var(--isco-ink)',
        'isco-ink-soft': 'var(--isco-ink-soft)',
        'isco-navy': 'var(--isco-navy)',
        'isco-blue': 'var(--isco-blue)',
        'isco-blue-bright': 'var(--isco-blue-bright)',
        'isco-learning': 'var(--isco-learning)',
        'isco-cyan': 'var(--isco-cyan)',
        'isco-green': 'var(--isco-green)',
        'isco-green-strong': 'var(--isco-green-strong)',
        'isco-green-soft': 'var(--isco-green-soft)',
        'isco-success': 'var(--isco-success)',
        'isco-gold': 'var(--isco-gold)',
        'isco-gold-bright': 'var(--isco-gold-bright)',
        'isco-gold-soft': 'var(--isco-gold-soft)',
        'isco-amber': 'var(--isco-amber)',
        'isco-violet': 'var(--isco-violet)',
        'isco-violet-strong': 'var(--isco-violet-strong)',
        'isco-violet-soft': 'var(--isco-violet-soft)',
        'isco-danger': 'var(--isco-danger)',
        'isco-danger-soft': 'var(--isco-danger-soft)',
        'isco-warning': 'var(--isco-warning)',
        'isco-warning-soft': 'var(--isco-warning-soft)',
        'isco-pearl': 'var(--isco-pearl)',
        'isco-soft': 'var(--isco-soft)',
        'isco-blue-pale': 'var(--isco-blue-pale)',
        'isco-blue-mist': 'var(--isco-blue-mist)',
        'isco-line': 'var(--isco-line)',
        'isco-line-strong': 'var(--isco-line-strong)',
        'isco-success-soft': 'var(--isco-success-soft)',

        /* ── Semantic State Colors ────────────────────────────── */
        success: {
          DEFAULT: 'var(--success)',
          soft: 'var(--success-soft)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          soft: 'var(--warning-soft)',
        },
        danger: {
          DEFAULT: 'var(--danger)',
          soft: 'var(--danger-soft)',
        },
        info: {
          DEFAULT: 'var(--info)',
          soft: 'var(--info-soft)',
        },

        /* ── Dataviz Colors ───────────────────────────────────── */
        data: {
          blue: 'var(--data-blue)',
          cyan: 'var(--data-cyan)',
          green: 'var(--data-green)',
          gold: 'var(--data-gold)',
          violet: 'var(--data-violet)',
        },

        /* ── Surface Colors per Category ──────────────────────── */
        surface: {
          prepa: 'var(--surface-prepa)',
          continua: 'var(--surface-continua)',
          certificacion: 'var(--surface-certificacion)',
          vinculacion: 'var(--surface-vinculacion)',
          impacto: 'var(--surface-impacto)',
          transparencia: 'var(--surface-transparencia)',
        },

        /* ── Area Raw Colors ──────────────────────────────────── */
        green: {
          DEFAULT: '#20ad91',
          strong: '#14966f',
          soft: '#e7f6f1',
        },
        violet: {
          DEFAULT: '#7569e8',
          strong: '#6358d2',
          soft: '#efedfc',
        },

        /* ── Navy & Gold Scales ────────────────────────────────── */
        navy: {
          50: '#f0f5f9',
          100: '#dbe5ee',
          200: '#b3c8d9',
          300: '#7e9bb5',
          400: '#537699',
          500: '#3b6288',
          600: '#2b4c6f',
          700: '#1c3d5a',
          800: '#102f4d',
          900: '#083665',
          950: '#051d38',
        },
        gold: {
          DEFAULT: '#b38a36',
          bright: '#c49a3d',
          soft: '#f5eddc',
          50: '#fbf7ee',
          100: '#f5eddc',
          200: '#ebdbb9',
          300: '#e0c791',
          400: '#d4b168',
          500: '#c49a3d',
          600: '#b38a36',
          700: '#8c6b27',
          800: '#664c1b',
          900: '#402e0f',
          950: '#231906',
        },

        /* ── Chart Colors ─────────────────────────────────────── */
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent: 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          border: 'var(--sidebar-border)',
          ring: 'var(--sidebar-ring)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm, 12px)',
        md: 'var(--radius-md, 20px)',
        lg: 'var(--radius-lg, 30px)',
        xl: '30px',
        full: '9999px',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm, 0 10px 30px #0e335314)',
        'md': 'var(--shadow-md, 0 24px 70px #0e33531f)',
        'isco-sm': '0 10px 30px #0e335314',
        'isco-md': '0 24px 70px #0e33531f',
      },
      maxWidth: {
        'shell': '1280px',
        'shell-wide': '1440px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
