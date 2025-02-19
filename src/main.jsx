import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CategoriesProvider from './context/categoriesContext/categoriesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CategoriesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CategoriesProvider>
)
