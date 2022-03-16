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
    const [initialValues, setInitialValues] = useState(data || {
        name: '',
        description: '',
        image: '',
    });


    const handleChange = (e) => {
        setInitialValues({
            ...initialValues,
            [e.target.name]: e.target.value
        })
    }

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
            )
            ,
        ckeditorError: yup.string()
            .required("El campo es obligatorio")
    });

    const { handleSubmit, touched, errors, setFieldValue, values } = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema: activitySchema,
        onSubmit: (values) => {
            if (data) {
                privatePATCH(`https://ongapi.alkemy.org/api/activities/${data.id}`, values);
            }
            else {
                privatePOST('https://ongapi.alkemy.org/api/news', values);
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
                value={initialValues.name}
                onChange={handleChange}
            />
            <Editor text={initialValues.description} onChangeText={(description) => {
                setInitialValues({ ...initialValues , description });
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