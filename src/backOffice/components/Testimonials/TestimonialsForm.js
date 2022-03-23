import React, { useState } from "react";
import useStyles from "../../styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../Editor/Editor";
import * as Yup from "yup";
import { privatePOST, privatePATCH } from "../../../Services/privateApiService";
import { convertToBase64 } from '../../../helpers/base64'

const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	image: Yup.mixed().nullable().required("La imágen es obligatoria"),
});

const TestimonialForm = ({ testimonial }) => {
	const classes = useStyles();

	const { setFieldValue, handleSubmit, values, handleChange, touched, errors } = useFormik({
		initialValues: {
			name: testimonial?.name || "",
			description: testimonial?.description ||"",
			image: testimonial?.image || "",
		},
		validationSchema: validationSchema,
		onSubmit: ( async (values) => {
            if (testimonial) {
                privatePATCH(`${process.env.REACT_APP_API_GET_TESTIMONIALS}/${testimonial.id}`, values);
            }
            privatePOST(process.env.REACT_APP_API_GET_TESTIMONIALS, values);
            
        })
	});

	const [isValidImageFormat, setIsValidImageFormat] = useState(false);

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
			<Button color='secondary' className={classes.formElement} type="submit" variant="contained">
				Send
			</Button>
		</form>
	);
};

export default TestimonialForm;
