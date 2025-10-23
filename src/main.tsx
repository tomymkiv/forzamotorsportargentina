import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import NotFoundPage from './NotFoundPage.tsx'
import Categorias from './Categorias.tsx'
import Carreras from './Carreras.tsx'
import ResultadosTCA from './components/ResultadosTCA.tsx'

// createHashRouter
// Creador de rutas
const router = createHashRouter([
  { path: '/', element: <App /> }, // asigno la ruta '/' al componente "app"
  { path: '/categorias', element: <Categorias /> },
  { path: '/carreras', element: <Carreras /> },
  { path: '/categorias/tca', element: <ResultadosTCA /> },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* la ruta es la constante declarada mas arriba */}
    <RouterProvider router={router} />
  </StrictMode>,
)
