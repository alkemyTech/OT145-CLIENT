import {Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from './Header'
import Sidebar from './SideBar'

function BackOficce() {
    let match = useRouteMatch();
    return (
        <>
            <Header />
            <Sidebar />
            <Switch>
                <Route path={`${match.path}`} exact component="" />
            </Switch>
        </>
    )
}
export default BackOficce



