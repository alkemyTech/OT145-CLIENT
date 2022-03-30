import React, { useEffect } from "react";
import {
  Paper,
  Container,
  IconButton,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  Box,
  TableCell
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
// import {
//   TableCell,
//   StyledTableRow,
// } from "../../Utils/SlidesBackOfficeStyled";
import useStyles from "../../styles/styledList";
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlides, deleteSlides, selectAllSlides, selectSlidesStatus } from '../../../redux/slides/slidesSlice'

function SlidesBackOffice() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const slides = useSelector(selectAllSlides)
  const slideStatus = useSelector(selectSlidesStatus)

  useEffect(() => {
    console.log(slideStatus)
    if (slideStatus === 'idle' || slideStatus === 'updated') {
      dispatch(fetchSlides())
    }
  }, [slideStatus, dispatch]);

  return (
    <Container className={classes.containerList}>
      <Box className={classes.contLink}>
        <Link
          exact="true"
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
              <TableCell className={classes.tableCell}>Title</TableCell>
              <TableCell className={classes.tableCell} align="right">Image</TableCell>
              <TableCell className={classes.tableCell} align="right">Order</TableCell>
              <TableCell className={classes.tableCell} align="right">Edit</TableCell>
              <TableCell className={classes.tableCell} align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slides?.map((row) => (
              <TableRow className={classes.tableRow} key={row?.id}>
                <TableCell className={classes.tableCell} component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <img
                    src={row?.image}
                    alt={row?.name}
                    className={classes.img}
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="right">{row?.order}</TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <IconButton
                    component={Link}
                    to={`/backoffice/Slides/edit/${row?.id}`}
                    variant="outlined"
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  <IconButton
                    onClick={() => dispatch(deleteSlides(row?.id))}
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                  >
                    {" "}
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default SlidesBackOffice;
