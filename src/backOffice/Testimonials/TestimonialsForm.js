import React from "react";
import useStyles from "./styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../../Components/Editor/Editor";
import * as Yup from "yup";
import { privatePOST } from "../../Services/privateApiService";

const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	defaultImage: Yup.mixed()
		.nullable()
		.required("La imágen es obligatoria")
		.test(
			"FILE_SIZE",
			"La imágen no tiene un formato válido",
			(value) =>
				!value ||
				(value &&
					["image/jpg", "image/jpeg", "image/png"].includes(value?.type))
		),
});

const postData = async (data) => {
	// let jsonData = JSON.stringify(data)

	try {
		const response = await privatePOST(
			process.env.REACT_APP_API_GET_TESTIMONIALS,
			data
		);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

const TestimonialForm = () => {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			image: "",
			defaultImage: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(values);
			postData(values);
		},
	});

	// const reader = new FileReader();
	// let base64String = "";

	const convertToBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleImageChange = async (event) => {
		const base64String = await convertToBase64(event.target.files[0]);
		formik.setFieldValue("image", base64String);
		formik.setFieldValue("defaultImage", event.target.files[0]);
	};

	return (
		<form onSubmit={formik.handleSubmit} className={classes.form}>
			<TextField
				className={classes.formElement}
				name="name"
				value={formik.values.name}
				onChange={formik.handleChange}
				placeholder="Testimonial Title"
			/>
			{formik.touched.name && formik.errors.name ? (
				<div>{formik.errors.name}</div>
			) : null}
			<Editor
				text={formik.values.description}
				onChangeText={(data) => {
					formik.setFieldValue("description", data);
				}}
			/>
			{formik.touched.description && formik.errors.description ? (
				<div>{formik.errors.description}</div>
			) : null}
			<TextField
				inputProps={{
					accept: "image/png, image/jpeg",
					type: "file",
				}}
				name="defaultImage"
				className={classes.formElement}
				onChange={(event) => handleImageChange(event)}
			/>
			{formik.touched.image && formik.errors.image ? (
				<div>{formik.errors.image}</div>
			) : null}
			<Button className={classes.formElement} type="submit" variant="contained">
				Send
			</Button>
		</form>
	);
};

export default TestimonialForm;
