import privateGET, { privatePATCH, privateDelete, privatePOST, privatePUT } from "../Services/privateApiService";
const endPoint=process.env.REACT_APP_API_CATEGORIES

export const getCATEGORIES = ()=>{
    return privateGET(endPoint)
}

export const getCATEGORIESID = (id)=>{
    return privateGET(endPoint, id)
}

export const postCATEGORY = (body)=>{
    return privatePOST(endPoint,body)
}

export const deleteCATEGORY = (id)=>{
    return privateDelete(endPoint,id);
}

export const putCATEGORY = (id,body)=>{
    return privatePUT(endPoint,id,body)
}