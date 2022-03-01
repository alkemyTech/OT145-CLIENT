import axios from 'axios'

const getAuthorizationHeader = () => {
  const token = localStorage.getItem('token')
  const auth = 'Portador:  ' + token

  return token !== null ? auth : null
}

const config = {
  headers: {
    Group: 145,
    Authorization: getAuthorizationHeader(),
  },
}

export const privatePUT = async (path, id, body) => {
  try {
    const response = await axios.put(`${path}/${id}`, body, config)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const privateGet = async (path, id) => {
  try {
    if (id != null) {
      const response = await axios.get(`${path}/${id}`, config)
      return response.data
    } else {
      const response = await axios.get(`${path}`, config)
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}
export default privateGet
