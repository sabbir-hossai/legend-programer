import React from 'react';
import img1 from '../../../images/hotel img/hotel 1.jpg'
import img2 from '../../../images/hotel img/hotel 2.jpg'
import img3 from '../../../images/hotel img/hotel 3.jpg'
import img4 from '../../../images/hotel img/hotel 4.jpg'
import img5 from '../../../images/hotel img/hotel 5.jpg'
import img6 from '../../../images/hotel img/hotel 6.jpg'

import './Gallery.css'
const Gallery = () => {
    return (
        <div className="container gallery">
            <div>
                <h2 className="text-center">Our Gallery House</h2>
            </div>
            <div className=" img-fluid row row-cols-sm-12 row-cols-md-6 row-cols-lg-3 gy-2">

                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img1} alt="" />
                </div>
                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img2} alt="" />
                </div>
                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img3} alt="" />
                </div>
                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img4} alt="" />
                </div>
                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img5} alt="" />
                </div>
                <div className="col image">
                    <img style={{ width: '22rem', height: "200px", margin: "20px", padding: "10px", background: "white", border: "none", borderRadius: "20px" }} src={img6} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Gallery;