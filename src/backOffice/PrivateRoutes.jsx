import { Route, Redirect } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { authMe } from '../redux/usersReducer/action'


const PrivateRoutes = ({ component: Component, rol, ...rest }) => {

  const dispatch = useDispatch();
  const { rol_type, user,token } = useSelector(state => state.auth)

  console.log(user)

  useEffect(()=> {
    dispatch(authMe(token))
  },[])

  let Renderizar = (props) => (
    (rol_type === rol)
      ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ))

  return (
    <Route
      {...rest}
      render={
        Renderizar
      }
    />
  )


}
export default PrivateRoutes