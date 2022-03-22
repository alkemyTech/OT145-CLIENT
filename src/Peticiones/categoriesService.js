import privateGET, { privateDelete, privatePOST, privatePUT } from "../Services/privateApiService";
/*
const endPointGet = process.env.REACT_APP_API_GET_CATEGORIES
const endPointGetID=process.env.REACT_APP_API_GET_CATEGORIES_ID
const endPointPost=process.env.REACT_APP_API_POST_CATEGORIES
const endPointDelete=process.env.REACT_APP_API__DELETE_CATEGORIES
const endPointPut=process.env.REACT_APP_API_PUT_CATEGORIES
*/

const endPoint=process.env.REACT_APP_API_CATEGORIES

export const getCATEGORIES = ()=>{
    return privateGET(endPoint)
}

