import { Route, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect, useState} from 'react'
import { authMe } from '../redux/usersReducer/action'
const PrivateRoutes = ({ component: Component, path,rol,  ...rest }) => {
  const dispatch = useDispatch();
  const { rol_type, user,token } = useSelector(state => state.auth)

  let entrar = false;
  console.log(path)

  /*useEffect(()=> {
    dispatch(authMe(token))
  },[])*/

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
