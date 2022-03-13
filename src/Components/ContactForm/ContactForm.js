import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useStyles from './StyleContactForm';




const validationSchema = yup.object({
    email: yup
      .string('Ingrese su e-mail')
      .email('Ingrese un e-mail valido')
      .required('Es necesario ingresar un e-mail'),

    name: yup
      .string('Ingrese su nombre')
      .required('El nombre es requerido')
      .matches(/[a-zA-Z] + !(?=.*[0-9])/, 'El nombre solo puede contener letras'),
    phone: yup
      .string('Ingrese su telefono')
      .min(8, 'El telefono debe tener al menos 8 digitos')
      .required('Es necesario ingresar un numero de telefono')
      .matches(/(?=.*[0-9])/, 'El telefono solo puede contener numeros'),
    message: yup
      .string('Ingrese su mensaje')
      .required('Debe de escribir un mensaje')
});

const ContactForm = () => {
  const classes= useStyles();

  const formik = useFormik({
    initialValues: {
        name:'',
        email: '',
        phone:'',
        message:''

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const datosContact= values
      console.log(datosContact)
    },
  });
  return (
    <div className={classes.containerForm}>
      <Typography variant="h6">Contactanos</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField fullWidth
            id="name"
            name="name"
            label="Nombre"
            className={classes.fieldForm}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}/>
          <TextField fullWidth
          id="email"
          name="email"
          label="Email"
          className={classes.fieldForm}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}/>
          <TextField fullWidth
            id="phone"
            name="phone"
            label="Telefono"
            className={classes.fieldForm}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}/>
          <TextareaAutosize
            id="message"
            name="message"
            maxRows={4}
            aria-label="maximum height"
            placeholder="Ingrese su mensaje"
            className={classes.txt}
            value={formik.values.message}
            onChange={formik.handleChange}/>
          <Button color="secondary" variant="contained" fullWidth type="submit">
            Submit 
          </Button>
      </form>
    </div>
  );
};

export default ContactForm;
