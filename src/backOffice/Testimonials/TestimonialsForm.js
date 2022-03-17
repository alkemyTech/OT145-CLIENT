import React, { useState } from "react";
import useStyles from "./styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../../Components/Editor/Editor";
import * as Yup from "yup";
import { privatePOST, privatePATCH } from "../../Services/privateApiService";

const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	image: Yup.mixed().nullable().required("La imágen es obligatoria"),
	// .test(
	// 	"FILE_SIZE",
	// 	"La imágen no tiene un formato válido",
	// 	(value) => !value || (value && ["image/jpg", "image/jpeg", "image/png"].includes(value))
	// ),
});

const TestimonialForm = ({ testimonial }) => {
	const classes = useStyles();

	// const postData = async (data) => {
	// 	// let jsonData = JSON.stringify(data)

	// 	try {
	// 		const response = await privatePOST(
	// 			process.env.REACT_APP_API_GET_TESTIMONIALS,
	// 			data
	// 		);
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const { setFieldValue, handleSubmit, values, handleChange, touched, errors } = useFormik({
		initialValues: {
			name: testimonial?.name || "",
			description: testimonial?.description ||"",
			image: testimonial?.image || "",
			// defaultImage: "",
		},
		validationSchema: validationSchema,
		onSubmit: ( async (values) => {
			// const base64 = await convertToBase64(values.image)
			// values.image = base64
            if (testimonial) {
                privatePATCH(`${process.env.REACT_APP_API_GET_TESTIMONIALS}/${testimonial.id}`, values);
            }
            privatePOST(process.env.REACT_APP_API_GET_TESTIMONIALS, values);
            
        })
	});

	const [isValidImageFormat, setIsValidImageFormat] = useState(false);

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
		setIsValidImageFormat(
			event.target.files[0].type === "image/jpeg" ||
				event.target.files[0].type === "image/jpg" ||
				event.target.files[0].type === "image/png"
				? true
				: false
		);
		setFieldValue("image", base64String);
		// setFieldValue("defaultImage", event.target.files[0]);
	};

	return (
		<form onSubmit={handleSubmit} className={classes.form}>
			<TextField
				className={classes.formElement}
				name="name"
				value={values.name}
				onChange={handleChange}
				placeholder="Testimonial Title"
				error={touched.name && errors.name}
			/>
			<Editor
				text={values.description}
				onChangeText={(data) => {
					setFieldValue("description", data);
				}}
			/>
			{touched.description && errors.description ? (
				<div>{errors.description}</div>
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
			{touched.image && !isValidImageFormat? (
				<div>El formato de la imágen no es válido {errors.image}</div>
			) : null}
			<Button className={classes.formElement} type="submit" variant="contained">
				Send
			</Button>
		</form>
	);
};

export default TestimonialForm;
