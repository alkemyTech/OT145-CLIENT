import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowModal from '../../../Utils/AlertsProps'
import Spinner from '../../Spinner/Spinner'
import useStyles from '../Styles/StyledAct'
import Actividad from './Actividad'
import findId from './findId'
import { getActivitiesId } from '../../../Services/ActivityApiService'


const DetalleActividad = () => {
    const classes = useStyles();
    const { id } = useParams()
    //constantes de prueba hasta tener los endpoints
    const [actividad, setActividad] = useState({
        loading: true,
		data: [],
		error: '',
    })

    useEffect(() => {
		try {
			(async () => {
				const response = await getActivitiesId(id)
				response.status === 200
					? setActividad({
						...actividad,
						data: response.data.data,
						loading: false,
					  })
					: setActividad({
						...actividad,
						error: response.error,
						loading: false,
					  })
			})()
		} catch (error) {
			setActividad({ ...actividad, error: error.message, loading: false })
		}
	}, [])
    return (
        <>
            {actividad.loading?<div className={classes.contSpinner}><Spinner color="#F00F00" height={60} width={60}/></div> :(actividad.error? 
                <ShowModal
                icon= "error"
                title= "Oooops..."
                text= "Error al cargar"
                footer= "Intente nuevamente"
                /> :
                <div>
                    <Actividad key={actividad.data.id} titulo={actividad.data.name} descripcion={actividad.data.description} />
                </div>
                )}
        </>
    )
}

export default DetalleActividad