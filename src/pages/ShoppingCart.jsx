import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const ShoppingCart = () => {
	const[cart,setCart] = useContext(CartContext);
	console.log(cart);

	return (
		<div>
			<h1>Shopping Cart page</h1>
		</div>
	)
}

export default ShoppingCart;