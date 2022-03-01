import React from 'react'
import { Typography, Container } from '@mui/material'
import DecorativeLine from './../DecorativeLine/DecorativeLine'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import useStyles from './contactoStyles'
import Title from './../Title/Title'

const basicInfo = {
  title: 'Contacto',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1645799960/SomosMas/AdobeStock_232928548_Preview_gzxhsz.jpg',
}

const contactoInfo = {
  inviteText: 'Comunicate con nosotros para colaborar, y obtener información.',
  email: 'somosfundacionmas@gmail.com',
  timeText: 'Llamanos de lunes a viernes de 8:00 a 18:00 al:',
  teléfono: '+54 11 60112988',
  redesText: ' Nuestras redes sociales:',
  instagram: '@SomosMás',
  facebook: 'Somos_Mas',
}

const Contacto = () => {
  const classes = useStyles()
  console.log(classes)

  /* chageClasses(contactoInfo, index){
    switch(item){
      case 'email': 
      return classes.email
      case 'inviteText':
        return classes.subtitle
        case 'teléfono':
          return classes.email

    }

  } */
  //if(item[0]!== 'email' || "teléfono")
  return (
    <>
      <Title title={basicInfo.title} imgSrc={basicInfo.image} />
      <Container>
        {Object.entries(contactoInfo).map((item, index) => (
          <Typography variant="h6" className={classes.subtitle}>
            {item[1]}
          </Typography>
        ))}
        <Typography variant="h6" className={classes.subtitle}>
          Comunicate con nosotros para colaborar, y obtener información.
        </Typography>
        <Typography
          variant="h6"
          className={classes.mail}
          sx={{ fontWeight: '800' }}
        >
          {contactoInfo.email}
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
              {contactoInfo.instagram}
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
              {contactoInfo.facebook}
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
          {contactoInfo.teléfono}
        </Typography>

        <DecorativeLine />
      </Container>
    </>
  )
}
export default Contacto
