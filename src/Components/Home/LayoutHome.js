import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";

const LayoutHome = (props) => {
    return(
        <>
            <Header/>
            <Container>
                {props.children}
            </Container>
        </>
    );
}
export default LayoutHome;