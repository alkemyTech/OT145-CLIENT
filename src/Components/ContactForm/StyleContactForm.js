import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        display: "block",
        maxWidth:"50%",
        maxHeight:"500px",
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        backgroundColor: "white",  
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        boxSizing: "border-box",
        margin:"auto",
        marginTop:"10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth:"90%",
        },
    },
    txt: {
        padding: "3% 0 2% 5%",
        [theme.breakpoints.down('sm')]: {
            padding: "3% 3% 2% 5%"
        },
        
    },
    textArea:{
        margin: "5% 0 8% 5%",
        width:"90%",
    },
    btn: {
        padding:"0 0 5% 40%",
        [theme.breakpoints.down('sm')]: {
            padding: "0 0 5% 35%"
        },
    }

}));

export default useStyles;