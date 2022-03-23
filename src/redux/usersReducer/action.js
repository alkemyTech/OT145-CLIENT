import { LOGIN_SUCCESS, REGISTER_SUCCESS,LOGIN_FAILED,LOG_OUT, LOADING_ON, LOADING_OFF, ROL_SUCCESS, ROL_FAILED } from "./types"
import axios from "axios"
import  { privatePOST }  from "../../Services/privateApiService"
import privateGET from "../../Services/privateApiService"

export const iniciarSesion = (objeto) => async (dispatch) => {
    const { email, password } = objeto
    dispatch({
        type: LOADING_ON
    })
    try {
        const respuesta = await privatePOST('https://ongapi.alkemy.org/api/login', { email, password })
        console.log(respuesta)
        if (respuesta.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: respuesta.data.user, token: respuesta.data.token }
            })
            dispatch(
                obtenerRol(respuesta.data.user.role_id)
            )
        }
        else{
            dispatch({
                type : LOGIN_FAILED
            })
        }

    }
    catch (err) {
        console.log(err)
    }

}

export const obtenerRol = (id) => async (dispatch) => {
    try {
        const response = await privateGET('https://ongapi.alkemy.org/api/roles', id)
        if (response.success) {
            dispatch({
                type: ROL_SUCCESS,
                payload: { rol_type: response.data.description}
            })
            dispatch({
                type: LOADING_OFF
            })
        }
        else {
            dispatch({
                type: ROL_FAILED,
            })
            dispatch({
                type: LOADING_OFF
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

export const registarUsuario = (name, email, password) => async (dispatch) => {
    dispatch({
        type: LOADING_ON,
    })
    try {
        const respuesta = await axios.post(`https://ongapi.alkemy.org/api/register`, { name, email, password });

        dispatch({
            type: REGISTER_SUCCESS,
            payload: { user: respuesta.data.user, token: respuesta.data.token }
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const cerrarSesion = () => (dispatch) => {
    dispatch({
        type : LOG_OUT
    })
}