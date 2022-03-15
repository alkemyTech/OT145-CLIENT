import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from '../styles/styledList';


const MemberList = () => {

    const classes = useStyles();

    const datosMokeados = [
        {
            name: 'Carlos',
            img: process.env.PUBLIC_URL + "/images/ImagenHombre.png"
        },
        {
            name: 'Florencia',
            img: process.env.PUBLIC_URL + "/images/ImagenMujer.png"
        }
    ]

    return(
        <>
        <Box className={classes.title}>
            <Typography variant='h4'>
                Miembros
            </Typography>
        </Box>
        <Box className={classes.contLink}>
            <Link to='/backoffice/members/create' className={classes.styleLink}>
                <Button color='secondary' variant='contained'>Crear Miembro</Button>
            </Link>
        </Box>
        <Box className={classes.containerList}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align='center'>Nombre</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Photo</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Editar</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Eliminar</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {datosMokeados.map((datos, index) => (
                        <TableRow key={index} className={classes.tableRow}>
                        <TableCell className={classes.tableCell} align='center'>{datos.name}</TableCell>
                        <TableCell className={classes.tableCell} align='center'><img alt="" height="100px" width="100px" className={classes.img} src={datos.img} /></TableCell>
                        <TableCell className={classes.tableCell} align='center'><EditIcon color="secondary" className={classes.icon}/></TableCell>
                        <TableCell className={classes.tableCell} align='center'><DeleteIcon color="secondary" className={classes.icon}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
      </>
    )
};

export default MemberList