import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<ul className='navbar'>
						<li>
							<NavLink to="/" className='link'>Home</NavLink>
						</li>
						<li>
							<NavLink to="products" className='link'>Products page</NavLink>
						</li>
						<li>
							<NavLink to="shopping-cart" className='link'>Shopping Cart</NavLink>
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