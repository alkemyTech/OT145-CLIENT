import React from 'react'
import { Typography, Container } from '@mui/material'
import DecorativeLine from './../DecorativeLine/DecorativeLine'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import useStyles from './contactoStyles'

const contactoText = {
  email: 'somosfundacionmas@gmail.com',
  instagram: '@SomosMás',
  facebook: 'Somos_Mas',
  teléfono: '+54 11 60112988',
}

const Contacto = () => {
  const classes = useStyles()
  return (
    <>
      <Container>
        <Typography variant="h2">Contacto</Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Comunicate con nosotros para colaborar, y obtener información.
        </Typography>
        <Typography
          variant="h6"
          className={classes.mail}
          sx={{ fontWeight: '800' }}
        >
          {contactoText.email}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Nuestras redes sociales:
        </Typography>
        <div className={classes.redes}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon fontSize="large" color="primary" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
              {contactoText.instagram}
            </Typography>
          </a>
          <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer">
            <FacebookIcon color="secondary" fontSize="large" />
          </a>
          <a
            href="https://es-la.facebook.com"
            target="_blank"
            rel="noreferrer"
            className={classes.icon}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '800' }}>
              {contactoText.facebook}
            </Typography>
          </a>
        </div>
        <Typography variant="h6" className={classes.subtitle}>
          Llamanos de lunes a viernes de 8:00 a 18:00 al:
        </Typography>
        <Typography
          variant="h6"
          className={classes.mail}
          sx={{ fontWeight: '800' }}
        >
          {contactoText.teléfono}
        </Typography>

        <DecorativeLine />
      </Container>
    </>
  )
}
export default Contacto
