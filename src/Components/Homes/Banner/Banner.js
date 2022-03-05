import React from 'react';
import "../Banner/Banner.css"
import banner1 from "../../../images/hotel img/hotelBanner_1.png"
import banner2 from "../../../images/hotel img/hotelBanner_3.png"
import banner3 from "../../../images/hotel img/hotelBanner_4.png"

const Banner = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         
        </div>
        <div className="carousel-inner w-100  mx-auto">
          <div className="carousel-item active">
            <img className="w-100 h-100" src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5 class="color">Enjoy Your Vacation</h5>
              <p class="color_sub">Some representative placeholder content for the second slide.</p>
              <button type="button" className="btn btn-success">More Details</button>

            </div>
          </div>
          <div className="carousel-item ">
            <img className="w-100 h-100" src={banner2} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              
              
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100 h-75" src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             
              
            </div>
          </div>
          
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;