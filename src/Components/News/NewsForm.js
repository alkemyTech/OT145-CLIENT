import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import SelectField from './SelectField';
// import '../../Components/FormStyles.css';

const NewsForm = ({ news }) => {

    const [initialValues, setInitialValues] = useState({
        title: news?.title || '',
        content: news?.content || '',
        category: '',
        image: news?.image || ''
    });

    const { category } = initialValues;

    useEffect(() => {

        const fetchCategories = async () => {
            try{
                const response = await axios('https://ongapi.alkemy.org/api/categories');
                const result = await response.data
                setInitialValues((prev) => ({
                    ...prev,
                    category: result.data
                }))
            }catch(error){
                console.error(error);
            }
        }
        fetchCategories();
    }, [])

   

    const { handleSubmit, handleChange, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object().shape({
            title: Yup.string().required('El campo es obligatorio').min(4, 'Debe tener como minimo 4 caracteres')
        }),
        onSubmit: ((values)=> {
            console.log(values);
        })
    })


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <TextField className="input-field" type="text" name="title" value={values.title} onChange={handleChange} />
            <TextField className="input-field" type="text" name="content" value={values.content} onChange={handleChange} />
            <SelectField className="select-field" name="category" value={values.category} onChange={handleChange}>
                <MenuItem disabled value=''>--Seleccione una opcion--</MenuItem>
                {   category.length > 0 &&
                    category.map(element => (
                        <MenuItem key={element.id} value={element.name}> {element.name} </MenuItem>
                    ))
                }
            </SelectField>
            <TextField 
                type='file' 
                name='image'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
            />
            <Button variant="contained" color="secondary" type="submit">Send</Button>
        </form>
    );
}
 
export default NewsForm;



 // const handleChange = (e) => {
    //     if(e.target.name === 'title'){
    //         setInitialValues({...initialValues, title: e.target.value})
    //     } if(e.target.name === 'content'){
    //         setInitialValues({...initialValues, content: e.target.value})
    //     } if(e.target.name === 'category') {
    //         setInitialValues({...initialValues, category: e.target.value})
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(initialValues);
    // }