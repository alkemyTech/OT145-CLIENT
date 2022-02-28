import axios from 'axios';

const config = {
    headers: {
        Group: 01                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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

export default Get