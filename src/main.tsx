import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import MinimalApp from './MinimalApp.tsx'
import App from './App.tsx'
import './styles/index.css'

// Check environment variable to determine which version to show
const isFullVersion = import.meta.env.VITE_ENABLE_FULL_VERSION === 'true'
const AppComponent = isFullVersion ? App : MinimalApp

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppComponent />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
