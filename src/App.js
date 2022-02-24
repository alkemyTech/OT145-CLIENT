import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ActivitiesForm from './Components/Activities/ActivitiesForm'
import CategoriesForm from './Components/Categories/CategoriesForm'
import NewsForm from './Components/News/NewsForm'
import SlidesForm from './Components/Slides/SlidesForm'
import TestimonialForm from './Components/Testimonials/TestimonialsForm'
import UserForm from './Components/Users/UsersForm'
import SchoolCampaign from './Campaigns/School/SchoolCampaign'
import ToysCampaign from './Campaigns/Toys/ToysCampaign'
import MembersForm from './Components/Members/MembersForm'
import ProjectsForm from './Components/Projects/ProjectsForm'
import { theme } from './theme'
import { Button, Container, ThemeProvider } from '@mui/material'

// Eliminar componente. Colocación momentanea para desarrollar
import SkeletonLayout from './Components/Skeleton/Skeleton'

function App() {

  // Eliminar una ves terminado Skeleton.js

  const [loading, setLoading] = useState(false);

  // Eliminar una ves terminado Skeleton.js

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
        </Switch>
      </BrowserRouter>

      {/* Eliminar componente. Colocación momentanea para desarrollar */}
      <Container>
        {
          loading ? (
            <>
              <SkeletonLayout  >
                <h1>Contenido titulo</h1>
                <p>lorem ipsum</p>
                <img style={{width: 200, height: 200}} src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img style={{width: 500, height: 500}} src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <img src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
              </SkeletonLayout>
              {/* <SkeletonLayout>
              </SkeletonLayout> */}
            </>
          ) : (
            <>
              <h1>Contenido titulo</h1>
              <p>lorem ipsum</p>
            <img style={{width: 200, height: 200}} src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <img style={{width: 500, height: 500}} src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <img src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </>
          )
        }

        <Button variant='contained' onClick={() => loading ? setLoading(false) : setLoading(true)} >
          Cambiar estado
        </Button>
        {loading ? <p>cargando...</p> : null}
      </Container>

    </ThemeProvider>
  )
}

export default App
