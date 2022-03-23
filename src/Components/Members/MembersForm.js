import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getMembersById, putMembers, postMembers} from "../../redux/Members/membersSlice";
import { convertToBase64 } from "../../helpers/base64";
import Editor from "../../backOffice/components/Editor/Editor";
import { Button, Container, TextField, Typography } from "@mui/material";
import "../FormStyles.css";
import "./MembersForm.css";
import useStyles from "../../Components/Auth/AuthStyles";


const MembersForm = () => {

  const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("El campo es obligatorio")
      .min(4, "Debe tener minimo 4 caracteres"),
    image: Yup.mixed()
      .required("La imagen es obligatorio")
      .test("type", "Solo imagenes png y jpg", (value) => {
        return (
          value &&
          (["image/jpg"].includes(value.type) ||
            ["image/png"].includes(value.type))
        );
      }),
    description: Yup.string().required("El campo es obligatorio"),
    linkedinUrl: Yup.string()
      .required("El campo es obligatorio")
      .test("type", "La url no es valida", (value) => isValidUrl(value)),
      facebookUrl: Yup.string()
      .required("El campo es obligatorio")
      .test("type", "La url no es valida", (value) => isValidUrl(value)),
  });

  const dispatch = useDispatch();
  const { memberId } = useSelector((state) => state.members);
  const { state } = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (state) {
      dispatch(getMembersById(state));
    }
  }, []);

  const imageExample = "https://www.w3schools.com/howto/img_avatar.png";

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
      name: memberId?.name || "",
      linkedinUrl: memberId?.linkedinUrl || "",
      facebookUrl: memberId?.facebookUrl || "",
      description: memberId?.description || "",
      image: memberId?.image || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (memberId) {
          const base64 = await convertToBase64(values.image)
          values.image = base64
          dispatch(putMembers(values));
      }
      else {
          const base64 = await convertToBase64(values.image)
          values.image = base64
          dispatch(postMembers(values));
      }
    },
  });


  return (
    <Container className={classes.containerForm}>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Nombre"
          type="text"
          value={values.name}
          className="create-member-input-field"
          style={{ gridArea: "name" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          color="secondary"
        />
        <TextField
          fullWidth
          name="linkedinUrl"
          label="Instagram"
          type="text"
          value={values.linkedinUrl}
          className="create-member-input-field"
          style={{ gridArea: "instagram" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.linkedinUrl && Boolean(errors.linkedinUrl)}
          helperText={touched.linkedinUrl && errors.linkedinUrl}
          color="secondary"
        />
        <TextField
          fullWidth
          name="facebookUrl"
          label="Twitter"
          type="text"
          value={values.facebookUrl}
          className="create-member-input-field"
          style={{ gridArea: "twitter" }}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.facebookUrl && Boolean(errors.facebookUrl)}
          helperText={touched.facebookUrl && errors.facebookUrl}
          color="secondary"
        />
        <div
          style={{ gridArea: "description" }}
          className="create-member-input-field"
        >
          <Editor
            text={values.description}
            onChangeText={(description) => {
              setFieldValue("description", description);
            }}
          />
          {handleSubmit && errors.description && (
            <Typography
              className={classes.errorCkEditor}
              variant="caption"
              color="error"
            >
              {touched.description && errors.description}
            </Typography>
          )}
        </div>
        <TextField
          type="file"
          name="image"
          onChange={(e) => setFieldValue("image", e.target.files[0])}
          fullWidth
          onBlur={handleBlur}
          style={{ gridArea: "imageInput" }}
          className={classes.inputs}
          error={touched.image && Boolean(errors.image)}
          helperText={touched.image && errors.image}
        />
        <img
          src={memberId ? memberId.image : imageExample}
          alt="profile images"
          className="profile-preview-image"
        />
        <Button
          type="submit"
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
