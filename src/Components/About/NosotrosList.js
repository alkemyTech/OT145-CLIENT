import * as React from 'react'
import CardComponent from '../../Card/CardComponent'
import { Grid } from '@mui/material'
import useStyles from '../About/nosotrosStyles'

const NosotrosList = ({ nosotrosPersons }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.cardList}>
        {nosotrosPersons.map((person, id) => {
          return (
            <CardComponent
              className={classes.card}
              key={person.id}
              title={person.name}
              image={person.image}
              description={person.description}
              firstLink={person.facebookUrl}
              textFirstLink={person.linkName1}
              secondLink={person.linkedinUrl}
              textSecondLink={person.linkName2}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default NosotrosList
