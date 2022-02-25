import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    containerBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: theme.palette.info.main,
      [theme.breakpoints.down("sm")]: {
        height: "80px",
        marginLeft: "0px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "150px",
        width: "100%",
      },
      [theme.breakpoints.up("md")]: {
        height: 180,
        width: "100%",
      },
      [theme.breakpoints.up("lg")]: {
        height: 180,
        width: "100%",
      },
    },

    containerDescription: {
      [theme.breakpoints.down("sm")]: {
        height: "85px",
        marginLeft: "0px",
        marginTop: "10px",
        marginBottom: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        height: "150px",
        width: "70%",
      },
      [theme.breakpoints.up("md")]: {
        height: 180,
        width: "70%",
      },
      [theme.breakpoints.up("lg")]: {
        height: 180,
        width: "70%",
      },
    },

    typographySize: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        margin: "0",
        marginBottom: "5px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.4rem",
        margin: "0",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7rem",
        margin: "0",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
        margin: "0",
      },
    },

    ContainerCountDown: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        height: "150px",
        width: "40%",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
        marginTop: '3%'
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
        height: 180,
        width: "40%",
        justifyContent: "center",
        textAlign: "center",
      },
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        height: 180,
        width: "40%",
        justifyContent: "center",
        textAlign: "center",
      },
    },

    CountDownTypography: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        margin: "0",
        marginBottom: "5px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
        margin: "0",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        margin: "0",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
        margin: "0",
      },
    },
  })
);
