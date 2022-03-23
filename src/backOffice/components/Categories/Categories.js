import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories,deleteCategory } from '../../../redux/Categories/categorySlice'
import useStyles from '../../styles/styledList'
import DecorativeLineBW from '../../../Components/DecorativeLine/DecorativeLineBW'
import { useHistory } from 'react-router-dom';
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm';


export default function CategoriesList() {
  const classes = useStyles();
  const {categories, status} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  const handleDelete = async (id)=>{
    const deleteIt = await sweetAlertConfirm();
    if(deleteIt) {
      dispatch(deleteCategory(id));
    }
    console.log(id);
  }
  useEffect(() => {
    if(status === 'deleted'){
      window.location.reload()
    }
  }, [status])
  
  

  return (
    <Container className={classes.containerList}>
      <div className={classes.contLink}>
        <Link to="/backoffice/categories/create" className={classes.styleLink}>
          <Typography variant="subtitle1">Crear Categoría</Typography>
        </Link>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align='center' className={classes.tableCell}>Nombre</TableCell>
              <TableCell align='center' className={classes.tableCell}>Imagen</TableCell>
              <TableCell align='center' className={classes.tableCell} >Fecha</TableCell>
              <TableCell align='center' className={classes.tableCell}>Modificar</TableCell>
              <TableCell align='center' className={classes.tableCell}>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow key={row.name} className={classes.tableRow}>
                <TableCell component="th" className={classes.tableCell} >
                  {row.name}
                </TableCell>
                <TableCell align='center' className={classes.tableCell} >
                  <img src={row.image} alt={row.name} className={classes.img} />
                </TableCell>
                <TableCell align='center' className={classes.tableCell} >
                  {row.createdAt}
                </TableCell>
                <TableCell align='center' className={classes.tableCell} >
                  <Button variant="text" color="secondary" onClick={() => history.push(`/categories/edit/${row.id}`, {id: row.id})}>
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell align='center' className={classes.tableCell} >
                  <Button variant="text" color="secondary" onClick={() => handleDelete(row.id)}>
                    <DeleteForeverIcon/>
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
