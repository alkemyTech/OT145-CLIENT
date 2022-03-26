import React, { lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LayoutHome from "./LayoutHome";
import Error404 from "../../shared/Error404/Error404";
import PrivateRoutes from '../../backOffice/PrivateRoutes'
import { Login } from "@mui/icons-material";
// const Donacion = lazy(() => import('./Components/Donations/Donacion'))
// const Gracias = lazy(() => import('./Components/Donations/Gracias'))
const Home = lazy(() => import("./Index"));
const Actividades = lazy(() => import("../Activities/Actividades"));
const News = lazy(() => import("../News/News"));
const NewsDetail = lazy(() => import("../News/Detail/NewsDetail"));
const Nosotros = lazy(() => import("../About/Nosotros"));
const Contacto = lazy(() => import("../Contact/Contacto"));
const DetalleActividad = lazy(() =>
  import("../Activities/Detail/DetalleActividad")
);
const RegisterForm = lazy(() => import("../Auth/RegisterForm"));
const LoginForm = lazy(() => import("../Auth/LoginForm"));

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
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoutes
          exact
          path="/register"
          component={RegisterForm}
        />
        <Route path="*" component={Error404} />
      </Switch>
    </LayoutHome>
  );
}
