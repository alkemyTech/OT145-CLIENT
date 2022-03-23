import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { getMembers, deleteMembers } from '../../../redux/Members/membersSlice';
import { sweetAlertConfirm } from '../../../Utils/sweetAlertConfirm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from '../../styles/styledList';
import { privateDelete } from '../../../Services/privateApiService';


const MemberList = () => {

    const dispatch = useDispatch();
    const { members, status } = useSelector((state) => state.members);
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        dispatch(getMembers());
    }, [])

    const datosMokeados = [
        {
            id: 1,
            name: 'Carlos',
            img: process.env.PUBLIC_URL + "/images/ImagenHombre.png"
        },
        {
            id: 2,
            name: 'Florencia',
            img: process.env.PUBLIC_URL + "/images/ImagenMujer.png"
        }
    ]

    const handleDelete = async (id) => {
        const deleteIt = await sweetAlertConfirm();
        if (deleteIt) {
            dispatch(deleteMembers(id));
    }};

    useEffect(() => {
        if(status == 'deleted'){
          window.location.reload();
        }
       }, [status])


    return(
        <>
        <Box className={classes.title}>
            <Typography variant='h4'>
                Miembros
            </Typography>
        </Box>
        <Box className={classes.contLink}>
            <Link to='/backoffice/members/create' className={classes.styleLink}>
                <Button color='secondary' variant='contained'>Crear Miembro</Button>
            </Link>
        </Box>
        <Box className={classes.containerList}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell} align='center'>Nombre</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Photo</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Editar</TableCell>
                        <TableCell className={classes.tableCell} align='center'>Eliminar</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {members.map((member) => (
                        <TableRow key={member.id} className={classes.tableRow}>
                        <TableCell className={classes.tableCell} align='center'>{member.name}</TableCell>
                        <TableCell className={classes.tableCell} align='center'><img alt="" height="100px" width="100px" className={classes.img} src={member.image} /></TableCell>
                        <TableCell className={classes.tableCell} align='center'>
                            <EditIcon 
                                color="secondary" 
                                className={classes.icon}
                                onClick={() => history.push(`/backoffice/members/edit/${member.id}`, member.id)}
                            />
                        </TableCell>
                        <TableCell className={classes.tableCell} align='center'>
                            <DeleteIcon 
                                color="secondary" 
                                className={classes.icon}
                                onClick={() => handleDelete(member.id)}
                            />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
      </>
    )
};

export default MemberList