import { LOGIN_SUCCESS,REGISTER_SUCCESS, ROL_SUCCESS } from "./types"
import axios from "axios"

export const iniciarSesion = (email, password) => async (dispatch) => {

    try {
        const respuesta = await axios.post(`https://ongapi.alkemy.org/api/login`, { email, password })

        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: respuesta.data.user, token: respuesta.data.token, rol_id: respuesta.data.data.user.role_id}
        })
    }

    catch (err) {
        console.log(err)
    }
}

export const registarUsuario = (name,email,password) => async (dispatch) => {
    try{
        const respuesta = await axios.post(`https://ongapi.alkemy.org/api/register` , {name,email,password});

        dispatch({
            type:REGISTER_SUCCESS,
            payload: {user: respuesta.data.user, token: respuesta.data.token}
        })
    }
    catch(err){
        console.log(err);
    }
}