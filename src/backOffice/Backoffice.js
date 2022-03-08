import React, { lazy, useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import NewsList from './NewsList/NewsList';

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
const ScreenDashboard = lazy(() => import('./ScreenDashboard'))
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
        <Route exact path={`${match.path}/create-activity`} component={ActivitiesForm} />
        <Route exact path={`${match.path}/create-category`} component={CategoriesForm} />

        <Route exact path={`${match.path}/create-slide`} component={SlidesForm} />
        <Route exact path={`${match.path}/create-testimonials`} component={TestimonialForm} />
        <Route exact path={`${match.path}/create-user`} component={UserForm} />
        <Route exact path={`${match.path}/create-member`} component={MembersForm} />
        <Route exact path={`${match.path}/create-project`} component={ProjectsForm} />
      </Switch>
    </>
  )
}
export default BackOficce



