import { toUnitless } from "@mui/material/styles/cssUtils";
import { makeStyles } from "@mui/styles";
import { lineHeight } from "@mui/system";

// Styles
const useStyles = makeStyles((theme) => ({
bigBox:{
    backgroundColor: "#EC4C4C",
    display: 'flex'
},
title:{
    color: "#fff",
    textAlign: "center",
    fontSize: "3rem",
    lineHeight: "2.7rem",


},
boxTitle:{
width: "50%",
padding: "40px 60px 40px 60px",
},
subtitle:{
    color: "#fff",
    textAlign: "center",
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
}

}));

export default useStyles;
