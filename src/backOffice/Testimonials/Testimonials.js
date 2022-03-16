import React, { useState, useEffect } from "react";
import {
	Container,
	IconButton,
	TableBody,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import {
	StyledTableCell,
	StyledTableRow,
} from "../../Utils/SlidesBackOfficeStyled";
import useStyles from "../styles/styledList";
import privateGET from "../../Services/privateApiService";

function SlidesBackOffice() {
	const classes = useStyles();

	const [mockedData, setMockedData] = useState([
		{
			id: 1,
			title: "Title 1",
			image: "Image 1",
			description: "Description description",
		},
		{
			id: 2,
			title: "Title 2",
			image: "Image 2",
			description: "Description description",
		},
		{
			id: 3,
			title: "Title 3",
			image: "Image 3",
			description: "Description description",
		},
	]);

    const [data, setData] = useState([])

	const deleteItem = (row) => {
		if(data.length >= 1){
			const filterArray = data.filter((item) => item.id !== row.id);
			return setData(filterArray);

		}
		const filterArray = mockedData.filter((item) => item.id !== row.id);
		return setMockedData(filterArray);
	};

	const getData = async () => {
        try {
            const res = await privateGET(process.env.REACT_APP_API_GET_TESTIMONIALS);
            // console.log(res.data)
			setData((res.data.length >= 1) ? res.data : mockedData)
        } catch (error) {
            console.log(error)
        }
	};

	useEffect(() => {
        getData()
	}, []);

	return (
		<Container className={classes.containerList}>
			<Box className={classes.contLink}>
				<Link
					exact
					className={classes.styleLink}
					to="/backoffice/testimonials/create">
					Crear un nuevo testimonio
				</Link>
			</Box>

			<TableContainer component={Paper} className={classes.containerList}>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCell>Titulo</StyledTableCell>
							<StyledTableCell align="center">Imágen</StyledTableCell>
							<StyledTableCell align="center">Descripción</StyledTableCell>
							<StyledTableCell align="center">Editar</StyledTableCell>
							<StyledTableCell align="center">Eliminar</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row">
									{row.title}
								</StyledTableCell>
								<StyledTableCell align="center">
									<img
										src={row.image}
										alt={row.title}
										className={classes.img}
									/>
								</StyledTableCell>
								<StyledTableCell align="center">
									{row.description}
								</StyledTableCell>
								<StyledTableCell align="center">
									<IconButton
										component={Link}
										to={`/backoffice/testimonials/edit/${row.id}`}
										variant="outlined"
										color="secondary">
										<EditIcon />
									</IconButton>
								</StyledTableCell>
								<StyledTableCell align="center">
									<IconButton
										onClick={() => deleteItem(row)}
										color="secondary"
										sx={{ cursor: "pointer" }}>
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
