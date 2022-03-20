import { Route, Redirect } from 'react-router-dom'
import isUserAdmin from '../Services/isUserAdmin'

const PrivateRoutes = ({component: Component, ...rest}) => {

    const role = isUserAdmin()
    console.log(role)

    return (
        <Route
      {...rest}
      render={
        (props) => (
          role
            ? (
             <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                }}
              />
            ))
      }
    />
    )

    
}

export default PrivateRoutes