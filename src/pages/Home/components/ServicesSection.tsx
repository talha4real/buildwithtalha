import { Box, Container, Typography, Button } from '@mui/material'
import { Settings, ArrowForward } from '@mui/icons-material'
import ServicesCard from './ServicesCard'

function ServicesSection() {
  const handleServiceClick = (service: string) => {
    console.log(`Clicked on ${service}`)
    // Add navigation logic here
  }

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'stretch',
          }}
        >
          {/* Left Column - Main Service Description */}
          <Box
            sx={{
              flex: { xs: '1', md: '0 0 33.333%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Service & Supports Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
                color: '#2196F3',
              }}
            >
              <Settings sx={{ fontSize: 20 }} />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Service & Supports
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a237e',
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              FAST PRECISION CARGO DELIVERY FOR EVERYONE
            </Typography>
            {/* Explore Services Button */}
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={() => handleServiceClick('explore-services')}
              sx={{
                alignSelf: 'flex-start',
                backgroundColor: '#FFD700',
                color: '#000',
                fontWeight: 700,
                fontSize: '1.2rem',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
                '&:hover': {
                  backgroundColor: '#FFC107',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Services
            </Button>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                lineHeight: 1.6,
                mt: 4,
              }}
            >
              We provide complete logistics support from pickup to final
              delivery with secure warehousing.
            </Typography>
          </Box>

          {/* Right Column - Service Cards */}
          <Box
            sx={{
              flex: { xs: '1', md: '0 0 66.667%' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
            }}
          >
            {/* Charter Air Freight */}
            <Box sx={{ flex: 1 }}>
              <ServicesCard
                title="CHARTER AIR FREIGHT"
                buttonText="Book a Shipment"
                backgroundColor="#2196F3"
                backgroundImage="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                onClick={() => handleServiceClick('air-freight')}
                alignSelf="center"
              />
            </Box>

            {/* Continental Ocean Freight */}
            <Box sx={{ flex: 1 }}>
              <ServicesCard
                title="CONTINENTAL OCEAN FREIGHT"
                description="One customer can fill a full container load"
                buttonText="Get Quote"
                backgroundColor="#1976D2"
                backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                onClick={() => handleServiceClick('ocean-freight')}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesSection
