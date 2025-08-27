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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
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
