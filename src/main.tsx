// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
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
   <BrowserRouter basename={import.meta.env.BASE_URL}>
    {/* la ruta es la constante declarada mas arriba */}
    <RouterProvider router={router} />
  </BrowserRouter>
)
