import React from 'react';
import { useStyles } from './Styles/FooterStyles'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const LandingFooter = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.styleFlex}>
                <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logo}/>
                <a href="/Home" className={classes.a_Home}>
                    <Typography className={classes.typographyHom}>Somos más</Typography>
                </a>
            </div>

            <div className={classes.styleFlex}>
                <a href="https://es-la.facebook.com">
                    <FacebookIcon style={{fontSize: '40px',paddingTop:35,color: '#3b5998'}}/>
                </a>
                <a href="https://es-la.facebook.com" className={classes.a_Redes}>
                    <Typography className={classes.typographyFb}>Facebook</Typography>
                </a>    
            </div>

            <div className={classes.styleFlex}>
                <a href="https://www.instagram.com">
                    <InstagramIcon style={{fontSize: '40px',paddingTop:35,color: '#bc2a8d'}}/>
                </a>
                <a href="https://www.instagram.com" className={classes.a_Redes}>
                    <Typography className={classes.typographyIg}>Instagram</Typography>
                </a>
            </div>

            <a href="/toys-campaign" className={classes.a_Campaings}>
                <Typography className={classes.typographyRedes}> Toys Campaign </Typography>
            </a>
            <a href="/school-campaign" className={classes.a_Campaings}>
                <Typography className={classes.typographyRedes}> School Campaign </Typography> 
            </a>

        </div>
    );
}
 
export default LandingFooter;