import { useState } from 'react'
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Chip,
  Alert,
} from '@mui/material'

export const Home = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to React + TypeScript + MUI
        </Typography>

        <Alert severity="success" sx={{ mb: 4 }}>
          Your project is successfully set up with Material-UI theming!
        </Alert>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Counter Example
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  This demonstrates state management and MUI button styling.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => setCount(count + 1)}
                  >
                    Count: {count}
                  </Button>
                  <Chip
                    label={`Current: ${count}`}
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Form Example
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  This shows MUI form components with controlled inputs.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Enter your name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <Button variant="outlined" disabled={!name}>
                    {name ? `Hello, ${name}!` : 'Enter a name'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Theme Colors
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  These buttons demonstrate the custom theme colors.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" color="primary">
                    Primary
                  </Button>
                  <Button variant="contained" color="secondary">
                    Secondary
                  </Button>
                  <Button variant="outlined" color="primary">
                    Primary Outlined
                  </Button>
                  <Button variant="outlined" color="secondary">
                    Secondary Outlined
                  </Button>
                  <Button variant="text" color="primary">
                    Primary Text
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
