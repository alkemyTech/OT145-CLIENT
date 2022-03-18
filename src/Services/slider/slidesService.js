import privateGET, { privatePATCH, privatePOST, privatePUT, privateDELETE } from '../privateApiService'

const SLIDES_URL = process.env.REACT_APP_API_GET_SLIDES

const getAllSlides = () => {
    return privateGET(SLIDES_URL)
}

const getSlideById = (id) => {
    return privateGET(SLIDES_URL, id)
}

const postSlide = (body) => {
    return privatePOST(SLIDES_URL, body)
}

const patchSlide = (id, body) => {
    return privatePATCH(SLIDES_URL, id, body)
}

const putSlide = (id, body) => {
    return privatePUT(SLIDES_URL, id, body)
}

const deleteSlide = (id) => {
    return privateDELETE(SLIDES_URL, id)
}

export { getAllSlides, getSlideById, postSlide, patchSlide, putSlide, deleteSlide }