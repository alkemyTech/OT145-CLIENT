import React from 'react';
import { privatePATCH , privatePOST } from '../../Services/privateApiService'
import { useFormik} from 'formik';
import { validationSchema } from './config/index';
import { convertToBase64 } from '../News/config/helper';
import { TextField, Button, Typography } from '@mui/material';
import useStyles from './styleSlides';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';


const SlidesForm = ({ data }) => {
    const classes = useStyles();

    const initialValues = {
        name: data?.name || '',
        description: data?.description || '',
        order: data?.order || 0,
        image: data?.image || ''
    };

    const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: ( async (values) => {
            if (data) {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                privatePATCH('https://ongapi.alkemy.org/api/slides', data.id, values);
            }
            else {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                privatePOST('https://ongapi.alkemy.org/api/slides', values);
            }
        })
    })

    return (
        <div  className={classes.containerForm}>
            <Typography variant="h6">Crear slide</Typography>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth
                    name="name" 
                    type="text"
                    placeholder="Nombre"
                    className={classes.fieldForm}
                    value={values.name} 
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}/>

                <TextField fullWidth
                    name="order" 
                    type="number"
                    className={classes.fieldForm}
                    value={values.order} 
                    onChange={handleChange} 
                    placeholder="Order"                     
                    error={touched.order && Boolean(errors.order)}
                    helperText={touched.order && errors.order}/>

                <TextField fullWidth
                    name="image" 
                    type="file"
                    className={classes.fieldForm}
                    onChange={(e)=>setFieldValue("image", e.target.files[0])}                     
                    error={touched.image && Boolean(errors.image)}
                    helperText={touched.image && errors.image}/>

                <div className={classes.fieldForm}>
                    <CKEditor
                        id="description"
                        name="description"
                        onChange={(event, editor)=>setFieldValue("description", editor.getData())}
                        editor={ClassicEditor}/>
                    {handleSubmit && errors.description &&  
                        <Typography variant="caption" color="error">{touched.description && errors.description}</Typography> 
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