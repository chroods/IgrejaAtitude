import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Home } from '../src/screens/Home/index';
import { Embaixada } from './screens/Embaixadas';
import { Contato } from './screens/Contato';
import { ErrorPagina } from './screens/PaginaError';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPagina />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "embaixadas",
        element: <Embaixada />
      },
      {
        path: "contato",
        element: <Contato />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
