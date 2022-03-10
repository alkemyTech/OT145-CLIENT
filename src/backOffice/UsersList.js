import * as React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useStyles from './styles/styledList'
import DecorativeLineBW from '../Components/DecorativeLine/DecorativeLineBW'


function createData(name, email, edit, deleteData) {
  return { name, email, edit, deleteData }
}

const rows = [
  createData('Juan García', 'juangarcia@gmail.com', <EditIcon />, <DeleteForeverIcon />),
  createData('Federico Moreno', 'fedemoreno@gimal.com', <EditIcon />, <DeleteForeverIcon />),
  createData('Mariano Perez', 'marianop@gmail.com', <EditIcon />, <DeleteForeverIcon />),
]

export default function UsersList() {
  const classes = useStyles()
  const location = useLocation();
  const path = location.pathname;

  return (
    <Container className={classes.containerList}>
      <div className={classes.contLink}>
        <Link to={`${path}/create-user`} className={classes.styleLink}>
          <Typography variant="subtitle1">Crear Usuario</Typography>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell} align="center">Email</TableCell>
              <TableCell className={classes.tableCell} align="center">Modificar</TableCell>
              <TableCell className={classes.tableCell} align="center">Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} className={classes.tableRow}>
                <TableCell className={classes.tableCell} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  {row.email}
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Button variant="text" color="secondary">
                    {row.edit}
                  </Button>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <Button variant="text" color="secondary">
                    {row.deleteData}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DecorativeLineBW></DecorativeLineBW>
    </Container>
  )
}
