import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, MenuItem, Button, Container, Paper } from '@mui/material';
import SelectField from './SelectField';
import Editor from '../Editor/Editor';
import  { validationSchema } from './config/index';
import useStyles from './styles/newsFormStyles';

const NewsForm = ({ news }) => {

    const classes = useStyles();

    const [ category, setCategory ] = useState([]);

    const initialValues = {
        title: news?.title || '',
        content: news?.content || '',
        category: '',
        image: news?.image || ''
    };


    useEffect(() => {

        const fetchCategories = async () => {
            try{
                const response = await axios('https://ongapi.alkemy.org/api/categories');
                const result = await response.data
                setCategory(result.data)
            }catch(error){
                console.error(error);
            }
        }
        fetchCategories();
    }, [])

   

    const { handleSubmit, handleChange, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: ((values)=> {
            console.log(values);
        })
    })

    console.log(values);    

    return (
        <Container className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Paper className={classes.paper}  elevation={5}>
            
            
            <TextField 
            className={classes.inputs} 
            label="Title" 
            type="text" 
            name="title" 
            value={values.title} 
            onChange={handleChange} 
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            fullWidth
            />
            
            
            <SelectField 
            className={classes.inputs}
            name="category" 
            value={values.category} 
            onChange={handleChange} 
            id="Categoria" 
            label="Categoria"
            error={touched.category && Boolean(errors.category)}
            helperText={touched.category && errors.category}
            >
                <MenuItem disabled value=''>--Seleccione una opcion--</MenuItem>
                {   category.length > 0 &&
                    category.map(element => (
                        <MenuItem key={element.id} value={element.id}> {element.name} </MenuItem>
                    ))
                }
            </SelectField>
            
            
            <TextField 
                type='file' 
                name='image'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
                fullWidth
                className={classes.inputs}
            />
            
            
            <Editor 
            text={values.content} 
            onChangeText={(content) => {setFieldValue("content" , content );}} 
            error={touched.content && Boolean(errors.content)}
            helperText={touched.content && errors.content}
            />
            <Button variant="contained" color="secondary" type="submit" className={classes.button} fullWidth>Send</Button>
            </Paper>
        </form>
        </Container>
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


    // const [initialValues, setInitialValues] = useState({
    //     title: news?.title || '',
    //     content: news?.content || '',
    //     category: '',
    //     image: news?.image || ''
    // });

    // const { category } = initialValues;

    // useEffect(() => {

    //     const fetchCategories = async () => {
    //         try{
    //             const response = await axios('https://ongapi.alkemy.org/api/categories');
    //             const result = await response.data
    //             setInitialValues((prev) => ({
    //                 ...prev,
    //                 category: result.data
    //             }))
    //         }catch(error){
    //             console.error(error);
    //         }
    //     }
    //     fetchCategories();
    // }, [])