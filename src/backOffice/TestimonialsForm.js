import React, { useState } from "react";
import useStyles from "./styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useFormik } from "formik";

const TestimonialForm = () => {
	// const [initialValues, setInitialValues] = useState({
	// 	name: "",
	// 	description: "",
	// 	image: "",
	// });

	// const [descriptionValue, setDescriptionValue] = useState('')

	// const handleChange = (e, data) => {
	//     console.log(e)
	//     console.log(data)
	// 	if (e.target.name === "name") {
	// 		setInitialValues({ ...initialValues, name: e.target.value });
	// 	}
	// 	if (e.target.name === "description") {
	// 		setInitialValues({ ...initialValues, description: e.target.value });
	// 	}
	// };

	// const handleDescriptionName = (data) => {
	//     console.log(data)

	//     setInitialValues({ ...initialValues, description: data})
	// }

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(initialValues);
	// };

	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			name: "",
			description: "",
			image: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit} className={classes.form}>
			<TextField
				className={classes.formElement}
				// type="text"
				name="name"
				value={formik.values.name}
				onChange={formik.handleChange}
				placeholder="Testimonial Title"
			/>
			{/* Reemplaza campo por ckeditor */}
			<CKEditor
				className={classes.formElement}
				editor={ClassicEditor}
				data={formik.values.description}
				id="description"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={(event, editor) => {
					console.log(editor.getData());
					formik.setFieldValue("description", editor.getData());
					// handleDescriptionName(data)
					// setInitialValues({ ...initialValues, description: data})
				}}
				// onChange={formik.handleChange}
				// onBlur={(event, editor) => {
				// 	console.log("Blur.", editor);
				// }}
				// onFocus={(event, editor) => {
				// 	console.log("Focus.", editor);
				// }}
			/>
			{/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Testimonial description"></input> */}
			{/* input image */}
			<TextField
				inputProps={{
					accept: "image/png, image/jpeg",
					type: "file",
				}}
				className={classes.formElement}
				onChange={formik.handleChange}
			/>
			<Button className={classes.formElement} type="submit" variant="contained">
				Send
			</Button>
		</form>
	);
};

export default TestimonialForm;
