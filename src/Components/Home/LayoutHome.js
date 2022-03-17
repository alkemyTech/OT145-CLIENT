import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import DecorativeLine from "../DecorativeLine/DecorativeLine";
import useStyles from './StyledHeader';



const LayoutHome = (props) => {
    const classes = useStyles();
    return (
        <>
            <DecorativeLine />
            <Header />
            <Container className={classes.bigContainer}>
                {props.children}


            </Container>
            <Footer />

        </>
    );
}
export default LayoutHome;