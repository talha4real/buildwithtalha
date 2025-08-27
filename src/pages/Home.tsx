import { Box, Typography, Container } from '@mui/material'

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '80vh', md: '85vh' },
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
                  fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                  fontWeight: 900,
                  lineHeight: 0.9,
                  mb: { lg: 12 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                }}
              >
                BRINGING THE WORLD
                <br />
                <Box component="span" sx={{ color: '#FFD700' }}>
                  CLOSER
                </Box>
                , ONE DELIVERY
                <br />
                AT A TIME
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  fontWeight: 400,
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '500px',
                }}
              >
                Fast, dependable, and most safest shipping for all your cargo.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Additional Content Section - Ready for more content */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          More Content Goes Here
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          You can add more sections, features, testimonials, etc. below the hero
          section.
        </Typography>
      </Container>
    </Box>
  )
}
