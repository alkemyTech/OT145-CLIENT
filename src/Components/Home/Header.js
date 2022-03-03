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
import useStyles from './StyledHeader';



const Header = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

  return (
    <>
      <AppBar position="static">
          <Toolbar disableGutters>
            <Box className={classes.styledBoxSm}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <NavLink to='/' className={classes.links}>
                    <Typography variant='subtitle1' className={classes.typographyLinks}>
                      Inicio
                    </Typography>
                  </NavLink>
                </MenuItem>
                <MenuItem>
                <NavLink to='/Nosotros' className={classes.links}>
                  <Typography variant='subtitle1' className={classes.typographyLinks}>
                    Nosotros
                  </Typography>
                </NavLink>
                </MenuItem>
                <MenuItem>
                <NavLink to='/Contacto' className={classes.links}>
                  <Typography variant='subtitle1' className={classes.typographyLinks}>
                    Contacto
                  </Typography>
                </NavLink>
                </MenuItem>
                
                {headerData.map((value,i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <NavLink to={value.url} className={classes.links}>
                      <Typography textAlign="center">{value.name}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
              <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logosx}/>
            </Box>


            <Box className={classes.styledBoxMd}>
              <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logosm}/>
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
              <NavLink to='/Contacto' className={classes.links} activeClassName={classes.active}>
                <Typography variant='subtitle1' className={classes.typographyLinks}>
                  Contacto
                </Typography>
              </NavLink>
              {headerData.map((value,i) => (
                <NavLink key={i} to={value.url} className={classes.links} activeClassName={classes.active}>
                  <Typography variant='subtitle1' className={classes.typographyLinks}>{value.name}</Typography>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
