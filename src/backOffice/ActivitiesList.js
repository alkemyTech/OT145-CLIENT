import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from './styles/styledList';

import Foto6 from "./Images/Foto6.jpg";
import Foto7 from "./Images/Foto7.jpg";
import Manos10 from "./Images/Manos10.jpg";


function createData(name, image, createdAt) {
    return { name, image, createdAt };
}

const data = [
    {
        name: "Actividad 1",
        image: Foto6,
        createdAt: "1/03/2022",
    },
    {
        name: "Actividad 2",
        image: Foto7,
        createdAt: "15/09/2021",
    },
    {
        name: "Actividad 3",
        image: Manos10,
        createdAt: "12/03/2021",
    }
]

const rows = data.map((dat) => createData(dat.name, dat.image, dat.createdAt))

export default function ActivitiesList() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.contLink}>
                <Link to='/backoffice/activities/create-activity' className={classes.styleLink}>
                    <Typography variant="subtitle1">Crear Actividad</Typography>
                </Link>
            </Box>
            <Box className={classes.containerList}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableCell}>Nombre</TableCell>
                                <TableCell className={classes.tableCell}>Imagen</TableCell>
                                <TableCell className={classes.tableCell}>Fecha</TableCell>
                                <TableCell className={classes.tableCell}>Modificar</TableCell>
                                <TableCell className={classes.tableCell}>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} className={classes.tableRow}>
                                    <TableCell className={classes.tableCell}>{row.name}</TableCell>
                                    <TableCell className={classes.tableCell}><img alt="" height="150px" width="150px" className={classes.img} src={row.image} /></TableCell>
                                    <TableCell className={classes.tableCell}>{row.createdAt}</TableCell>
                                    <TableCell className={classes.tableCell}><EditIcon color="secondary" /></TableCell>
                                    <TableCell className={classes.tableCell}><DeleteIcon color="secondary" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
