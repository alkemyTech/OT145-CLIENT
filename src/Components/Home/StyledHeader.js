import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({  
    links: {
        padding:'0 10px',
        color:"inherit",
        textDecoration: 'none',
    },
    active: {
        color: '#545e6f'
    },
    colorActivo:{
        color: theme.palette.secondary.main
    },
    typographyLinks: {
        fontSize: '15px',
        paddingRight:20,
    },
    logosx: {
        [theme.breakpoints.down('sm')]: {
            maxWidth: '20%',
            marginLeft:'65%'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },        
    },
    logosm: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '5%',

        },
    },
    styledBoxSm: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            display:'flex', 
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },

    styledBoxMd:{
        flexGrow: 1, 
        [theme.breakpoints.down('sm')]: {
            display:'none',

        },
        [theme.breakpoints.up('sm')]: {
            display:'flex',
            alignItems:'center'  
        },
    }

}));

export default useStyles;