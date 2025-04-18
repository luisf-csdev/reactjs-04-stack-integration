import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Toaster } from './components/ui/sonner'
import { Router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <Router />
    </HelmetProvider>
  )
}

export default App
