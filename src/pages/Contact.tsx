import { useState } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material'
import { Email, Phone, LocationOn } from '@mui/icons-material'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setShowSuccess(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'hello@example.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'San Francisco, CA',
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Get in touch with our team
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Send us a message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        value={formData.name}
                        onChange={handleChange('name')}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange('email')}
                        required
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange('message')}
                        required
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={
                          !formData.name || !formData.email || !formData.message
                        }
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {info.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.value}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
        >
          <Alert
            onClose={() => setShowSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  )
}
