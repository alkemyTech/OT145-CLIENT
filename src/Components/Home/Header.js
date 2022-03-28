import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { NavLink } from 'react-router-dom'
import useStyles from './styles/StyledHeader'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesion } from '../../redux/usersReducer/action'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isLogin, rol_type } = useSelector((state) => state.auth)
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const headerData = [
    {
      name: 'School-Campaign',
      url: '/school-campaign',
    },
    {
      name: 'Toys-campaign',
      url: '/toys-campaign',
    },
  ]

  const handleClick = () => {
    dispatch(cerrarSesion())
    history.push('/')
  }

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar disableGutters>
        <Box>
          <img
            src="/Images/LOGO-SOMOS MAS.png"
            alt=""
            className={classes.logosm}
          />
        </Box>
        <Box className={classes.styledBoxMd}>
          {!localStorage.getItem('token') ? (
            <Box className={classes.boxLogin}>
              <NavLink to="/login" className={classes.links}>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  className={classes.button}
                >
                  Login
                </Button>
              </NavLink>
              <NavLink to="/register" className={classes.links}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  className={classes.button}
                >
                  Registrate
                </Button>
              </NavLink>
            </Box>
          ) : (
            <Button onClick={handleClick}>Cerrar sesión</Button>
          )}
          {isLogin && rol_type === 'Admin' && (
            <NavLink to="/backoffice" className={classes.links}>
              <Typography className={classes.linkBack}>
                Ir a backoffice
              </Typography>
            </NavLink>
          )}
          {isLogin && rol_type === 'Standard' && (
            <NavLink to="/donation">
              <Button>Donar</Button>
            </NavLink>
          )}
          <Box className={classes.boxLink}>
            <NavLink
              exact
              to="/"
              className={classes.links}
              activeClassName={classes.active}
            >
              <Typography
                variant="subtitle1"
                className={classes.typographyLinks}
              >
                Inicio
              </Typography>
            </NavLink>

            <NavLink
              to="/Nosotros"
              className={classes.links}
              activeClassName={classes.active}
            >
              <Typography
                variant="subtitle1"
                className={classes.typographyLinks}
              >
                Nosotros
              </Typography>
            </NavLink>

            {isLogin && rol_type === 'Admin' ? null : (
              <NavLink
                to="/Contacto"
                className={classes.links}
                activeClassName={classes.active}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.typographyLinks}
                >
                  Contacto
                </Typography>
              </NavLink>
            )}

            {headerData.map((value, i) => (
              <NavLink
                key={i}
                to={value.url}
                className={classes.links}
                activeClassName={classes.active}
              >
                <Typography
                  variant="subtitle1"
                  className={classes.typographyLinks}
                >
                  {value.name}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
