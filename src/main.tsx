import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { ThemeProvider } from "@/components/theme-provider"

const VITE_CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
      
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App/>
    </ThemeProvider>    </ClerkProvider>
    </React.StrictMode>,
)
