import { Route, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authMe } from '../redux/usersReducer/action'

const PrivateRoutes = ({ component: Component, path,rol,  ...rest }) => {
  const dispatch = useDispatch();
  const { rol_type, token, user } = useSelector(state => state.auth)

  console.log(user, rol_type)
  useEffect(()=> {
    dispatch(authMe(token))
  }, [])

  let entrar = false;

  switch (rol_type) {
    case 'Admin':
        if (path === '/backoffice' && user) {
          entrar = true
        }
        else if (path !== '/backoffice' && user) {
          entrar = false
        }
        break;
      case 'Standart':
        if (path === '/backoffice' && user) {
          entrar = false
        }
        else if (path !== '/backoffice' && user) {
          entrar = false
        }
        break;
        case '': 
          if (path === '/backoffice' || !user) {
            entrar = false
          }
      default:
        if (path !== '/backoffice' || !user) {
          entrar = true
        }
  }

  return (
    <Route
      {...rest}
      render={
        (props) => (
          (entrar)
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
