import privateGET, { privatePATCH, privatePOST, privatePUT, privateDELETE } from '../privateApiService'

const getAllSlides = () => {
    return privateGET(process.env.REACT_APP_API_GET_SLIDES)
}

const getSlideById = (id) => {
    return privateGET(process.env.REACT_APP_API_GET_SLIDES, id)
}

const postSlide = (body) => {
    return privatePOST(process.env.REACT_APP_API_GET_SLIDES, body)
}

const patchSlide = (id, body) => {
    return privatePATCH(process.env.REACT_APP_API_GET_SLIDES, id, body)
}

const putSlide = (id, body) => {
    return privatePUT(process.env.REACT_APP_API_GET_SLIDES, id, body)
}

const deleteSlide = (id) => {
    return privateDELETE(process.env.REACT_APP_API_GET_SLIDES, id)
}

export { getAllSlides, getSlideById, postSlide, patchSlide, putSlide, deleteSlide }