import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    title: Yup.string().required('El campo es obligatorio').min(4, 'Debe tener minimo 4 caracteres')
})

