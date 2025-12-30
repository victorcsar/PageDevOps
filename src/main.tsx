import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DevopsTeam from './pages/Home/DevopsTeam'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevopsTeam />
  </StrictMode>,
)
