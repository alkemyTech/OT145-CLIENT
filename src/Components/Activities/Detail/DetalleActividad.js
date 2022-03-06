import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Actividad from './Actividad'
import findId from './findId'
import useStyles from './Styles/StyledAct'
import ShowModal from '../../Utils/AlertsProps'
import Spinner from '../Spinner/Spinner'

const DetalleActividad = () => {
    const classes = useStyles();
    //constantes de prueba hasta tener los endpoints
    const loading = true;
    const error = false;

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
            {loading?<div className={classes.contSpinner}><Spinner color="#F00F00" height={60} width={60}/></div> :(error? 
                <ShowModal
                icon= "error"
                title= "Oooops..."
                text= "Error al cargar"
                footer= "Intente nuevamente"
                /> :
                <div>
                    {actividad.length !== 0 && actividad.map(({ id, name, description }) => (
                    <Actividad key={id} titulo={name} descripcion={description} />))}
                </div>
                )}
        </>
    )
}

export default DetalleActividad