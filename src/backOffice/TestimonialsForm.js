import React, { useState } from "react";
import useStyles from "./styles/TestimonialsFormStyles";
import { TextField, Button } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TestimonialForm = () => {
	const [initialValues, setInitialValues] = useState({
		name: "",
		description: "",
	});

	const handleChange = (e) => {
		if (e.target.name === "name") {
			setInitialValues({ ...initialValues, name: e.target.value });
		}
		if (e.target.name === "description") {
			setInitialValues({ ...initialValues, description: e.target.value });
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(initialValues);
	};

	const classes = useStyles();

	return (
		// Realizar create y edit
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				className={classes.formElement}
				type="text"
				name="name"
				value={initialValues.name}
				onChange={handleChange}
				placeholder="Testimonial Title"
			/>
			{/* Reemplaza campo por ckeditor */}
			<CKEditor
				className={classes.formElement}
				editor={ClassicEditor}
				data="<p>Hello from CKEditor 5!</p>"
				onReady={(editor) => {
					// You can store the "editor" and use when it is needed.
					console.log("Editor is ready to use!", editor);
				}}
				onChange={(event, editor) => {
					const data = editor.getData();
					console.log({ event, editor, data });
				}}
				onBlur={(event, editor) => {
					console.log("Blur.", editor);
				}}
				onFocus={(event, editor) => {
					console.log("Focus.", editor);
				}}
			/>
			{/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Testimonial description"></input> */}
			{/* input image */}
			<TextField
				type="file"
				inputProps={{
					accept: "image/png, image/jpeg",
				}}
				className={classes.formElement}
			/>
			<Button className={classes.formElement} type="submit" variant="contained">
				Send
			</Button>
		</form>
	);
};

export default TestimonialForm;
