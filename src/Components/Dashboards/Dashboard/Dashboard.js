import React from 'react';
import DashboardItems from '../reviews/Reviews';
import MyOrder from '../MyOrder/MyOrder';
import './Dashboard.css';
import {
    Link,
    Outlet,

} from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <div className='container'>
                <div class="row  ">

                    <div className=" col-lg-3   DashItem ">
                        <Link to="/home"><h6>Home</h6> </Link>
                        <Link to="/Dashboard/makeAdmin"><h6>Make Admin</h6> </Link>
                        <Link to="/Dashboard/addProduct"> <h6>Add Product</h6> </Link>
                        <Link to="/Dashboard/payMentMethod"><h6>Pay</h6></Link>
                        <Link to="/Dashboard/MyOrders"><h6>My Order </h6> </Link>
                        <Link to="/Dashboard/Reviews" ><h6>Reviews</h6></Link>
                    </div>
                    <div class=" col-9">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;

