import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import "./Dashboard.css";


const Dashboard = () => {
    return (
        <div className='dashboard-main'>
                <Sidebar />
                <div className='dashboard-container'>
                    <div className="dashboard-heading">
                        <h3>Dashboard</h3>
                    </div>
                    <div className='dashboard-content'>
                        <div className='dashboard-divs'>
                            <h4>Total Sales</h4>
                            <p>20</p>
                        </div>
                        <div className='dashboard-divs'>
                            <h4>Total Orders</h4>
                            <p>20</p>
                        </div>
                        <div className='dashboard-divs'>
                            <h4>Total Products</h4>
                            <p>20</p>
                        </div>
                        <div className='dashboard-divs'>
                            <h4>Total Users</h4>
                            <p>20</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;