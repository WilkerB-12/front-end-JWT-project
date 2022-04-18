import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	return (
		<div className="content_of_the_page">
			<div className="container">
				<h1 style={{ "fontSize": "50px", "fontWeight": "100", "fontFamily": "Spartan, sans-serif" }}>Inicia sesión</h1>
				<div className="container d-flex justify-content-center row my-3">
					<div id="form" className="justify-content-center d-flex row p-2">
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Correo electrónico</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}>Dirección de correo electrónico 📧</p>
						<input placeholder="Arepa1234@mail.com"
							name="email"
							onChange={actions.handleInputChange}
						></input>
						<h2 style={{ "paddingTop": "20px", "fontFamily": "Raleway, sans-serif" }}>Contraseña</h2>
						<p style={{ "fontSize": "20px", "fontFamily": "Nunito, sans-serif", "paddingTop": "20px" }}></p>
						<input placeholder="1234567890 🤡"
							name="password"
							type="password"
							onChange={actions.handleInputChange}
						></input>
						<input style={{ "width": "500px" }} className="my-3 btn btn-primary"
							type="button" value="Iniciar sesión"
							onClick={async (e) => {
								let respuesta = await actions.login();
								if (respuesta) {
									history.push("/private")
								}
							}}></input>

					</div>
				</div>
			</div>
		</div>)


};
