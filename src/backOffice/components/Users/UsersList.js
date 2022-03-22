<<<<<<< HEAD:src/backOffice/UsersList.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { getUsers, deleteUser } from "../redux/Users/userSlice";
import { sweetAlertConfirm } from "../Utils/SweetAlertConfirm";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStyles from "./styles/styledList";
import DecorativeLineBW from "../Components/DecorativeLine/DecorativeLineBW";
=======
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useStyles from '../../styles/styledList'
import DecorativeLineBW from '../../../Components/DecorativeLine/DecorativeLineBW'
>>>>>>> 30f46c70a0d9757c9457af96d2b58db7cd763f89:src/backOffice/components/Users/UsersList.js

const UsersList = () => {
  const { users, status } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleDelete = async (id) => {
    const deleteIt = await sweetAlertConfirm();
    if (deleteIt) {
      dispatch(deleteUser(id));
    }
  };

 useEffect(() => {
  if(status == 'deleted'){
    window.location.reload();
  }
 }, [status])


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
              <TableCell className={classes.tableCell}>Nombre</TableCell>
              <TableCell className={classes.tableCell} align="center">
                Email
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Modificar
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Eliminar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 &&
              users.map((user) => (
                <TableRow key={user.id} className={classes.tableRow}>
                  <TableCell
                    className={classes.tableCell}
                    component="th"
                    scope="row"
                  >
                    {user.name}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    {user.email}
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() =>
                        history.push(`${path}/edit-user/${user.id}`, user.id)
                      }
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell className={classes.tableCell} align="center">
                    <Button
                      variant="text"
                      color="secondary"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DecorativeLineBW></DecorativeLineBW>
    </Container>
  );
};

export default UsersList;
