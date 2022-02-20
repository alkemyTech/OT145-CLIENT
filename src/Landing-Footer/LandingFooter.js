import React from 'react';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';


const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'block',
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

  const Images = styled('img')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        maxWidth: '20%',
        paddingBottom: '10%',
        display: 'none',
      },
    [theme.breakpoints.up('md')]:{
        maxWidth: '20%',
    }
  }));

  const Logo = styled('img')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        maxWidth: '30%',
        margin:'0 auto'
      },
    [theme.breakpoints.up('md')]:{
        maxWidth: '40%',
    }
  }));


const LandingFooter = () => {
    return (
        <Root>
            <div>
                <Logo src="/Images/LOGO-SOMOS MAS.png"/>
            </div>
            <div>
                <a href="/toys-campaign">
                    <Images src="/Images/Logotipo campaña juguetes.png"/>
                </a>
            </div>
            <div>
                <a href="/school-campaign">
                    <Images src="/Images/Logotipo campaña materiales escolares.png"/>
                </a>
            </div>
            <div>
                <a href="https://es-la.facebook.com" text-decoration='none'>
                    <FacebookIcon style={{fontSize: '50px', color:'secondary' ,color: '#3b5998'}}/>
                </a>
            </div>
        </Root>
    );
}
 
export default LandingFooter;