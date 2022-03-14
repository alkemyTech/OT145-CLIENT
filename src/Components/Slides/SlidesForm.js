import React, { useState } from 'react';
import { privatePATCH , privatePOST } from '../../Services/privateApiService'

import { useFormik} from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import useStyles from './styleSlides';



const validationSchema = yup.object({
    name: yup
      .string('Ingrese su nombre')
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Es necesario ingresar un nombre')
      .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    description: yup
    .string('Ingrese Una descripcion')
    .required('Es necesario ingresar un nombre'),
    order: yup
        .string('Ingrese orden')
        .matches(/(?=.*[0-9])/, 'Solo puede ingresar numeros'),
    profilePhoto: yup
    .mixed()
    .test(
        "type",
        "Solo imagenes png y jpg",
        (value) =>{
            return value && ([".jpg"].includes(value) || [".png"].includes(value))}
        )
    .required('Es necesario ingresar una imagen'),
    
  });

const SlidesForm = ({ data }) => {
    const classes = useStyles();

    const [slidesData, setSlidesData] = useState(data || {
        name: '',
        description: '',
        order:0,
        image:''
    });

    const formik = useFormik({
        initialValues:{
            ...slidesData
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if(data){
                privatePATCH('https://ongapi.alkemy.org/api/slides', data.id, values)
            } else {
                privatePOST('https://ongapi.alkemy.org/api/slides', values);
            }
        },
        
    });

    
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={classes.containerForm}>
                <TextField fullWidth
                    id="name" 
                    name="name" 
                    className={classes.fieldForm}
                    value={formik.values.name} 
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}/>


                <TextField fullWidth
                    id="description"
                    name="description" 
                    className={classes.fieldForm}
                    value={formik.values.description} 
                    onChange={formik.handleChange} placeholder="Descripcion"                     
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}/>

                <Button color="secondary" variant="contained" fullWidth type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    );
}
 
export default SlidesForm;