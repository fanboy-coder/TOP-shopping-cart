import { useState } from "react"

export default function AddToCartBTN({item,quantity,onCartChange}) {

	const[localCart,setLocalCart] = useState([]);

	const updateCart = () => {
		if(quantity >0) {
			const itemCheck = localCart.findIndex(cartItem => cartItem.item === item);

			if(itemCheck !== -1) {
				const updatedCart = [...localCart];
				updatedCart[itemCheck].quantity += quantity;
				setLocalCart(updatedCart);
				onCartChange(updatedCart);
			} else {
				const updatedCart = [...localCart,{item: item, quantity:quantity}];
				setLocalCart(updatedCart);
				onCartChange(updatedCart);
			}
		}
	}

	return(
		<>
		<button className="cart-button" onClick={() => {
			updateCart(item,quantity);
			}}>
			<p>Add to Cart</p>
		</button>
		</>
	)
}