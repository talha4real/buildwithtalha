import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
} from '@mui/material'
import { Code, Palette, Speed } from '@mui/icons-material'

export const About = () => {
  const features = [
    {
      icon: <Code />,
      title: 'TypeScript',
      description: 'Full type safety with modern TypeScript features',
    },
    {
      icon: <Palette />,
      title: 'Material-UI',
      description: 'Beautiful, accessible components with custom theming',
    },
    {
      icon: <Speed />,
      title: 'Vite',
      description: 'Lightning fast development with hot module replacement',
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          About This Project
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          A modern React TypeScript application with Material-UI and React
          Router
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: 'primary.main',
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <Chip label="React 19" color="primary" />
            <Chip label="TypeScript" color="primary" />
            <Chip label="Material-UI v7" color="secondary" />
            <Chip label="React Router v6" color="secondary" />
            <Chip label="Vite" color="primary" />
            <Chip label="ESLint" color="secondary" />
            <Chip label="Prettier" color="primary" />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
