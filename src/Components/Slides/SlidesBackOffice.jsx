import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Container, IconButton } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from '@mui/material/Box'
import { Link } from "react-router-dom";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../Utils/SlidesBackOfficeStyled";
import useStyles from "../../backOffice/styles/styledList";

function SlidesBackOffice() {
  const classes = useStyles();

  const [mockedData, setMockedData] = useState([
    {
      id: 1,
      Title: "Title 1",
      image: "Image 1",
      order: "Order 1",
    },
    {
      id: 2,
      Title: "Title 2",
      image: "Image 2",
      order: "Order 2",
    },
    {
      id: 3,
      Title: "Title 3",
      image: "Image 3",
      order: "Order 3",
    },
    {
      id: 4,
      Title: "Title 4",
      image: "Image 4",
      order: "Order 4",
    },
  ]);
  const deleteSlide = (row) => {
    const filterArray = mockedData.filter((slide) => slide.id !== row.id);

    return setMockedData(filterArray);
  };

  return (
    <Container className={classes.containerList}>
      <Box className={classes.contLink}>
        <Link
          exact
          className={classes.styleLink}
          to="/backoffice/Slides/create"
        >
          Create a new slide
        </Link>
      </Box>

      <TableContainer component={Paper} className={classes.containerList}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Order</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockedData.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.Title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    src={row.image}
                    alt={row.Title}
                    className={classes.img}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.order}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    component={Link}
                    to={`/backoffice/Slides/edit/${row.id}`}
                    variant="outlined"
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => deleteSlide(row)}
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  >
                    {" "}
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default SlidesBackOffice;
