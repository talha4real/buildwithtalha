import { Container, Typography, Box } from '@mui/material'

export const Services = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          Discover our comprehensive range of logistics and shipping services.
        </Typography>
        <Typography variant="body1">
          This page is under construction. Please check back soon for more
          details about our services.
        </Typography>
      </Box>
    </Container>
  )
}
