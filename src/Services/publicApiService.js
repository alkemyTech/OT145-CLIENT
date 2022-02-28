import axios from 'axios';

const config = {
    headers: {
        Group: 145                //Aqui va el ID del equipo!!
    }
}

const getServicePublic = async (URL, Id) => {
    try{
        if(!Id){
            const response = await axios.get(URL);
            return response.data;
        }
        const response = await axios.get(URL + Id);
        return response.data;
    }catch (error){
        console.error(error);
    }
}
export default getServicePublic;
