import {Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'

function BackOficce() {
    let match = useRouteMatch();
    return (
        <>
            <Header />
            <SideBar />
            <Switch>
                <Route path={`${match.path}`} exact component="" />
            </Switch>
        </>
    )
}
export default BackOficce



