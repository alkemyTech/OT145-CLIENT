import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import useStyles from '../School/StyledAppBar';


const Header = () => {

  const classes = useStyles();

  return (
    <>
    <div className={classes.line}></div>
    <AppBar position="static" className={classes.appBar}>
    <Toolbar className={classes.toolB} >
    <Box className={classes.boxLogoDeOng}>
    <img src="/images/LOGO-SOMOS-MAS.png" alt="Ong Logo" width="100"  />
                
              </Box>
          
              <Box className={classes.boxLogoDeCampana}>
              <img src="/images/Logotipo-campaña-juguetes.png" alt="Campaing Logo" className={classes.logoDeCampaña}/>
              </Box>
              <Box>
      <Button variant="contained"sx={{ size: { xs: 'medium', md: 'large' } }}  className={classes.button}>DONA HOY!</Button>
    </Box>
          </Toolbar>
          <Typography className={classes.slogan}>
        Juguetes por mas sonrisas.
    </Typography>
      </AppBar> 
    </>
  );
}

export default Header;