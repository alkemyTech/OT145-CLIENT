import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowModal from '../../../Utils/AlertsProps'
import Spinner from '../../../shared/Spinner/Spinner'
import useStyles from '../Styles/StyledAct'
import Actividad from './Actividad'
import { privateGET } from '../../../Services/privateApiService'


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
			;(async () => {
				const response = await privateGET(`https://ongapi.alkemy.org/api/activities/${id}`)
				if (response.success) {
					setActividad({
						...actividad,
						data: response.data,
						loading: false,
					})
				} else {
					setActividad({
						...actividad,
						error: response.error,
						loading: false,
					})
				}
			})()
		} catch (error) {
			setActividad({ ...actividad, error: error, loading: false })
		}
	}, [])

    if (actividad.loading) {
		return (
			<div className={classes.contSpinner}><Spinner color="#F00F00" height={60} width={60}/></div>
		)
	}

	if (actividad.error) {
		return <ShowModal
        icon= "error"
        title= "Oooops..."
        text= "Error al cargar"
        footer= "Intente nuevamente"
        />
	}

    return (
        <Actividad key={actividad.data.id} titulo={actividad.data.name} descripcion={actividad.data.description} />
    )
}

export default DetalleActividad