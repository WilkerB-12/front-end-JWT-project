import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container px-2">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Login</span>
				</Link>
				<div className="ml-auto">
					<Link to="/signin">
						<button className="btn btn-primary">Registrar</button>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary"
						onClick={(e)=>{
							actions.removeUser(e)
							history.push('/')
						}}>logout</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
