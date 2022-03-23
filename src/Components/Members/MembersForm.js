import React, { useState } from "react";
import "../FormStyles.css";
import "./MembersForm.css";
import { Formik, Field, Form } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Alert, Button, Container } from "@mui/material";
import useStyles from "../../Components/Auth/AuthStyles";
import FileInputFormik from "./FileInputFormik";
import { AlertSucces } from "../../Utils/AlertSucces";

const MembersForm = () => {
  const showAlert = (type, text) => {
    return <Alert severity={type}>{text}</Alert>;
  };

  const classes = useStyles();
  const [image, setImage] = useState("");

  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";
  const formValues = [
    {
      type: "text",
      name: "name",
      placeholder: "Ingrese su nombre por favor",
      validate: (value) => {
        if (!value) {
          return "El nombre es obligatorio";
        }
        if (value.length < 4) {
          return "El nombre debe tener al menos 4 caracteres";
        }
      },
      divStyle: { gridArea: "name" },
    },
    {
      type: "text",
      name: "instagram",
      placeholder: "Instagram username",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Instagram";
        }
      },
      divStyle: { gridArea: "instagram" },
    },
    {
      type: "text",
      name: "twitter",
      placeholder: "Twitter username",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Twitter";
        }
      },
      divStyle: { gridArea: "twitter" },
    },
    {
      type: "text",
      name: "facebook",
      placeholder: "Facebook username",
      validate: (value) => {
        if (!value) {
          return "Ingrese el nombre de usuario de Facebook";
        }
      },
      divStyle: { gridArea: "facebook" },
    },
  ];

  const validate = (values) => {
    const errors = {};
    formValues.forEach(({ validate, name }) => {
      if (validate(values[name])) {
        errors[name] = validate(values[name]);
      }
    });

    if (values.description === "") {
      errors.description = "La descripción es obligatoria";
    }

    if (!image) {
      errors.image = "La imagen de perfil es obligatoria";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      }).then((base64) => {
        return base64;
      });
      console.log(values);
    };

    const newValues = {
      ...values,
      image: await getBase64(image),
      instagram: "https://www.instagram.com/" + values.instagram,
      twitter: "https://www.twitter.com/" + values.twitter,
      facebook: "https://www.facebook.com/" + values.facebook,
    };
    console.info(newValues);
    setSubmitting(false);

    AlertSucces(newValues, setSubmitting);
  };

  const handleImageChange = (e, handleChange) => {
    const file = e.target.files[0];
    const fileType = file.type;
    const validImageTypes = ["image/jpeg", "image/png"];
    const size = file.size;
    if (!validImageTypes.includes(fileType) || size >= 5000000) {
      alert(
        "Por favor seleccione una imagen con formato jpeg o png y con un tamaño menor a 5MB"
      );
      setImage("");
      handleChange(e);
      return;
    }
    setImage(e.target.files[0]);
    handleChange(e);
  };

  return (
    <Container className={classes.containerForm}>
      <Formik
        initialValues={{}}
        validate={validate}
        onSubmit={(values, helpers) => handleSubmit(values, helpers)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            className="form-container"
            id="form-member-creation"
            onSubmit={handleSubmit}
          >
            {formValues.map((item) => (
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
            ))}
            <div
              style={{ gridArea: "description" }}
              className="create-member-input-field"
            >
              <CKEditor
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
                : null}
            </div>
            <FileInputFormik
              name="image"
              onChange={(e) => handleImageChange(e, handleChange)}
              style={{ gridArea: "imageInput" }}
              accept={".png, .jpg"}
              errors={errors}
              touched={touched}
            />
            <img
              src={image ? URL.createObjectURL(image) : imageExample}
              alt="profile images"
              className="profile-preview-image"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              style={{ gridArea: "submit" }}
              color="secondary"
              variant="contained"
              fullWidth
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default MembersForm;
