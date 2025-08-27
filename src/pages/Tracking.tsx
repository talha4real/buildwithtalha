import { Container, Typography, Box } from '@mui/material'

export const Tracking = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Package Tracking
        </Typography>
        <Typography variant="body1" paragraph>
          Track your shipments and deliveries in real-time.
        </Typography>
        <Typography variant="body1">
          This page is under construction. Please check back soon for tracking
          functionality.
        </Typography>
      </Box>
    </Container>
  )
}
