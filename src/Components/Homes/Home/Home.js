import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;