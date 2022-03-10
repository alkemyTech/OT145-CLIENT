import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Typography, Container, Button } from '@mui/material'
import useStyles from './styles/slyledList'
import { Link, useLocation } from 'react-router-dom';
import DecorativeLineBW from '../Components/DecorativeLine/DecorativeLineBW'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

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
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Modificar</StyledTableCell>
              <StyledTableCell align="center">Eliminar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="text" color="secondary">
                    {row.edit}
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="text" color="secondary">
                    {row.deleteData}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DecorativeLineBW></DecorativeLineBW>
    </Container>
  )
}
