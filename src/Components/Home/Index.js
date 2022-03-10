import React from 'react';
import Slide from '../Slider/Slider';
import HomeTitle from "./HomeTitle";
import NewsList from "../News/NewsList"


const Home = () => {
    return(
        <>

            <HomeTitle />
            <Slide />
            <NewsList />

            
        </>
    )
}

export default Home;