import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import DecorativeLine from "../DecorativeLine/DecorativeLine";
import useStyles from './styles/StyledHeader';
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { authMe } from "../../redux/usersReducer/action";

const LayoutHome = (props) => {
    const {token} = useSelector(state =>state.auth);
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(()=>{
        dispatch(authMe(token))
        
    },[])
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