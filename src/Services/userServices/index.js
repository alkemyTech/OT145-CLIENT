import {privateGET,privateDelete,privatePUT, privatePOST} from "../../Services/privateApiService"


const USER_URL = process.env.REACT_APP_API_GET_USER

export const getUser = () => {
    return privateGET(USER_URL)
}

export const getUserID = (id) => {
    return privateGET(`${USER_URL}/${id}`)
}

export const postUser = (body) => {
    return privatePOST(USER_URL,body)
}

export const deleteUser = (id) => {
    return privateDelete(USER_URL,id)
}

export const putUser = (id,body) => {
    return privatePUT(USER_URL,id,body)
}