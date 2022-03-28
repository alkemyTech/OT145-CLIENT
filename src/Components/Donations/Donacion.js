import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles/donancionStyles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import axios from 'axios';

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

    const enviarDonacion = async (values) => {

        const URL = "https://api.mercadopago.com/checkout/preferences";
    
        const data = {
          "items": [
            {
              "title": "Donación ONG 'Somos más'",
              "quantity": 1,
              "unit_price": values.ammount
            }
          ],
          "back_urls": {
            "success": "http://localhost:3000/gracias"
          },
          "payment_methods": {
            "excluded_payment_methods": [
              {
                "id": "atm"
              }
            ],
            "excluded_payment_types": [
              {
                "id": "ticket"
              }
            ],
          },
        };
    
        const headers = { 
          "Authorization": "Bearer TEST-5811521037381417-032702-ddd7190a2ab6ede60894be7bb76a8bc1-162205422",
          "Content-Type": "application/json"
        };
    
        axios.post(URL, data, { headers })
          .then(response => {
            console.log(response);
            window.location.href = response.data.sandbox_init_point;
          })
          .catch(err => console.log(err))
      };

    const {handleChange, handleSubmit, handleReset, handleBlur, values, setFieldValue, touched, errors} = useFormik({
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
        {/* //     <Typography variant='h4'>Doná</Typography>
        //     <Box id='mercadopago'></Box> */}
            <form onSubmit={handleSubmit}>
            <TextField 
                name='ammount'
                type='number'
                value={values.ammount}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <Button type='submit' color='mercadopago' variant='contained'>Donar</Button></form>
        </Box>
    );
};

export default Donacion