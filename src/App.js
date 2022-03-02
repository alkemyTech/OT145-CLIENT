import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'
import Home from './Components/Home/Index'
import LayoutHome from './Components/Home/LayoutHome'

const ActivitiesForm = lazy(() =>
  import('./Components/Activities/ActivitiesForm'),
)
const CategoriesForm = lazy(() =>
  import('./Components/Categories/CategoriesForm'),
)
const NewsForm = lazy(() => import('./Components/News/NewsForm'))
const SlidesForm = lazy(() => import('./Components/Slides/SlidesForm'))
const TestimonialForm = lazy(() =>
  import('./Components/Testimonials/TestimonialsForm'),
)
const UserForm = lazy(() => import('./Components/Users/UsersForm'))
const ToysCampaign = lazy(() => import('./Campaigns/Toys/ToysCampaign'))
const SchoolCampaign = lazy(() => import('./Campaigns/School/SchoolCampaign'))
const MembersForm = lazy(() => import('./Components/Members/MembersForm'))
const ProjectsForm = lazy(() => import('./Components/Projects/ProjectsForm'))
const Actividades = lazy(() =>
  import('../src/Components/Activities/Actividades'),
)
const BackOficce = lazy(() => import('../src/backOffice/Backoffice'))
const Donacion = lazy(() => import('./Components/Donations/Donacion'))
const Gracias = lazy(() => import('./Components/Donations/Gracias'))
const News = lazy(() => import('./Components/News/News'))
const NewsDetail = lazy(() => import('./Components/News/Detail/NewsDetail'))
const Nosotros = lazy(() => import('./Components/About/Nosotros'))
const Contacto = lazy(() => import('./Components/Contact/Contacto'))
const Home = lazy(() => import('./Components/Home/Index'))


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LayoutHome>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-activity" component={ActivitiesForm} />
            <Route exact path="/create-category" component={CategoriesForm} />
            <Route exact path="/create-news" component={NewsForm} />
            <Route exact path="/backoffice/create-slide" component={SlidesForm} />
            <Route exact path="/create-testimonials" component={TestimonialForm} />
            <Route exact path="/create-user" component={UserForm} />
            <Route exact path="/create-member" component={MembersForm} />
            <Route exact path="/create-project" component={ProjectsForm} />
            <Route exact path="/school-campaign" component={SchoolCampaign} />
            <Route exact path="/toys-campaign" component={ToysCampaign} />
            <Route exact path="/Actividades" component={Actividades} />
            <Route exact path="/backoffice" component={BackOficce} />
            <Route exact path="/news/:id" component={NewsDetail} />
            <Route exact path="/news" component={News} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            
          </Switch>
        </Suspense>
        </LayoutHome> 
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
