import React from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./config";
import Field from "./Field";
import { Button, Box } from "@mui/material";


const EditHomeForm = () => {
  

  const { handleSubmit, handleChange, setFieldValue, errors, touched, values } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

    
const props = [
    {
      label: 'Title Home',
      name: 'title',
      onChange: handleChange,
      value: values.title,
      error: touched.title && Boolean(errors.title),
      helperText: touched.title && errors.title,
    },
    {
      label: 'Text Slide 1',
      name: 'textSlide1',
      onChange: handleChange,
      value: values.textSlide1,
      error: touched.textSlide1 && Boolean(errors.textSlide1),
      helperText: touched.textSlide1 && errors.textSlide1,
    },
    {
    label: "Image Slide 1",
    type: "file",
    name: "imageSlide1",
    error: touched.imageSlide1 && Boolean(errors.imageSlide1),
    helperText: touched.imageSlide1 && errors.imageSlide1,
    onChange: (e) => setFieldValue("imageSlide1", e.target.files[0]),
  },
  {
    label: 'Text Slide 2',
    name: 'textSlide2',
    onChange: handleChange,
    value: values.textSlide2,
    error: touched.textSlide2 && Boolean(errors.textSlide2),
    helperText: touched.textSlide2 && errors.textSlide2,
  },
  {
    label: "Image Slide 2",
    type: "file",
    name: "imageSlide2",
    error: touched.imageSlide2 && Boolean(errors.imageSlide2),
    helperText: touched.imageSlide2 && errors.imageSlide2,
    onChange: (e) => setFieldValue("imageSlide2", e.target.files[0]),
  },
  {
    label: 'Text Slide 3',
    name: 'textSlide3',
    onChange: handleChange,
    value: values.textSlide3,
    error: touched.textSlide3 && Boolean(errors.textSlide3),
    helperText: touched.textSlide3 && errors.textSlide3,
  },
  {
    label: "Image Slide 3",
    type: "file",
    name: "imageSlide3",
    error: touched.imageSlide3 && Boolean(errors.imageSlide3),
    helperText: touched.imageSlide3 && errors.imageSlide3,
    onChange: (e) => setFieldValue("imageSlide3", e.target.files[0]),
  },
]


  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.map((element, index) => (
          <Field
            key={index}
            label={element.label}
            type={element.type}
            name={element.name}
            error={element.error}
            helperText={element.helperText}
            onChange={element.onChange}
            value={element.value}
          />
        ))}
        <Button variant="contained" color="secondary" type="submit">
          Enviar
        </Button>
      </Box>
    </form>
  );
};

export default EditHomeForm;
