import React from "react";
import Header from "./Header";
import { Container } from "@mui/material";

const LayoutHome = (props) => {
    return(
        <>
            <Header/>
            <Container>
                {props.children}
            </Container>
			<Footer/>
        </>
    );
}
export default LayoutHome;