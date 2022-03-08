import React from 'react'
import ActivitiesList from './ActivitiesList'
import Title from '../Title/Title'
import ShowModal from '../../Utils/AlertsProps'
import Spinner from '../Spinner/Spinner'
import useStyles from './Styles/StyledAct'




const Actividades = () => {
    const classes = useStyles();
    //constantes de prueba hasta tener los endpoints
    const loading = false;
    const error = false;
    return (
        <>
            <Title title="Actividades" />
            {loading? <div className={classes.contSpinner}><Spinner color="#F00F00" height={60} width={60}/></div> : (error? 
            <ShowModal
                icon= "error"
                title= "Oooops..."
                text= "Error al cargar"
                footer= "Intente nuevamente"

            /> 
            : <ActivitiesList/>)}
        </>
    )
}

export default Actividades