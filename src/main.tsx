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
import { Agenda } from './screens/Agenda';
import { Cursos } from './screens/Cursos';
import { Eventos } from './screens/Eventos';
import { Pastores } from './screens/Pastores';
import { Videos } from './screens/Videos';
import { Sobre } from './screens/Sobre';

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
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "embaixadas",
        element: <Embaixada />
      },
      {
        path: "agenda",
        element: <Agenda />
      },
      {
        path: "cursos",
        element: <Cursos />
      },
      {
        path: "eventos",
        element: <Eventos />
      },
      {
        path: "videos",
        element: <Videos />
      },
      {
        path: "pastores",
        element: <Pastores />
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
