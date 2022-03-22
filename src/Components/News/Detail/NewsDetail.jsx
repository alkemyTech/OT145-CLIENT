import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material'
import useStyles from '../novedadesStyles'
import Title from '../../Title/Title'
import { useParams } from 'react-router-dom'
import { getNewsById } from '../../../redux/NewsReducers/newsReducerThunk'

const NewsDetail = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { newsId } = useSelector((state) => state.news)
  const params = useParams()
  console.log(params.id)

  useEffect(() => {
    dispatch(getNewsById(params.id))
  }, [])

  console.log(11, newsId)

  return (
    <div>
      <Title title={newsId.name} imageUrl={newsId.image} />
      <Box component="div" className={classes.container}>
        <Box component="div" className={classes.content}>
          <Typography variant="body1" className={classes.typographySize}>
            {newsId.content}
          </Typography>
        </Box>
        <Box component="div" className={classes.image}>
          <img src={newsId.image} alt={newsId.name} className={classes.photo} />
        </Box>
      </Box>
    </div>
  )
}

export default NewsDetail
