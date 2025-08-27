import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { ErrorBoundary } from './ErrorBoundary'

export const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // Remove the py: 3 since we want content to start right after header
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
