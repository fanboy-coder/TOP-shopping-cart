export default function QuantityBTN({onQuantityChange,quantity}){

	const handleDecrease = () =>  {
		onQuantityChange((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity));
	}

	const handleIncrease = () => {
		onQuantityChange((prevQuantity) => prevQuantity+1);
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