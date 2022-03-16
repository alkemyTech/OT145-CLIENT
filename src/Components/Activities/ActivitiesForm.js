import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../FormStyles.css';
import useStyles from '../Auth/AuthStyles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { privatePATCH, privatePOST } from '../../Services/privateApiService'
import Editor from '../Editor/Editor';

const ActivitiesForm = ({ data }) => {
    const classes = useStyles();
    
    const activitySchema = yup.object().shape({
        name: yup.string()
            .required('El campo obligatorio'),
        image: yup
            .mixed()
            .required("La imagen es obligatorio")
            .test(
                "type",
                "Solo imagenes png y jpg",
                (value) => {
                    return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))
                }
            ),
        ckeditorError: yup.string()
            .required("El campo es obligatorio")
    });

    const { handleSubmit, touched, errors, setFieldValue, values , handleChange } = useFormik({
        initialValues: {
            name: data?.name || '',
            description: data?.description || '',
            image: data?.image || '',
        },
        validationSchema: activitySchema,
        onSubmit: (initialValues) => {
            if (data) {
                privatePATCH(`https://ongapi.alkemy.org/api/activities/${data.id}`, initialValues);
            }
            else {
                privatePOST('https://ongapi.alkemy.org/api/news', initialValues);
            }
        }
    });

    return (
        <form onSubmit={handleSubmit} className={classes.containerForm}>
            <TextField
                className={classes.fieldForm}
                type="text"
                placeholder="Activity Title"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name ? errors.name : null}
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <Editor text={values.description} onChangeText={(description) => {
                setFieldValue("description",description);
            }} />

            {handleSubmit && errors.ckeditorError &&
                <Typography sx={{ paddingLeft: "11px" }} variant="caption" color="error">{touched.name && errors.name ? errors.name : null}</Typography>
            }
            <TextField
                className={classes.fieldForm}
                type="file"
                name='image'
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                fullWidth
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image ? errors.image : null}
            />
            <Button color="secondary" variant="contained" fullWidth type="submit">Enviar</Button>
        </form>
    );
}

export default ActivitiesForm;