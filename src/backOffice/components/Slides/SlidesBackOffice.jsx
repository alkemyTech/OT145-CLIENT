import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides, deleteSlides } from '../../redux/slides/slidesSlice'

function SlidesBackOffice() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const slides = useSelector(state => state.slides.slides)
  const slideStatus = useSelector(state => state.slides.status)

	useEffect(() => {
    console.log(slideStatus)
		if(slideStatus === 'idle' || slideStatus === 'updated'){
			dispatch(fetchSlides())
		}
	}, [slideStatus, dispatch]);

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
            {slides?.map((row) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCell component="th" scope="row">
                  {row?.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img
                    src={row?.image}
                    alt={row?.name}
                    className={classes.img}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row?.order}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    component={Link}
                    to={`/backoffice/Slides/edit/${row?.id}`}
                    variant="outlined"
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() => dispatch(deleteSlides(row?.id))}
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
