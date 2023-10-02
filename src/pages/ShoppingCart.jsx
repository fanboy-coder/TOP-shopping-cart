import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contexts/CartContext";

const ShoppingCart = () => {
	const[cart,setCart] = useContext(CartContext);
	const[total,setTotal] = useState(0);

	useEffect(() => {
		const newTotal = cart.reduce((accumulator, item) => {
			const itemTotal = item.quantity*item.price;
			return accumulator+itemTotal;
		},0);
		setTotal(newTotal);
	},[cart]);

	return (
		<div>
		<div>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<div>{item.title}</div>
						<div>{item.quantity}</div>
						<div>{item.price}</div>
						<div className="item-picture">
							<img src={item.image} alt="" />
						</div>
					</li>
				))}
			</ul>
		</div>
		<div>
			<h2>Total:{total}</h2>
		</div>
		</div>
	)
}

export default ShoppingCart;