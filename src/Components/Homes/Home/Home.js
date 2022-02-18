import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import HomeFood from '../HomeFood/HomeFood';
import Navbar from '../Navbar/Navbar';
import HomeRoom from './HomeRoom/HomeRoom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomeFood></HomeFood>
            <HomeRoom></HomeRoom>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;