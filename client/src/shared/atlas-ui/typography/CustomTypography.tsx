import type { ThemeOptions } from '@mui/material/styles';

export const typography: ThemeOptions['typography'] = {
  fontFamily: [
    'Inter',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'sans-serif',
  ].join(','),

  h1: {
    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
    fontWeight: 750,
    lineHeight: 1.1,
    letterSpacing: '-0.035em',
  },

  h2: {
    fontSize: 'clamp(1.5rem, 2vw, 2rem)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
  },

  h3: {
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.3,
  },

  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },

  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },

  button: {
    fontWeight: 700,
    textTransform: 'none',
  },
};
