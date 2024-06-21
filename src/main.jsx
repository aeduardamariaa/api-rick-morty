import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Graph   from './Graph.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/graph",
    element: <Graph/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// rota default function
// componente areo function