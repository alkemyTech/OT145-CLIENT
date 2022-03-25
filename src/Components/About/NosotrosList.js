import * as React from 'react'
import CardComponent from '../Card/CardComponent'
import { Grid } from '@mui/material'
import useStyles from '../About/nosotrosStyles'

const NosotrosList = ({ miembros }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.cardList}>
        {miembros.map((person) => {
          return (
            <CardComponent
              className={classes.card}
              key={person.id}
              title={person.name}
              image={person.image}
              description={person.description}
              firstLink={person.facebookUrl}
              secondLink={person.linkedinUrl}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default NosotrosList
