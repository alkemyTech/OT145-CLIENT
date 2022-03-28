import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { enviarDonacion } from './enviarDonacion';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles/donancionStyles';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';


const Donacion = () => {

    const classes = useStyles();


    // useEffect(() => {
    //     const mercadopago = document.querySelector('#mercadopago')
    //     const script = document.createElement("script");
        
    //     script.setAttribute("src", "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js")
    //     script.setAttribute("data-preference-id", "162205422-829798aa-702b-4124-9127-9f26f721b24e")
    //     script.setAttribute("data-source", "button")

    //     mercadopago.appendChild(script)
    // }, [])

    const {handleChange, handleSubmit, handleBlur, values, setFieldValue, touched, errors} = useFormik({
        enableReinitialize: true,
        initialValues: {
            ammount: ''
        },
        validationSchema: Yup.object({
            ammount: Yup.number()
            .min(2, <span className="validations ">Debe ser mayor a $1</span>)
            .required(<span className="validations ">Requerido</span>),
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
        <Typography variant='h4'>¡Contribuye!</Typography>
        {/* <Box id='mercadopago'></Box> */}
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
            />
            <Button type='submit' color='mercadopago' variant='contained' className={classes.buttonDonar}>Contribuir</Button>
            </form>
        </Box>
    );
};

export default Donacion