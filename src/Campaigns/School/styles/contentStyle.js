import { toUnitless } from "@mui/material/styles/cssUtils";
import { makeStyles } from "@mui/styles";
import { lineHeight } from "@mui/system";

// Styles
const useStyles = makeStyles((theme) => ({
bigBox:{
    backgroundColor: "#EC4C4C",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
    },
},
title:{
    color: "#fff",
    textAlign: "center",
    fontSize: "3em",
    lineHeight: "2.7rem",
    [theme.breakpoints.down("sm")]: {
        fontSize:"2em",
        lineHeight: '1em',
    },
},
titleCamp:{
    fontSize: '1.2rem',
    color: '#350D0D',
    fontWeight: '700',
  },
containerBox: {
    
        alignItems: "center",
        textAlign: "center",
        color: '#fff',
       /*  border: '2px solid #fff', */
        borderRadius: '5px',
        boxShadow: '5px 5px 10px #C63A3B',
        backgroundColor: '#FF8181',
        padding:"20px"

},
boxTitle:{
width: "50%",
padding: "40px 60px 40px 60px",
[theme.breakpoints.down("sm")]: {
    width: '80%',
    padding: '20px',
},
},
subtitle:{
    color: "#fff",
    textAlign: "center",
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
},

}))

export default useStyles;
