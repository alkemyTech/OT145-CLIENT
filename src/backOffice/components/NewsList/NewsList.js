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
import { getNews } from '../../../redux/NewsReducers/newsReducerThunk'

const NewsList = () => {
  const location = useLocation()
  const path = location.pathname
  const classes = useStyles()
  const dispatch = useDispatch()
  const { news } = useSelector((state) => state.news)
  const history = useHistory()

  useEffect(() => {
    dispatch(getNews())
  }, [])

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
                  <TableCell
                    align="center"
                    key={KeyboardEvent}
                    className={classes.tableCell}
                  >
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
                    <Button color="secondary" sx={{ cursor: 'pointer' }}>
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
