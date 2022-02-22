import React from 'react';
import { AppBar, Toolbar, Box, Typography, Divider } from '@mui/material';
import { useStyles } from './Styles/headerStyles';


const Header = () => {

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar} color='primary'>
          <Toolbar>
              <Box className={classes.container__logoCampaing}>
                <img src="/images/Logotipo-campaña-juguetes.png" alt="Campaing Logo" className={classes.img__logoCampaing} />
              </Box>
            
              <Divider orientation='vertical' variant="middle" flexItem className={classes.divider}/>

              <Box>
                <img src="/images/LOGO-SOMOS-MAS.png" alt="Ong Logo" className={classes.logoOng}/>
              </Box>
              
                <Typography variant='h6' className={classes.slogan}>
                  Juguetes por mas sonrisas.
                </Typography>
          </Toolbar>
      </AppBar> 
    </>
  );
}
 
export default Header;