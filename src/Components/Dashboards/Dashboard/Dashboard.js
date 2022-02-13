import React from 'react';
import DashboardItems from '../DashbordItems/DashboardItems';
import MyOrder from '../MyOrder/MyOrder';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <h1 className='bg-secondary p-2'>Dashboard</h1>
            <div className='container'>
                <div class="row  ">

                    <div className=" col-lg-3   DashItem "> <DashboardItems></DashboardItems></div>
                    <div class=" col-9"> <MyOrder></MyOrder></div>
                </div>
            </div>

        </div>

    );
};

export default Dashboard;