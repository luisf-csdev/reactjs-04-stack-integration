import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './contexts/theme-context/theme-provider'
import { queryClient } from './lib/react-query'
import { Router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
