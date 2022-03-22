import { Route, Redirect } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import { useEffect } from 'react'

const PrivateRoutes = ({component: Component, ...rest}) => {


  const rol_id = localStorage.getItem('role')
  useEffect(() => {
    console.log(localStorage.getItem('role'))
  }, [])
  
    return (
        <Route
      {...rest}
      render={
        (props) => (
          rol_id === '1'
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