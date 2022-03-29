import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { enviarDonacion } from './enviarDonacion';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles/donancionStyles';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';


const Donacion = () => {

    const classes = useStyles();

    const {handleChange, handleSubmit, handleBlur, values, touched, errors} = useFormik({
        enableReinitialize: true,
        initialValues: {
            ammount: ''
        },
        validationSchema: Yup.object({
            ammount: Yup.number()
            .min(2, 'Debe ser mayor a $1')
            .required('El campo es obligatorio'),
        }),
        onSubmit: async (values, {setSubmitting}) => {
            setTimeout(() => {
                enviarDonacion(values);
                setSubmitting(false);
              }, 400);
        },
    });

    return(
        <Box className={classes.container}>
        <Typography variant='h4'>¡Donar!</Typography>
            <form 
              onSubmit={handleSubmit}
              className={classes.formulario}
            >
            <TextField 
                name='ammount'
                type='number'
                label="Importe"
                value={values.ammount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.ammount && Boolean(errors.ammount)}
                helperText={touched.ammount && errors.ammount}
            />
            <Button type='submit' color='mercadopago' variant='contained' className={classes.buttonDonar}>Donar</Button>
            </form>
        </Box>
    );
};

export default Donacion