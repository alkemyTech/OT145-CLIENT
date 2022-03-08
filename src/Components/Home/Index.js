import React, { useState } from "react";
import HomeTitle from "./HomeTitle";

import Spinner from "../Spinner/Spinner";
// import showModal from "../../Utils/AlertsProps";

const Home = () => {
	const [loading, setloading] = useState(true);
	const [error, seterror] = useState(false);

	loading ? (
		<Spinner />
	) : (error ? (
		<showModal />
	) : (
		<>
			<h2>Este seria el Slider</h2>

			<HomeTitle />

			<h2>Este seria el listado de Novedades</h2>
		</>
	))

	return null
};

export default Home;
