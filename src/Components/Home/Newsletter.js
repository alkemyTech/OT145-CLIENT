import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles/Newsletter";
import { useFormik } from "formik";

export default function Newsletter() {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Box className={classes.newsletterContainer}>
			<Container className={classes.content}>
				<Typography variante="p" component="p">
					Suscríbete a nuestro boletín
				</Typography>
				<form className={classes.form} onSubmit={formik.handleSubmit}>
					<TextField
						variant="outlined"
						size="small"
						label="Email"
						// inputProps={{ id: "email", type: "email", name: "email" }}
						id='email'
						type='email'
						name='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						sx={{ backgroundColor: "#fff" }}
					/>
					<Button type="submit" variant="contained">Enviar</Button>
				</form>
			</Container>
		</Box>
	);
}
