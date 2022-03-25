import { Route, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authMe } from '../redux/usersReducer/action'
const PrivateRoutes = ({ component: Component, rol, ...rest }) => {
  const dispatch = useDispatch();
  const { rol_type, token } = useSelector(state => state.auth)

  useEffect(()=> {
    dispatch(authMe(token))
  },[])

  return (
    <Route
      {...rest}
      render={
        (props) => (
          (rol_type === rol )
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