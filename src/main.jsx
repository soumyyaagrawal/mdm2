import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './About.jsx'
import Map from './map.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Map />
  </StrictMode>,
)
