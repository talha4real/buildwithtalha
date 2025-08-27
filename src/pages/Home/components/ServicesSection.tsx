import { Box, Container, Typography, Button, Avatar, Card } from '@mui/material'
import {
  Settings,
  ArrowForward,
  Phone,
  Favorite,
  Home,
} from '@mui/icons-material'
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

        {/* Fading Border Separator */}
        <Box
          sx={{
            width: '100%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, #ddd 20%, #ddd 80%, transparent 100%)',
            my: { xs: 6, md: 8 },
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
            alignItems: 'stretch',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Left Column - Customer Support */}
          <Box
            sx={{
              flex: { xs: '1', lg: '1' },
              maxWidth: { xs: '100%', lg: '30%' },
              minWidth: 0,
            }}
          >
            <Card
              sx={{
                p: 3,
                height: 'fit-content',
                boxShadow: 'none',
              }}
            >
              {/* Customer Support Profile */}
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#FF6B35',
                  }}
                >
                  EB
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Edward Blake
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Customer Support, Movexa
                  </Typography>
                </Box>
              </Box>

              {/* Chat Message */}
              <Box
                sx={{
                  position: 'relative',
                  backgroundColor: '#d9f0fa',
                  borderRadius: 2,
                  p: 2,
                  mb: 3,
                  maxWidth: '85%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 15,
                    left: -8,
                    width: 0,
                    height: 0,
                  },
                }}
              >
                <Typography variant="body1">
                  Hello sir, How can I help you?
                </Typography>
              </Box>

              {/* Call and Book Button */}
              <Button
                variant="contained"
                startIcon={<Phone />}
                fullWidth
                sx={{
                  backgroundColor: '#b8e8fc',
                  color: '#000',
                  fontWeight: 600,
                  py: 1.5,
                  mb: 2,
                  '&:hover': {
                    backgroundColor: '#87dcff',
                  },
                }}
              >
                Call and Book Cargo
              </Button>

              {/* Trust Badge */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Favorite sx={{ color: '#2196F3', fontSize: 18 }} />
                <Typography variant="body2" color="text.secondary">
                  Trusted by 60000+ people
                </Typography>
              </Box>
            </Card>
          </Box>

          {/* Middle Column - Main Message */}
          <Box
            sx={{
              flex: { xs: '1', lg: '1' },
              maxWidth: { xs: '100%', lg: '40%' },
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* Dropping on Home Badge */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mb: 3,
                color: '#1a237e',
              }}
            >
              <Home sx={{ fontSize: 20 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Dropping on Home
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a237e',
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              DELIVERING FAITH, PEACE OF MIND, AND UNPARALLELED QUALITY
            </Typography>

            {/* User Avatars and Stats */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* User Avatars */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRight: '2px solid #999',
                  pr: 2,
                }}
              >
                <Avatar
                  sx={{ width: 40, height: 40, backgroundColor: '#FF6B35' }}
                >
                  A
                </Avatar>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#4CAF50',
                    ml: -1,
                  }}
                >
                  B
                </Avatar>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#2196F3',
                    ml: -1,
                  }}
                >
                  C
                </Avatar>
              </Box>

              {/* Stats */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  pl: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: '#1a237e', lineHeight: 1 }}
                >
                  20K+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monthly User
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Column - Total Booking */}
          <Box
            sx={{
              flex: { xs: '1', lg: '1' },
              maxWidth: { xs: '100%', lg: '30%' },
              minWidth: 0,
            }}
          >
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#b8e8fc',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: '#1a237e' }}
                >
                  TOTAL BOOKING
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: '#2196F3',
                    textTransform: 'none',
                    bgcolor: '#fff',
                    border: 'none',
                    borderRadius: 2,
                    lineHeight: 1,
                    padding: '12px 16px',
                  }}
                >
                  Today ▼
                </Button>
              </Box>

              {/* Booking Items */}
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Steel Core Shipment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Jonathan Trott
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    $248,750
                  </Typography>
                </Box>

                <Box
                  sx={{
                    my: 2,
                    height: '1px',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      borderTop: '2px dashed #ccc',
                      maskImage:
                        'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                    },
                  }}
                />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      Motorcar Shipment
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Cameron Green
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    $625,40
                  </Typography>
                </Box>

                <Box
                  sx={{
                    my: 2,
                    height: '1px',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      borderTop: '2px dashed #ccc',
                      maskImage:
                        'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)',
                    },
                  }}
                />

                {/* Total */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pt: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Total Shipment:
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 900, color: '#1a237e' }}
                  >
                    $311,290
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesSection
