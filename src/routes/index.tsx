import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/common'
import { About, Contact, Services, Tracking, NotFound, Home } from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'tracking',
        element: <Tracking />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
