import React from 'react';
import { useFormik} from 'formik';
import * as yup from 'yup';
import {Button , TextField, Autocomplete, Typography, Input  } from '@mui/material';
import useStyles from './style';



const validationSchema = yup.object({
    email: yup
      .string('Ingrese su mail')
      .email('Ingrese una dirección de mail válida')
      .required('Es necesario ingresar una dirección de mail'),
    name: yup
      .string('Ingrese su nombre')
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Es necesario ingresar un nombre')
      .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    role: yup
        .string('Selecione un rol')
        .required('Elija una opción'),
    password: yup
        .string('Ingrese su contraseña')
        .min(8, 'La contraseña debe tener una longitud mínima de 8 caraceteres.')
        .required('Es necesario ingresar una contraseña'),
    profilePhoto: yup
    .mixed()
    .test(
        "type",
        "Solo imagenes png y jpg",
        (value) =>{
            console.log(value)
            return value && ([".jpg"].includes(value) || [".png"].includes(value))}
        )
    .required('Es necesario ingresar una imagen'),
  });




const UserForm = () => {
    const classes = useStyles()
    const options = ['Administardor', 'Regular'];
    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            role: '',
            password:'',
            profilePhoto:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        const datosLogin= values
        console.log(datosLogin)
        },
    });


console.log(formik)
    return (
        <div className={classes.containerForm}>
            <Typography variant='h6'>Registrate</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre"
                    className={classes.fieldForm}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    color="secondary"
                />
                <TextField
                   
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    className={classes.fieldForm}
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
                    label="Contraseña"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    color="secondary"
                />
                <Autocomplete
                    id="role"
                    name="role"
                    className={classes.txt}
                    value={formik.values.role}
                    options={options}
                    onChange={(e, value) => formik.setFieldValue("role", value)}
                    renderInput={(params) => <TextField {...params} label="Elija una opcion" error={formik.touched.role && Boolean(formik.errors.role)} helperText={formik.touched.role && formik.errors.role}/>}
                />
                
                <Typography>Selecciona tu foto de perfil</Typography>
                <Input type="file" id="profilePhoto"  name="profilePhoto" onChange={formik.handleChange}
                
                    error={Boolean(formik.errors.profilePhoto)}
                />
                    {formik.errors.profilePhoto && 
                        <Typography>Selecciona tu foto de perfil</Typography>}
                <Button color="secondary" variant="contained" fullWidth type="submit" onSubmit={formik.handleSubmit}>
                    Enviar
                </Button>
            </form>
        </div>
    );
}
 
export default UserForm;