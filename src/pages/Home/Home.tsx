import { Box, Typography, Container } from '@mui/material'
import ServicesSection from './components/ServicesSection'
import TechnologySection from './components/TechnologySection'
import PrecisionHandlingSection from './components/PrecisionHandlingSection'
import { TestimonialsSection } from './components/TestimonialsSection'

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '70vh', md: '80vh' },
          background: '#1a237e',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          borderBottomLeftRadius: { xs: 24, md: 32 },
          borderBottomRightRadius: { xs: 24, md: 32 },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ position: 'relative', zIndex: 2, paddingX: '0px !important' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              py: { xs: 4, md: 8 },
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, color: 'white' }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '7rem' },
                  fontWeight: 900,
                  lineHeight: 0.9,
                  mb: { md: 12, lg: 24 },
                  mt: { md: 6, lg: 12 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                FROM LOCAL TO
                <br />
                <Box component="span" sx={{ color: '#FFD700' }}>
                  LEGENDARY
                </Box>
                ,
                <br />
                BE SEEN
              </Typography>

              {/* <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  opacity: 0.9,
                  maxWidth: '500px',
                }}
              >
                Fast, dependable, and most safest shipping for all your cargo.
              </Typography> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <ServicesSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Precision Handling Section */}
      <PrecisionHandlingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </Box>
  )
}
