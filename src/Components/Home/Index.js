import Slide from '../Slider/Slider'
import HomeTitle from './HomeTitle'
import NewsList from '../News/NewsList'
import React, { useState } from 'react'
import Spinner from '../../shared/Spinner/Spinner'
import ShowModal from '../../Utils/AlertsProps'
import ActivitiesList from '../Activities/ActivitiesList'

const Home = () => {
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState(false)

  return loading ? (
    <Spinner />
  ) : error ? (
    <ShowModal
      icon="error"
      title="Hubo un error al cargar el sitio"
      text="Intenta recargar el sitio nuevamente en unos instantes"
    />
  ) : (
    <>
      <HomeTitle />
      <Slide />
      <NewsList />
      <ActivitiesList />
    </>
  )
}

export default Home
