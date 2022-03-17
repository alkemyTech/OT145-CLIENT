import React, { useState } from 'react';
import { useFormik} from 'formik';
import * as yup from 'yup';
import {Button , TextField, Autocomplete, Typography } from '@mui/material';
import useStyles from './style';
import { privatePATCH, privatePOST} from '../../Services/privateApiService';


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
    role_id: yup
        .string('Selecione un rol')
        .required('Elija una opción'),
    password: yup
        .string('Ingrese su contraseña')
        .min(8, 'La contraseña debe tener una longitud mínima de 8 caraceteres.')
        .required('Es necesario ingresar una contraseña'),
    profile_image: yup
        .mixed()
        .test(
            "type",
            "Solo imagenes png y jpg",
            (value) =>{
                return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))}
            )
        .required('Es necesario ingresar una imagen'),
});




const UserForm = ({ data }) => {
    const classes = useStyles()
    const options = ["", "Administrador", "Regular"]
 
    const {handleChange, handleSubmit, values, setFieldValue, touched, errors} = useFormik({
        initialValues:{
            name: data?.name || '',
            email: data?.email || '',
            role_id: data?.role_id || '',
            password: data?.password || '',
            profile_image: data?.profile_image || ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(data){
                privatePATCH('https://ongapi.alkemy.org/api/users', data.id, values)
            } else {
                privatePOST('https://ongapi.alkemy.org/api/users', values);
            }
        },
    });



    return (
        <div className={classes.containerForm}>
            <Typography variant='h6'>Registrate</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Nombre"
                    className={classes.fieldForm}
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    color="secondary"
                />
                <TextField
                   
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    className={classes.fieldForm}
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    color="secondary"
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    color="secondary"
                />
                <Autocomplete
                    id="role_id"
                    name="role_id"
                    className={classes.txt}
                    value={values.role_id}
                    options={options}
                    onChange={(e, value) => setFieldValue("role_id", value)}
                    renderInput={(params) => <TextField {...params} label="Elija una opcion" error={touched.role_id && Boolean(errors.role_id)} helperText={touched.role_id && errors.role_id}/>}
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    id="profile_image"
                    name="profile_image"
                    type="file"
                    onChange={(e)=>setFieldValue("profile_image", e.target.files[0])}
                    error={touched.profile_image && Boolean(errors.profile_image)}
                    helperText={touched.profile_image && errors.profile_image}/>

                <Button color="secondary" variant="contained" fullWidth type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    );
}
 
export default UserForm;