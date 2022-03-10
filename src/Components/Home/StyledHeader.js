import { makeStyles } from "@mui/styles";
import { minHeight } from "@mui/system";

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
        [theme.breakpoints.down('md')]: {
            maxWidth: '20%',
            marginLeft:'65%'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },        
    },
    logosm: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '10%',
            marginRight: '20%',
            marginLeft: '20px',
            alignSelf: "flex-start",
            flexGrow: 1,
            
        },
    },
    styledBoxSm: {
        backgroundColor: '#fff',
        flexGrow: 1,
        [theme.breakpoints.down('md')]: {
            display:'flex', 
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },

    styledBoxMd:{
        backgroundColor: '#fff',
        flexGrow: 1, 
        [theme.breakpoints.down('md')]: {
            display:'none',

        },
        [theme.breakpoints.up('md')]: {
            display:'flex',
            alignItems:'center', 
            justifyContent: 'space-between',
            width: '90%',
            gap: '20px',



        },
    },
   appbar:{
       marginBottom: '10px'
   },
   bigContainer: {
       position: 'relative',
       paddingBottom: '150px',
       minHeight:'100vh',
       [theme.breakpoints.down('sm')]: {
        paddingBottom: '200px',

    },

   },

}));

export default useStyles;