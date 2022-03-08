import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link, useLocation } from 'react-router-dom';
import Delete from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import useStyles from '../styles/styledList'
import Container from '@mui/material/Container'
import { Button } from '@mui/material';

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
                                <StyledTableCell>Nombre</StyledTableCell>
                                <StyledTableCell align='center'>Imagen</StyledTableCell>
                                <StyledTableCell align='center'>Fecha</StyledTableCell>
                                <StyledTableCell align='center'>Modificar</StyledTableCell>
                                <StyledTableCell align='center'>Eliminar</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {row.map(({ name, image, createdAt }) => (
                                <StyledTableRow
                                    key={name}
                                >
                                    <StyledTableCell component="th">
                                        {name}
                                    </StyledTableCell>
                                    <StyledTableCell align='center'><img src={image} alt={name} className={classes.img} /></StyledTableCell>
                                    <StyledTableCell align='center'>{createdAt}</StyledTableCell>
                                    <StyledTableCell align='center'> <Button color='secondary'> <ModeEdit /> </Button>  </StyledTableCell>
                                    <StyledTableCell align='center'> <Button color='secondary' sx={{cursor:'pointer'}}> <Delete /> </Button>  </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </>

    )
}

export default NewsList