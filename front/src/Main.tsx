// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import App from './App.tsx'
import Layout from './Layout.tsx'
import Login from './routes/Login.tsx'

import CardLista from './components/CardLista.tsx'

import './index.css'
import Cadastro from './routes/Cadastro.tsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
        <Layout />
    ),
    children: [
      { index: true, element: <Navigate to="/boards" replace /> }, // Redireciona direto para boards
      { path: 'login', element: <Login /> },                       // Login em rota específica
      { path: 'cadastro', element: <Cadastro /> },
      { path: 'boards', element: <App /> },                        
      { path: 'listas/:boardId', element: <CardLista /> },
      { path: '*', element: <Navigate to="/boards" replace /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>,
)