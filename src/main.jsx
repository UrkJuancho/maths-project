import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentOne />
    <ComponentTwo />
  </StrictMode>,
)
