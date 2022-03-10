import { Link, useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Paper, Button, Container} from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import useStyles from '../styles/styledList'


const NewsList = () => {
    const location = useLocation();
    const path = location.pathname;
    const classes = useStyles();
    const createData = (name, image, createdAt) => {
        return { name, image, createdAt };
    }

    const row = [
        createData("novedad1", "/images/latest-01.jpg", "05-03-2022"),
        createData("novedad2", "/images/latest-02.jpg", "05-03-2022"),
        createData("novedad3", "/images/latest-03.jpg", "05-03-2022"),
    ]

    return (
        <>
            <Container className={classes.containerList}>
                <Box className={classes.contLink}>
                    <Link to={`${path}/create-news`} className={classes.styleLink} >Crear Novedad</Link>
                </Box>

                <TableContainer component={Paper} className={classes.containerList}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' className={classes.tableCell}>Nombre</TableCell>
                                <TableCell align='center' className={classes.tableCell}>Imagen</TableCell>
                                <TableCell align='center' className={classes.tableCell}>Fecha</TableCell>
                                <TableCell align='center' className={classes.tableCell}>Modificar</TableCell>
                                <TableCell align='center' className={classes.tableCell}>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.map(({ name, image, createdAt }) => (
                                <TableRow
                                    key={name}
                                    className={classes.tableRow}
                                >
                                    <TableCell component="th" className={classes.tableCell}>
                                        {name}
                                    </TableCell>
                                    <TableCell align='center' className={classes.tableCell}><img src={image} alt={name} className={classes.img} /></TableCell>
                                    <TableCell align='center' className={classes.tableCell}>{createdAt}</TableCell>
                                    <TableCell align='center' className={classes.tableCell}> <Button color='secondary'> <ModeEdit /> </Button>  </TableCell>
                                    <TableCell align='center' className={classes.tableCell}> <Button color='secondary' sx={{cursor:'pointer'}}> <Delete /> </Button>  </TableCell>
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