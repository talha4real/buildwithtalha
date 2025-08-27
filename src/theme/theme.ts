import { createTheme } from '@mui/material/styles'

// Extend the theme interface for glassmorphism
declare module '@mui/material/styles' {
  interface Theme {
    glassmorphism: {
      background: string
      backdropFilter: string
      border: string
      fallbackBackground: string
    }
  }
  interface ThemeOptions {
    glassmorphism?: {
      background?: string
      backdropFilter?: string
      border?: string
      fallbackBackground?: string
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.6rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.4rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1.2rem',
      fontWeight: 400,
      letterSpacing: '0.01em',
      lineHeight: 1.43,
    },
    button: {
      fontSize: '1.2rem',
      fontWeight: 400,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.03em',
      lineHeight: 1.66,
    },
    overline: {
      fontSize: '0.95rem',
      fontWeight: 400,
      letterSpacing: '0.08em',
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    fallbackBackground: 'rgba(255, 255, 255, 0.9)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Fallback for browsers that don't support backdrop-filter
          '@supports not (backdrop-filter: blur(10px))': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
        },
      },
    },
  },
})
