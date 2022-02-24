import React from 'react'
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
import { ThemeProvider } from '@mui/material'
// Eliminar componente. Solo fue añadido para visualizar mientras se desarrolla
import Title from './Components/Title/Title'

function App() {
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

      {/* Eliminar componente. Solo fue añadido para visualizar mientras se desarrolla */}
      {/* <Title 
        imgSrc={'https://www.thesprucepets.com/thmb/9oFMwEfwmmp6us5uIZ1Nfz8z_70=/2121x1193/smart/filters:no_upscale()/GettyImages-1144157924-52f5bd679db74abfb01615715e68e63c.jpg'} 
        title={'Soy un titulo'} 
      /> */}
      <Title 
        imgSrc={'https://images.pexels.com/photos/7130557/pexels-photo-7130557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} 
        title={'Muestra uno'} 
      />
      {/* <Title 
        imgSrc={'https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} 
        title={'Muestra dos'} 
      /> */}
    </ThemeProvider>
  )
}

export default App
