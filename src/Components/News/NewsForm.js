import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { TextField, MenuItem, Button, Container, Paper, Typography } from '@mui/material';
import SelectField from './SelectField';
import Editor from '../Editor/Editor';
import  { validationSchema } from './config/index';
import useStyles from './styles/newsFormStyles';

const NewsForm = ({ news }) => {

    const classes = useStyles();

    const [ category, setCategory ] = useState([]);
    const [errorCategory, setErrorCategory] = useState(false);

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


   

    const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: ((values)=> {
            
        })
    })

    useEffect(() => {

        if(category.length > 0){
            const validacionCategory = category.find((element) => element.id === values.category)
            if(!validacionCategory){
                setErrorCategory(true);
            }else{
                setErrorCategory(false);
            }
        }
    }, [values.category])

  
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
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
            fullWidth
            />
            
            
            <SelectField 
            className={classes.inputs}
            name="category" 
            value={values.category} 
            onChange={handleChange} 
            onBlur={handleBlur}
            id="Categoria" 
            label="Categoria"
            error={errorCategory}
            errorText='Categoria Invalida'
            >
                <MenuItem disabled value=''>--Seleccione una opcion--</MenuItem>
                <MenuItem value='hola'>Opcion Erronea</MenuItem>
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
                onBlur={handleBlur}
                className={classes.inputs}
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image}
            />
            
            
            <Editor 
            text={values.content} 
            onChangeText={(content) => {setFieldValue("content" , content );}} 
            />

            {handleSubmit && errors.content &&  
            <Typography className={classes.errorCkEditor} variant="caption" color="error">{touched.content && errors.content}</Typography> 
            }

            <Button variant="contained" color="secondary" type="submit" className={classes.button} fullWidth>Send</Button>
            </Paper>
        </form>
        </Container>
    );
}
 
export default NewsForm;
