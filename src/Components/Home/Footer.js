import React from "react";
import useStyles from "./styles/footerStyles";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Footer() {
	// Obtener datos de endpoint /organization utilizando los servicios reutilizables.
	function getData() {
		return;
	}

	const footerData = getData();

	const classes = useStyles();

	return (
		<Container className={classes.footerContainer}>
			<Box className={classes.footer}>
				<Box>
					<Box component="img" src="images/logoSomosMas.png" alt="" />
					<Typography>Nombre de la ong</Typography>
				</Box>
				<Box>
					<Typography>title</Typography>
					<ul>
						<li>
							<NavLink to="/">Actividades</NavLink>
						</li>
						<li>
							<NavLink to="/">Novedades</NavLink>
						</li>
					</ul>
				</Box>
				<Box>
					<Typography>Nuestas redes</Typography>
					<ul>
						<li>
							<a href="">Facebook</a>
						</li>
						<li>
							<a href="">LinkedIn</a>
						</li>
						<li>
							<a href="">Instagram</a>
						</li>
					</ul>
				</Box>
			</Box>
		</Container>
	);
}
