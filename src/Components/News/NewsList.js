import React, { useEffect, useState } from 'react'
import { getAllNews } from '../../Services/Home';
import CardComponent from '../Card/CardComponent';
import DecorativeLine from '../DecorativeLine/DecorativeLine';
import { useHistory } from 'react-router-dom';
import { Container, Grid } from '@mui/material'
import useStyles from './styles/novedadesStyles';

const NewsList = () => {
  const classes = useStyles()
  const [news, setNews] = useState([])
  const history = useHistory()

  const handleSubmit = (name, id) => {
    history.push(`/news/${id}`, { title: name })
  }

  useEffect(() => {
      const getData = async () => {
        const { data } = await getAllNews();
        setNews(data);
      }
      getData();
  }, [])

  const lastNews = news.slice(-6)

  return (
    <div >
      <h2>Ultimas Novedades</h2>
      <Container className={classes.containerThree}>
        <Grid container className={classes.cardList}>
          {lastNews.map((row) => {
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
      </Container>
      <DecorativeLine />

    </div>
  );
}

export default NewsList;