import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomeRoom = () => {
    const [product, setProduct] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, 6)
                setProduct(sliceData)
            })
    }, [])

    return (
        <div className="cars">
            <div className="container ">
                <h1 className="mt-5 pb-5 foods">Many <span className="mans">Room</span></h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">

                    {
                        product.map((offers, index) => (
                            <div className="col ">

                                <div className="card h-100 designs">
                                    <img className="image-design" src={offers.img} class="card-img-top" alt="..." />
                                    <div class="card-body finals">
                                        <h3>{offers.name}</h3>
                                        <h3>{offers.price}</h3>
                                        <p class="card-text">{offers.description}.</p>

                                        <Link to={`/service/${offers._id}`}> <button className="button">Buy Now</button></Link>


                                    </div>


                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>


        // const uri = "mongodb+srv://resturantService:JZfVjMN55W2vsbQH@cluster0.ev8on.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




    );
};

export default HomeRoom;