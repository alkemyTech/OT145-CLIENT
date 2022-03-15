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
    const [userData, setUserData] = useState(data || {
        name: '',
        email: '',
        role_id: '',
        password:'',
        profile_image:''
    }); 
    const formik = useFormik({
        initialValues:{
            ...userData
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
                    id="role_id"
                    name="role_id"
                    className={classes.txt}
                    value={formik.values.role_id}
                    options={options}
                    onChange={(e, value) => formik.setFieldValue("role_id", value)}
                    renderInput={(params) => <TextField {...params} label="Elija una opcion" error={formik.touched.role_id && Boolean(formik.errors.role_id)} helperText={formik.touched.role_id && formik.errors.role_id}/>}
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    id="profile_image"
                    name="profile_image"
                    type="file"
                    onChange={(e)=>formik.setFieldValue("profile_image", e.target.files[0])}
                    error={formik.touched.profile_image && Boolean(formik.errors.profile_image)}
                    helperText={formik.touched.profile_image && formik.errors.profile_image}/>

                <Button color="secondary" variant="contained" fullWidth type="submit" onSubmit={formik.handleSubmit}>
                    Enviar
                </Button>
            </form>
        </div>
    );
}
 
export default UserForm;