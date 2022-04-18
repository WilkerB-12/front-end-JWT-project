import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Private = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let token=actions.isAuthenticated()
	console.log(token)
	useEffect(() => {
		if (token==false){
			history.push('../')
		}
	});

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Página secreta</h1>
			</div>
		</div>)


};
