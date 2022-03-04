import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    containerList:{
        minWidth:400,
        maxWidth:800,
        margin: "auto",
        padding:"10px 20px"
    },
    styleLink: {
        textDecoration: 'none'
    },
    contLink: {
        minWidth:400,
        maxWidth:1200,
        margin: "auto",
        padding:"10px 560px"
    },
    img: {
        objectFit: "contain",
    },
}));


export default useStyles;