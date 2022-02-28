import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: 345 , 
        margin:'auto', 
        marginTop:30,
    },
    styleTitle: {
        paddingLeft:10,
        paddingTop:10,
    },
    styleLink: {
        color:theme.palette.secondary.main,
        fontFamily: theme.typography.body1,
        textDecoration: 'none',
    },
    styleDescription:{
        paddingLeft:2,
        paddingTop:2,
        fontFamily: theme.typography.subtitle1
    },
    containerLink: {
        margin:'auto',
        display:'flex',
    },
    paddingBetweenLink: {
        paddingLeft:20
    }
}))