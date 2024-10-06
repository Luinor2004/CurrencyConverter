import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import CurrencyMain from './CurrencyMain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyMain/>
  </StrictMode>,
)
