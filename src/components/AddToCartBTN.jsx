import { useState } from "react"

export default function AddToCartBTN({item,quantity}) {

	const[cart,setCart] = useState([]);

	const updateCart = () => {
		const updatedCart = [...cart,{item: item, quantity:quantity}];
		console.log(updatedCart);
		return updatedCart;
	}

	return(
		<>
		<button className="cart-button" onClick={() => updateCart(item,quantity)}>
			<p>Add to Cart</p>
		</button>
		</>
	)
}