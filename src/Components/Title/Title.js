import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "./Styles";

export default function Title({ imgSrc, title }) {
	const classes = useStyles();

	return (
		<>
			<img className={classes.backgroundImage} src={imgSrc} alt={title} />
			<Container>
					<Typography variant="h3" className={classes.title}>
						{title}
					</Typography>
			</Container>
		</>
	);
}
