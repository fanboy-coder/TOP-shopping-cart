import { useState } from "react";

export default function QuantityBTN(){

	const [quantity,setQuantity] = useState(0);

	const handleDecrease = () =>  {
		if (quantity != 0) {
			setQuantity(quantity-1);
		} else {
			return
		}
	}

	const handleIncrease = () => {
		setQuantity(quantity+1);
	}

	return(
		<div className="quantity-button">
			<button type="button" onClick={handleDecrease}>-</button>
			<div>
				<p className="quantity">{quantity}</p>
			</div>
			<button type="button" onClick={handleIncrease}>+</button>
		</div>
	)
}