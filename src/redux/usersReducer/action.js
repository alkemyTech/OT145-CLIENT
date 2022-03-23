import { LOGIN_SUCCESS, REGISTER_SUCCESS,LOGIN_FAILED,LOG_OUT, LOADING_SUCCESS } from "./types"
import axios from "axios"
import { privatePOST } from "../../Services/privateApiService"

export const iniciarSesion = (objeto) => async (dispatch) => {
    const { email, password } = objeto
    dispatch({
        type: LOADING_SUCCESS,
    })
    try {
        const respuesta = await privatePOST('https://ongapi.alkemy.org/api/login', { email, password })
        console.log(respuesta)
        if (respuesta.success) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: respuesta.data.user, token: respuesta.data.token }
            })
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

export const registarUsuario = (name, email, password) => async (dispatch) => {
    dispatch({
        type: LOADING_SUCCESS,
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