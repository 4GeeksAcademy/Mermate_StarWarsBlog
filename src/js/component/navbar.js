import React ,{useContext}from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				
			<div className="btn-group favorites_button">

				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites {store.favorites.length}
				</button>

				<ul className="dropdown-menu">
					{store.favorites.map((item, index) => (
						<li key={index}>
							<a className="dropdown-item">{item}</a>
						</li>
					))}
				</ul>

				</div>
							</div>
		</nav>
	);
};