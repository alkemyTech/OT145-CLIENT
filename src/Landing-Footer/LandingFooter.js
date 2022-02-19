import React from 'react';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import { blue } from '@mui/material/colors';


const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display: 'block',

    },
    [theme.breakpoints.up('md')]: {
        display:'flex',
    },
  }));

  const Images = styled('img')(({theme}) => ({
    [theme.breakpoints.down('md')]: {
        maxWidth: '20%',
        paddingBotom: '50%',
      },
    [theme.breakpoints.up('md')]:{
        maxWidth: '30%',

    }
  }));

const LandingFooter = () => {


    return (
        <Root>
            <div>
                <Images src="/Images/LOGO-SOMOS MAS.png"/>
            </div>
            <div>
                <Images src="/Images/Logotipo campaña juguetes.png"/>
            </div>
            <div>
                <Images src="/Images/Logotipo campaña materiales escolares.png"/>
            </div>
            <div>
                <FacebookIcon style={{fontSize: '50px'}}/>
            </div>
        </Root>
    );
}
 
export default LandingFooter;