import { Route, Redirect } from 'react-router-dom'
import { useSelector  } from 'react-redux'
import { Component } from 'react'

const LoggedRoutes = ({component: Component, ...rest}) => {

const { token } = useSelector(state => state.auth)

return (
	<Route
  {...rest}
  render={
	(props) => (
	  (!token)
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

export default LoggedRoutes