import {Route, Switch, useRouteMatch } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import NewsList from './NewsList/NewsList';

function BackOficce() {
    let match = useRouteMatch();
    return (
        <>
            <Header />
            <SideBar />
            <Switch>
                <Route path={`${match.path}/news`} exact component={NewsList} />
                <Route path={`${match.path}/news/create`} exact component="" />
            </Switch>
        </>
    )
}
export default BackOficce



