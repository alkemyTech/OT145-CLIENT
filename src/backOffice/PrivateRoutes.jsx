import { Route, Redirect } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import { useEffect } from 'react'

const PrivateRoutes = ({component: Component, ...rest}) => {

  const { rol_type, isLogin } = useSelector(state => state.auth)

  console.log(isLogin)

    return (
        <Route
      {...rest}
      render={
        (props) => (
          (rol_type === 'Admin' && !isLogin)
            ? (
             <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                }}
              />
            )
            )
      }
    />
    )

    
}

export default PrivateRoutes