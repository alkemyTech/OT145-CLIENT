import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    containerList:{
        minWidth:400,
        maxWidth:1200,
        margin: "auto",
        padding:"10px 10px"
    },
    styleLink: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
        cursor: "pointer",

    },
    contLink: {
        minWidth:400,
        maxWidth:1200,
        margin: "auto",
        padding:"10px"
    },
    img: {
        minWidth: 100,
        maxWidth: 400,
        objectFit: "contain",
    },
}));


export default useStyles;