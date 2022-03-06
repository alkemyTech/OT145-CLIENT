import React, { lazy } from 'react'
import {Route, Switch, useRouteMatch } from 'react-router-dom'
import LayoutHome from './LayoutHome';

// const Donacion = lazy(() => import('./Components/Donations/Donacion'))
// const Gracias = lazy(() => import('./Components/Donations/Gracias'))
const Home = lazy(() => import('./Index'))
const Actividades = lazy(() => import('../Activities/Actividades'))
const News = lazy(() => import('../News/News'))
const NewsDetail = lazy(() => import('../News/Detail/NewsDetail'))
const Nosotros = lazy(() => import('../About/Nosotros'))
const Contacto = lazy(() => import('../Contact/Contacto'))

export default function Routes() {
    let match = useRouteMatch();
  return (
    <LayoutHome>
      <Switch>
          <Route exact path={`${match.path}`} component={Home} />
          <Route exact path={`${match.path}nosotros`} component={Nosotros} />
          <Route exact path="/Actividades" component={Actividades} />
          <Route exact path="/news/:id" component={NewsDetail} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contacto" component={Contacto} />
      </Switch>
    </LayoutHome>
  )
}
