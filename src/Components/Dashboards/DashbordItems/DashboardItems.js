import React from 'react';
import { Link } from 'react-router-dom';

const DashboardItems = () => {

    return (
        <div className="dashboardItems" >
            <Link to='/home'><h5>Home</h5></Link>

            <div>
                <Link to='/makeAdmin'><h5>Make Admin</h5></Link>
                <Link to='/manageAllOrder'><h5>Manage All Orders</h5></Link>
                <Link to='/manageProduct'><h5>Manage Product</h5></Link>
            </div>

            <Link to='/pay'><h5>Pay</h5></Link>
            <Link to='/dashboard'><h5>My Order</h5></Link>
            <Link to='/userReview' ><h5>Review</h5></Link>
            <button className='btn btn-link ' style={{ textDecoration: 'none', marginLeft: '-10px' }}  ><h5>Logout</h5></button>
        </div>
    );
};

export default DashboardItems;