import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, LOG_OUT } from "./types";

//Initial values
const initialValues = {
    user: null,
    token: localStorage.getItem("token") || "",
    isLogin: false,
    isError: false,
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
            return {
                ...state,
            }
        default:
            return state;
    }
}
