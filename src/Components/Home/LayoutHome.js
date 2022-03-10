import React from "react";
import { Container} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import DecorativeLine from "../DecorativeLine/DecorativeLine";



const LayoutHome = (props) => {
    return(
        <>
         <DecorativeLine />
            <Header/>
        <Container>
            {props.children}
      
           
            </Container>  
            <Footer/>
            
        </>
    );
}
export default LayoutHome;