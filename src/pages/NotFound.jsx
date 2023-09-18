import { Link } from "react-router-dom";

export default function NotFound(){
	return(
		<div className="feature-large">
			<h2>Page not found</h2>
			<p>Return to the <Link to="/">homepage</Link>.</p>
		</div>
	)
}