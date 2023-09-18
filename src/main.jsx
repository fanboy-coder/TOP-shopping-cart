// react
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout/>}>
			<Route index element={<Home/>}></Route>
			<Route path="products" element={<Products />}></Route>
			<Route path="shopping-cart" element={<ShoppingCart/>}></Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
