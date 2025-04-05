import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import CategoriesProvider from './context/categoriesContext/categoriesProvider.jsx'
import ProductsProvider from './context/productsContext/productsProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CategoriesProvider>
      <ProductsProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductsProvider>
    </CategoriesProvider>
  </BrowserRouter>
)
