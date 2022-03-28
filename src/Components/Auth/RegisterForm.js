import React, { useEffect, useState } from 'react';
import '../FormStyles.css';
import { Formik, Field, Form } from 'formik';
import { SignupSchema } from './SignupSchema';
import {
  Alert,
  Button,
  Container,
  Box,
} from '@mui/material';
import useStyles from './AuthStyles';
import { AlertSucces } from '../../Utils/AlertSucces'
import { useDispatch } from 'react-redux';
import { registarUsuario } from "../../redux/usersReducer/action"
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../../shared/Spinner/Spinner'
import TerminosyCondiciones from '../Pdf/TerminosyCondiciones'

const RegisterForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false)
  const history = useHistory()
  const { loading, isRegister } = useSelector(state => state.auth)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

 
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    const { firstName, email, password } = values
      dispatch(registarUsuario(firstName, email, password))
      AlertSucces(values, setSubmitting)
      setOpen(true);
  };
  const handleChangeCheckbox = () => setAcceptTerms(!acceptTerms)

  useEffect(() => {
    if (isRegister) {
      history.push("/login")
    }
  }, [isRegister])

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
              <div className={classes.termsContainer}>
								<Field
									type="checkbox"
									onChange={handleChangeCheckbox}
                  name="acceptTerms"
                  id="acceptTerms"
                  className="input-field"
								/>
								<label htmlFor="acceptTerms" className="terms-text">
									Aceptar Terminos y condiciones de uso
								</label>
                {errors.acceptTerms 
              ? showAlert('warning', 'Los terminos y condiciones son obligatorios')
              : null}
							</div>
              <TerminosyCondiciones />
            {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Spinner width={30} heigth={30} color="#000" />
            </Box> :
              <Button disabled={!errors} color="secondary" variant="contained" fullWidth type="submit">
                Register
              </Button>
            }

          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;