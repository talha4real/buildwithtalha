import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  Home as HomeIcon,
  Business as BusinessIcon,
  TrackChanges as TrackChangesIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'

// TypeScript interfaces
interface HeaderProps {
  transparent?: boolean
  elevation?: number
  className?: string
}

interface NavigationItem {
  label: string
  path: string
  icon?: React.ReactNode
}

// Navigation configuration with error handling for icons
const createNavigationItems = (): NavigationItem[] => {
  try {
    return [
      { label: 'Home', path: '/', icon: <HomeIcon /> },
      { label: 'Services', path: '/services', icon: <BusinessIcon /> },
      { label: 'Tracking', path: '/tracking', icon: <TrackChangesIcon /> },
      { label: 'About Us', path: '/about', icon: <InfoIcon /> },
    ]
  } catch (error) {
    console.warn(
      'Failed to load navigation icons, falling back to text-only:',
      error
    )
    return [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: 'Tracking', path: '/tracking' },
      { label: 'About Us', path: '/about' },
    ]
  }
}

const navigationItems = createNavigationItems()

export const Header: React.FC<HeaderProps> = React.memo(
  ({ transparent = true, elevation = 0, className }) => {
    const location = useLocation()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    const handleMobileMenuToggle = () => {
      setMobileMenuOpen(!mobileMenuOpen)
    }

    const handleMobileMenuClose = () => {
      setMobileMenuOpen(false)
    }

    return (
      <>
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 16, md: 24 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: theme.zIndex.appBar,
            width: '100%',
            maxWidth: {
              xs: 'calc(100% - 32px)',
              sm: 'calc(100% - 48px)',
              md: '1200px',
              lg: '1536px',
            },
          }}
        >
          <AppBar
            position="static"
            elevation={elevation}
            className={className}
            sx={{
              background: transparent
                ? theme.glassmorphism.background
                : theme.palette.primary.main,
              backdropFilter: transparent
                ? theme.glassmorphism.backdropFilter
                : 'none',
              border: transparent ? theme.glassmorphism.border : 'none',
              boxShadow: transparent
                ? '0 8px 32px rgba(0, 0, 0, 0.15)'
                : theme.shadows[elevation],
              borderRadius: { xs: 1, md: 1 },
              // Fallback for browsers without backdrop-filter support
              '@supports not (backdrop-filter: blur(10px))': {
                backgroundColor: transparent
                  ? theme.glassmorphism.fallbackBackground
                  : theme.palette.primary.main,
              },
            }}
          >
            <Toolbar
              sx={{
                height: { xs: 56, md: 64 },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Logo Section */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  aria-label="MOVENA - Go to homepage"
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    '&:hover': {
                      opacity: 0.8,
                    },
                    '&:focus': {
                      outline: '2px solid white',
                      outlineOffset: '2px',
                    },
                  }}
                >
                  MOVENA
                </Typography>
              </Box>

              {/* Desktop Navigation Section */}
              {!isMobile && (
                <Box
                  component="nav"
                  role="navigation"
                  aria-label="Main navigation"
                  sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  }}
                >
                  {navigationItems.map((item) => (
                    <Button
                      key={item.path}
                      component={Link}
                      to={item.path}
                      startIcon={item.icon}
                      aria-label={`Navigate to ${item.label}`}
                      aria-current={
                        location.pathname === item.path ? 'page' : undefined
                      }
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        textTransform: 'none',
                        minHeight: '44px', // Touch-friendly minimum size
                        backgroundColor:
                          location.pathname === item.path
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'transparent',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        },
                        '&:focus': {
                          outline: '2px solid white',
                          outlineOffset: '2px',
                        },
                      }}
                    >
                      <Typography variant="body1">{item.label}</Typography>
                    </Button>
                  ))}
                </Box>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation-menu"
                  edge="end"
                  onClick={handleMobileMenuToggle}
                  sx={{
                    color: 'white',
                    minHeight: '44px',
                    minWidth: '44px',
                    '&:focus': {
                      outline: '2px solid white',
                      outlineOffset: '2px',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}

              {/* CTA Button Section */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    aria-label="See details about our services"
                    sx={{
                      backgroundColor: '#FFA726',
                      color: 'white',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      minHeight: '44px',
                      '&:hover': {
                        backgroundColor: '#FF9800',
                      },
                      '&:focus': {
                        outline: '2px solid white',
                        outlineOffset: '2px',
                      },
                    }}
                  >
                    See Details
                  </Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>
        </Box>
        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
          id="mobile-navigation-menu"
          aria-labelledby="mobile-menu-button"
          sx={{
            '& .MuiDrawer-paper': {
              width: 250,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(10px)',
            },
          }}
        >
          <List sx={{ pt: 2 }} role="navigation" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={
                    location.pathname === item.path ? 'page' : undefined
                  }
                  sx={{
                    color: 'white',
                    minHeight: '48px', // Touch-friendly size
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                    '&:focus': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      outline: '2px solid white',
                      outlineOffset: '-2px',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ pt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                aria-label="See details about our services"
                sx={{
                  backgroundColor: '#FFA726',
                  color: 'white',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  minHeight: '48px',
                  '&:hover': {
                    backgroundColor: '#FF9800',
                  },
                  '&:focus': {
                    outline: '2px solid white',
                    outlineOffset: '2px',
                  },
                }}
              >
                See Details
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
  }
)
