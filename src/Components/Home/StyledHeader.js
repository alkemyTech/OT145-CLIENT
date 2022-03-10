import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({  
    links: {
        padding:'0 10px',
        color:'#000',
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
            maxWidth: '10%',
            marginRight: '20%',
            marginLeft: '20px',
            alignSelf: "flex-start",
            flexGrow: 1,
            
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
        backgroundColor: '#fff',
        flexGrow: 1, 
        [theme.breakpoints.down('sm')]: {
            display:'none',

        },
        [theme.breakpoints.up('sm')]: {
            display:'flex',
            alignItems:'center', 
            justifyContent: 'space-between',
            width: '90%',
            gap: '20px',



        },
    },
   

}));

export default useStyles;