import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter
    basename="/hackathon_github_quickstart">
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
)
