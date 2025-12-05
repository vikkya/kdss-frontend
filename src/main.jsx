import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap your App with the ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)
