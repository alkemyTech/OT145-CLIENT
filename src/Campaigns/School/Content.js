import React from 'react';
import Slider from "./Slider"
import {Box ,Typography} from '@mui/material'
import useStyles from './styles/contentStyle'

const Content = () => {
  const classes = useStyles();
  return (
    <div>
      <Slider />
      <Box className={classes.bigBox}>
        <Box className={classes.boxTitle}>
          <Typography className={classes.title}>
            Recibimos materiales escolares para repartir en nuestra red de escuelas.
          </Typography>
        </Box>
        <Box className={classes.boxTitle}>
          <Typography className={classes.subtitle}>
          La cita sera el dia 14 de agosto del 2022 en Facultad de derecho de la ciudad de Buenos Aires.
         </Typography>
         <Typography>Todavía tenés tiempo, quedan </Typography>
        </Box>

      </Box>
    </div>
  );
}

export default Content;