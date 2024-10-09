import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Receipe from '../pages/Receipe.jsx'
import Home from '../pages/Home.jsx'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Receipe',
        element: <Receipe />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
