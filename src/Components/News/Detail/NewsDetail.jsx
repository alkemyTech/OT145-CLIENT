import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box } from '@mui/material'
import useStyles from '../styles/novedadesStyles'
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

  return (
    <div>
      <Box component="div" className={classes.container}>
        <Box component="div" className={classes.content}>
          <Typography variant="h4">{newsId.name}</Typography>
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
