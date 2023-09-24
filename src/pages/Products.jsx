import React from "react";
import AddToCartBTN from "../components/AddToCartBTN";
import QuantityBTN from "../components/QuantityBTN";

function shortenDescription(str) {
	if(str.length > 100) {
		return str.substring(0, 100) + "...";
	}
	return str;
}

const Products = ({data}) => {
	return (
		<div >
			<ul className="grid">
				{data.map((item)=>(
					<li key={item.id} className="item-box">
						<div className="item-picture">
							<img src={item.image} alt=""/>
						</div>
						<div clas="item-features">
							<h2>{item.title}</h2>
							<p className="item-description">{shortenDescription(item.description)}</p>
							<div className="button-box">
								<h2>{item.price}€</h2>
								<QuantityBTN/>
								<AddToCartBTN item={item.title}/>
							</div>
						</div>
					</li>	
				))}
			</ul>
		</div>
	)
}

export default Products;