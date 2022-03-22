import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, LOG_OUT, LOADING_SUCCESS } from "./types";

//Initial values
const initialValues = {
    user: null,
    token: localStorage.getItem("token") || "",
    isLogin: false,
    isError: false,
    loading : false,
    isRegister : false,
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
                loading : false,
            }
        case LOGIN_FAILED:
        case REGISTER_FAILED:
            return {
                ...state,
                isError: true,
                loading : false,
                isRegister : false,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading : false,
                isRegister : true,
            }
        case LOADING_SUCCESS :
            return {
                ...state,
                loading: true,
            }
        case LOG_OUT:
            localStorage.clear("token")
            return {
                ...state,
                user: null,
                token: "",
                isLogin: false,
                isError: false,
            }
        default:
            return state;
    }
}
