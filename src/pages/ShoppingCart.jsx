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
		const itemIndex = cart.findIndex((cartItem) =>cartItem.id === item.id);

		if(item.id !== -1) {
			const updatedCart = [...cart];
			updatedCart[itemIndex].quantity = newQuantity;
			setCart(updatedCart);
		}
	}

	return (
		<div className="grid shopping-grid">
			<div className="page-title">
				<h2>Shopping Cart:</h2>
			</div>
			<ul className="order-grid">
				{cart.map((item) => (
					<li key={item.id} className="item-box">
						<div className="item-info">
							<div className="item-picture">
								<img src={item.image} alt="" />
							</div>
							<div className="item-title">
								<div>{item.title}</div>
							</div>
							<div>
								<QuantityDropdown
									onChange={(newQuantity) =>
									handleCartChange(item, newQuantity)
								}
								value={item.quantity}
								/>
							</div>
						</div>
						<div className="item-total">
							<div><p>Total: {(item.price * item.quantity).toFixed(2)}</p></div>
						</div>
					</li>
				))}
			</ul>
			<div className="page-title">
				<h2>Total:{total}</h2>
			</div>
		</div>
	)
}

export default ShoppingCart;