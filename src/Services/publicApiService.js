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

export default Get;


const getService = (URL, Id) => {
    if(Id != null){
        return axios.get(URL + `/${Id}`)
    }
    return axios.get(URL)
}
export default getService;