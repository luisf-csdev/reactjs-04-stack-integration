import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app-layout'
import { AuthLayout } from '@/pages/_layouts/auth-layout'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [{ path: '/', Component: Dashboard }],
  },

  {
    path: '/',
    Component: AuthLayout,
    children: [{ path: '/sign-in', Component: SignIn }],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
