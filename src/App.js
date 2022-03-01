import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'



const ActivitiesForm = lazy(() => import('./Components/Activities/ActivitiesForm'));
const CategoriesForm = lazy(() => import('./Components/Categories/CategoriesForm'));
const NewsForm = lazy(() => import('./Components/News/NewsForm'));
const SlidesForm = lazy(() => import('./Components/Slides/SlidesForm'));
const TestimonialForm = lazy(() => import('./Components/Testimonials/TestimonialsForm'));
const UserForm = lazy(() => import('./Components/Users/UsersForm'));
const ToysCampaign = lazy(() => import('./Campaigns/Toys/ToysCampaign'));
const SchoolCampaign = lazy(() => import('./Campaigns/School/SchoolCampaign'));
const MembersForm = lazy(() => import('./Components/Members/MembersForm'));
const ProjectsForm = lazy(() => import('./Components/Projects/ProjectsForm'));
const Actividades = lazy (() => import('../src/Components/Activities/Actividades'))
const BackOficce = lazy(() => import('../src/backOffice/Backoffice'))
const DetalleActividad= lazy(() => import('./Components/Activities/Detail/DetalleActividad'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/Actividades" exact component={Actividades} />
            <Route path="/Actividades/:id" component={DetalleActividad} />
            <Route path="/backoffice" component={BackOficce} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
