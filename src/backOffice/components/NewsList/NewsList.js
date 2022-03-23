import { Link, useLocation, useHistory } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Paper,
  Button,
  Container,
} from '@mui/material'
import Delete from '@mui/icons-material/Delete'
import ModeEdit from '@mui/icons-material/ModeEdit'
import { useEffect } from 'react'
import useStyles from '../../styles/styledList'
import { useSelector, useDispatch } from 'react-redux'
import {
  getNews,
  deleteNews,
} from '../../../redux/NewsReducers/newsReducerThunk'
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm'

const NewsList = () => {
  const location = useLocation()
  const path = location.pathname
  const classes = useStyles()
  const dispatch = useDispatch()
  const { news, status } = useSelector((state) => state.news)
  const history = useHistory()

  useEffect(() => {
    dispatch(getNews())
  }, [])

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm()
    if (deleteIt) {
      dispatch(deleteNews(id))
    }
    console.log(id)
  }

  useEffect(() => {
    if (status === 'deleted') {
      window.location.reload()
    }
  }, [status])

  const tableTitles = ['Nombre', 'Imagen', 'Fecha', 'Modificar', 'Eliminar']

  return (
    <>
      <Container className={classes.containerList}>
        <Box className={classes.contLink}>
          <Link to={`${path}/create-news`} className={classes.styleLink}>
            Crear Novedad
          </Link>
        </Box>

        <TableContainer component={Paper} className={classes.containerList}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableRow}>
                {tableTitles.map((titles, key) => (
                  <TableCell align="center" className={classes.tableCell}>
                    {titles}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {news.map(({ name, image, created_at, id }) => (
                <TableRow key={id} className={classes.tableRow}>
                  <TableCell component="th" className={classes.tableCell}>
                    {name}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <img src={image} alt={name} className={classes.img} />
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    {created_at}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      color="secondary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() =>
                        history.push(`news/edit-news`, {
                          id: id,
                        })
                      }
                    >
                      <ModeEdit />
                    </Button>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      color="secondary"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleDelete(id)
                      }}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
}

export default NewsList
