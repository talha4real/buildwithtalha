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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                'linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%)',
            },
          }}
        />

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
