import React, { lazy, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom' //acomodar fran
import CategoriesList from '../Categories/Categories'
import Header from './Header'
import Sidebar from './Sidebar'
import Error404 from '../../../shared/Error404/Error404'

const ActivitiesForm = lazy(() => import('../Activities/ActivitiesForm'))

const CategoriesForm = lazy(() => import('../Categories/CategoriesForm'))

const Categories = lazy(() => import('../Categories/Categories'))

const NewsForm = lazy(() => import('../NewsList/NewsForm'))

const SlidesForm = lazy(() => import('../../../Components/Slides/SlidesForm'))

// const TestimonialForm = lazy(() => import('../Testimonials/TestimonialsForm'))

const UserForm = lazy(() => import('../../../Components/Users/UsersForm'))

const MembersForm = lazy(() => import('../MemberList/MemberList'))

const ProjectsForm = lazy(() => import('../Projects/ProjectsForm'))

const Slides = lazy(() => import('../../../Components/Slides/SlidesBackOffice'))

const ScreenDashboard = lazy(() => import('./ScreenDashboard'))

const OrganizationScreen = lazy(() =>
  import('../Organization/OrganizationScreen'),
)

const ActivitiesList = lazy(() => import('../Activities/ActivitiesList'))

const MemberList = lazy(() => import('../MemberList/MemberList'))

const NewsList = lazy(() => import('../NewsList/NewsList'))

const OrganizationForm = lazy(() => import('../Organization/OrganizationForm'))

const UsersList = lazy(() => import('../Users/UsersList'))

function BackOficce() {
  let match = useRouteMatch()

  const [open, setOpen] = useState(false)

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Sidebar open={open} />
      <Switch>
        <Route exact path={`${match.path}/news`} component={NewsList} />
        <Route
          exact
          path={`${match.path}/news/create-news`}
          component={NewsForm}
        />
        <Route
          exact
          path={`${match.path}/news/edit-news`}
          component={NewsForm}
        />
        <Route exact path={`${match.path}`} component={ScreenDashboard} />
        <Route
          exact
          path={`${match.path}/category/create-category`}
          component={CategoriesForm}
        />
        <Route
          exact
          path={`${match.path}/slides/create`}
          component={SlidesForm}
        />
        <Route
          exact
          path={`${match.path}/testimonials/create-testimonials`}
          component={TestimonialForm}
        />
        <Route
          exact
          path={`${match.path}/users/create-user`}
          component={UserForm}
        />
        <Route
          exact
          path={`${match.path}/members/edit`}
          component={MembersForm}
        />
        <Route
          exact
          path={`${match.path}/create-project`}
          component={ProjectsForm}
        />
        <Route exact path={`${match.path}/slides`} component={Slides} />
        <Route
          exact
          path={`${match.path}/organization`}
          component={OrganizationScreen}
        />
        <Route
          exact
          path={`${match.path}/organization/edit`}
          component={OrganizationForm}
        />
        <Route
          exact
          path={`${match.path}/categories`}
          component={CategoriesList}
        />
        <Route
          exact
          path={`${match.path}/activities`}
          component={ActivitiesList}
        />
        <Route
          exact
          path={`${match.path}/activities/create-activity`}
          component={ActivitiesForm}
        />
        <Route exact path={`${match.path}/users`} component={UsersList} />
        <Route exact path={`${match.path}/members`} component={MemberList} />

        <Route path="*" component={Error404} />
      </Switch>
    </>
  )
}
export default BackOficce
