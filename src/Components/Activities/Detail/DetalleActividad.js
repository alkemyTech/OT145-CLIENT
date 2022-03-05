import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Actividad from './Actividad'
import findId from './findId'
const DetalleActividad = () => {
    const { id } = useParams()
    const [actividad, setActividad] = useState([])
    const activitiesMock = [
        { id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
        { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
        { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' }
    ];

    useEffect(() => {
        setActividad(...actividad, [findId(activitiesMock, id)]);
    }, [id])
    return (
        <>
            {actividad.length !== 0 && actividad.map(({ id, name, description }) => (
                <Actividad key={id} titulo={name} descripcion={description} />
            ))}
        </>
    )
}

export default DetalleActividad