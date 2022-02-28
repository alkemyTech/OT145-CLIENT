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
				<Box className={classes.logoContainer}>
					<Box component="img" src="images/logoSomosMas.png" alt="" />
					<Typography variant="p" className={classes.logoText}>
						Somos más
					</Typography>
				</Box>
				<Box className={classes.itemsContainer}>
					<Box>
						<Typography className={classes.footerListTitle} variant="p">
							Navegación
						</Typography>
						<ul className={classes.footerList}>
							<li>
								<NavLink className={classes.linkItemFooterList} to="/">
									Actividades
								</NavLink>
							</li>
							<li>
								<NavLink className={classes.linkItemFooterList} to="/">
									Novedades
								</NavLink>
							</li>
						</ul>
					</Box>
					<Box>
						<Typography className={classes.footerListTitle} variant="p">
							Nuestras redes
						</Typography>
						<ul className={classes.footerList}>
							<li>
								<a className={classes.linkItemFooterList} href="">
									Facebook
								</a>
							</li>
							<li>
								<a className={classes.linkItemFooterList} href="">
									LinkedIn
								</a>
							</li>
							<li>
								<a className={classes.linkItemFooterList} href="">
									Instagram
								</a>
							</li>
						</ul>
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
