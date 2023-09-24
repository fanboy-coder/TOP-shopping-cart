import { useState } from "react"

export default function AddToCartBTN({item}) {

	const[cart,setCart] = useState([]);

	const updateCart = () => {
		// const updatedCart = cart.map((item) =>{
		// 	return{title: item.title, quantity: quantity }
		// })
		// setCart(updatedCart)
		console.log(item)
	}

	return(
		<>
		<button className="cart-button" onClick={() => updateCart(item)}>
			<p>Add to Cart</p>
		</button>
		</>
	)
}