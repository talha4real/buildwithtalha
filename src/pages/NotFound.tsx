import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  )
}
