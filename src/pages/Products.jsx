import React,{useState, useContext} from "react";
import AddToCartBTN from "../components/AddToCartBTN";
import QuantityBTN from "../components/QuantityBTN";
import { CartContext } from "../Contexts/CartContext";

const Products = ({ data }) => {
	const [quantity,setQuantity] = useState(0);
	const[cart,setCart] = useContext(CartContext);


	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
	}

	const handleCartChange = (newCart) => {
		console.log(newCart)
		const itemCheck = cart.findIndex(cartItem => cartItem.title === title);
		if(itemCheck !== -1) {
			const updatedCart = [...newCart];
			updatedCart[itemCheck].quantity += quantity;
			setCart(updatedCart)
		} else {
			setCart([...cart,newCart]);
		}
	}

	function shortenDescription(str) {
		if (str.length > 100) {
			return str.substring(0, 100) + "...";
		}
		return str;
	}

	return (
		<div >
			<ul className="grid">
				{data.map((item) => (
					<li key={item.id} className="item-box">
						<div className="item-picture">
							<img src={item.image} alt="" />
						</div>
						<div clas="item-features">
							<h2>{item.title}</h2>
							<p className="item-description">{shortenDescription(item.description)}</p>
							<div className="button-box">
								<h2>{item.price}€</h2>
								<QuantityBTN
									onQuantityChange={handleQuantityChange}
								/>
								<AddToCartBTN
									title={item.title}
									id={item.id}
									image={item.image}
									price={item.price}
									quantity={quantity}
									onCartChange={handleCartChange}
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products;