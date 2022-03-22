import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, LOG_OUT, ROL_SUCCESS } from "./types";

//Initial values
const initialValues = {
    user: null,
    token: localStorage.getItem("token") || "",
    isLogin: false,
    isError: false,
    rol_id: null
}

//reducer
export default function authReducer(state = initialValues, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLogin: true,
                rol_id: action.payload.rol_id
            }
        case LOGIN_FAILED:
        case REGISTER_FAILED:
            return {
                ...state,
                isError: true,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            }
        case LOG_OUT:
            localStorage.removeItem("token")
            return {
                ...state,
                user: null,
                token: "",
                isLogin: false,
                isError: false,
            }
            case ROL_SUCCESS:
                return {
                    ...state,
                    rol_id: action.payload
                }
        default:
            return state;
    }
}
