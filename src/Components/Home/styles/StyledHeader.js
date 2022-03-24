import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    links: {
        padding: '0 10px',
        color: '#000',
        textDecoration: 'none',
    },
    active: {
        color: '#545e6f'
    },
    colorActivo: {
        color: theme.palette.secondary.main
    },
    typographyLinks: {
        fontSize: '20px',
        paddingRight: 20,
        [theme.breakpoints.down('md')]: {
            fontSize: '15px',
            paddingRight: 20
        },
    },
    logosx: {
        maxWidth: '20%',
        marginLeft: '65%',
        marginRight: '10%',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logosm: {
        [theme.breakpoints.up('md')]: {
            paddingLeft : "20px"
            
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        
    },
    styledBoxSm: {
        backgroundColor: '#fff',
        flexGrow: 1,
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
    },

    styledBoxMd: {
        [theme.breakpoints.up('md')]: {
            width : "85%",
            display: "flex",
            flexDirection: "column",
            alignItems : "flex-end" ,
            backgroundColor: '#fff',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
        
    },
    appbar: {
        marginBottom: '20px',
        backgroundColor: "#fff",
        height : "25vh",
        [theme.breakpoints.down('sm')]: {
            height : "15vh",
        },

    },

    boxLogin: {
        display: "flex",
    },
    boxLink: {
        display: "flex",
        marginTop : "10px"
    },

    button: {
        minWidth : "110px",
        
    },
    icon: {
        [theme.breakpoints.down('md')]: {
            fontSize:50,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:30,
        },
        
    }


}));

export default useStyles;