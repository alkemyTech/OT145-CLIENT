
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import useStyles from './styles/stylesActivitiesList';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Foto6 from "./Images/Foto6.jpg";
import Foto7 from "./Images/Foto7.jpg";
import Manos10 from "./Images/Manos10.jpg";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, image, createdAt) {
  return { name, image, createdAt};
}

const data = [
    {
        name:"Actividad 1",
        image: Foto6,
        createdAt:"1/03/2022",
    },
    {
        name:"Actividad 2",
        image: Foto7,
        createdAt:"15/09/2021",
    },
    {
        name:"Actividad 3",
        image: Manos10,
        createdAt:"12/03/2021",
    }
]


const rows = data.map((dat) => createData(dat.name,dat.image,dat.createdAt))

export default function ActivitiesList() {
    const classes = useStyles();
  return (
    <>
        <div className={classes.contLink}>
            <Link to='/backoffice/activities/create' className={classes.styleLink}>
                <Typography variant="subtitle1">Crear Actividad</Typography>
            </Link>
        </div>
        <div className={classes.containerList}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell >Nombre</StyledTableCell>
                        <StyledTableCell >Imagen</StyledTableCell>
                        <StyledTableCell >Fecha</StyledTableCell>
                        <StyledTableCell >Modificar</StyledTableCell>
                        <StyledTableCell >Eliminar</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell><img alt="" height="150px" width="150px" className={classes.img} src={row.image} /></StyledTableCell>
                        <StyledTableCell>{row.createdAt}</StyledTableCell>
                        <StyledTableCell><EditIcon/></StyledTableCell>
                        <StyledTableCell><DeleteIcon/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    </>
  );
}
