import privateGET, { privateDelete, privatePOST, privatePUT } from "../Services/privateApiService";
const endPoint=process.env.REACT_APP_API_GET_CATEGORIES

export const getCATEGORIES = ()=>{
    return privateGET(endPoint)
}

export const getCATEGORIESID = (id)=>{
    return privateGET(endPoint, id)
}

export const postCategory = (data)=>{
    return privatePOST(endPoint,data)
}

export const deleteCategory = (id)=>{
    return privateDelete(endPoint,id);
}

export const putCategory = (id,data)=>{
    return privatePUT(endPoint,id,data)
}