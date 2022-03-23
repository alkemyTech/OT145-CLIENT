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
        fontSize: '15px',
        paddingRight: 20,
    },
    logosx: {
        [theme.breakpoints.down('md')]: {
            maxWidth: '20%',
            marginLeft: '65%'
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logosm: {
        paddingLeft : "20px"
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
        width : "85%",
        display: "flex",
        flexDirection: "column",
        alignItems : "flex-end" ,
        backgroundColor: '#fff',
    },
    appbar: {

        marginBottom: '10px',
        backgroundColor: "#fff",
        height : "25vh"
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

}));

export default useStyles;