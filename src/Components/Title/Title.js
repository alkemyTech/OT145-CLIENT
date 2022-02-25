import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./Styles";

export default function Title({ imgSrc = 'images/logoSomosMas.png', title }) {

	let isLogo = (imgSrc !== 'images/logoSomosMas.png') ? false : true

	const classes = useStyles({isLogo: isLogo});

	return (
		<>
			<Box component='img' className={classes.backgroundImage} src={imgSrc} alt={title} />
			<Container>
					<Typography variant="h3" className={classes.title}>
						{title}
					</Typography>
			</Container>
		</>
	);
}
