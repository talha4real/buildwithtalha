import React from 'react'
import { Box, Typography, Button } from '@mui/material'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Header Error Boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Box
          sx={{
            p: 2,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            color: 'white',
          }}
        >
          <Typography variant="body2">
            Navigation temporarily unavailable
          </Typography>
          <Button
            size="small"
            onClick={() => this.setState({ hasError: false })}
            sx={{ mt: 1, color: 'white' }}
          >
            Retry
          </Button>
        </Box>
      )
    }

    return this.props.children
  }
}
