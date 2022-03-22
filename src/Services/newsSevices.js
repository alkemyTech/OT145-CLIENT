import privateGET, {
  privateDelete,
  privatePATCH,
  privatePUT,
  privatePOST,
} from './privateApiService'

const NEWS_URL = process.env.REACT_APP_API_GET_NEWS

export const getAllNews = () => {
  return privateGET(NEWS_URL)
}
export const getNewById = (id) => {
  return privateGET(NEWS_URL, id)
}
export const postNews = (body) => {
  return privatePOST(NEWS_URL, body)
}
export const patchNews = (id, body) => {
  return privatePATCH(NEWS_URL, id, body)
}
export const deleteNews = (id) => {
  return privateDelete(NEWS_URL, id)
}
export const putNews = (id, body) => {
  return privatePUT(NEWS_URL, id, body)
}
