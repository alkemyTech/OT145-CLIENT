import React from 'react';
import { useStyles } from './Styles/FooterStyles'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

const LandingFooter = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.styleFlex}>
                <img src="/Images/LOGO-SOMOS MAS.png" alt="" className={classes.logo}/>
                <Link href="/Home" className={classes.a_Home} underline='none' color="inherit">
                    <Typography variant='subtitle1' className={classes.typographyHom}>Somos más</Typography>
                </Link>
            </div>

            <div className={classes.styleFlex}>
                <Link href="https://es-la.facebook.com">
                    <FacebookIcon color= 'primary' fontSize='large' className={classes.icon}/>
                </Link>
                <Link href="https://es-la.facebook.com" className={classes.a_Redes} underline='none' color="inherit">
                    <Typography variant='subtitle1' className={classes.typographyFb}>Facebook</Typography>
                </Link>    
            </div>

            <div className={classes.styleFlex}>
                <Link href="https://www.instagram.com">
                    <InstagramIcon fontSize='large' color='secondary'className={classes.icon}/>
                </Link>
                <Link href="https://www.instagram.com" underline='none' color="inherit" className={classes.a_Redes}>
                    <Typography variant='subtitle1' className={classes.typographyIg}>Instagram</Typography>
                </Link>
            </div>

            <Link href="/toys-campaign" underline='none' color="inherit" className={classes.a_Campaings}>
                <Typography variant='subtitle1' className={classes.typographyRedes}> Toys Campaign </Typography>
            </Link>
            <Link href="/school-campaign" underline='none' color="inherit" className={classes.a_Campaings}>
                <Typography variant='subtitle1' className={classes.typographyRedes}> School Campaign </Typography> 
            </Link>

        </div>
    );
}
 
export default LandingFooter;