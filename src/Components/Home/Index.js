import React, { useState } from "react";
import HomeTitle from "./HomeTitle";

import Spinner from "../Spinner/Spinner";
import ShowModal from "../../Utils/AlertsProps";

const Home = () => {
	const [loading, setloading] = useState(false);
	const [error, seterror] = useState(false);

	return loading ? (
		<Spinner />
	) : error ? (
		<ShowModal
			icon="error"
			title="Hubo un error al cargar el sitio"
			text="Intenta recargar el sitio nuevamente en unos instantes"
		/>
	) : (
		<>
			<h2>Este seria el Slider</h2>

			<HomeTitle />

			<h2>Este seria el listado de Novedades</h2>
		</>
	);
};

export default Home;
