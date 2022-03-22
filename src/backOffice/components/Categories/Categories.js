import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../../redux/Categories/categorySlice'
import useStyles from '../../styles/styledList'
import DecorativeLineBW from '../../../Components/DecorativeLine/DecorativeLineBW'


function createData(name, createdAt, edit, deleteData) {
  return { name, createdAt, edit, deleteData }
}

export default function CategoriesList() {
  const classes = useStyles();
  const {categories} = useSelector(state => state.categories);
  const rows = categories.map((dat) => createData(dat.name,dat.createdAt,<EditIcon />, <DeleteForeverIcon />))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [])
  

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
