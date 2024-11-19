import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "/pages/Home";
import Receipes from "/pages/Receipes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
  {
    index: true,
    path: '/home',
    element: <Home />
  },
  {
    path: "/receipes",
    element: <Receipes />
    },
  ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
