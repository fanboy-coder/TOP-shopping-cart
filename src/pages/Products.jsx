import React from "react";

function shortenDescription(str) {
	if(str.length > 100) {
		return str.substring(0, 100) + "...";
	}
	return str;
}

const Products = ({data}) => {
	console.log(data)
	return (
		<div >
			<ul className="grid">
				{data.map((item)=>(
					<li key={item.id} className="item-box">
						<div class="item-picture">
							<img src={item.image} alt=""/>
						</div>
						<div clas="item-features">
							<h2>{item.title}</h2>
							<p className="item-description">{shortenDescription(item.description)}</p>
							<div class="button-box">
								<h2>{item.price}€</h2>
								<button>Quantity</button>
								<button>Add to cart</button>
							</div>
						</div>
					</li>	
				))}
			</ul>
		</div>
	)
}

export default Products;