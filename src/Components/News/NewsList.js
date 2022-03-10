import React, { useEffect, useState } from 'react'
import DecorativeLine from '../DecorativeLine/DecorativeLine';
import { useHistory } from 'react-router-dom';
import CardComponent from '../Card/CardComponent';
import { Container, Grid } from '@mui/material'
import {NEWS_API} from '../../Utils/enpoins'
import getServicePublic from '../../Services/publicApiService'
import useStyles from './novedadesStyles';



const NewsList = () => {
    const classes = useStyles()
    const [news, setNews] = useState([])
    const history = useHistory()
    
    const handleSubmit = (name, id) => {
        history.push(`/news/${id}`, { title: name })
      }
    
      useEffect(()=>{
        getServicePublic(NEWS_API)
        .then(response =>{
          setNews(response.data)
         
          console.log(response)
          
        })
        .catch((error) =>{
          console.log()
        })
       },[])

    const lastNews=news.slice(-5)
    console.log(lastNews)

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