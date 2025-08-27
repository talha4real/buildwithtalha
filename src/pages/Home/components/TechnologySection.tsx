import { Box, Container, Typography, Button } from '@mui/material'
import { PlayArrow, ArrowForward } from '@mui/icons-material'

function TechnologySection() {
  const handleGetQuote = () => {
    console.log('Get Free Quote clicked')
    // Add navigation logic here
  }

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked')
    // Add video modal or navigation logic here
  }

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, lg: 24 },
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {/* Left Column - Truck Image and Features */}
          <Box
            sx={{
              flex: { xs: '1', lg: '1' },
              maxWidth: { xs: '100%', lg: '50%' },
              minWidth: 0,
              position: 'relative',
            }}
          >
            {/* Main Truck Image */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                mb: 2,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Blue cargo truck"
                sx={{
                  width: '100%',
                  height: { xs: 350, md: 500 },
                  objectFit: 'cover',
                  borderRadius: 3,
                }}
              />

              {/* Overlay Text on Image */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  color: 'white',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}
                >
                  PINPOINT DELIVERY
                  <br />
                  ACCURACY AND SAFETY
                </Typography>
              </Box>
            </Box>

            {/* Collaboration Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 180, md: 120 },
                right: { xs: 10, md: -100 },
                backgroundColor: '#87CEEB',
                borderRadius: 3,
                p: 3,
                width: { xs: 220, md: 260 },
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                textAlign: 'center',
              }}
            >
              {/* Header with arrow */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1a237e',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                  }}
                >
                  Collaborated with
                </Typography>
                <ArrowForward sx={{ color: '#1a237e', fontSize: 18 }} />
              </Box>

              {/* Device Image */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#4a5568',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Device screen */}
                  <Box
                    sx={{
                      width: 50,
                      height: 35,
                      backgroundColor: '#2d3748',
                      borderRadius: 1,
                      position: 'relative',
                    }}
                  />
                  {/* Small indicator dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      width: 8,
                      height: 8,
                      backgroundColor: '#48bb78',
                      borderRadius: '50%',
                    }}
                  />
                  {/* Brand text on device */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      bottom: 12,
                      fontSize: '0.6rem',
                      color: '#a0aec0',
                      fontWeight: 600,
                    }}
                  >
                    tile
                  </Typography>
                </Box>
              </Box>

              {/* Company Text */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#1a237e',
                    fontWeight: 900,
                    fontSize: '2rem',
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    textAlign: 'end',
                  }}
                >
                  TECH CRAFTED BY
                  <br />
                  CLEAR VISION
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Column - Content */}
          <Box
            sx={{
              flex: { xs: '1', lg: '1' },
              maxWidth: { xs: '100%', lg: '50%' },
              minWidth: 0,
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              POWERED BY NEXT GEN CARGO SHIPPING TECHNOLOGY
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                opacity: 0.9,
                lineHeight: 1.6,
                mb: 6,
                maxWidth: '500px',
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              Experience faster, safer, and smarter deliveries with our
              cutting-edge global shipping solutions.
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 3,
                alignItems: 'center',
                justifyContent: { xs: 'center', lg: 'flex-start' },
              }}
            >
              {/* Get Free Quote Button */}
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleGetQuote}
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '1.1rem',
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
                Get Free Quote
              </Button>

              {/* Watch Demo Button */}
              <Button
                variant="outlined"
                startIcon={<PlayArrow />}
                onClick={handleWatchDemo}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Watch a Demo
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TechnologySection
