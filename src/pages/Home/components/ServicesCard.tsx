import { Box, Typography, Button } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'

interface ServicesCardProps {
  title: string
  description?: string
  buttonText: string
  backgroundImage?: string
  backgroundColor?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  alignSelf?: string
}

function ServicesCard({
  title,
  description,
  buttonText,
  backgroundImage,
  backgroundColor = '#2196F3',
  variant = 'secondary',
  onClick,
  alignSelf = 'flex-start',
}: ServicesCardProps) {
  return (
    <Box
      sx={{
        height: { xs: 400, md: 500 },
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        },
      }}
      onClick={onClick}
    >
      {/* Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: backgroundImage
            ? `linear-gradient(135deg, ${backgroundColor}CC 0%, ${backgroundColor}99 100%), url(${backgroundImage})`
            : `linear-gradient(135deg, ${backgroundColor} 0%, ${backgroundColor}DD 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: { xs: 3, md: 4 },
          color: 'white',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.1,
              textTransform: 'uppercase',
              mb: description ? 2 : 0,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                opacity: 0.9,
                lineHeight: 1.4,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        <Button
          endIcon={<ArrowForward />}
          sx={{
            alignSelf: alignSelf,
            backgroundColor:
              variant === 'primary' ? '#FFD700' : 'rgba(255,255,255,0.2)',
            color: variant === 'primary' ? '#000' : 'white',
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: 'none',
            backdropFilter: 'blur(10px)',
            border:
              variant === 'secondary'
                ? '1px solid rgba(255,255,255,0.3)'
                : 'none',
            '&:hover': {
              backgroundColor:
                variant === 'primary' ? '#FFC107' : 'rgba(255,255,255,0.3)',
              transform: 'translateX(4px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default ServicesCard
