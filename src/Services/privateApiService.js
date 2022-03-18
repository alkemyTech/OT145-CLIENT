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
    const response = await axios.put(`${path}/${id}`, body, config)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const privatePATCH = async (path, id, body) => {
  try {
    const response = await axios.patch(`${path}/${id}`, body, config)

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
      const response = await axios.get(`${path}`, config)
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
}

export const privatePOST = async (path, body) => {
  try {
    const response = await axios.post(path, body, config)
    return response
    
  } catch (error) {
    console.error('Hubo un error al hacer la petición');
    console.log(error);
  }
}

export const privateDELETE = async (path, id) => {
  try{

    const response = await axios.delete(`${path}/${id}`, config)
    return response.data

  }catch(error){
    console.error(error)
  }
}


export default privateGET
