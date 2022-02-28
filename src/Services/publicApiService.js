import axios from 'axios';

const config = {
    headers: {
        Group: 145                //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get;


export const getService = async (URL, Id) => {
    try{
        if(!Id){
            const response = await axios.get(URL + "/users");
            return response.data;
        }
        const response = await axios.get(URL + "/users/" + Id);
        return response.data;
    }catch (error){
        console.error(error);
    }
}
