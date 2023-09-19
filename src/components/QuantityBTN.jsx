import { useState } from "react";

export default function QuantityBTN(){

	const [quantity,setQuantity] = useState(0);

	return(
		<div className="quantity-button">
			<button type="button">-</button>
			<div>
				<p>{quantity}</p>
			</div>
			<button type="button">+</button>
		</div>
	)
}