import React, { useEffect, useState } from 'react'
import useStyles from './novedadesStyles'
import Title from '../Title/Title'
import { Container, Grid } from '@mui/material'
import NewsText from './NewsText'
import CardComponent from '../Card/CardComponent'
import { useHistory } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import ShowModal from '../../Utils/AlertsProps'
import getServicePublic from '../../Services/publicApiService'
import {NEWS_API} from '../../Utils/enpoins'


const NewsMock = {
  title: 'Novedades',
  text:
    'Aqui vamos a escribir un texto acerca de las noticias que tendremos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1646701390/SomosMas/Foto_4_gs55u8.jpg',
}

const alertText = {
  icon: 'error',
  title: 'Ups...',
  text: 'Algo salió mal!',
  footer: '<a href=""> Qué fue lo que paso? </a>',
}

const News = () => {
  
  

  const [news, setNews] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const classes = useStyles()

  

useEffect(()=>{
  getServicePublic(NEWS_API)
  .then(response =>{
    setNews(response.data)
    setLoading(false)
    console.log(response)
    
  })
  .catch((error) =>{
    setError(true)
  })
 },[])

  //Paso de parametros del ID de cada noticia al link de Leer Mas
  const history = useHistory()
  const handleSubmit = (name, id) => {
    history.push(`/news/${id}`, { title: name })
  }

  return (
    <div className={classes.newsSpinner}>
      {error ? (
        <ShowModal
          icon={alertText.icon}
          title={alertText.title}
          text={alertText.text}
          footer={alertText.footer}
        />
      ) : (
        <>
              <Title title={NewsMock.title} imgSrc={NewsMock.image}/>
              <Container>
              {loading ? (
            <Spinner color={'#C63A3B'} />
          ) : (
            <>
                <NewsText text={NewsMock.text} />
                <Grid container className={classes.cardList}>
                  {news.map((row) => {
                    return (
                      <div key={row.id}>
                       
                          <CardComponent
                            key={row.id}
                            title={row.name}
                            image={row.image}
                            description={row.createdAt}
                            leerMasLink={() => handleSubmit(row.name, row.id)}
                          />
                       
                      </div>
                    )
                  })}
                </Grid>
                <DecorativeLine />
                </>
          )}
              </Container>
          
        </>
      )}
    </div>
  )
}

export default News
