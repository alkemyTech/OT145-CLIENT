import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paperContainer:{
        marginTop: 30,
        minWidth: 200,
        maxWidth: 500,
        padding: 20,
        margin: '0px 15px 0px 15px'
    },
    imgContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    containerButton:{
        marginTop: 30
    },
    button:{
        textDecoration: 'none',
        color: theme.palette.primary.contrastText
    }
}));


export default useStyles;