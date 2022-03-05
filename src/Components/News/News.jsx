import React, { useState } from 'react'
import useStyles from './novedadesStyles'
import Title from '../Title/Title'
import { Container, Grid } from '@mui/material'
import NewsText from './NewsText'
import CardComponent from '../Card/CardComponent'
import { useHistory } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import DecorativeLine from '../DecorativeLine/DecorativeLine'
import ShowModal from '../../Utils/AlertsProps'

const NewsMockUseEffect = [
  {
    id: 1058,
    name: 'Campaña de Recoleccion de juguetes',
    createdAt: '2022-02-28',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E1BAQEDDjuh9HQchg/company-background_10000/0/1610631110628?e=2159024400&v=beta&t=00JMFny1Y6JiSd8rpPDIfJ_6vNH6NhtCK_yban1zy3c',
  },
  {
    id: 1151,
    name: 'Niños Ucranianos son evacuados',
    createdAt: '2022-02-24',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E1BAQEDDjuh9HQchg/company-background_10000/0/1610631110628?e=2159024400&v=beta&t=00JMFny1Y6JiSd8rpPDIfJ_6vNH6NhtCK_yban1zy3c',
  },
  {
    id: 1153,
    name: 'Buenos Aires Dia del niño 2022',
    createdAt: '2022-02-20',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E1BAQEDDjuh9HQchg/company-background_10000/0/1610631110628?e=2159024400&v=beta&t=00JMFny1Y6JiSd8rpPDIfJ_6vNH6NhtCK_yban1zy3c',
  },
]

const NewsMock = {
  title: 'Novedades',
  text:
    'Aqui vamos a escribir un texto acerca de las noticias que tendremos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ',
  image:
    'https://res.cloudinary.com/danb0chax/image/upload/v1645810205/SomosMas/Rodrigo_Fuente_njugnt.jpg',
}

const alertText = {
  icon: 'error',
  title: 'Ups...',
  text: 'Algo salió mal!',
  footer: '<a href=""> Qué fue lo que paso? </a>',
}

const News = () => {
  const [news, setNews] = useState(NewsMockUseEffect)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingCard, setLoadingCard] = useState(false)
  const classes = useStyles({ isLoading: loading, isLoadingCard: loadingCard })

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
          {loading ? (
            <Spinner color={'#C63A3B'} />
          ) : (
            <>
              <Title title={NewsMock.title} />
              <Container>
                <NewsText text={NewsMock.text} />
                <Grid container className={classes.cardList}>
                  {news.map((row) => {
                    return (
                      <div key={row.id}>
                        {loadingCard ? (
                          <>
                            <Spinner color={'#C63A3B'} />
                          </>
                        ) : (
                          <CardComponent
                            key={row.id}
                            title={row.name}
                            image={row.image}
                            description={row.createdAt}
                            leerMasLink={() => handleSubmit(row.name, row.id)}
                          />
                        )}
                      </div>
                    )
                  })}
                </Grid>
                <DecorativeLine />
              </Container>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default News
