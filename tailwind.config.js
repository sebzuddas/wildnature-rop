import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary, #633806)',
        secondary: 'var(--aw-color-secondary, #3B6D11)',
        accent: 'var(--aw-color-accent, #FAC775)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        bark: '#2C2C2A',
        ember: '#633806',
        firelight: '#FAC775',
        'oak-leaf': '#3B6D11',
        'deep-water': '#085041',
        'dawn-mist': '#D3D1C7',
        parchment: '#F1EFE8',
      },
      fontFamily: {
        sans: ['DM Sans', 'var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', 'var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['Cormorant Garamond', 'var(--aw-font-heading, ui-serif)', ...defaultTheme.fontFamily.serif],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
