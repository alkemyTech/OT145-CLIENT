import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react'
/* import '../FormStyles.css'; */
import useStyles from '../../../Components/Auth/AuthStyles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { getActivityById,
    putActivity,
    postActivity } from '../../../redux/Activities/activitySlice.js'
import Editor from '../Editor/Editor';
import { convertToBase64 } from '../../../helpers/base64'; 
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../../shared/Spinner/Spinner'
import { sweetAlertMixin } from '../../../Utils/AlertState'


const ActivitiesForm = ({ data }) => {
    const { state } = useLocation();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { activitiesId, status, error } = useSelector(
      (state) => state.activities
    );
    const history = useHistory();
  
    useEffect(() => {
      if (state) {
        dispatch(getActivityById(state.id));
      }
    }, []);

    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
  
    const activitySchema = yup.object().shape({
      name: yup.string().required("El campo obligatorio"),
      image: yup.mixed()
      .nullable()
      .required('La imagen es obligatoria')
      .test('file size',
        'image', (value) => !value || (value && value.size <= 1024 * 1024))
      .test('format',
        'image', (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
      description: yup.string().required("El campo es obligatorio"),
    });
  
    const {
      handleSubmit,
      handleBlur,
      handleReset,
      touched,
      errors,
      setFieldValue,
      values,
      handleChange,
    } = useFormik({
      enableReinitialize: true,
      initialValues: {
        name: activitiesId?.name || "",
        description: activitiesId?.description || "",
        image: activitiesId?.image || "",
      },
      validationSchema: activitySchema,
      onSubmit: async (values) => {
        if (activitiesId?.id) {
          const base64 = await convertToBase64(values.image);
          values.image = base64;
          values.id = activitiesId.id;
          dispatch(putActivity(values));
        } else {
          const base64 = await convertToBase64(values.image);
          values.image = base64;
          dispatch(postActivity(values));
        }
      },
    });
  
    useEffect(() => {
      if (status === "created") {
        sweetAlertMixin("success", "Se creó correctamente");
        handleReset();
      }
    }, [status]);
  
    useEffect(() => {
      if (status === "edited") {
        history.push("/backoffice/activities");
      }
    }, [status]);
  
    return (
        <form onSubmit={handleSubmit} className={classes.containerForm}>
            <TextField
                className={classes.fieldForm}
                type="text"
                placeholder="Activity Title"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name ? errors.name : null}
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <Editor text={values.description} onChangeText={(description) => {
                setFieldValue("description",description);
            }} />

            {handleSubmit && errors.description &&
                <Typography sx={{ paddingLeft: "11px" }} variant="caption" color="error">{touched.description && errors.description ? errors.description : null}</Typography>
            }
            <TextField
                className={classes.fieldForm}
                type="file"
                name='image'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
                fullWidth
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image ? errors.image : null}
            />
            <Button
            color="secondary"
            disabled={status === 'loading' ? true : false}
            variant="contained"
            fullWidth
            type="submit"
            className={classes.button}
          >
            {status === 'loading' ? (
              <Spinner width={30} height={30} color="#000" />
            ) : (
              'Enviar'
            )}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.goBack()}
          >
            Volver a la lista
          </Button>
        </form>
    );
}

export default ActivitiesForm;