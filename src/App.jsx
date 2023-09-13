import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="products">Products page</Link>
			</li>
			<li>
				<Link to="shopping-cart">Shopping Cart</Link>
			</li>
		</ul>
	  </div>
    </>
  )
}

export default App
