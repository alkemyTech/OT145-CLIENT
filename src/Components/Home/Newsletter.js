import React from "react";
import { Container, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles/Newsletter";

export default function Newsletter() {
	const classes = useStyles();

	return (
		<Box className={classes.newsletterContainer}>
			<Container className={classes.content}>
				<Typography variante="p" component="p">
					Suscríbete a nuestro boletín
				</Typography>
				<form>
					<TextField
						variant="outlined"
						size="small"
						label="Email"
						sx={{ backgroundColor: "#fff" }}
					/>
				</form>
			</Container>
		</Box>
	);
}
