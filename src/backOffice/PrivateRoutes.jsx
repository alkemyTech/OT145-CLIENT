import { Route, Redirect } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import { useEffect } from 'react'

const PrivateRoutes = ({component: Component, rol, ...rest}) => {

  const { rol_id } = useSelector(store => store.auth)

    return (
        <Route
      {...rest}
      render={
        (props) => (
          rol_id == 1
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