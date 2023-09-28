// native components
import React, { useEffect, useState } from 'react';
import { CartContext } from "./Contexts/CartContext";
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
import NotFound from './pages/NotFound';

// application
function App() {
	// State initialization and useEffect should be inside the component
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=12')
			.then(res => res.json())
			.then(json => {
				setData(json);
				setLoading(false);
			})
			.catch(err => {
				setError(err);
				setLoading(false);
			});
	}, []);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<CartContext.Provider value={[ cart, setCart ]}>
					<Route path="products" element={<Products data={data} />} />
					<Route path="shopping-cart" element={<ShoppingCart />} />
				</CartContext.Provider>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

export default App;