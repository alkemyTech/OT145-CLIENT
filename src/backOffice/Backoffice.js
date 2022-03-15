import React, { lazy, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import CategoriesList from './Categories'
import Header from './Header'
import SideBar from './SideBar'
import NewsList from './NewsList/NewsList';
import UsersList from './UsersList'
import Error404 from '../Components/Error404/Error404'


const ActivitiesForm = lazy(() =>
  import('../Components/Activities/ActivitiesForm'),
)
const CategoriesForm = lazy(() =>
  import('../Components/Categories/CategoriesForm'),
)
const NewsForm = lazy(() => import('../Components/News/NewsForm'))
const SlidesForm = lazy(() => import('../Components/Slides/SlidesForm'))
const TestimonialForm = lazy(() =>
  import('../Components/Testimonials/TestimonialsForm'),
)
const UserForm = lazy(() => import('../Components/Users/UsersForm'))
const MembersForm = lazy(() => import('../Components/Members/MembersForm'))
const ProjectsForm = lazy(() => import('../Components/Projects/ProjectsForm'))

const Slides = lazy(() => import('../Components/Slides/SlidesBackOffice'))
const ScreenDashboard = lazy(() => import('./ScreenDashboard'))
const OrganizationScreen = lazy(() => import('./OrganizationScreen'));
const ActivitiesList = lazy(() => import('./ActivitiesList'))

// const Index = lazy(() => import('./Index'))

function BackOficce() {
  let match = useRouteMatch();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <SideBar open={open}/>
      <Switch>
        <Route path={`${match.path}/news`} exact component={NewsList} />
        <Route exact path={`${match.path}/news/create-news`} component={NewsForm} />
        <Route exact path={`${match.path}`} component={ScreenDashboard} />
        <Route exact path={`${match.path}/create-category`} component={CategoriesForm} />

        <Route exact path={`${match.path}/slides/create`} component={SlidesForm} />
        <Route exact path={`${match.path}/create-testimonials`} component={TestimonialForm} />
        <Route exact path={`${match.path}/users/create-user`} component={UserForm} />
        <Route exact path={`${match.path}/create-member`} component={MembersForm} />
        <Route exact path={`${match.path}/create-project`} component={ProjectsForm} />

        <Route exact path={`${match.path}/slides`} component={Slides} />
        <Route exact path={`${match.path}/organization`} component={OrganizationScreen} />
        <Route
          exact
          path={`${match.path}/categories`}
          component={CategoriesList}
        />
        <Route exact path={`${match.path}/activities`} component={ActivitiesList} />
        <Route exact path={`${match.path}/activities/create-activity`} component={ActivitiesForm} />
        <Route exact path={`${match.path}/users`} component={UsersList} />
        <Route path="*" component={Error404}  />
      </Switch>
    </>
  )
}
export default BackOficce
