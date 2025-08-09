import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './NotFoundPage.tsx'
import Categorias from './Categorias.tsx'
import Carreras from './Carreras.tsx'

// Creador de rutas
const router = createBrowserRouter([
  { path: '/', element: <App /> }, // asigno la ruta '/' al componente "app"
  { path: '/categorias', element: <Categorias /> },
  { path: '/carreras', element: <Carreras /> },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* la ruta es la constante declarada mas arriba */}
    <RouterProvider router={router} />
  </StrictMode>,
)
