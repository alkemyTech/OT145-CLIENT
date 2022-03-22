import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik} from 'formik';
import { useLocation, useHistory } from 'react-router-dom';
import { patchUser, postUser } from '../../redux/Users/userSlice';
import { convertToBase64 } from '../News/config/helper';
import { getUsersById } from '../../redux/Users/userSlice';
import {Button , TextField, Typography, Select, MenuItem, InputLabel, FormControl, FormHelperText} from '@mui/material';
import Spinner from '../Spinner/Spinner';
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


const UserForm = () => {

    const { userId, status } = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const { state } = useLocation()
    const history = useHistory();
    
    const classes = useStyles()
    
    useEffect(() => {  
        if(state){
           dispatch(getUsersById(state))
        }
    }, [])

    
    const {handleChange, handleSubmit, handleReset, handleBlur, values, setFieldValue, touched, errors} = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userId?.name || '',
            email: userId?.email || '',
            role_id: userId?.role_id || '',
            password: userId?.password || '',
            profile_image: userId?.profile_image || ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            if(userId){
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                values.id = userId.id
               dispatch(patchUser(values))
            } else {
                const base64 = await convertToBase64(values.profile_image)
                values.profile_image = base64
                dispatch(postUser(values))
            }
        },
    });

    useEffect(() => {
        if(status == 'created'){
            handleReset();
        }
    }, [status])

    useEffect(() => {
        if(status == 'edited'){
            history.push('/backoffice/users')
        }
    }, [status])


    return (
        <div className={classes.containerForm}>
            <Typography variant='h6'>{userId ? 'Editar Usuario' : 'Crear Usuario'}</Typography>
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
                <FormControl 
                    fullWidth
                    error={touched.role_id && Boolean(errors.role_id)}
                    className={classes.txt}
                >
                    <InputLabel id='role_id'>Rol</InputLabel>
                    <Select
                        id='role_id'
                        labelId='role_id'
                        name='role_id'
                        value={values.role_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <MenuItem value='' disabled>--Seleccione una opcion--</MenuItem>
                        <MenuItem value={2}>Administrador</MenuItem>
                        <MenuItem value={1}>Regular</MenuItem>
                    </Select>
                    {errors.role_id && <FormHelperText>{errors.role_id}</FormHelperText>}
                </FormControl>
               
                <TextField className={classes.fieldForm}
                    fullWidth
                    id="profile_image"
                    name="profile_image"
                    type="file"
                    onChange={(e)=>setFieldValue("profile_image", e.target.files[0])}
                    error={touched.profile_image && Boolean(errors.profile_image)}
                    helperText={touched.profile_image && errors.profile_image}/>

                <Button color="secondary" variant="contained" fullWidth type="submit" className={classes.button}>
                    {status == 'loading' 
                        ? <Spinner width={30} height={30} color='#000'/>
                        : 'Enviar'    
                    }
                </Button>
            </form>
        </div>
    );
}
 
export default UserForm;