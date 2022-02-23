import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material"

export const useStyles = makeStyles((theme) => ({
    container: {
        [useTheme().breakpoints.down('md')]: {
            display:'flex',
            position:'fixed',
            width:'100%',
            left:0,
            bottom:'0px',
            zIndex:'99',
            border:'0',
            backgroundColor:'#cfcccc'
        },
        [useTheme().breakpoints.up('md')]: {
            display:'flex',
            position:'fixed',
            left:0,
            bottom:'0px',
            zIndex:'99',
            border:'0',
            backgroundColor:'#cfcccc',
            width:'100%',
        }
      },
    
    logo: {
        [useTheme().breakpoints.down('sm')]: {
            maxWidth: '40%',
            paddingTop:15,
        },
        [useTheme().breakpoints.up('sm')]: {
            maxWidth: '40%',
        },        
    },
    a_Home: {
        [useTheme().breakpoints.down('sm')]: {
            display: 'none',
        },
        [useTheme().breakpoints.up('sm')]:{
            maxWidth: '40%',
            color:"inherit",
            textDecoration: 'none'
        },
    },
    
    a_Redes: {
        [useTheme().breakpoints.down('md')]: {
            display: 'none',
        },
        [useTheme().breakpoints.up('md')]:{
            paddingLeft:'5px',
            maxWidth: '40%',
            color:'inherit',
            textDecoration: 'none'
        },
    },
    
    a_Campaings:{
        [useTheme().breakpoints.down('lg')]: {
            display: 'none',
        },
        [useTheme().breakpoints.up('lg')]:{
            maxWidth: '40%',
            color:'inherit',
            textDecoration: 'none'
        },
    },
    typographyFb:{
        fontSize: '15px',
        paddingRight:20,
        paddingTop:45,

    },
    typographyRedes:{
        fontSize: '15px',
        paddingTop:45, 
        paddingRight:20,
        paddingLeft:20,
 
    },
    typographyIg:{
        fontSize: '15px',
        paddingRight:20,
        paddingTop:45,

    },
    typographyHom: {
        fontSize: '15px',
        paddingTop:45,
 
    },
    styleFlex: {
        display: 'flex',
    },
    icon: {
        paddingTop:40,
    },   
}))