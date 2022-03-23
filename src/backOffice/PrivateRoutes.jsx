import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const PrivateRoutes = ({ component: Component, rol, ...rest }) => {
  const { rol_type } = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={(props) =>
        rol_type === rol ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoutes
