import { Box, Container, Typography, Button } from '@mui/material'
import { ArrowForward, ChevronRight } from '@mui/icons-material'

function PrecisionHandlingSection() {
  const handleExploreProcess = () => {
    console.log('Explore Process clicked')
    // Add navigation logic here
  }

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#def6ff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'flex-start',
            gap: { xs: 4, lg: 8 },
            position: 'relative',
          }}
        >
          {/* Left Column - Main Content */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0.4' },
              maxWidth: { xs: '100%', lg: '40%' },
            }}
          >
            {/* Small Label */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#1a237e',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#1a237e',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                }}
              >
                Optimized Handling
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a237e',
                textTransform: 'uppercase',
                mb: 4,
              }}
            >
              PRECISION HANDLING
              <br />
              FOR ACCURATE PRODUCT
              <br />
              DELIVERY
            </Typography>

            <Box
              display="flex"
              gap={6}
              sx={{
                display: 'flex',
                flexDirection: { sm: 'row', xs: 'column' },
              }}
            >
              {/* Explore Process Button */}
              <Button
                variant="contained"
                endIcon={<ChevronRight />}
                onClick={handleExploreProcess}
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#000',
                  fontWeight: 700,
                  height: 'fit-content',
                  fontSize: '1rem',
                  px: 4,
                  py: 1.5,
                  mt: 4,
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: '#FFC107',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                  mb: 4,
                }}
              >
                Explore Process
              </Button>
              {/* Card 1 - Warehouse */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  position: 'relative',
                  flex: 1,
                  maxWidth: { xs: '100%', md: '380px' },
                  height: '100%',
                  minHeight: '300px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 700,
                      fontSize: '2rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    01/ WAREHOUSE
                  </Typography>
                  <ArrowForward sx={{ color: '#1a237e', fontSize: 18 }} />
                </Box>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Warehouse worker"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Right Column - Process Cards */}
          <Box
            sx={{
              flex: { xs: '1', lg: '0.6' },
              maxWidth: { xs: '100%', lg: '60%' },
              position: 'relative',
            }}
          >
            {/* Drone Image - Top Right */}
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: 0,
                zIndex: 2,
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Delivery drone"
                sx={{
                  width: { xs: 80, md: 120 },
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>

            {/* Warehouse System Description */}
            <Box
              sx={{
                mb: 4,
                pr: { xs: 0, md: 15 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  lineHeight: 1.6,
                }}
              >
                Our warehouse system ensures safe,
                <br />
                accurate, and on-time delivery
              </Typography>
            </Box>

            {/* Process Cards Grid */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                mt: 4,
              }}
            >
              {/* Card 2 - Electric Lifter */}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 1,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  position: 'relative',
                  flex: 1,
                  maxWidth: { xs: '100%', md: '380px' },
                  height: '100%',
                  minHeight: '300px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 700,
                      fontSize: '2rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    02/ ELECTRIC LIFTER
                  </Typography>
                  <ArrowForward sx={{ color: '#1a237e', fontSize: 18 }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#4a5568',
                    fontSize: '1.1rem',
                    lineHeight: 1.4,
                    mb: 3,
                  }}
                >
                  Our warehouse system ensures precision handling, guaranteeing
                  accurate, safe, and timely delivery of every product.
                </Typography>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Electric forklift"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Box>
              {/* Card 3 - Delivery Services*/}
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 3,
                  p: 1,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  position: 'relative',
                  flex: 1,
                  mt: 3,
                  maxWidth: { xs: '100%', md: '380px' },
                  height: '100%',
                  minHeight: '300px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#1a237e',
                      fontWeight: 700,
                      fontSize: '2rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    03/ DELIVERY SERVICES
                  </Typography>
                  <ArrowForward sx={{ color: '#1a237e', fontSize: 18 }} />
                </Box>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Electric forklift"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default PrecisionHandlingSection
