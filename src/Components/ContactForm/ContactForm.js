import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button,TextField} from '@mui/material';



const validationSchema = yup.object({
    email: yup
        .string('Ingrese su e-mail')
        .email('Ingrese un e-mail valido')
        .required('El e-mail es invalido'),
    name: yup
        .string('Ingrese su nombre')
        .name('Ingrese un nombre')
        .required('El nombre es requerido'),

});

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
        name:'',
        email: '',
        phone:'',

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="name"
            name="name"
            label="Nombre"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            />


        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit </Button>
      </form>
    </div>
  );
};

export default ContactForm;
