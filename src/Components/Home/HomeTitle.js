import React from 'react';
import useStyles from './styles/HomeTitlesyles';


const HomeTitle = () => {
    const classes = useStyles()

    return(
        <h1 className={classes.title}>Bienvenidos a Somos Mas</h1>
    )
}

export default HomeTitle;