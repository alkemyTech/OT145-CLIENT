import React, { useState } from "react";
import "../FormStyles.css";
import { privatePOST, privatePATCH } from "../../Services/privateApiService";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { Container, Button, Typography } from "@mui/material";
import { useFormik } from 'formik';
import * as yup from 'yup'

import useStyles from "../Auth/AuthStyles";


const validationSchema = yup.object({
    title: yup
      .string('Ingrese un título')
      .required('El titulo es obligarotio'),
    description: yup
      .string('Ingrese una desripción')
      .required('La descripción es obligatoria'),
    image: yup
      .mixed()
      .test(
        "Unsupported Format",
        value => value && SUPPORTED_FORMATS.includes(value.type)
      )

  });
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/png"
  ]; 

const ProjectsForm = ({ data }) => {
  const classes = useStyles()
  const [projectData, setProjectData] = useState(
    data || {
      title: '',
      description: '',
      image: '',
      due_date:'',
    }
  );
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        setProjectData(
            Object.assign(projectData,values))
            if (data) {
                privatePATCH('https://ongapi.alkemy.org/api/projects', data.id, projectData)
               } else {
                 privatePOST("http://ongapi.alkemy.org/api/projects", projectData);
               }
           
      console.log(projectData)
    },
  });

  return (
    <Container className={classes.containerForm}>
         <Typography>Completá los datos del proyecto</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        className={classes.fieldForm}
          fullWidth
          id="title"
          name="title"
          label="Título"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          color="secondary"
        />
        <TextField
        className={classes.fieldForm}
          fullWidth
          id="description"
          name="description"
          label="Descripción"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.desription && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          color="secondary"
        />
        <label htmlFor="contained-button-file">
        <TextField className={classes.fieldFormInput} 
        id="image" 
        type="file"
        name="image"
        onChange={(e)=>formik.setFieldValue("image",e.target.files[0])}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}/>
        </label>


        <Typography></Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
      className={classes.fieldForm}
          label="Fecha de finalización"
          value={projectData.due_date || new Date()}
          minDate={new Date()}
          onChange={(newValue) => {
            setProjectData({...projectData, due_date: newValue});
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button className={classes.fieldForm} color="secondary" variant="contained" fullWidth type="submit" >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ProjectsForm;