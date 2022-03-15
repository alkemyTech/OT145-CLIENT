import * as Yup from "yup";

export const initialValues = {
    title: "",
    textSlide1: "",
    imageSlide1: "",
    textSlide2: "",
    imageSlide2: "",
    textSlide3: "",
    imageSlide3: "",
  };

  const validationImages = Yup.mixed().test(
    "type",
    "La imagen debe ser jpg o png",
    (value) => {
      return (
        value &&
        (["image/jpg"].includes(value.type) ||
          ["image/png"].includes(value.type))
      );
    }
  );

export const validationSchema = Yup.object({
    title: Yup.string()
      .required("El campo es obligatorio")
      .min(20, "Minimo debe tener 20 caracteres"),
    imageSlide1: validationImages,
    imageSlide2: validationImages,
    imageSlide3: validationImages,
})