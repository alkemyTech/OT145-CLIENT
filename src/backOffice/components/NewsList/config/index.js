import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('El campo es obligatorio')
    .min(4, 'Debe tener minimo 4 caracteres'),
  image: Yup.mixed()
    .required('La imagen es obligatorio')
    .test('type', 'Solo imagenes png y jpg', (value) => {
      return (
        value && ([].includes(value.type) || ['image/jpg'].includes(value.type))
      )
    }),
  content: Yup.string().required('El campo es obligatorio'),
})
