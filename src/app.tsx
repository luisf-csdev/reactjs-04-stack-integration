import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './contexts/theme-context/theme-provider'
import { Router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
