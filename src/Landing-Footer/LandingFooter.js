import React from 'react';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';



const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display:'flex',
        position:'fixed',
        left:0,
        bottom:'0px',
        zIndex:'99',
        border:'0',
    },
    [theme.breakpoints.up('md')]: {
        display:'flex',
        position:'fixed',
        left:0,
        bottom:'0px',
        zIndex:'99',
        border:'0',
    },
  }));

  const Logo = styled('img')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        maxWidth: '40%',
      },
    [theme.breakpoints.up('md')]:{
        maxWidth: '40%',
    }
  }));

  const AHome = styled('a')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    [theme.breakpoints.up('sm')]:{
        maxWidth: '40%',
    }
  }));

  const ARedes = styled('a')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    [theme.breakpoints.up('md')]:{
        maxWidth: '40%',
    }
  }));

  const ACampaings = styled('a')(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    [theme.breakpoints.up('lg')]:{
        maxWidth: '40%',
    }


  }));







const LandingFooter = () => {
    return (
        <Root>
            <div>
                <Logo src="/Images/LOGO-SOMOS MAS.png"/>
            </div>
            <AHome href="/Home" >
                <Typography style={{fontSize: '15px',paddingTop:28, paddingRight:20}}>Somos más</Typography>
            </AHome>
            <div style={{display:'flex'}}>
                <a href="https://es-la.facebook.com">
                    <FacebookIcon style={{fontSize: '40px',paddingTop:20,color: '#3b5998'}}/>
                </a>
                <ARedes href="https://es-la.facebook.com" >
                    <Typography style={{fontSize: '15px',paddingRight:20,paddingTop:28}}>Facebook</Typography>
                </ARedes>
                
            </div>
            <div style={{display:'flex'}}>
                <a href="https://www.instagram.com">
                    <InstagramIcon style={{fontSize: '40px',paddingTop:20,color: '#bc2a8d'}}/>
                </a>
                <ARedes href="https://www.instagram.com" >
                    <Typography style={{fontSize: '15px',paddingTop:28}}>Instagram</Typography>
                </ARedes>
            </div>
            <ACampaings href="/toys-campaign">
                <Typography  style={{fontSize: '15px',paddingTop:28, paddingRight:20,paddingLeft:20}}> Toys Campaign </Typography>
            </ACampaings>
            <ACampaings href="/school-campaign">
                <Typography style={{fontSize: '15px',paddingTop:28, paddingRight:20,paddingLeft:20}}> School Campaign </Typography> 
            </ACampaings>

        </Root>
    );
}
 
export default LandingFooter;