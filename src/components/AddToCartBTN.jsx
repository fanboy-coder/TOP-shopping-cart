import { useState } from "react"

export default function AddToCartBTN({title,id,image,price,quantity,onCartChange}) {

	const[localCart,setLocalCart] = useState([]);

	const updateCart = () => {
		if(quantity >0) {
			const itemCheck = localCart.findIndex(cartItem => cartItem.title === title);

			if(itemCheck !== -1) {
				const updatedCart = [...localCart];
				updatedCart[itemCheck].quantity += quantity;
				setLocalCart(updatedCart);
				onCartChange(updatedCart);
			} else {
				const updatedCart = [...localCart,{id: id, title: title, image:image, price:price,quantity:quantity}];
				setLocalCart(updatedCart);
				onCartChange(updatedCart);
			}
		}
	}

	return(
		<>
		<button className="cart-button" onClick={() => {
			updateCart(title,quantity);
			}}>
			<p>Add to Cart</p>
		</button>
		</>
	)
}