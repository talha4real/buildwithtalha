import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/common'
import { Home, About, Contact, NotFound } from '@/pages'

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
