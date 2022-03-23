import React, { useState, useEffect } from "react";
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getMembersById } from '../../redux/Members/membersSlice';
import { convertToBase64 } from "../../helpers/base64";
import Editor from "../../backOffice/components/Editor/Editor";
import "../FormStyles.css";
import "./MembersForm.css";
import { Formik, Field, Form, useFormik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import useStyles from "../../Components/Auth/AuthStyles";
import FileInputFormik from "./FileInputFormik";
import { AlertSucces } from "../../Utils/AlertSucces";

const MembersForm = () => {
  // const showAlert = (type, text) => {
  //   return <Alert severity={type}>{text}</Alert>;
  // };
  const isValidUrl = (url) => {
    try{
      new URL(url)
    }catch(e){
      return false;
    }
    return true;
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('El campo es obligatorio').min(4, 'Debe tener minimo 4 caracteres'),
    image: Yup
            .mixed()
            .required("La imagen es obligatorio")
            .test(
                "type",
                "Solo imagenes png y jpg",
                (value) => {
                    return value && (["image/jpg"].includes(value.type) || ["image/png"].includes(value.type))
                }
            )
            ,
    description: Yup.string()
        .required("El campo es obligatorio"),
    instagram: Yup.string()
                  .required('El campo es obligatorio')
                  .test("type", "La url no es valida", (value) => isValidUrl(value)),
    twitter: Yup.string()
                  .required('El campo es obligatorio')
                  .test("type", "La url no es valida", (value) => isValidUrl(value)),
    facebook: Yup.string()
                  .required('El campo es obligatorio')
                  .test("type", "La url no es valida", (value) => isValidUrl(value)),
})

  const dispatch = useDispatch();
  const { state } = useLocation();
  const classes = useStyles();
  const [image, setImage] = useState("");

  useEffect(() => {  
    if(state){
       dispatch(getMembersById(state))
    }
}, [])

  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";
  // const formValues = [
  //   {
  //     type: "text",
  //     name: "name",
  //     placeholder: "Ingrese su nombre por favor",
  //     validate: (value) => {
  //       if (!value) {
  //         return "El nombre es obligatorio";
  //       }
  //       if (value.length < 4) {
  //         return "El nombre debe tener al menos 4 caracteres";
  //       }
  //     },
  //     divStyle: { gridArea: "name" },
  //   },
  //   {
  //     type: "text",
  //     name: "instagram",
  //     placeholder: "Instagram username",
  //     validate: (value) => {
  //       if (!value) {
  //         return "Ingrese el nombre de usuario de Instagram";
  //       }
  //     },
  //     divStyle: { gridArea: "instagram" },
  //   },
  //   {
  //     type: "text",
  //     name: "twitter",
  //     placeholder: "Twitter username",
  //     validate: (value) => {
  //       if (!value) {
  //         return "Ingrese el nombre de usuario de Twitter";
  //       }
  //     },
  //     divStyle: { gridArea: "twitter" },
  //   },
  //   {
  //     type: "text",
  //     name: "facebook",
  //     placeholder: "Facebook username",
  //     validate: (value) => {
  //       if (!value) {
  //         return "Ingrese el nombre de usuario de Facebook";
  //       }
  //     },
  //     divStyle: { gridArea: "facebook" },
  //   },
  // ];

  // const validate = (values) => {
  //   const errors = {};
  //   formValues.forEach(({ validate, name }) => {
  //     if (validate(values[name])) {
  //       errors[name] = validate(values[name]);
  //     }
  //   });

  //   if (values.description === "") {
  //     errors.description = "La descripción es obligatoria";
  //   }

  //   if (!image) {
  //     errors.image = "La imagen de perfil es obligatoria";
  //   }

  //   return errors;
  // };

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   const getBase64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onloadend = () => resolve(reader.result);
  //       reader.onerror = reject;
  //     }).then((base64) => {
  //       return base64;
  //     });
  //   };

    // const newValues = {
    //   ...values,
    //   image: await getBase64(image),
    //   instagram: "https://www.instagram.com/" + values.instagram,
    //   twitter: "https://www.twitter.com/" + values.twitter,
    //   facebook: "https://www.facebook.com/" + values.facebook,
    // };
  //   setSubmitting(false);

  //   AlertSucces(newValues, setSubmitting);
  // };

  const { handleSubmit, handleChange, handleBlur, touched, errors, setFieldValue, values } = useFormik({
    initialValues: {
      name: '',
      instagram: '',
      twitter: '',
      facebook: '',
      description: '',
      image: ''
    },
    validationSchema: validationSchema,
    onSubmit: ( async (values) => {
        if (true) {
            // const base64 = await convertToBase64(values.profile_image)
            // values.profile_image = base64
            // privatePATCH('https://ongapi.alkemy.org/api/users', data.id, values)
        }
        else {
            // const base64 = await convertToBase64(values.profile_image)
            // values.profile_image = base64
            // privatePOST('https://ongapi.alkemy.org/api/users', values);
        }
    })
})

  // const handleImageChange = (e, handleChange) => {
  //   const file = e.target.files[0];
  //   const fileType = file.type;
  //   const validImageTypes = ["image/jpeg", "image/png"];
  //   const size = file.size;
  //   if (!validImageTypes.includes(fileType) || size >= 5000000) {
  //     alert(
  //       "Por favor seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB"
  //     );
  //     setImage("");
  //     handleChange(e);
  //     return;
  //   }
  //   setImage(e.target.files[0]);
  //   handleChange(e);
  // };

  return (
    <Container className={classes.containerForm}>
      <form
        // initialValues={{}}
        // validate={validate}
        onSubmit={handleSubmit}
      >
            {/* {formValues.map((item) => (
              <div
                key={item.name}
                style={{
                  ...item.divStyle,
                }}
                className="create-member-input-field"
              >
                <Field
                  type={item.type}
                  name={item.name}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                  className={`input-field ${item.className}`}
                />
                {errors[item.name] && touched[item.name]
                  ? showAlert("warning", errors[item.name])
                  : null}
              </div>
            ))} */}
            <TextField className={classes.fieldForm}
                    fullWidth
                    name="name"
                    label="Nombre"
                    type="text"
                    value={values.name}
                    style={{ gridArea: "name" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    color="secondary"
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    name="instagram"
                    label="Instagram"
                    type="text"
                    value={values.instagram}
                    style={{ gridArea: "instagram" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.instagram && Boolean(errors.instagram)}
                    helperText={touched.instagram && errors.instagram}
                    color="secondary"
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    name="twitter"
                    label="Twitter"
                    type="text"
                    value={values.twitter}
                    style={{ gridArea: "twitter" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.twitter && Boolean(errors.twitter)}
                    helperText={touched.twitter && errors.twitter}
                    color="secondary"
                />
                <TextField className={classes.fieldForm}
                    fullWidth
                    name="facebook"
                    label="Facebook"
                    type="text"
                    value={values.facebook}
                    style={{ gridArea: "facebook" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.facebook && Boolean(errors.facebook)}
                    helperText={touched.facebook && errors.facebook}
                    color="secondary"
                />
            <div
              style={{ gridArea: "description" }}
              className="create-member-input-field"
            >
              <Editor 
            text={values.content} 
            onChangeText={(description) => {setFieldValue("description" , description );}} 
            />
            {handleSubmit && errors.description &&  
            <Typography className={classes.errorCkEditor} variant="caption" color="error">{touched.description && errors.description}</Typography> 
            }
              {/* <CKEditor
                editor={ClassicEditor}
                data="<p>¡Escribe una descripcion!</p>"
                onChange={(event, editor) => {
                  const data = editor.getData();
                  const e = {
                    target: {
                      value: data,
                      name: "description",
                    },
                  };
                  handleChange(e);
                }}
              />
              {errors.description && touched.description
                ? showAlert("warning", errors.description)
                : null} */}
            </div>
            {/* <FileInputFormik
              name="image"
              onChange={(e) => handleImageChange(e, handleChange)}
              style={{ gridArea: "imageInput" }}
              accept={".png, .jpg"}
              errors={errors}
              touched={touched}
            /> */}
            <TextField 
                type='file' 
                name='image'
                onChange={(e) => setFieldValue('image', e.target.files[0])}
                fullWidth
                onBlur={handleBlur}
                style={{ gridArea: "imageInput" }}
                className={classes.inputs}
                error={touched.image && Boolean(errors.image)}
                helperText={touched.image && errors.image}
            />
            <img
              src={image ? URL.createObjectURL(image) : imageExample}
              alt="profile images"
              className="profile-preview-image"
            />
            <Button
              type="submit"
              // disabled={isSubmitting}
              style={{ gridArea: "submit" }}
              color="secondary"
              variant="contained"
              fullWidth
            >
              Enviar
            </Button>
          </form>
    </Container>
  );
};
export default MembersForm;
