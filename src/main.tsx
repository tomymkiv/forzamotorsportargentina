// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './NotFoundPage.tsx'
import Categorias from './Categorias.tsx'
import Carreras from './Carreras.tsx'

// createBrowserRouter,
// Creador de rutas
// const router = createBrowserRouter([
//   { path: '/', element: <App /> }, // asigno la ruta '/' al componente "app"
//   { path: '/categorias', element: <Categorias /> },
//   { path: '/carreras', element: <Carreras /> },
//   { path: '*', element: <NotFoundPage /> },
// ])

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/categorias' element={<Categorias />} />
      <Route path='/carreras' element={<Carreras />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>
)
