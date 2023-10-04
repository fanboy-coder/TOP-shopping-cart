import React, { useState } from "react";

export default function QuantityDropdown({ onChange,value }) {
	const [selectedQuantity, setSelectedQuantity] = useState(1);

	const handleQuantityChange = (e) => {
		const newQuantity = parseInt(e.target.value,10);
		setSelectedQuantity(newQuantity);
		onChange(newQuantity);
	}

	return(
		<select value={value} onChange={handleQuantityChange}>
			{[...Array(10).keys()].map((quantity) =>(
				<option key={quantity} value={quantity+1}>
					{quantity+1}
				</option>
			))}
		</select>
	)
}