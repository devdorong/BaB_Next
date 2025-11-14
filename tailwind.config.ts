import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Linguavibe Brand Colors
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Main color
          600: '#0284c7', // Hover color
          700: '#0369a1',
        },
        teal: {
          300: '#5eead4',
          400: '#2dd4bf', // Accent color (vibed)
          500: '#14b8a6', // Accent hover
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e7eb', // Border / line
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Sub text
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937', // Main text
          900: '#111827',
        },
        stone: {
          50: '#fafaf9', // Neutral background
        },
        bab: {
          100: '#fff2ee',
          200: '#ffcbbb',
          300: '#ffa588',
          400: '#ff7e55',
          500: '#FF5722',
          600: '#ee3900',
          700: '#bb2d00',
          800: '#882100',
          900: '#551400',
          DEFAULT: '#FF5722',
        },
        babgray: {
          100: '#F5F5F5',
          150: '#E5E7EB',
          200: '#DBDBDB',
          300: '#C2C2C2',
          400: '#A8A8A8',
          500: '#8F8F8F',
          600: '#757575',
          700: '#5C5C5C',
          800: '#424242',
          900: '#292929',
          DEFAULT: '#E5E7EB',
        },
        babbutton: {
          red: '#EF4444',
          red_back: '#FEE2E2',
          blue: '#3B82F6',
          blue_back: '#DBEAFE',
          green: '#22C55E',
          green_back: '#DCFCE7',
          purple: '#A855F7',
          purple_back: '#F3E8FF',
          brown: '#C2481F',
          brown_back: '#FFEDD5',
          black: '#374151',
          black_back: '#F3F4F6',
          yellow: '#FACC15',
          yellow_back: '#FEF9C3',
        },
        babcategory: {
          koreanbg: '#FFF3E0',
          koreantext: '#5D4037',
          chinesebg: '#FFEBEE',
          chinesetext: '#B71C1C',
          japanesbg: '#E8EAF6',
          japanestext: '#303F9F',
          italianbg: '#F1F8E9',
          italiantext: '#33691E',
          kfoodbg: '#FFFDE7',
          kfoodtext: '#827717',
          asianbg: '#F3E5F5',
          asiantext: '#6A1B9A',
          indianbg: '#DBEAFE',
          indiantext: '#1E40AF',
          mexicanbg: '#E1F5FE',
          mexicantext: '#0277BD',
          cafebg: '#EFEBE9',
          cafetext: '#4E342E',
          dessertbg: '#FFF8E1',
          desserttext: '#6D4C41',
          alcoholbg: '#FCE4EC',
          alcoholtext: '#880E4F',
          indoorbg: '#FCE4EC',
          indoortext: '#AD1457',
          outdoorbg: '#F9FBE7',
          outdoortext: '#616161',
          rooftopbg: '#E3F2FD',
          rooftoptext: '#1565C0',
        },
        bg: {
          bg: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem', // rounded-xl
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm (subtle)
        DEFAULT:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      maxWidth: {
        '2xl': '42rem', // Content width
      },
      spacing: {
        18: '4.5rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }], // Body text
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
};

export default config;
