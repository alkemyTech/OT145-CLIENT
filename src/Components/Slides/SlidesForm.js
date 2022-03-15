import React, { useState } from 'react';
import { privatePATCH , privatePOST } from '../../Services/privateApiService'
import { useFormik} from 'formik';
import * as yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import useStyles from './styleSlides';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';



const validationSchema = yup.object({
    name: yup
      .string('Ingrese su nombre')
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Es necesario ingresar un nombre')
      .matches(/[a-zA-Z]/, 'El nombre solo puede tener letras'),
    description: yup
    .string('Ingrese Una descripcion')
    .required('Es necesario ingresar una descripcion'),
    order: yup
        .string('Ingrese orden')
        .required('Es necesario ingresar un order')
        .matches(/(?=.*[0-9])/, 'Solo puede ingresar numeros'),
    image: yup
        .mixed()
        .test(
            "type",
            "Solo imagenes png y jpg",

            (value) =>{
                return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))}
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
        <div >
            <form onSubmit={formik.handleSubmit}  className={classes.containerForm}>
                <TextField fullWidth
                    id="name" 
                    name="name" 
                    placeholder="Nombre"
                    className={classes.fieldForm}
                    value={formik.values.name} 
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}/>

                <TextField fullWidth
                    id="order"
                    name="order" 
                    type="number"
                    className={classes.fieldForm}
                    value={formik.values.order} 
                    onChange={formik.handleChange} placeholder="Order"                     
                    error={formik.touched.order && Boolean(formik.errors.order)}
                    helperText={formik.touched.order && formik.errors.order}/>

                <TextField fullWidth
                    id="image"
                    name="image" 
                    type="file"
                    className={classes.fieldForm}
                    onChange={(e)=>formik.setFieldValue("image", e.target.files[0])} placeholder="Descripcion"                     
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    helperText={formik.touched.image && formik.errors.image}/>

                <div className={classes.fieldForm}>
                    <CKEditor
                        id="description"
                        name="description"
                        onChange={(event, editor)=>formik.setFieldValue("description", editor.getData())}
                        editor={ClassicEditor}/>
                    {formik.handleSubmit && formik.errors.description &&
                        <Typography variant="caption" color="error">Es necesario ingresar una descripcion</Typography>
                    }
                </div>
                <Button color="secondary" variant="contained" fullWidth type="submit">
                    Enviar
                </Button>
            </form>
        </div>
    );
}
export default SlidesForm;