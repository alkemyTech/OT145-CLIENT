import React from 'react'
import ActivitiesList from './ActivitiesList'
import Title from '../Title/Title'
import ShowModal from '../../Utils/AlertsProps'
import Spinner from '../../shared/Spinner/Spinner'
import useStyles from './Styles/StyledAct'
import { getActivities } from '../../Services/ActivityApiService'
import { privateGET } from '../../Services/privateApiService'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CardListStyles.css';



const Actividades = () => {
    const classes = useStyles();
    //constantes de prueba hasta tener los endpoints
    const [Actividades, setActividades] = useState({
		loading: true,
		data: [],
		error: '',
	})

    useEffect(() => {
		try {
			;(async () => {
				const response = await privateGET('https://ongapi.alkemy.org/api/activities')
				if (response.success) {
					setActividades({
						...Actividades,
						data: response.data,
						loading: false,
					})
				} else {
					setActividades({
						...Actividades,
						error: response.error,
						loading: false,
					})
				}
			})()
		} catch (error) {
			setActividades({ ...Actividades, error: error, loading: false })
		}
	}, [])

	if (Actividades.error) {
		return 
        <ShowModal
        icon= "error"
        title= "Oooops..."
        text= "Error al cargar"
        footer= "Intente nuevamente"
    /> 
	}

    console.log(Actividades.data)


    return (
        <>
            <Title title="Actividades" />
            <ul className="list-container">
                {Actividades.data.length > 0 ?
                    Actividades.data.map((activity) => {
                        return(
                            <li className="card-info" key={activity.id}>
                                <h3>{activity.name}</h3>
                                {activity.description}
                                <Link to={`/Actividades/${activity.id}`}>ir a la actividad</Link>
                            </li>
                        )       
                    })
                :
                    <p>No hay actividades</p>
                }
            </ul>
        </>
    )
}

export default Actividades