import React, { lazy } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import LayoutHome from './LayoutHome';
import Error404 from "../Error404/Error404";
// const Donacion = lazy(() => import('./Components/Donations/Donacion'))
// const Gracias = lazy(() => import('./Components/Donations/Gracias'))
const Home = lazy(() => import('./Index'))
const Actividades = lazy(() => import('../Activities/Actividades'))
const News = lazy(() => import('../News/News'))
const NewsDetail = lazy(() => import('../News/Detail/NewsDetail'))
const Nosotros = lazy(() => import('../About/Nosotros'))
const Contacto = lazy(() => import('../Contact/Contacto'))
const DetalleActividad = lazy(() => import('../Activities/Detail/DetalleActividad'))
const RegisterForm = lazy(() => import('../Auth/RegisterForm'))



export default function Routes() {
  let match = useRouteMatch();
  return (
    <LayoutHome>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route exact path={`${match.path}nosotros`} component={Nosotros} />
        <Route exact path="/Actividades" component={Actividades} />
        <Route exact path="/Actividades/:id" component={DetalleActividad} />
        <Route exact path="/news/:id" component={NewsDetail} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contacto" component={Contacto} />
        <Route path="*" component={Error404} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </LayoutHome>
  )
}
