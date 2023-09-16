import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className='body'>
			<ul className='navbar'>
			<li>
				<Link to="/" className='link'>Home</Link>
			</li>
			<li>
				<Link to="products" className='link'>Products page</Link>
			</li>
			<li>
				<Link to="shopping-cart" className='link'>Shopping Cart</Link>
			</li>
			</ul>
	  </div>
	)
}

export default NavBar;