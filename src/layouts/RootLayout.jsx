import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<ul className='navbar'>
						<li className="left-item">
							<h1>Store</h1>
						</li>
						<li className="center-item">
							<NavLink to="/" className='link'>Home</NavLink>
						</li>
						<li className="center-item">
							<NavLink to="products" className='link'>Products page</NavLink>
						</li>
						<li className="right-item">
							<NavLink to="shopping-cart" className='link'><img className="icon" src="./src/assets/icons/cart-outline.svg"/></NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	)
}