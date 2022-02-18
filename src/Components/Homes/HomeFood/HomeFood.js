import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeFood.css'

const HomeFood = () => {
    const [product, setProduct] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, 6)
                setProduct(sliceData)
            })
    }, [])

    return (
        <div className="cars">
            <div className="container ">
                <h1 className="mt-5 pb-5 foods">Many <span className="mans">Food</span></h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">

                    {
                        product.map((offers, index) => (
                            <div className="col ">

                                <div className="card h-100 designs">
                                    <img className="image-design" src={offers.img} className="card-img-top" alt="..." />
                                    <div className="card-body finals">
                                        <h3>{offers.name}</h3>
                                        <h3>{offers.price}</h3>
                                        <p className="card-text">{offers.description}.</p>

                                        <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>


                                    </div>


                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>







    );
};

export default HomeFood;