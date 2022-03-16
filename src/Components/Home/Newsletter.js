import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "./styles/Newsletter";
import { useFormik } from "formik";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function Newsletter() {
	const classes = useStyles();
	const [item, setItem] = useLocalStorage("email", "");
	const [suscribed, setSuscribed] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
			setItem(values.email);
			setSuscribed(true);
		},
	});

	return (
		<Box className={classes.newsletterContainer}>
			<Container className={classes.content}>
				{suscribed ? (
					<Typography variante="p" component="p">
						Te has suscrito exitosamente con {item}
					</Typography>
				) : (
					<>
						<Typography variante="p" component="p">
							Suscríbete a nuestro boletín
						</Typography>
						<form className={classes.form} onSubmit={formik.handleSubmit}>
							<TextField
								variant="outlined"
								size="small"
								label="Email"
								id="email"
								type="email"
								name="email"
								onChange={formik.handleChange}
								value={formik.values.email}
								sx={{ backgroundColor: "#fff" }}
							/>
							<Button type="submit" variant="contained">
								Enviar
							</Button>
						</form>
					</>
				)}
			</Container>
		</Box>
	);
}
