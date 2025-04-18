import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app-layout'
import { AuthLayout } from '@/pages/_layouts/auth-layout'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'

const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [{ path: '/', Component: Dashboard }],
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
