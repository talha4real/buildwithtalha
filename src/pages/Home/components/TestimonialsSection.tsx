import { Box, Typography, Container, IconButton, Avatar } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos, Star } from '@mui/icons-material'
import { useState } from 'react'

interface Testimonial {
  id: number
  rating: number
  text: string
  clientType: string
  name: string
  position: string
  avatar: string
  tags: string[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 4.8,
    text: 'Top-notch logistics with expert, and dedicated support for all your cargo transport needs',
    clientType: 'CLIENT',
    name: 'Martin Edwards',
    position: 'General Manager',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    tags: ['Reliable & expert', 'logistics service'],
  },
  {
    id: 2,
    rating: 4.7,
    text: "We trust Movexa's dedicated team and we highly recommend them as a leading freight forwarder",
    clientType: 'CLIENT',
    name: 'James Atkinson',
    position: 'Business Proprietor',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    tags: ['Accurate support,', 'Fully dedication'],
  },
  {
    id: 3,
    rating: 4.9,
    text: 'Exceptional 24/7 logistics support with a professional, fully committed team just to solve your headache',
    clientType: 'CLIENT',
    name: 'Natasha Portman',
    position: 'Business Owner',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    tags: ['Professional service', '24/7 support'],
  },
  {
    id: 4,
    rating: 4.6,
    text: 'Outstanding delivery performance with real-time tracking and excellent customer communication',
    clientType: 'CLIENT',
    name: 'Robert Johnson',
    position: 'Operations Director',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    tags: ['Real-time tracking', 'Great communication'],
  },
]

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  // Calculate transform percentage based on screen size
  const getTransformPercentage = () => {
    // Mobile: 100% per slide (1 card visible)
    // Tablet: 50% per slide (2 cards visible)
    // Desktop: 33.333% per slide (3 cards visible with peek)
    return {
      xs: currentIndex * 100,
      sm: currentIndex * 50,
      md: currentIndex * 33.333,
    }
  }

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 3, sm: 0 },
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
              fontWeight: 900,
              color: '#1e3a8a',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: { xs: 1.2, md: 1 },
            }}
          >
            OUR CLIENT TESTIMONIALS
          </Typography>

          {/* Navigation Arrows */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              onClick={handlePrevious}
              sx={{
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                backgroundColor: 'white',
                border: '2px solid #e2e8f0',
                '&:hover': {
                  backgroundColor: '#f1f5f9',
                  borderColor: '#cbd5e1',
                },
              }}
            >
              <ArrowBackIos
                sx={{ fontSize: { xs: 16, md: 20 }, color: '#64748b' }}
              />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                backgroundColor: 'white',
                border: '2px solid #e2e8f0',
                '&:hover': {
                  backgroundColor: '#f1f5f9',
                  borderColor: '#cbd5e1',
                },
              }}
            >
              <ArrowForwardIos
                sx={{ fontSize: { xs: 16, md: 20 }, color: '#64748b' }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* Slider Container */}
        <Box
          sx={{
            position: 'relative',
            overflow: { xs: 'hidden', md: 'visible' },
            mx: { xs: 0, md: -1 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transform: {
                xs: `translateX(-${getTransformPercentage().xs}%)`,
                sm: `translateX(-${getTransformPercentage().sm}%)`,
                md: `translateX(-${getTransformPercentage().md}%)`,
              },
              transition: 'transform 0.5s ease-in-out',
              gap: { xs: 2, sm: 2.5, md: 3 },
              px: { xs: 0, md: 1 },
            }}
          >
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                sx={{
                  minWidth: {
                    xs: 'calc(100% - 16px)',
                    sm: 'calc(50% - 10px)',
                    md: 'calc(33.333% - 16px)',
                  },
                  flexShrink: 0,
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        height: { xs: 'auto', md: '320px' },
        minHeight: { xs: '280px', md: '320px' },
        display: 'flex',
        flexDirection: 'column',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid #f1f5f9',
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
          sx={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#64748b',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          [ {testimonial.clientType} ]
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1e293b',
            }}
          >
            {testimonial.rating}
          </Typography>
          <Star sx={{ fontSize: 20, color: '#fbbf24' }} />
        </Box>
      </Box>

      {/* Testimonial Text */}
      <Typography
        sx={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#334155',
          fontWeight: 500,
          mb: 'auto',
        }}
      >
        {testimonial.text}
      </Typography>

      {/* Footer */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
          pt: 3,
          borderTop: '1px solid #f1f5f9',
        }}
      >
        {/* User Info */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, md: 2 },
          }}
        >
          <Avatar
            src={testimonial.avatar}
            sx={{
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              border: '2px solid #e2e8f0',
            }}
          />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                fontWeight: 600,
                color: '#1e293b',
                lineHeight: 1.2,
              }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                color: '#64748b',
                lineHeight: 1.2,
              }}
            >
              {testimonial.position}
            </Typography>
          </Box>
        </Box>

        {/* Tags */}
        <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
          {testimonial.tags.map((tag, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: '0.8rem',
                color: '#64748b',
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
