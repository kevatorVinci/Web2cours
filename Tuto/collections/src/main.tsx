import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import App from '../App/index.tsx'
*/
import App from '../../components/src/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
