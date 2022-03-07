import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Paper, Button } from '@mui/material';
import useStyles from './styles/organizationScreenStyles';




const OrganizationScreen = () => {

    const classes = useStyles();

    const datosMockeados = {
        name: "Somos Mas",
        image: process.env.PUBLIC_URL + '/images/LOGO-SOMOS-MAS.png',
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

    return(
        <Box className={classes.container}>
            <Typography variant='h3' sx={{margin: '30px 10px 0px 10px'}}>Organizacion</Typography>
            <Paper className={classes.paperContainer} elevation={4}>
                <Box>
                    <Typography variant='h4'>{datosMockeados.name}</Typography>
                </Box>
                <Box className={classes.imgContainer}>
                    <img src={datosMockeados.image} alt='Logo Ong'/>
                </Box>
                <Box>
                    <Typography variant='body2'>{datosMockeados.shortDescription}</Typography>
                </Box>
                <Box className={classes.containerButton}>
                    <Link to="/backoffice/organization/edit" className={classes.button}>
                        <Button variant='contained' color='mercadopago' fullWidth={true}>Editar</Button>
                    </Link>
                </Box>
            </Paper>
        </Box>
    );
};

export default OrganizationScreen;