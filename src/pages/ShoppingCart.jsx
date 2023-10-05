import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import QuantityDropdown from "../components/QuantityDropdown";

const ShoppingCart = () => {
	const [cart, setCart] = useContext(CartContext);
	const [total, setTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		const newTotal = cart.reduce((accumulator, item) => {
			const itemTotal = item.quantity * item.price;
			return accumulator + itemTotal;
		}, 0);
		const total = newTotal.toFixed(2);
		setTotal(total);
	}, [cart]);

	const handleCartChange = (item, newQuantity) => {
		const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

		if (item.id !== -1) {
			const updatedCart = [...cart];
			updatedCart[itemIndex].quantity = newQuantity;
			setCart(updatedCart);
		}
	}

	const handleDelete = (title) => {
		const updatedCart = cart.filter((titles) => titles.title !== title);
		setCart(updatedCart);
		console.log(cart)
	}

	return (
		<div className="grid">
			<div className="page-title">
				<h2>Shopping Cart:</h2>
			</div>
			<ul className="order-grid">
				{cart.map((item) => (
					<li key={item.id} className="item-box cart">
						<div className="item-picture">
							<img src={item.image} alt="" />
						</div>
						<div className="item-info">
							<div className="top-level-info">
								<div className="item-title">{item.title}</div>
								<div>
									<button className="close-button" onClick={() => handleDelete(item.title)}>X</button>
								</div>
							</div>
							<div className="low-level-info">
								<p>Quantity: </p>
								<QuantityDropdown
									onChange={(newQuantity) =>
										handleCartChange(item, newQuantity)
									}
									value={item.quantity}
								/>
							</div>
							<div className="item-total">
								<p>Total: {(item.price * item.quantity).toFixed(2)}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="page-title">
				<h2>Cart total: {total}</h2>
			</div>
		</div>
	)
}

export default ShoppingCart;