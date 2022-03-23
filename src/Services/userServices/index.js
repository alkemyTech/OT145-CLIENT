import {privateGET,privateDelete,privatePATCH,privatePUT, privatePOST} from "../../Services/privateApiService"

const endPointGet = process.env.REACT_APP_API_GET_USER
const endPointGetID = process.env.REACT_APP_API_GET_USER_ID
const endPointPost= process.env.REACT_APP_API_POST_USER
const endPointDelete= process.env.REACT_APP_API_PUT_USER
const endPointPut= process.env.REACT_APP_API_DELETE_USER

export const getUser = () => {
    return privateGET(endPointGet)
}

export const getUserID = (id) => {
    return privateGET(endPointGetID,id)
}

export const postUser = (data) => {
    return privatePOST(endPointPost,data)
}

export const deleteUser = (id) => {
    return privateDelete(endPointDelete,id)
}

export const putUser = (id,data) => {
    return privatePUT(endPointPut,id,data)
}