import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Editor from '../Editor/Editor'
import SelectField from './SelectField'
import useStyles from '../../styles/newsFormStyles'
import { useFormik } from 'formik'
import {
  TextField,
  MenuItem,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material'
import { validationSchema } from './config/index'
import { privatePOST, privatePUT } from '../../../Services/privateApiService'
import { convertToBase64 } from '../../../helpers/base64'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsById } from '../../../redux/NewsReducers/newsReducerThunk'

const NewsForm = (id) => {
  const { state } = useLocation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const { newsId } = useSelector((state) => state.news)
  const [category, setCategory] = useState([])
  const [errorCategory, setErrorCategory] = useState(false)

  useEffect(() => {
    if (state) {
      dispatch(getNewsById(state.id))
    }
  }, [])

  console.log(state, newsId)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios('https://ongapi.alkemy.org/api/categories')
        const result = await response.data
        setCategory(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldValue,
    values,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: newsId?.name || '',
      content: newsId?.content || '',
      category_id: newsId?.category_id || '',
      image: newsId?.image || '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (newsId && !errorCategory) {
        const base64 = await convertToBase64(values.image)
        values.image = base64
        privatePUT(`https://ongapi.alkemy.org/api/news/${newsId.id}`, values)
      } else if (!errorCategory) {
        const base64 = await convertToBase64(values.image)
        values.image = base64
        privatePOST(`https://ongapi.alkemy.org/api/news`, values)
      }
    },
  })

  useEffect(() => {
    if (category.length > 0) {
      const validacionCategory = category.find(
        (element) => element.id === values.category_id,
      )
      if (!validacionCategory) {
        setErrorCategory(true)
      } else {
        setErrorCategory(false)
      }
    }
  }, [values.category_id])

  return (
    <Container className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Paper className={classes.paper} elevation={5}>
          <Typography className={classes.title} variant="h5">
            {newsId.id ? 'Editar Noticia' : 'Crear Noticia'}
          </Typography>

          <TextField
            className={classes.inputs}
            label="Title"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            fullWidth
          />

          <SelectField
            className={classes.inputs}
            name="category_id"
            value={values.category_id}
            onChange={handleChange}
            onBlur={handleBlur}
            id="Categoria"
            label="Categoria"
            error={errorCategory}
            errorText="Categoria Invalida"
          >
            <MenuItem disabled value="">
              --Seleccione una opcion--
            </MenuItem>
            {category.length > 0 &&
              category.map((element) => (
                <MenuItem key={element.id} value={element.id}>
                  {' '}
                  {element.name}{' '}
                </MenuItem>
              ))}
          </SelectField>

          <TextField
            type="file"
            name="image"
            onChange={(e) => setFieldValue('image', e.target.files[0])}
            fullWidth
            onBlur={handleBlur}
            className={classes.inputs}
            error={touched.image && Boolean(errors.image)}
            helperText={touched.image && errors.image}
          />

          <Editor
            text={values.content}
            onChangeText={(content) => {
              setFieldValue('content', content)
            }}
          />
          {handleSubmit && errors.content && (
            <Typography
              className={classes.errorCkEditor}
              variant="caption"
              color="error"
            >
              {touched.content && errors.content}
            </Typography>
          )}

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.button}
            fullWidth
          >
            Send
          </Button>
        </Paper>
      </form>
    </Container>
  )
}

export default NewsForm
