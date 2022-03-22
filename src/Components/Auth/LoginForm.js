import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import useStyles from './AuthStyles';
import { useDispatch } from 'react-redux';
/* import { iniciarSesion,cerrarSesion } from '../../redux/usersReducer/userReducer'; */
import { iniciarSesion } from "../../redux/usersReducer/action"
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from "../../Components/Spinner/Spinner"
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
  const history = useHistory()
  const { isLogin, loading } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const classes = useStyles()

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values
      dispatch(iniciarSesion({ email, password }))

    },
  });

  useEffect(() => {
    if (isLogin) {
      history.push("/")
    }
  }, [isLogin])


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
          /* error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password} */
          color="secondary"
        />
        {loading ? <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Spinner width={30} heigth={30} color="#000" />
        </Box> :
          <Button color="secondary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        }

      </form>
    </Container>
  );
};

export default LoginForm