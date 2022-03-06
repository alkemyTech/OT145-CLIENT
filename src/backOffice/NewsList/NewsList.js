import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link, useLocation } from 'react-router-dom';
import  Delete  from '@mui/icons-material/Delete';
import ModeEdit from '@mui/icons-material/ModeEdit';

const NewsList = () => {
    const location = useLocation();
    const path = location.pathname;

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
            <Link to={`${path}/create`}>Crear Novedad</Link>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Imagen</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Modificar</TableCell>
                            <TableCell>Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.map(({name,image,createdAt}) => (
                            <TableRow
                                key={name}
                            >
                                <TableCell component="th">
                                    {name}
                                </TableCell>
                                <TableCell><img src={image} alt={name} /></TableCell>
                                <TableCell>{createdAt}</TableCell>
                                <TableCell> <ModeEdit/> </TableCell>
                                <TableCell> <Delete/> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default NewsList