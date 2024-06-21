import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Graph   from './Graph.jsx'
import  Products   from './Products.jsx'
import  API   from './API.jsx'
import  Map   from './Map.jsx'
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
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/api",
    element: <API/>,
  },
  {
    path: "/map",
    element: <Map/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// rota default function
// componente areo function