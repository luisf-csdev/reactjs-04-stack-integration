import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app-layout'
import { AuthLayout } from '@/pages/_layouts/auth-layout'
import { Dashboard } from '@/pages/app/dashboard'
import { Orders } from '@/pages/app/orders'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'
import { NotFound } from '@/pages/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: NotFound,
    children: [
      { path: '/', Component: Dashboard },
      { path: '/orders', Component: Orders },
    ],
  },

  {
    path: '/',
    Component: AuthLayout,
    children: [
      { path: '/sign-in', Component: SignIn },
      { path: '/sign-up', Component: SignUp },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
