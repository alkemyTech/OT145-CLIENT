import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import useStyles from './styles/donancionStyles';

const Donacion = ({texto}) => {

    const classes = useStyles();

    return(
        <Box className={classes.container}>
            <Typography variant='h4' mb={5}>Texto de prueba</Typography>
            <Button variant="contained" href="#" color='mercadopago'>
                Donar con mercadopago
            </Button>
        </Box>
    );
};

export default Donacion