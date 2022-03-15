import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import '../../Components/FormStyles.css';

const NewsForm = ({ news }) => {

    const [initialValues, setInitialValues] = useState({
        title: news?.title || '',
        content: news?.content || '',
        category: '',
        image: news?.image || ''
    });

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
            console.log(initialValues);
        })
    })

   

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="title" value={values.title} onChange={handleChange}></input>
            <input className="input-field" type="text" name="content" value={values.content} onChange={handleChange}></input>
            <select className="select-field" name="category" value={values.category} onChange={handleChange}>
                <option value="" disabled>Select category</option>
                <option value="1">Demo option 1</option>
                <option value="2">Demo option 2</option>
                <option value="3">Demo option 3</option>
            </select>
            <button className="submit-btn" type="submit">Send</button>
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