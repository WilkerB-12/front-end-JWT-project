import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/demo.css";
import { useHistory } from "react-router-dom";

export const Signin = () => {
	const { store, actions } = useContext(Context);
    const history = useHistory();

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Regístrate</h1>
				<div className="container d-flex justify-content-center row my-3">
					<div id="form" className="justify-content-center d-flex row p-2">
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Correo electrónico</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
						<input
							placeholder="Arepa1234@mail.com"
							type="text"
							onChange={actions.handleInputChange}
							name="email"
						></input>
						<h1 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Contraseña</h1>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Se recomienda usar mayúsculas y números para más seguridad 🔒</p>
						<input
							placeholder="1234567890 🤡"
							type="password"
							onChange={actions.handleInputChange}
							name="password"
						></input>
						<h1 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Confirmar contraseña</h1>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Confírmanos tu contraseña 🔐</p>
						<input
							placeholder=""
							type="password"
							onChange={actions.handleInputChangePasswordConfirm}
							name="password_confirm"

						></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary"
							type="button"
							value="Registrar mi compañia"
							name="companies"
							onClick={async(e) => {
                                let respuesta=await actions.handleSubmit(e, "/signin");
                                if (respuesta==true){
                                    history.push("/")
							}}}
						></input>
					</div>
				</div>
			</div>
		</div>)
}