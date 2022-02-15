import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is home</h1>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;