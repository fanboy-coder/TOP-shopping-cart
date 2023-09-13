import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Products from "./components/Products.jsx";
import ShoppingCart from './components/ShoppingCart.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>
	},
	{
		path: "/products",
		element: <Products/>,
	},
	{
		path:"/shopping-cart",
		element:<ShoppingCart/>,
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
