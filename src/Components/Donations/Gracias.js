import React from 'react';
import { Typography, Box } from '@mui/material';
import useStyles from './styles/graciasStyles';

const Gracias = () => {

    const classes = useStyles();

    return(
        <Box className={classes.Containertexto}>
            <Typography variant='h5'>Gracias por tu colaboracion, con tu donacion ayudaste a muchas personas</Typography>
        </Box>
    );
};

export default Gracias;