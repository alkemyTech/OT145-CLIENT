import React, { useEffect, useState } from "react";
import useStyles from "../../styles/CategoriesFormStyles";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import Editor from "../Editor/Editor";
import * as Yup from "yup";
import { convertToBase64 } from '../../../helpers/base64';
import { getCategoriesById ,postCategory ,putCategory} from '../../../redux/Categories/categorySlice'
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../../shared/Spinner/Spinner';
import { sweetAlertMixin } from "../../../Utils/AlertState";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom'


const validationSchema = Yup.object({
	name: Yup.string("Ingrese su nombre")
		.min(4, "El nombre debe tener al menos 4 caracteres")
		.required("Es necesario ingresar un nombre"),
	description: Yup.string("Ingrese Una descripcion").required(
		"Es necesario ingresar una descripción"
	),
	image: Yup.mixed().nullable().required("La imágen es obligatoria"),
});

const CategoriesForm = () => {
	const classes = useStyles();
	const {state} = useLocation();
	const {categoriesById, status} = useSelector(state => state.categories);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
	  if(state){
		dispatch(getCategoriesById(state))
	  }

	}, [])

	
	const { setFieldValue, handleSubmit, values, handleChange, touched, errors,handleReset } = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: categoriesById?.name || "",
			description: categoriesById?.description || "",
			image: categoriesById?.image || "",
		},
		validationSchema: validationSchema,
		onSubmit: ( async (values) => {
            if (categoriesById) {
				values.id = categoriesById.id
                dispatch(putCategory(values));
				
            }else{
            	dispatch(postCategory(values));
			}
        })
	});

	const [isValidImageFormat, setIsValidImageFormat] = useState(false);
	useEffect(() => {
		if(status === 'created'){
			sweetAlertMixin('success' ,'Creado satisfactoriamente')
			handleReset()
		}
		if(status === 'edited'){
			history.push("/backoffice/categories")
		}
		
	  }, [status])

	const handleImageChange = async (event) => {
		const base64String = await convertToBase64(event.target.files[0]);
		setIsValidImageFormat(
			event.target.files[0].type === "image/jpeg" ||
				event.target.files[0].type === "image/jpg" ||
				event.target.files[0].type === "image/png"
				? true
				: false
		);
		setFieldValue("image", base64String);
	};

	return (
		<>	
			<NavLink to='/backoffice/'>
				<ArrowBackIcon/>
			</NavLink>
			<form onSubmit={handleSubmit} className={classes.form}>
				<TextField
					className={classes.formElement}
					name="name"
					value={values.name}
					onChange={handleChange}
					placeholder={categoriesById ? categoriesById?.name : "Nombre de categoría"}
					error={touched.name && errors.name}
					label='Nombre de categoría'
				/>
				<Editor
					text={values.description}
					onChangeText={(data) => {
						setFieldValue("description", data);
					}}
				/>
				{touched.description && errors.description ? (
					<div>{errors.description}</div>
				) : null}
				<TextField
					inputProps={{
						accept: "image/png, image/jpeg",
						type: "file",
					}}
					name="defaultImage"
					className={classes.formElement}
					onChange={(event) => handleImageChange(event)}
				/>
				{touched.image && !isValidImageFormat? (
					<div>El formato de la imágen no es válido {errors.image}</div>
				) : null}
				<Button color='secondary' className={classes.formElement} type="submit" variant="contained">
					{status === 'loading' ? <Spinner width={30} height={30} color='#FFF'/> : 'Enviar'}
				</Button>
			</form>
		</>
	);
};

export default CategoriesForm;