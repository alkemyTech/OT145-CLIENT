import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button , Container, TextField, Typography }from '@mui/material';
import useStyles from './AuthStyles';
import { useDispatch } from 'react-redux';


const validationSchema = yup.object({
  email: yup
    .string('Ingrese su mail')
    .email('Ingrese una dirección de mail válida')
    .required('Es necesario ingresar una dirección de mail'),
  password: yup
    .string('Ingrese su contraseña')
    .min(6, 'La contraseña debe tener una longitud mínima de 6 caraceteres.')
    .required('Es necesario ingresar una contraseña')
    .matches(/[a-zA-Z]+(?=.*[@#$%^&+=])+(?=.*[0-9])/, 'La contraseña debe contener al menos un número, una letra y un símbolo (por ejemplo: @#$%).'),
});

const LoginForm = () => {
    const classes= useStyles()
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const datosLogin= values
      console.log(datosLogin)
    },
  });
  
  return (
    <Container className={classes.containerForm}>
        <Typography>Completá tus datos para ingresar</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
        className={classes.fieldForm}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          color="secondary"
        />
        <TextField className={classes.fieldForm}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          color="secondary"
        />
        <Button className={classes.fieldForm} color="secondary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm