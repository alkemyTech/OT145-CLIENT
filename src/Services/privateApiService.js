import axios from 'axios'

const getAuthorizationHeader = () => {
  const token = localStorage.getItem('token')
  const auth = 'Bearer:  ' + token

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
    const response = await axios.put(`${path}/${id}`, body)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const privatePATCH = async (path, id, body) => {
  try {
    const response = await axios.patch(`${path}/${id}`, body)

    return response.data
  } catch (error) {
    console.error(error)
  }
}

const privateGET = async (path, id) => {
  try {
    if (id != null) {
      const response = await axios.get(`${path}/${id}`, config)
      return response.data
    } else {
      const response = await axios.get(`${path}`, )
      return response.data
    }
  } catch (error) {
    return error.response.data
  }
}

export const privatePOST = async (path, body) => {
  try {
    const response = await axios.post(path, body)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const privateDelete = async (path, id) => {
  try {

    const response = await axios.delete(`${path}/${id}`,config )
    return response.data

  } catch (error) {
    console.error(error)
  }
}


export default privateGET
