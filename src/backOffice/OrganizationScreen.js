import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./styles/organizationScreenStyles";

const OrganizationScreen = () => {
  const classes = useStyles();

  const datosMockeados = {
    name: "Somos Mas",
    image: process.env.PUBLIC_URL + "/images/LOGO-SOMOS-MAS.png",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  return (
      <>
      <Typography variant="h3" className={classes.title}>Organizacion</Typography>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" className={classes.tableCell}>
              {datosMockeados.name}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <img
                src={datosMockeados.image}
              />
            </TableCell>
            <TableCell align="center" className={classes.tableCell} sx={{maxWidth: 50}}>
              {datosMockeados.shortDescription}
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
                <Link to="/backoffice/organization/edit">
                    <FontAwesomeIcon icon={faPen} />
                </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default OrganizationScreen;

