import * as React from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useStyles from '../../styles/styledList'
import DecorativeLineBW from '../../../Components/DecorativeLine/DecorativeLineBW'


function createData(name, createdAt, edit, deleteData) {
  return { name, createdAt, edit, deleteData }
}

const rows = [
  createData('Campaigns', '27/04/2021', <EditIcon />, <DeleteForeverIcon />),
  createData('News', '12/09/2121', <EditIcon />, <DeleteForeverIcon />),
  createData('Activities', '23/01/2022', <EditIcon />, <DeleteForeverIcon />),
]

export default function CategoriesList() {
  const classes = useStyles()

  return (
    <Container className={classes.containerList}>
      <div className={classes.contLink}>
        <Link to="/backoffice/category/create-category" className={classes.styleLink}>
          <Typography variant="subtitle1">Crear Categoría</Typography>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell} align="center">Fecha</TableCell>
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
                  {row.createdAt}
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
