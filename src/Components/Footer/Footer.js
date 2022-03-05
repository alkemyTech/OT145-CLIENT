import React from "react";
import useStyles from "./footerStyles";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Footer() {
	function getData() {
		// Obtener datos de endpoint /organization utilizando los servicios reutilizables.

		// Mockup parcial
		const data = {
			socialMedia: [
				{
					name: "Facebook",
					url: "https://facebook.com",
				},
				{
					name: "LinkedIn",
					url: "https://linkedin.com",
				},
				{
					name: "Instagram",
					url: "https://instagram.com",
				},
			],
			navigationItems: [
				{
					name: "Actividades",
					url: "/",
				},
				{
					name: "Novedades",
					url: "/",
				},
			],
		};
		return data;
	}

	const footerData = getData();

	const classes = useStyles();

	return (
		<Box className={classes.footerContainer}>
			<Container>
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
								{footerData.socialMedia.map(({ name, url }, index) => (
									<li key={index}>
										<NavLink className={classes.linkItemFooterList} to={url}>
											{name}
										</NavLink>
									</li>
								))}
							</ul>
						</Box>
						<Box>
							<Typography className={classes.footerListTitle} variant="p">
								Nuestras redes
							</Typography>
							<ul className={classes.footerList}>
								{footerData.navigationItems.map(({ name, url }, index) => (
									<li key={index} >
										<a className={classes.linkItemFooterList} href={url}>
											{name}
										</a>
									</li>
								))}
							</ul>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}