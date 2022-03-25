import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import useStyles from './styles/StyledHeader';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { cerrarSesion } from '../../redux/usersReducer/action'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isLogin , rol_type } = useSelector(state => state.auth)
  const classes = useStyles();
  const [isContacto,setIsContacto] = useState(false)
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerData = [
    {
      name: "School-Campaign",
      url: "/school-campaign",
    },
    {
      name: "Toys-campaign",
      url: "/toys-campaign",
    },
  ];

  const isAuth = true;

  const handleClick = () => {
    dispatch(cerrarSesion());
    history.push("/");
  }

  useEffect(()=>{
    if(isLogin && rol_type==="Admin"){
      setIsContacto(false)
    }
    else{
      setIsContacto(true)
    }
  },[isLogin,rol_type])

  return (
    <>

      <AppBar position="static" className={classes.appbar} >
        <Toolbar disableGutters>

          <Box>
            <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logosm} />
          </Box>
          <Box className={classes.styledBoxMd}>
            {!localStorage.getItem("token") ? <Box className={classes.boxLogin}>
              <MenuItem >
                <NavLink to="/login" className={classes.links}>
                  <Button variant="contained" size='small' color='secondary' className={classes.button}>
                    Log in
                  </Button>
                </NavLink>
              </MenuItem>

              <MenuItem >
                <NavLink to="/register" className={classes.links}>
                  <Button variant='outlined' color='secondary' size='small' className={classes.button}  >
                    Registrate
                  </Button>
                </NavLink>
              </MenuItem>
            </Box> :
              <Button onClick={handleClick}>Cerrar sesión</Button>

            }

            <Box className={classes.boxLink}>
              <NavLink exact to='/' className={classes.links} activeClassName={classes.active}>
                <Typography variant='subtitle1' className={classes.typographyLinks} >
                  Inicio
                </Typography>
              </NavLink>

              <NavLink to='/Nosotros' className={classes.links} activeClassName={classes.active}>
                <Typography variant='subtitle1' className={classes.typographyLinks}>
                  Nosotros
                </Typography>
              </NavLink>

              { isContacto && <NavLink to='/Contacto' className={classes.links} activeClassName={classes.active}>
                <Typography variant='subtitle1' className={classes.typographyLinks}>
                  Contacto
                </Typography>
              </NavLink>}

              {headerData.map((value, i) => (
                <NavLink key={i} to={value.url} className={classes.links} activeClassName={classes.active}>
                  <Typography variant='subtitle1' className={classes.typographyLinks}>{value.name}</Typography>
                </NavLink>
              ))}
            </Box>



          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
