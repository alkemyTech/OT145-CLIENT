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
	TableCell,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
// import {
// 	TableCell,
// 	TableRow,
// } from "../../styles/styledList";
import useStyles from "../../styles/styledList";
import privateGET from "../../../Services/privateApiService";

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

	const [data, setData] = useState([]);

	const deleteItem = (row) => {
		if (data.length >= 1) {
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
			setData(res.data.length >= 1 ? res.data : mockedData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
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
							<TableCell align="center" className={classes.tableCell}>
								Titulo
							</TableCell>
							<TableCell align="center" className={classes.tableCell}>
								Imágen
							</TableCell>
							<TableCell align="center" className={classes.tableCell}>
								Descripción
							</TableCell>
							<TableCell align="center" className={classes.tableCell}>
								Editar
							</TableCell>
							<TableCell align="center" className={classes.tableCell}>
								Eliminar
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<TableRow className={classes.tableRow} key={row.id}>
								<TableCell
									align="center"
									className={classes.tableCell}
									component="th"
									scope="row">
									{row.title}
								</TableCell>
								<TableCell align="center">
									<img
										src={row.image}
										alt={row.title}
										className={classes.img}
									/>
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									align="center">
									{row.description}
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									align="center">
									<IconButton
										component={Link}
										to={`/backoffice/testimonials/edit/${row.id}`}
										variant="outlined"
										color="secondary">
										<EditIcon />
									</IconButton>
								</TableCell>
								<TableCell
									align="center"
									className={classes.tableCell}
									align="center">
									<IconButton
										onClick={() => deleteItem(row)}
										color="secondary"
										sx={{ cursor: "pointer" }}>
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
