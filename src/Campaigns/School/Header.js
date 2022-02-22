import React from 'react';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar'
import { Divider } from '@mui/material';
import useStyles from './StyledAppBar';

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar >
          <Box className={classes.boxLogoDeCampana}>
            <img src="images/logotipoCampañaEscuela.png" alt=""  className={classes.logoDeCampaña} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem className={classes.divider} />
          <Box className={classes.boxLogoDeOng}>
            <img src="images/logoSomosMas.png" alt="logo de ong" width="100" />
          </Box>
          <Typography className={classes.slogan}>
            Nunca dejes de aprender
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;