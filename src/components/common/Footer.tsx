import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Link,
} from '@mui/material'
import { Phone, Email } from '@mui/icons-material'
import { useState } from 'react'

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }))
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
            minHeight: '400px',
            gap: 16,
            width: '100%',
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: 'calc(50% - 6rem)' },
              maxWidth: { xs: '100%', md: 'calc(50% - 6rem)' },
              display: 'flex',
              flexDirection: 'column',
              mr: { xs: 0, md: 12 },
              mb: { xs: 6, md: 0 },
            }}
          >
            {/* Top - Newsletter Signup */}
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  mb: 4,
                  letterSpacing: '-0.02em',
                }}
              >
                SIGNUP TO RECEIVE OUR OFFER,
                <br />
                AND STAY UPTO DATE
              </Typography>

              {/* Form */}
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mb: 6,
                }}
              >
                <TextField
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'transparent',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 2,
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&.Mui-focused': {
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                      },
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: 'white',
                      '&::placeholder': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        opacity: 1,
                      },
                    },
                  }}
                />

                <TextField
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  sx={{
                    flex: 1,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'transparent',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: 2,
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&.Mui-focused': {
                        borderColor: 'rgba(255, 255, 255, 0.8)',
                      },
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                    '& .MuiOutlinedInput-input': {
                      color: 'white',
                      '&::placeholder': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        opacity: 1,
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#fbbf24',
                    color: '#1e3a8a',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textTransform: 'none',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    minWidth: '120px',
                    '&:hover': {
                      backgroundColor: '#f59e0b',
                    },
                  }}
                  endIcon={
                    <Box component="span" sx={{ ml: 0.5 }}>
                      →
                    </Box>
                  }
                >
                  Submit
                </Button>
              </Box>
            </Box>

            {/* Bottom - Logo and Truck Image */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box display={'flex'} flexDirection={'column'} gap={2}>
                {/* Truck Image */}
                <Box
                  sx={{
                    width: { xs: 120, md: 200 },
                    height: { xs: 60, md: 100 },
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&h=150&fit=crop)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'brightness(0) invert(1)',
                  }}
                />

                {/* Logo Text */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '3rem', md: '5rem' },
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                    lineHeight: 0.8,
                  }}
                >
                  MOVEXA
                </Typography>
              </Box>
              {/* Contact Information */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    mb: 3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  CONTACT WITH US
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Phone sx={{ fontSize: 20, color: 'white' }} />
                    <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                      +1 (800) 123-4567
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Email sx={{ fontSize: 20, color: 'white' }} />
                    <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
                      hello@snapture.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Navigation and Contact */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: 'calc(50% - 6rem)' },
              maxWidth: { xs: '100%', md: 'calc(50% - 6rem)' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Navigation Links */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                width: '100%',
              }}
            >
              <Link
                href="#services"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center',
                  pb: 2,
                  '&:hover': {
                    color: '#fbbf24',
                    borderBottomColor: '#fbbf24',
                  },
                }}
              >
                SERVICES
              </Link>

              <Link
                href="#contact"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  pb: 2,
                  '&:hover': {
                    color: '#fbbf24',
                    borderBottomColor: '#fbbf24',
                  },
                }}
              >
                CONTACT US
              </Link>

              <Link
                href="#tracking"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  pb: 2,
                  '&:hover': {
                    color: '#fbbf24',
                    borderBottomColor: '#fbbf24',
                  },
                }}
              >
                TRACKING
              </Link>
              <Link
                href="#about"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  pb: 2,
                  '&:hover': {
                    color: '#fbbf24',
                    borderBottomColor: '#fbbf24',
                  },
                }}
              >
                ABOUT US
              </Link>

              <Link
                href="#privacy"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  pb: 2,
                  '&:hover': {
                    color: '#fbbf24',
                  },
                }}
              >
                PRIVACY POLICY
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
