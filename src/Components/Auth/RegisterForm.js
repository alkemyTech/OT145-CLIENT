import React, { useState } from 'react';
import '../FormStyles.css';
import { Formik, Field, Form } from 'formik';
import { SignupSchema } from './SignupSchema';
import {
  Alert,
  Button,
  Container
} from '@mui/material';
import useStyles from './AuthStyles';
import  { Modal } from '../../Utils/AlertsProps'

const RegisterForm = () => {
    const classes= useStyles()
  const [open, setOpen] = useState(false);

  const userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    let timerInterval;
    Modal.fire({
      title: "Registrando Usuario!",
      html: "Esta ventana se cierra automaticamente",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Modal.showLoading();
        timerInterval = setInterval(() => {;
        }, 50);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Modal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    //Submitting values de formik
    setTimeout(() => {
      console.log("Singuping in", values);
      setSubmitting(false);
    }, 500);
    setOpen(true);
  };

  const showAlert = (type, text) => {
    return <Alert severity={type}>{text}</Alert>;
  };

  return (
    <Container className={classes.containerForm}>
      <Formik
        initialValues={userData}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="form-container">
            <h1>Register</h1>
            <label htmlFor="firstName">First Name</label>
            <Field
              className="input-field"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
            />
            {errors.firstName && touched.firstName
              ? showAlert('warning', errors.firstName)
              : null}
            <label htmlFor="lastName">Last Name</label>
            <Field
              className="input-field"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
            />
            {errors.lastName && touched.lastName
              ? showAlert('warning', errors.lastName)
              : null}
            <label htmlFor="email">Email</label>
            <Field
              className="input-field"
              id="email"
              name="email"
              placeholder="example@example.com"
              type="email"
            />
            {errors.email && touched.email
              ? showAlert('warning', errors.email)
              : null}
            <label htmlFor="password">Password</label>
            <Field
              className="input-field"
              id="password"
              name="password"
              placeholder="Your password"
              type="password"
            />
            {errors.password && touched.password
              ? showAlert('warning', errors.password)
              : null}
            <label htmlFor="confirmPassword">Confirm password</label>
            <Field
              className="input-field"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            />
            {errors.confirmPassword && touched.confirmPassword
              ? showAlert('warning', errors.confirmPassword)
              : null}
            <Button disabled={!errors} color="secondary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;