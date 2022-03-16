import React, { lazy, useState } from 'react'
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import CategoriesList from './Categories'
import Header from './Header'
import SideBar from './SideBar'
import NewsList from './NewsList/NewsList';
import UsersList from './UsersList'
import Error404 from '../Components/Error404/Error404'
import PrivateRoute from './PrivateRoutes/PrivateRoute'


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
const OrganizationScreen = lazy(() => import('./Organization/OrganizationScreen'));
const ActivitiesList = lazy(() => import('./ActivitiesList'))
const MemberList = lazy(() => import('./MemberList/MemberList'));

// const Index = lazy(() => import('./Index'))

function BackOficce() {
  let match = useRouteMatch();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <Switch>
        <PrivateRoute exact path={`${match.path}/news`} component={NewsList} />
        <PrivateRoute exact path={`${match.path}/news/create-news`} component={NewsForm} />
        <PrivateRoute exact path={`${match.path}`} component={ScreenDashboard} />
        <PrivateRoute exact path={`${match.path}/create-category`} component={CategoriesForm} />
        <PrivateRoute exact path={`${match.path}/slides/create`} component={SlidesForm} />
        <PrivateRoute exact path={`${match.path}/create-testimonials`} component={TestimonialForm} />
        <PrivateRoute exact path={`${match.path}/users/create-user`} component={UserForm} />
        <PrivateRoute exact path={`${match.path}/members/edit`} component={MembersForm} />
        <PrivateRoute exact path={`${match.path}/create-project`} component={ProjectsForm} />
        <PrivateRoute exact path={`${match.path}/slides`} component={Slides} />
        <PrivateRoute exact path={`${match.path}/organization`} component={OrganizationScreen} />
        <PrivateRoute exact path={`${match.path}/categories`} component={CategoriesList} />
        <PrivateRoute exact path={`${match.path}/activities`} component={ActivitiesList} />
        <PrivateRoute exact path={`${match.path}/activities/create-activity`} component={ActivitiesForm} />
        <PrivateRoute exact path={`${match.path}/users`} component={UsersList} />
        <PrivateRoute exact path={`${match.path}/members`} component={MemberList} />
        <PrivateRoute path="*" component={Error404} />
      </Switch>
    </>
  )
}
export default BackOficce
