import React from "react";
import { Container } from '@mui/material'
import { Box } from "@mui/system";
import useStyles from './styles/Newsletter'

export default function Newsletter() {

	const classes = useStyles()

	return (
		<Box className={classes.newsletterContainer} >
			<Container>
				<div>Newsletter</div>
				<form>
					<input type="text" />
				</form>
			</Container>
		</Box>
	);
}
