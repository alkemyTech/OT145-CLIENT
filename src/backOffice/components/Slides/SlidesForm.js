import React, { useEffect } from 'react';
import { privatePATCH , privatePOST } from '../../../Services/privateApiService'
import { useFormik} from 'formik';
import { validationSchema } from './config';
import { convertToBase64 } from '../../../helpers/base64';
import { TextField, Button, Typography } from '@mui/material';
import useStyles from './styleSlides';
import Editor from '../Editor/Editor'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { selectSlideById, getSlideById } from '../../../redux/slides/slidesSlice'

const SlidesForm = () => {
    const classes = useStyles();
    const { id } = useParams()
    const { pathname } = useLocation()    
    const dispatch = useDispatch()
    const slide = useSelector(selectSlideById)

    const initialValues = {
        name: slide?.name || '',
        description: slide?.description || '',
        order: slide?.order || 0,
        image: slide?.image || ''
    };
    
    useEffect(() => {
        if(pathname.includes('edit')){
            dispatch(getSlideById(id))
        }
    }, []);
    
    const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: ( async (values) => {
            if (slide) {
                const base64 = await convertToBase64(values.image)
                values.image = base64
                privatePATCH('https://ongapi.alkemy.org/api/slides', slide.id, values);
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
                    <Editor
                        id="description"
                        name="description"
                        onChange={(event, editor)=>setFieldValue("description", editor.getData())}
                    />
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